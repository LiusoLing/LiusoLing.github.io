---
# 这是文章的标题
title: 18. Java 比较对象
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 18
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-04-25
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

比较对象是面向对象编程语言的基本特征。

在本教程中，我们将探索Java语言的一些功能，这些功能允许我们比较对象。我们还将研究外部库中的此类功能。

<!-- more -->

## 1.==和!=

让我们从 == 和开始 != 运算符，可以分别判断两个Java对象是否相同。

**对于原始类型，相同意味着具有相等的值：**


```java
assertThat(1 == 1).isTrue();
```

多亏了自动开箱，**这在将原始值与其包装类型对应值进行比较时也有效：**

<br/><br/><br/><br/><br/><br/>


```java
Integer a = new Integer(1);
assertThat(1 == a).isTrue();
```
如果两个整数的值不同，==运算符将返回false，而!=运算符将返回true。

## 2.对象

假设我们想比较两种具有相同值的整数包装类型：

```java
Integer a = new Integer(1);
Integer b = new Integer(1);

assertThat(a == b).isFalse();
```

通过比较两个对象，**这些对象的值不是1。相反，它们在堆栈中的内存地址是不同的**，因为两个对象都是使用 `new` 运算符创建的。如果我们把a分配给b，那么我们会有不同的结果：

```java
Integer a = new Integer(1);
Integer b = a;

assertThat(a == b).isTrue();
```

现在让我们看看当我们使用Integer#valueOf工厂方法时会发生什么：

```java
Integer a = Integer.valueOf(1);
Integer b = Integer.valueOf(1);

assertThat(a == b).isTrue();
```
在这种情况下，它们被认为是相同的。这是因为valueOf()方法将整数存储在缓存中，以避免创建太多具有相同值的包装对象。因此，该方法为两个调用返回相同的整数实例。


<br/><br/><br/><br/><br/><br/>

Java也为字符串这样做：
```java
assertThat("Hello!" == "Hello!").isTrue();
```

然而，如果它们是使用新运算符创建的，那么它们就不一样了。

最后，两个空引用被认为是相同的，而任何非空对象都被认为与空不同：

```java
assertThat(null == null).isTrue();

assertThat("Hello!" == null).isFalse();
```

当然，相等运算符的行为可能是有限的。如果我们想比较映射到不同地址的两个对象，但根据其内部状态将它们视为相等呢？我们将在接下来的章节中看到如何做到这一点。


## 2.Object#equals方法

现在让我们用equals()方法谈谈更广泛的平等概念。


<br/><br/><br/><br/><br/><br/>

此方法在Object类中定义，以便每个Java对象都继承它。默认情况下，**它的实现比较对象内存地址，因此它的工作原理与==运算符相同**。然而，我们可以覆盖此方法，以定义平等对我们的对象意味着什么。

首先，让我们看看它对像Integer这样的现有对象的行为：

```java
Integer a = new Integer(1);
Integer b = new Integer(1);

assertThat(a.equals(b)).isTrue();
```

当两个对象相同时，该方法仍然返回true。

我们应该注意，我们可以将空对象作为方法的参数传递，但不能作为我们调用方法的对象。

我们也可以将equals()方法与我们自己的对象一起使用。假设我们有一个人类：

```java
public class PersonWithEquals {
    private String firstName;
    private String lastName;

    public PersonWithEquals(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

我们可以覆盖该类的equals()方法，以便我们可以根据两个人的内部详细信息进行比较：

```java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    PersonWithEquals that = (PersonWithEquals) o;
    return firstName.equals(that.firstName) &&
      lastName.equals(that.lastName);
}
```


## 3.对象#equals 静态方法

现在让我们看看Objects#equals静态方法。我们之前提到，我们不能使用null作为第一个对象的值，否则将抛出NullPointerException。


<br/><br/><br/><br/><br/><br/>

**Objects helper类的equals()方法解决了这个问题。它需要两个参数并进行比较，也处理空值。**

让我们再次比较Person对象：
```java
PersonWithEquals joe = new PersonWithEquals("Joe", "Portman");
PersonWithEquals joeAgain = new PersonWithEquals("Joe", "Portman");
PersonWithEquals natalie = new PersonWithEquals("Natalie", "Portman");

assertThat(Objects.equals(joe, joeAgain)).isTrue();
assertThat(Objects.equals(joe, natalie)).isFalse();
```

正如我们所解释的，此方法处理空值。因此，如果两个参数都是空的，它将返回true，如果只有一个参数是空的，它将返回false。

这真的很方便。假设我们想在我们的Person类中添加一个可选的出生日期：

```java
public PersonWithEquals(String firstName, String lastName, LocalDate birthDate) {
    this(firstName, lastName);
    this.birthDate = birthDate;
}
```

然后我们必须更新我们的equals()方法，但使用空处理。我们可以通过将条件添加到ourequals()方法来做到这一点：

```java
birthDate == null ? that.birthDate == null : birthDate.equals(that.birthDate);
```

然而，如果我们在类中添加太多可为空的字段，它可能会变得非常混乱。在我们的equals()实现中使用Objects#equals方法要干净得多，并提高了可读性：

```java
Objects.equals(birthDate, that.birthDate);
```

## 4.compareTo接口

比较逻辑也可用于将对象按特定顺序放置。可比接口允许我们通过确定一个对象是否大于、相等或小于另一个对象来定义对象之间的顺序。

可比较接口是通用的，只有一个方法，compareTo()，它接受泛型类型的参数并返回一个int。如果返回值低于参数，则为负值；如果等于，则返回值为0，否则为正值。

<br/><br/><br/><br/><br/><br/>

假设，在我们的Person类中，我们想按姓氏比较Person对象：

```java
public class PersonWithEqualsAndComparable implements Comparable<PersonWithEqualsAndComparable> {
    //...

    @Override
    public int compareTo(PersonWithEqualsAndComparable o) {
        return this.lastName.compareTo(o.lastName);
    }
}
```
如果使用姓氏大于此的人调用，compareTo()方法将返回负int，如果姓氏相同，则返回零，否则返回正。


## 5.Comparator接口

比较器接口是通用的，有一个比较方法，该方法接受该通用类型的两个参数并返回一个整数。我们之前已经在可比界面中看到了这种模式。

比较器是相似的；然而，它与类的定义是分开的。因此，我们可以为一个类定义尽可能多的比较器，我们只能提供一个可比的实现。

让我们想象一下，我们有一个在表格视图中显示人员的网页，我们希望为用户提供按名字而不是姓氏进行排序的可能性。如果我们也想保持当前的实现，这在Comparable中是不可能的，但我们可以实现我们自己的比较器。

让我们创建一个仅按名字进行比较的人比较器：

```java
Comparator<Person> compareByFirstNames = Comparator.comparing(Person::getFirstName);
```

<br/><br/><br/><br/><br/><br/>

现在，让我们对使用该比较器的人进行排序：
```java
Person joe = new Person("Joe", "Portman");
Person allan = new Person("Allan", "Dale");

List<Person> people = new ArrayList<>();
people.add(joe);
people.add(allan);

people.sort(compareByFirstNames);

assertThat(people).containsExactly(allan, joe);
```

在比较器接口上，我们还可以在 comparing 实现中使用其他方法：

```java
@Override
public int compareTo(Person o) {
    return Comparator.comparing(Person::getLastName)
      .thenComparing(Person::getFirstName)
      .thenComparing(Person::getBirthDate, Comparator.nullsLast(Comparator.naturalOrder()))
      .compare(this, o);
}
```
在这种情况下，我们首先比较姓氏，然后比较名字。接下来，我们比较出生日期，但由于它们是无效的，我们必须说如何处理，即应该根据其自然顺序对它们进行比较，零值排在最后。


## 6.Apache Commmon库

首先，让我们导入Maven依赖项：
```yaml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
</dependency>
```

### 6.1 ObjectUtils#notEqual方法

首先，让我们谈谈ObjectUtils#notEqual方法。根据它们自己的equals()方法实现，需要两个对象参数来确定它们是否不相等。它还处理空值。

让我们重用我们的字符串示例：

```java
String a = new String("Hello!");
String b = new String("Hello World!");

assertThat(ObjectUtils.notEqual(a, b)).isTrue();
```

应该注意的是，ObjectUtils有一个equals()方法。然而，自Java 7以来，Objects#equals出现后，这就被弃用了


### 6.2 ObjectUtils#compare方法

现在让我们用ObjectUtils#compare方法比较对象顺序。这是一个泛型方法，它接受该泛型类型的两个可比参数，并返回一个整数。

让我们再次使用字符串来查看它：


<br/><br/><br/><br/><br/><br/>

```java
String first = new String("Hello!");
String second = new String("How are you?");

assertThat(ObjectUtils.compare(first, second)).isNegative();
```

默认情况下，该方法通过考虑更大的空值来处理空值。它还提供了一个重载版本，提供反转该行为，并认为它们较小，采用布尔参数。


## 6.Google guava库

首先，让我们导入依赖项：

```xml
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>31.0.1-jre</version>
</dependency>
```

谷歌为我们提供了一种方法来确定两个对象是否相等，Objects#equal：

```java
String a = new String("Hello!");
String b = new String("Hello!");

assertThat(Objects.equal(a, b)).isTrue();
```

guava库提供了ComparisonChain类，允许我们通过比较链比较两个对象。我们可以通过名字和姓氏轻松比较两个Person对象：

```java
Person natalie = new Person("Natalie", "Portman");
Person joe = new Person("Joe", "Portman");

int comparisonResult = ComparisonChain.start()
  .compare(natalie.getLastName(), joe.getLastName())
  .compare(natalie.getFirstName(), joe.getFirstName())
  .result();

assertThat(comparisonResult).isPositive();
```

