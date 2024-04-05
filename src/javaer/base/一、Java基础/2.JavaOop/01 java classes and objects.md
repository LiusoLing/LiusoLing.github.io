---
# 这是文章的标题
title: 01. Java类和对象
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-02-20
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - class
  - object
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

了解Java编程语言的两个基本构建块—— `类` 和 `对象`。它们是 `面向对象编程（OOP）` 的基本概念，我们用它来模拟现实生活中的实体。

- 在OOP中，**类是对象的蓝图或模板。我们用它们来描述实体的类型。**
- 另一方面，**物体是从类中创造的活体。它们在其领域中包含某些状态，并用其方法呈现某些行为。**

<!-- more -->

## 1.Classes

一个类表示一个定义或对象的类型。

在Java中，**类可以包含字段、构造函数和方法。**

这是一个代表汽车的简单Java类的示例：

<br/><br/><br/><br/><br/><br/>

```java
class Car {

    // fields
    String type;
    String model;
    String color;
    int speed;

    // constructor
    Car(String type, String model, String color) {
        this.type = type;
        this.model = model;
        this.color = color;
    }
    
    // methods
    int increaseSpeed(int increment) {
        this.speed = this.speed + increment;
        return this.speed;
    }
    
    // ...
}
```
这个Java类代指汽车。我们可以从这个类创造出任何类型的汽车。我们使用字段来保存状态，并使用构造函数从这个类创建对象。

默认情况下，每个Java类都有一个空的构造函数。如果我们不像上面那样提供特定的构造函数实现，程序将使用默认的构造函数。

以下是默认构造函数如何查找我们的汽车类：

```java
Car(){}
```

**默认构造函数只需使用其默认值初始化对象的所有字段。字符串初始化为空，整数初始化为零。**

现在，我们的类有一个特定的构造函数，因为我们希望在创建对象时初始化它们的内部属性字段：

```java
Car(String type, String model) {
    // ...
}
```

总而言之，我们写了一个定义汽车的类。其属性由包含类对象状态的字段描述，并使用方法描述其行为。


<br/><br/><br/><br/><br/><br/>

## 2.Objects

类在编译期间被编译创建，**对象是在运行时从类中创建的。**

类的对象称为实例，我们使用构造函数创建和初始化它们：

```java
Car byd = new Car("比亚迪", "秦 PLUS", "red");
Car tsl = new Car("特斯拉", "Model S", "blue");
Car bm = new Car("宝马", "华晨", "white");
```
可以看到，我们创建了不同的汽车对象，都来自一个汽车类。

**这就是类的作用，在一个地方定义蓝图、模板，然后在许多地方多次重复使用它。**

现在，我们创建了三辆不同品牌的汽车实体，它们都停着，因为它们的速度为零。我们可以通过调用我们的increaseSpeed方法来改变这一点：

```java
byd.increaseSpeed(10);
tsl.increaseSpeed(20);
bm.increaseSpeed(30);
```

汽车的状态已经发生了改变---- 它们正在以不同的速度在行驶。

<br/><br/><br/><br/><br/><br/>


## 3.访问修饰符

在前面的示例中，我们省略了访问修饰符来简化代码。其实实际上使用了默认的软件包私有修饰符。该修饰符允许从同一软件包中的任何其他类访问该类。

通常，我们会为构造函数使用公共修饰符来允许从所有其他对象访问：

```java
public Car(String type, String model, String color) {
    // ...
}
```

我们类中的每个 `字段` 和 `方法` 也应该通过特定的修饰符定义访问控制。**类通常有公共修饰符，字段通常用私有修饰符。**

字段保存我们对象的状态，因此我们希望控制对该状态的访问。我们可以将其中一些保密，另一些公开。

我们通过称为 `getters` 和 `setters` 的特定方法来实现这一点。

具有完全指定访问控制的类如下所示：

```java
public class Car {
    private String type;
    // ...

    public Car(String type, String model, String color) {
       // ...
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getSpeed() {
        return speed;
    }

    // ...
}
```

**Car类被标记为公共，这意味着我们可以在任何软件包中使用它。** 此外，构造函数是公共的，这意味着我们可以在任何其他对象中从该类创建一个对象。

**Car类的字段被标记为私有，这意味着它们无法直接从我们的对象访问，**但我们通过getter和setter提供对它们的访问。

<br/><br/><br/><br/><br/><br/>

类型和模型字段没有getter和setter，因为它们保存的是汽车对象的内部数据。我们只能在初始化期间通过构造函数来定义它们。

此外，颜色可以访问和更改，而速度只能访问，但不能更改。我们通过专门的公共方法 increaseSpeed() 和 decreaseSpeed() 实施速度调整。

换句话说，**我们使用访问控制来封装对象的状态。**

