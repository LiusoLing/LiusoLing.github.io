---
# 这是文章的标题
title: 17. Java Optional指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 17
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

在本教程中，我们将展示Java 8中引入的 Optional 类。

该类的目的是提供用于表示可选值而不是空引用的类型级解决方案。

<!-- more -->

## 1.Optional类

有几种方法可以创建 `Optional` 对象。

要创建一个空的 Optional 对象，我们只需要使用其空（）静态方法：

<br/><br/><br/><br/><br/><br/>


```java
@Test
public void whenCreatesEmptyOptional_thenCorrect() {
    Optional<String> empty = Optional.empty();
    assertFalse(empty.isPresent());
}
```
请注意，我们使用 `isPresent()` 方法来检查 `Optional` 对象中是否有值。仅当我们创建了具有非空值的可选值时，该值才存在。

我们还可以使用 `of()` 的静态方法创建一个可选对象：


```java
@Test
public void givenNonNull_whenCreatesNonNullable_thenCorrect() {
    String name = "baeldung";
    Optional<String> opt = Optional.of(name);
    assertTrue(opt.isPresent());
}
```

但是，传递给of()方法的参数不能为空。否则，我们将得到一个NullPointerException：
```java
@Test(expected = NullPointerException.class)
public void givenNull_whenThrowsErrorOnCreate_thenCorrect() {
    String name = null;
    Optional.of(name);
}
```

但是，如果我们期望一些空值，我们可以使用ofNullable()方法：
```java
@Test
public void givenNonNull_whenCreatesNullable_thenCorrect() {
    String name = "baeldung";
    Optional<String> opt = Optional.ofNullable(name);
    assertTrue(opt.isPresent());
}
```

通过这样做，如果我们传递一个空引用，它不会抛出异常，而是返回一个空的可选对象：

<br/><br/><br/><br/><br/><br/>

```java
@Test
public void givenNull_whenCreatesNullable_thenCorrect() {
    String name = null;
    Optional<String> opt = Optional.ofNullable(name);
    assertFalse(opt.isPresent());
}
```

## 2.检查值存在

当我们有一个从方法返回或由我们创建的可选对象时，我们可以使用isPresent()方法检查其中是否有值：

```java
@Test
public void givenOptional_whenIsPresentWorks_thenCorrect() {
    Optional<String> opt = Optional.of("Baeldung");
    assertTrue(opt.isPresent());

    opt = Optional.ofNullable(null);
    assertFalse(opt.isPresent());
}
```

如果包装的值不是空的，则此方法返回true。

此外，从Java 11开始，我们可以用isEmpty方法做相反的事情：


```java
@Test
public void givenAnEmptyOptional_thenIsEmptyBehavesAsExpected() {
    Optional<String> opt = Optional.of("Baeldung");
    assertFalse(opt.isEmpty());

    opt = Optional.ofNullable(null);
    assertTrue(opt.isEmpty());
}
```


## 3.使用ifPresent()进行条件操作

ifPresent()方法允许我们在包装值上运行一些代码，如果它被发现是非空的。在选择之前，我们会做：

```java
if(name != null) {
    System.out.println(name.length());
}
```

在继续执行一些代码之前，此代码会检查名称变量是否为空。这种方法很长，这不是唯一的问题——它也容易出错。

<br/><br/><br/><br/><br/><br/>

事实上，我们无法保证在打印该变量后，我们不会再次使用它，然后可能就忘记了执行空检查？

如果空值进入该代码，这可能会导致运行时的 `NullPointerException`。当程序因输入问题而失败时，通常是编程实践不佳的结果。

可选性使我们明确地处理可空值，作为执行良好编程实践的一种方式。

现在让我们看看如何在Java 8中重构上述代码。

在典型的函数式编程风格中，我们可以对实际存在的对象执行操作：

```java
@Test
public void givenOptional_whenIfPresentWorks_thenCorrect() {
    Optional<String> opt = Optional.of("baeldung");
    opt.ifPresent(name -> System.out.println(name.length()));
}
```
在上述示例中，我们仅使用两行代码来替换第一个示例中工作的五行代码：一行将对象包装成可选对象，下一行执行隐式验证以及执行代码。


## 4.orElse（）的默认值

orElse()方法用于检索在可选实例中包装的值。它需要一个参数，作为默认值。orElse()方法返回包装值（如果存在），否则返回其参数：

```java
@Test
public void whenOrElseWorks_thenCorrect() {
    String nullName = null;
    String name = Optional.ofNullable(nullName).orElse("john");
    assertEquals("john", name);
}
```


## 5.带有orElseGet（）的默认值

orElseGet()方法类似于orElse()。但是，如果可选值不存在，它不取一个值返回，而是使用一个 `supplier` 功能接口，该接口被调用并返回调用的值：

<br/><br/><br/><br/><br/><br/>

```java
@Test
public void whenOrElseGetWorks_thenCorrect() {
    String nullName = null;
    String name = Optional.ofNullable(nullName).orElseGet(() -> "john");
    assertEquals("john", name);
}
```


## 6.orElse和orElseGet的区别

对于许多刚使用 `Optional`或`Java 8`的程序员来说，`orElse()`和`orElseGet()`之间的区别并不明确。事实上，这两种方法给人的印象是它们在功能上相互重叠。

然而，两者之间有一个微妙但非常重要的区别，如果不充分理解，可能会极大地影响我们代码的性能。

让我们在测试类中创建一个名为getMyDefault()的方法，它不接受参数并返回默认值：
```java
public String getMyDefault() {
    System.out.println("Getting Default Value");
    return "Default Value";
}
```

让我们看看两个测试，并观察它们的副作用，以确定orElse（）和orElseGet（）在哪里重叠以及它们在哪里不同：
```java
@Test
public void whenOrElseGetAndOrElseOverlap_thenCorrect() {
    String text = null;

    String defaultText = Optional.ofNullable(text).orElseGet(this::getMyDefault);
    assertEquals("Default Value", defaultText);

    defaultText = Optional.ofNullable(text).orElse(getMyDefault());
    assertEquals("Default Value", defaultText);
}
```

在上述示例中，我们在可选对象中包装空文本，并尝试使用两种方法中的每种方法获取包装值。

副作用是：
```java
Getting default value...
Getting default value...
```

在每种情况下都调用getMyDefault()方法。碰巧的是，**当包装的值不存在时，orElse()和orElseGet()的工作方式完全相同**。

现在让我们在存在值的地方运行另一个测试，理想情况下，甚至不应该创建默认值：

```java
@Test
public void whenOrElseGetAndOrElseDiffer_thenCorrect() {
    String text = "Text present";

    System.out.println("Using orElseGet:");
    String defaultText 
      = Optional.ofNullable(text).orElseGet(this::getMyDefault);
    assertEquals("Text present", defaultText);

    System.out.println("Using orElse:");
    defaultText = Optional.ofNullable(text).orElse(getMyDefault());
    assertEquals("Text present", defaultText);
}
```

在上面的示例中，我们不再包装空值，其余代码保持不变。

现在让我们看看运行此代码的副作用：
```java
Using orElseGet:
Using orElse:
Getting default value...
```

请注意，**当使用orElseGet()检索包装值时，getMyDefault()方法甚至没有被调用，因为包含的值存在**。

然而，**在使用orElse()时，无论包装值是否存在，都会创建默认对象**。因此，在这种情况下，我们刚刚创建了一个从未使用过的冗余对象。

在这个简单的例子中，创建默认对象没有重大成本，因为JVM知道如何处理此类对象。然而，当getMyDefault()等方法必须进行Web服务调用甚至查询数据库时，成本变得非常明显。


## 7.orElseThrow()的异常

orElseThrow()方法遵循orElse()和orElseGet()，并添加了处理缺失值的新方法。

当包装的值不存在时，它不会返回默认值，而是抛出异常：

```java
@Test(expected = IllegalArgumentException.class)
public void whenOrElseThrowWorks_thenCorrect() {
    String nullName = null;
    String name = Optional.ofNullable(nullName).orElseThrow(
      IllegalArgumentException::new);
}
```

Java 8中的方法引用在这里派上用场，可以传递异常构造函数。

Java 10引入了orElseThrow()方法的简化no-arg版本。在空选项的情况下，它会抛出aNoSuchElementException：
```java
@Test(expected = NoSuchElementException.class)
public void whenNoArgOrElseThrowWorks_thenCorrect() {
    String nullName = null;
    String name = Optional.ofNullable(nullName).orElseThrow();
}
```

## 8.使用get（）返回值

检索包装值的最终方法是get()方法：
```java
@Test
public void givenOptional_whenGetsValue_thenCorrect() {
    Optional<String> opt = Optional.of("baeldung");
    String name = opt.get();
    assertEquals("baeldung", name);
}
```

然而，与前三种方法不同，get()只能在包装对象为notnull时返回值；否则，它会抛出一个没有这样的元素异常：
```java
@Test(expected = NoSuchElementException.class)
public void givenOptionalWithNull_whenGetThrowsException_thenCorrect() {
    Optional<String> opt = Optional.ofNullable(null);
    String name = opt.get();
}
```
这是get()方法的主要缺陷。理想情况下，Optional应该帮助我们避免这种不可预见的例外。因此，这种方法违背了可选的目标，并且可能会在未来的版本中弃用。

因此，建议使用其他变体，使我们能够准备和明确处理空情况。


## 9.带有filter（）的条件返回

我们可以用过滤器方法对包装值进行内联测试。它以谓词作为参数，并返回一个可选对象。如果包装的值通过谓词的测试，则按原样返回可选值。

但是，如果谓词返回false，那么它将返回一个空的Optional：


```java
@Test
public void whenOptionalFilterWorks_thenCorrect() {
    Integer year = 2016;
    Optional<Integer> yearOptional = Optional.of(year);
    boolean is2016 = yearOptional.filter(y -> y == 2016).isPresent();
    assertTrue(is2016);
    boolean is2017 = yearOptional.filter(y -> y == 2017).isPresent();
    assertFalse(is2017);
}
```

过滤器方法通常用于基于预定义规则的包装值。我们可以用它来拒绝错误的电子邮件格式或不够强的密码。

让我们看看另一个有意义的例子。假设我们想买一个调制解调器，而我们只关心它的价格。

我们从某个网站收到有关调制解调器价格的推送通知，并将其存储在对象中：

```java
public class Modem {
    private Double price;

    public Modem(Double price) {
        this.price = price;
    }
    // standard getters and setters
}
```

然后，我们将这些对象提供给一些代码，其唯一目的是检查调制解调器价格是否在我们的预算范围内。

现在让我们看看没有可选的代码：

```java
public boolean priceIsInRange1(Modem modem) {
    boolean isInRange = false;

    if (modem != null && modem.getPrice() != null 
      && (modem.getPrice() >= 10 
        && modem.getPrice() <= 15)) {

        isInRange = true;
    }
    return isInRange;
}
```

注意我们必须编写多少代码才能实现这一目标，特别是在if条件下。对应用程序至关重要的if条件的唯一部分是最后一次价格范围检查；其余的检查是防御性的：

```java
@Test
public void whenFiltersWithoutOptional_thenCorrect() {
    assertTrue(priceIsInRange1(new Modem(10.0)));
    assertFalse(priceIsInRange1(new Modem(9.9)));
    assertFalse(priceIsInRange1(new Modem(null)));
    assertFalse(priceIsInRange1(new Modem(15.5)));
    assertFalse(priceIsInRange1(null));
}
```

除此之外，有可能在漫长的一天中忘记空检查，而不会收到任何编译时错误。

现在让我们看看带有可选#filter的变体：

```java
public boolean priceIsInRange2(Modem modem2) {
     return Optional.ofNullable(modem2)
       .map(Modem::getPrice)
       .filter(p -> p >= 10)
       .filter(p -> p <= 15)
       .isPresent();
 }
```
**map调用仅用于将一个值转换为其他值**。请记住，此操作不会修改原始值。

<br/><br/><br/><br/><br/><br/>

在我们的案例中，我们正在从模型类中获取一个价格对象。我们将在下一节中详细研究map()方法。

首先，如果将空对象传递给此方法，我们预计不会出现任何问题。

其次，我们在其正文中写入的唯一逻辑正是方法名称所描述的——价格范围检查。可选负责其余部分：

```java
@Test
public void whenFiltersWithOptional_thenCorrect() {
    assertTrue(priceIsInRange2(new Modem(10.0)));
    assertFalse(priceIsInRange2(new Modem(9.9)));
    assertFalse(priceIsInRange2(new Modem(null)));
    assertFalse(priceIsInRange2(new Modem(15.5)));
    assertFalse(priceIsInRange2(null));
}
```
之前的方法承诺检查价格范围，但必须做更多事情来抵御其固有的脆弱性。因此，我们可以使用过滤器方法来替换不必要的if语句并拒绝不需要的值。


## 10.使用map（）转换价值

在上一节中，我们研究了如何拒绝或接受基于过滤器的值。

我们可以使用类似的语法使用map()方法转换可选值：
```java
@Test
public void givenOptional_whenMapWorks_thenCorrect() {
    List<String> companyNames = Arrays.asList(
      "paypal", "oracle", "", "microsoft", "", "apple");
    Optional<List<String>> listOptional = Optional.of(companyNames);

    int size = listOptional
      .map(List::size)
      .orElse(0);
    assertEquals(6, size);
}
```
在本例中，我们在可选对象中包装字符串列表，并使用其映射方法对包含的列表执行操作。我们执行的操作是检索列表的大小。

映射方法返回包装在可选中的计算结果。然后，我们必须在返回的Optional上调用适当的方法来检索其值。

<br/><br/><br/><br/><br/><br/>

请注意，过滤器方法只需对值进行检查，并仅在与给定谓词匹配时返回描述此值的可选值。否则返回一个空的可选。然而，map方法采用现有值，使用此值执行计算，并返回包装在可选对象中的计算结果：
```java
@Test
public void givenOptional_whenMapWorks_thenCorrect2() {
    String name = "baeldung";
    Optional<String> nameOptional = Optional.of(name);

    int len = nameOptional
     .map(String::length)
     .orElse(0);
    assertEquals(8, len);
}
```

我们可以将map和filter在一起，做一些更强大的事情。

让我们假设我们想检查用户输入的密码的正确性。我们可以使用map转换清理密码，并使用filter检查其正确性：
```java
@Test
public void givenOptional_whenMapWorksWithFilter_thenCorrect() {
    String password = " password ";
    Optional<String> passOpt = Optional.of(password);
    boolean correctPassword = passOpt.filter(
      pass -> pass.equals("password")).isPresent();
    assertFalse(correctPassword);

    correctPassword = passOpt
      .map(String::trim)
      .filter(pass -> pass.equals("password"))
      .isPresent();
    assertTrue(correctPassword);
}
```

正如我们所看到的，如果不首先清理输入，它将被过滤掉——但用户可能会理所当然地认为，前后空格都构成输入。
因此，在过滤掉不正确的密码之前，我们将肮脏的密码转换为带有map的干净密码。


## 11.使用flatMap()转换值

就像map()方法一样，我们也有flatMap()方法作为转换值的替代方案。区别在于，map仅在解包时转换值，而flatMap在转换之前取一个包合的值并解包。

之前，我们创建了简单的字符串和整数对象，用于在可选实例中包装。然而，我们经常会从复杂对象的访问者那里收到这些对象。

为了更清楚地了解差异，让我们看看一个Person对象，它包含一个人的详细信息，如姓名、年龄和密码：

```java
public class Person {
    private String name;
    private int age;
    private String password;

    public Optional<String> getName() {
        return Optional.ofNullable(name);
    }

    public Optional<Integer> getAge() {
        return Optional.ofNullable(age);
    }

    public Optional<String> getPassword() {
        return Optional.ofNullable(password);
    }

    // normal constructors and setters
}
```
我们通常会创建这样一个对象，并将其包装在可选对象中，就像我们使用String一样。

<br/><br/><br/><br/><br/><br/>

或者，可以通过另一个方法调用返回给我们：

```java
Person person = new Person("john", 26);
Optional<Person> personOptional = Optional.of(person);
```

现在请注意，当我们包装一个Person对象时，它将包含嵌套的可选实例：
```java
@Test
public void givenOptional_whenFlatMapWorks_thenCorrect2() {
    Person person = new Person("john", 26);
    Optional<Person> personOptional = Optional.of(person);

    Optional<Optional<String>> nameOptionalWrapper  
      = personOptional.map(Person::getName);
    Optional<String> nameOptional  
      = nameOptionalWrapper.orElseThrow(IllegalArgumentException::new);
    String name1 = nameOptional.orElse("");
    assertEquals("john", name1);

    String name = personOptional
      .flatMap(Person::getName)
      .orElse("");
    assertEquals("john", name);
}
```

在这里，我们尝试检索Person对象的名称属性以执行断言。

注意我们如何在第三个语句中使用map()方法实现这一点，然后注意我们如何使用flatMap()方法完成相同的操作。

Person::getName方法引用类似于我们在上一节中用于清理密码的String::trim调用。

唯一的区别是getName()返回一个可选的，而不是像trim()操作那样返回一个字符串。这一点，再加上地图转换将结果包装在可选对象中，导致嵌套的可选。

因此，在使用map()方法时，我们需要在使用转换后的值之前添加一个额外的调用来检索值。这样，可选包装器将被删除。使用此操作在使用flatMap时隐式执行。
