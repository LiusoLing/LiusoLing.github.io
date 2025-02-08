---
# 这是文章的标题
title: 19. Java equals和hashCode方法
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 19
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-07-19
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

在本教程中，我们将介绍两种紧密结合的方法：.equals()和.hashCode()。我们将专注于他们彼此的关系，如何正确覆盖他们，以及为什么我们应该同时覆盖两者或两者都不覆盖。

<!-- more -->

## 1..equals()方法

默认情况下，**顶级父类Object类定义了.equals()和.hashCode()方法。因此，每个Java类都隐式地拥有这两种方法**：


```java
class Money {
    int amount;
    String currencyCode;
}
```

```java
Money income = new Money(55, "USD");
Money expenses = new Money(55, "USD");
boolean balanced = income.equals(expenses)
```

我们希望 `income.equals（expenses）` 返回 true，但随着Money类的当前方法，并不会。

Object类中equals()的默认实现比较了对象的身份。在我们的示例中，货币类的收入和支出实例有两种不同的身份。因此，将它们与.equals()方法进行比较，返回false。

要改变这种行为，我们必须覆盖此方法。


### 1.1 覆盖 equals()

让我们覆盖.equals()方法，这样它不仅会考虑对象身份，还会考虑两个相关属性的值：


```java
@Override
public boolean equals(Object o) {
    if (o == this)
        return true;
    if (!(o instanceof Money))
        return false;
    Money other = (Money)o;
    boolean currencyCodeEquals = (this.currencyCode == null && other.currencyCode == null)
      || (this.currencyCode != null && this.currencyCode.equals(other.currencyCode));
    return this.amount == other.amount && currencyCodeEquals;
}
```
上文，我们有三个条件来检查Money实例是否与任何其他对象相同。

首先，如果对象与自身相等，它将返回true。
其次，如果它不是金钱的实例，它将返回false。
最后，我们将它与另一个Money类实例的属性进行比较。详细地说，我们确保比较类的所有属性都与比较类的属性相匹配。


### 1.2 equals方法约定

**Java SE定义了我们实现的equals()方法必须履行的约定**。简而言之，大多数标准遵循常识，但我们可以定义equals()方法必须遵循的形式规则。它必须是：

- 反射：一个物体必须等于自己
- 对称：x.equals(y)必须返回与y.equals(x)相同的结果
- 传递：如果x.equals(y)和y.equals(z)，那么也x.equals(z)
- 一致：仅当.equals()中包含的属性发生变化时，.equals()的值才应更改（不允许随机性）

我们可以在Java SE Docs中查找Object类的确切标准。


<br/><br/><br/><br/><br/><br/>


### 1.3 继承类可能违反equals方法的对称性

.equals()的标准是常识性的，当我们子类扩展了一个覆盖了.equals()方法的类时，有可能违反.equals()约定。让我们考虑一个扩展我们货币类的凭证类：


```java
class WrongVoucher extends Money {

    private String store;

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof WrongVoucher))
            return false;
        WrongVoucher other = (WrongVoucher)o;
        boolean currencyCodeEquals = (this.currencyCode == null && other.currencyCode == null)
          || (this.currencyCode != null && this.currencyCode.equals(other.currencyCode));
        boolean storeEquals = (this.store == null && other.store == null)
          || (this.store != null && this.store.equals(other.store));
        return this.amount == other.amount && currencyCodeEquals && storeEquals;
    }

    // other methods
}
```

乍一看，凭证类及其对.equals()的覆盖似乎是正确的。只要我们将金钱与金钱或代金券与代金券进行比较，两种.equals()方法的行为都是正确的。但是，如果我们比较这两个物体，会发生什么：

```java
Money cash = new Money(42, "USD");
WrongVoucher voucher = new WrongVoucher(42, "USD", "Amazon");

voucher.equals(cash) => false // As expected.
cash.equals(voucher) => true // That's wrong.
```

因此，我们违反了对称性标准。


### 1.4 固定 equals() 与组成对称

**为了避免犯错，我们应该偏爱将类组成另一个类的一部分而不是继承。**


```java
class Voucher {

    private Money value;
    private String store;

    Voucher(int amount, String currencyCode, String store) {
        this.value = new Money(amount, currencyCode);
        this.store = store;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Voucher))
            return false;
        Voucher other = (Voucher) o;
        boolean valueEquals = (this.value == null && other.value == null)
          || (this.value != null && this.value.equals(other.value));
        boolean storeEquals = (this.store == null && other.store == null)
          || (this.store != null && this.store.equals(other.store));
        return valueEquals && storeEquals;
    }

    // other methods
}
```

现在.equals()将按照约定要求对称地工作。


<br/><br/><br/><br/><br/><br/>


## 2..hashCode()方法

**Java SE还定义了.hashCode()方法的约定。**仔细研究这份约定会发现.hashCode()和.equals()的相关性有多密切。

.hashCode()合同中的所有三个标准都以某种方式提到了.equals()方法：

- 内部一致性：只有当 `equals（）`中的属性发生变化时，`hashCode（）`的值才可能发生变化
- 相等一致性：彼此相等的对象必须返回相同的哈希代码
- 碰撞：不相等的对象可能具有相同的哈希代码


### 2.1 违反hashCode()和equals()的一致性

.hashCode()合同的第二个标准有一个重要的结果：**如果我们覆盖equals()，我们也必须覆盖hashCode()**。这是迄今为止对equals()和hashCode()方法约定最普遍的违反方式。

```java
class Team {

    String city;
    String department;

    @Override
    public final boolean equals(Object o) {
        // implementation
    }
}
```

Team类仅覆盖等于（），但它仍然隐式使用Object类中定义的hashCode（）的默认实现。因此，它将为类的每个实例返回不同的hashCode()，并违反第二条规则。

现在，如果我们创建两个团队对象，都带有城市“纽约”和部门“营销”，它们将是相等的，但它们将返回不同的哈希代码。


### 2.2 带有不一致的hashCode（）的HashMap key

但为什么我们 Team 的约定违规是个问题？好吧，当涉及一些基于哈希的集合时，麻烦就开始了。让我们尝试使用我们的 Team类作为HashMap的key：

```java
Map<Team,String> leaders = new HashMap<>();
leaders.put(new Team("New York", "development"), "Anne");
leaders.put(new Team("Boston", "development"), "Brian");
leaders.put(new Team("Boston", "marketing"), "Charlie");

Team myTeam = new Team("New York", "development");
String myTeamLeader = leaders.get(myTeam);
```

我们希望myTeamLeader返回“Anne”，但以当前代码，它不会。

如果我们想将Team类的实例用作HashMap键，我们必须覆盖hashCode()方法，使其遵守合同；相等的对象返回相同的hashCode。

让我们看一个实现示例：

```java
@Override
public final int hashCode() {
    int result = 17;
    if (city != null) {
        result = 31 * result + city.hashCode();
    }
    if (department != null) {
        result = 31 * result + department.hashCode();
    }
    return result;
}
```

在此更改后，leaders.get（myTeam）按预期返回“Anne”。


<br/><br/><br/><br/><br/><br/>


## 3.覆盖.equals()和.hashCode()？

**一般来说，我们希望同时覆盖.equals()和.hashCode()，或者两者都不覆盖。** 

我们刚刚在第2节中看到，如果我们忽视这条规则，会带来不必要的后果。

对于实体类，对于具有内在标识的对象，默认实现通常是有意义的。

然而，对于值对象，我们通常更喜欢基于其属性的相等。因此，我们希望覆盖.equals()和.hashCode()。

记住我们第1节中的货币类：55美元等于55美元，即使它们是两个不同的实例。


## 4.覆盖帮助

我们通常不会手动编写这些方法的实现。正如我们所看到的，稍不注意就有相当多的陷阱。

**常见的选择是让我们的IDE代码编辑器帮忙生成.equals()和.hashCode()方法。**

`Apache Commons Lang`和`Google Guava`有辅助类，可以使用这两种方法简化写作。

`Lombok`项目还提供了 `@EqualsAndHashCode` 注释。

## 5.验证约定

如果我们想检查我们的实现是否符合Java SE合同和最佳实践，我们可以使用EqualsVerifier库。

让我们添加EqualsVerifier Maven测试依赖项：

```xml
<dependency>
    <groupId>nl.jqno.equalsverifier</groupId>
    <artifactId>equalsverifier</artifactId>
    <version>3.15.3</version>
    <scope>test</scope>
</dependency>
```

```java
@Test
public void equalsHashCodeContracts() {
    EqualsVerifier.forClass(Team.class).verify();
}
```

值得注意的是，EqualsVerifier同时测试equals()和hashCode()方法。

**EqualsVerifier比Java SE合同严格得多。**例如，它确保我们的方法不能抛出NullPointerException。此外，它强制要求两种方法或类本身都是最终的。

重要的是要意识到，**EqualsVerifier的默认配置只允许不可变的字段。** 这是比Java SE合同允许的更严格的检查。它坚持域驱动设计的建议，使价值对象不可变。

如果我们发现一些内置约束是不必要的，我们可以在EqualsVerifier调用中添加一个抑制（Warning.SPECIFIC_WARNING）。

