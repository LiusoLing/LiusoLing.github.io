---
# 这是文章的标题
title: 02. Java具体类
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
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
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

了解Java中的具体类，并了解它和接口、抽象类有何不同。

<!-- more -->

## 1.什么是具体类

具体类，是指用 `new` 关键字创建出实例的类。

其内的所有方法都实现了，我们称之为具体类。

例如一个 Car 类：
```java
public class Car {
    public String honk() {
        return "beep!";
    }

    public String drive() {
        return "vroom";
    }
}
```

我们可以实例化它：
```java
Car car = new Car();
```

在Java 中，一些具体类如：**HashMap、HashSet、ArrayList和LinkedList。**


<br/><br/><br/><br/><br/><br/>


## 2.Java抽象类和具体类

**当然，并非所有Java类型都实现了所有方法。** 这种灵活性，也称为抽象，使我们能够更笼统地思考我们试图建模的领域。

在Java中，**我们可以使用接口和抽象类实现抽象。**


<br/><br/><br/><br/><br/><br/>


### 2.1 接口

**接口是一个类的蓝图。** 或者，换句话说，它是未实现的方法签名的集合：

```java
interface Driveable {
    void honk();
    void drive();
}
```
**请注意，它使用 `interface` 关键字而不是 `class`。**

由于Driveable有未实现的方法，我们无法用 `new` 关键字实例化它。

但是，像Car这样的具体类可以实现这些方法。

JDK提供了许多接口，如 **Map、List和Set。**

<br/><br/><br/><br/><br/><br/>

### 2.2 抽象类

**抽象类是一个具有未实现方法的类，** 尽管它实际上可以同时具有：

```java
public abstract class Vehicle {
    public abstract String honk();

    public String drive() {
        return "zoom";
    }
}
```

**请注意，我们用关键字 `abstract` 标记抽象类。**

同样，由于Veicle有一个未实现的方法，所以，我们将无法使用 `new` 关键字实例化抽象类。

JDK的抽象类的一些例子是 **AbstractMap 和 AbstractList。**

<br/><br/>

### 2.3 具体类

**具体类没有任何未实现的方法。** 无论实现是否继承，只要每个方法都有实现，该类都是具体的。

具体类可以像我们之前的汽车示例一样简单。他们还可以实现接口并扩展抽象类：

```java
public class FancyCar extends Vehicle implements Driveable {
    public String honk() { 
        return "beep";
    }
}
```

我们可以使用 `new` 关键字创建一个FancyCar类实例。

```java
FancyCar car = new FancyCar();
```

**简单地说，所有不是抽象的类，我们可以称之为具体类。**