---
# 这是文章的标题
title: 14. Java static关键字
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 14
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-27
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

在本教程中，我们将详细探索Java语言的静态关键字。

我们将了解如何将静态关键字应用于变量、方法、块和嵌套类，以及它有什么不同。

<!-- more -->

## 1.static关键字

在Java编程语言中，**关键字static意味着特定成员属于类型本身，而不是该类型的实例。**

这意味着我们将只创建一个静态成员的实例，该实例在类的所有实例之间共享。

我们可以将关键字应用于变量、方法、块和嵌套类。


## 2.静态字段（类变量）

在Java中，**当我们声明一个字段静态时，恰好会创建该字段的单个副本，并在该类的所有实例之间共享。**

我们实例化一个类多少次并不重要。始终只有一个属于它的静态字段副本。这个静态字段的值在同一类的所有对象之间共享。

从内存的角度来看，**静态变量存储在堆内存中。**

### 2.1静态字段示例

假设我们有一个具有多个属性（实例变量）的Car类。

每当我们从这个汽车蓝图中实例化新对象时，每个新对象都会有这些实例变量的不同副本。

<br/><br/><br/><br/><br/><br/>


然而，假设我们想要一个变量，它保存实例化Car对象的数量，并在所有实例之间共享，以便他们可以访问它并在初始化时增加它。

这就是静态变量的用处：

```java
public class Car {
    private String name;
    private String engine;
    
    public static int numberOfCars;
    
    public Car(String name, String engine) {
        this.name = name;
        this.engine = engine;
        numberOfCars++;
    }

    // getters and setters
}
```

现在，对于我们实例化的该类的每个对象，numberOfCars变量的相同副本都会递增。

因此，在这种情况下，这些将是真的：


```java
@Test
public void whenNumberOfCarObjectsInitialized_thenStaticCounterIncreases() {
    new Car("Jaguar", "V8");
    new Car("Bugatti", "W16");
 
    assertEquals(2, Car.numberOfCars);
}
```

### 2.2使用静态字段的原因

以下是我们何时想使用静态字段的一些原因：

- 当变量的值独立于对象时

- 当值应该在所有对象之间共享时

由于静态变量属于一个类，我们可以使用类名直接访问它们。因此，**我们不需要任何对象引用。**

我们只能在类级别声明静态变量。

我们可以**访问静态字段，而无需对象初始化。**

最后，我们可以使用对象引用（如ford.numberOfCars++）访问静态字段。但我们应该避免这种情况，因为很难弄清楚它是实例变量还是类变量。

相反，我们应该始终**使用类名（Car.numberOfCars++）引用静态变量。**


## 3.静态方法（类方法）

与静态字段类似，静态方法也属于类而不是对象。因此，我们可以调用它们，而无需创建它们所在的类的对象。

### 3.1静态方法示例

我们通常使用静态方法来执行不依赖于实例创建的操作。

为了在该类的所有实例之间共享代码，我们用静态方法编写它：


```java
static void setNumberOfCars(int numberOfCars) {
    Car.numberOfCars = numberOfCars;
}
```

我们还通常使用静态方法来创建实用程序或辅助类，以便我们无需创建这些类的新对象即可获得它们。

<br/><br/><br/><br/><br/><br/>

例如，我们可以看看JDK的Collections或Math实用程序类，Apache的StringUtils，或Spring框架的CollectionUtils，并注意到它们的所有实用程序方法都是静态的。


### 3.2使用静态方法的原因


让我们看看我们想要使用静态方法的几个原因：

- 访问/操作静态变量和其他不依赖于对象的静态方法。

- 静态方法广泛用于实用程序和辅助类。

Java中的静态方法在编译时解析。由于方法重写是运行时多态性的一部分，因此**静态方法无法重写。**

**抽象方法不能是静态的。**

静态方法不能使用`this`或`super`关键字。

以下实例、类方法和变量的组合是有效的：

- 实例方法可以直接访问实例方法和实例变量

- 实例方法也可以直接访问静态变量和静态方法

- 静态方法可以访问所有静态变量和其他静态方法

- 静态方法不能直接访问实例变量和实例方法。他们需要一些对象引用才能做到这一点。


### 3.3在Java中调用静态方法中的非静态方法

为了在静态方法中调用非静态方法，我们必须使用包含非静态方法的类实例。例如，**在main()静态方法中调用非静态方法时，这是一个常见的用例。**

让我们考虑一下我们在本文前面介绍的汽车类的例子，它定义了以下方法：


<br/><br/><br/><br/><br/><br/>

```java
public String getName() {
    return name;
}

public String getEngine() {
    return engine;
}

public static String getCarsInformation(Car car) {
    return car.getName() + "-" + car.getEngine();
}
```

正如我们所看到的，我们在getCarsInformation()静态方法中调用getName()和getEngine()方法，它们是非静态方法。这之所以可能，只是因为我们使用Car对象的实例来访问这些方法。否则，我们会收到此错误消息“非静态方法'getName()'无法从静态上下文引用”。

## 4,静态块

我们使用静态块来初始化静态变量。虽然我们可以在声明期间直接初始化静态变量，但在某些情况下，我们需要进行多行处理。在这种情况下，静态块会派上用场。

**如果静态变量在初始化期间需要额外的多陈述逻辑，我们可以使用静态块。**

### 4.1静态块示例

例如，假设我们想用一些预定义的值初始化一个List对象。

使用静态块，这变得很容易：

```java
public class StaticBlockDemo {
    public static List<String> ranks = new LinkedList<>();

    static {
        ranks.add("Lieutenant");
        ranks.add("Captain");
        ranks.add("Major");
    }
    
    static {
        ranks.add("Colonel");
        ranks.add("General");
    }
}
```
不可能用所有初始值和声明初始化列表对象。因此，这就是我们在这里使用静态块的原因。

以下是使用静态块的几个原因：

- 如果静态变量的初始化除了分配之外还需要一些额外的逻辑

- 如果静态变量的初始化容易出错，并且需要异常处理

**一个类可以有多个静态块。** 静态字段和静态块以与类中相同的顺序解析和运行。

<br/><br/><br/><br/><br/><br/>

## 5.静态类

Java允许我们在类中创建一个类。它提供了一种我们只在一个地方使用的元素分组方式。这有助于保持我们的代码更有条理和可读性。

一般来说，嵌套类架构分为两种类型：

- 我们声明静态的嵌套类称为**静态嵌套类**

- 非静态的嵌套类称为**内部类**

两者之间的主要区别在于，内部类可以访问封闭类的所有成员（包括私有成员），而静态嵌套类只能访问外部类的静态成员。

事实上，**静态嵌套类的行为与任何其他顶级类完全相同，但包含在唯一可以访问它的类中，以提供更好的打包便利。**

### 5.1静态类示例

创建单项对象最广泛使用的方法是通过静态嵌套类：


```java
public class Singleton  {
    private Singleton() {}

    private static class SingletonHolder {
        public static final Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHolder.instance;
    }
}
```

我们使用这种方法，因为它不需要任何同步，并且易于学习和实现。

另一个嵌套静态类示例，其中显示父成员和嵌套成员之间的可见性，反之亦然：


<br/><br/><br/><br/><br/><br/>

```java
public class Pizza {

    private static String cookedCount;
    private boolean isThinCrust;

    public static class PizzaSalesCounter {

        private static String orderedCount;
        public static String deliveredCount;

        PizzaSalesCounter() {
            System.out.println("Static field of enclosing class is "
              + Pizza.cookedCount);
            System.out.println("Non-static field of enclosing class is "
              + new Pizza().isThinCrust);
        }
    }

    Pizza() {
        System.out.println("Non private static field of static class is "
          + PizzaSalesCounter.deliveredCount);
        System.out.println("Private static field of static class is "
          + PizzaSalesCounter.orderedCount);
    }

    public static void main(String[] a) {
           new Pizza.PizzaSalesCounter();
    }
}
```
当我们运行主方法时，结果是：


```java
Static field of enclosing class is null
Non private static field of static class is null
Private static field of static class is null
Non-static field of enclosing class is false
```

让我们看看在代码中使用静态内部类的几个原因：

- 仅在一个地方使用的分组类增加了封装

- 我们让代码更接近唯一会使用它的地方。这增加了可读性，代码也更易于维护。

- 如果嵌套类不需要对其封闭的类实例成员进行任何访问，则最好将其声明为静态。这样，它就不会与外部类耦合，因此更理想，因为它们不需要任何堆或堆栈内存。


基本上，**静态嵌套类无法访问封闭外类的任何实例成员。它只能通过对象的引用访问它们。**

静态嵌套类可以访问封闭类的所有静态成员，包括私有成员。

**Java编程规范不允许我们将顶级类声明为静态。** 只有类中的类（嵌套类）可以作为静态的。

