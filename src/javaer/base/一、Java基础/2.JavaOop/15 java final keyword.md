---
# 这是文章的标题
title: 15. Java final关键字
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 15
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-28
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

虽然继承使我们能够重用现有代码，但有时出于各种原因，**我们确实需要设置可扩展性限制**；`final` 关键字允许我们做到这一点。

在本教程中，我们将看看最终关键字对类、方法和变量意味着什么。

<!-- more -->

## 1.final类

***标记为最终的class类无法扩展。**如果我们查看Java核心库的代码，我们会在那里找到许多最终类。一个例子是String类。

考虑一下，如果我们可以扩展String类，覆盖其任何方法，并用我们特定String子类的实例替换所有String实例。

然后，对字符串对象的操作结果将变得不可预测。鉴于String类到处都在使用，这是不可接受的。这就是为什么String类被标记为final。


任何从最终类继承的尝试都会导致编译器错误。为了证明这一点，让我们创建最终类Cat：

<br/><br/><br/><br/><br/><br/>


```java
public final class Cat {

    private int weight;

    // standard getter and setter
}
```

让我们试着扩展它：


```java
public class BlackCat extends Cat {
}
```

我们将看到编译器错误：

```java
The type BlackCat cannot subclass the final class Cat
```

请注意，**类声明中的最终关键字并不意味着该类的对象是不可变的**。我们可以自由地更改Cat对象的字段：

```java
Cat cat = new Cat();
cat.setWeight(1);

assertEquals(1, cat.getWeight());

```

我们就是不能扩展它。

如果我们严格遵守良好设计的规则，出于安全原因，我们应该仔细创建和记录一个类，或宣布其最终。然而，在创建最终课程时，我们应该谨慎行事。

请注意，制作一个类最终意味着没有其他程序员可以改进它。想象一下，我们正在使用一个类，而没有它的源代码，而且一种方法存在问题。

如果该类是最终的，我们无法将其扩展到覆盖该方法并解决问题。换句话说，我们失去了可扩展性，这是面向对象编程的好处之一。

<br/><br/><br/><br/><br/><br/>


## 2.final方法

**标记为final的方法不能被覆盖**。当我们设计一个类并认为一个方法不应该被覆盖时，我们可以使这个方法是最终的。我们也可以在Java核心库中找到许多最终方法。

有时，我们不需要完全禁止类扩展，而只需要防止覆盖某些方法。一个很好的例子是Thread类。扩展它并从而创建自定义线程类是合法的。但它的isAlive()方法是最终的。

此方法检查线程是否活着。由于多种原因，不可能正确覆盖isAlive()方法。其中之一是这种方法是原生的。原生代码以另一种编程语言实现，通常特定于其运行的操作系统和硬件。

让我们创建一个Dog类，并使其sound()方法最终：

```java
public class Dog {
    public final void sound() {
        // ...
    }
}
```

现在让我们扩展Dog类，并尝试覆盖其sound()方法：

```java
public class BlackDog extends Dog {
    public void sound() {
    }
}
```

我们将看到编译器错误：

```java
- overrides
com.baeldung.finalkeyword.Dog.sound
- Cannot override the final method from Dog
sound() method is final and can’t be overridden
```

如果我们类的某些方法被其他方法调用，我们应该考虑使被调用的方法成为最终方法。否则，覆盖它们可能会影响呼叫者的工作，并导致令人惊讶的结果。

如果我们的构造函数调用其他方法，出于上述原因，我们通常应该声明这些方法为最终。

使班级的所有方法成为最终方法和将班级本身标记为最终之间有什么区别？在第一种情况下，我们可以扩展类并向其添加新方法。

在第二种情况下，我们不能这样做。


## 3.final变量

**标记为最终的变量无法重新分配**。一旦最终变量被初始化，它就无法被更改。

### 3.1final原始变量

让我们声明一个原始的最终变量i，然后为它分配1。

让我们试着给它分配一个2的值：

```java
public void whenFinalVariableAssign_thenOnlyOnce() {
    final int i = 1;
    //...
    i=2;
}
```

我们将看到编译器错误：


```java
The final local variable i may already have been assigned
```

### 3.2final参考变量

如果我们有一个最终的参考变量，我们也不能重新分配它。**但这并不意味着它所指的对象是不可变的。**我们可以自由地更改这个对象的属性。

为了证明这一点，让我们声明最终的引用变量cat并初始化它：

```java
final Cat cat = new Cat();
```

如果我们尝试重新分配它，我们会看到一个编译器错误：

```java
The final local variable cat cannot be assigned. It must be blank and not using a compound assignment
```

但我们可以更改Cat实例的属性：

<br/><br/><br/><br/><br/><br/>

```java
cat.setWeight(5);

assertEquals(5, cat.getWeight());
```

### 3.3final领域

**`final` 字段可以是常量或写一次字段。**为了区分它们，我们应该问一个问题——如果我们要序列化对象，我们会包括这个字段吗？如果不是，那么它不是对象的一部分，而是一个常数。

请注意，根据命名惯例，类常量应大写，组件由下划线（“_”）字符分隔：

```java
static final int MAX_WIDTH = 999;
```

请注意，**在构造函数完成之前，必须初始化final字段。**

对于静态final字段，这意味着我们可以初始化它们：

- 如上例所示，在声明后

- 在静态初始化器块中

例如，final字段，这意味着我们可以初始化它们：

- 声明后

- 在实例初始化器块中

- 在构造函数中

否则，编译器会给我们一个错误。


### 3.4final参数

final 关键字也是合法的，可以放在方法参数之前。**final参数无法在方法内更改：**


```java
public void methodWithFinalArguments(final int x) {
    x=1;
}
```

上述分配导致编译器错误：


```java
The final local variable x cannot be assigned. It must be blank and not using a compound assignment
```
