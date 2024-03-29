---
# 这是文章的标题
title: 08. Java继承
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 8
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-20
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

面向对象编程的核心原则之一——继承——使我们能够重用现有代码或扩展现有类型。


<!-- more -->

## 1.extends（继承）

在Java中，一个类可以继承另一个类和多个接口，而一个接口可以继承其他接口。

让我们从继承的需求开始，转向继承如何与类和接口一起工作。

然后，我们将介绍变量/方法名称和访问修饰符如何影响继承的成员。

最后，我们将看到继承一个类型意味着什么。

## 2.继承的必要性

想象一下，作为汽车制造商，您为客户提供多种车型。尽管不同的车型可能提供不同的功能，如天窗或防弹窗，但它们都包括常见的组件和功能，如发动机和车轮。

**创建一个基本设计并将其扩展到创建其专业版本是有意义的**，而不是从头开始单独设计每个汽车模型。

以类似的方式，通过继承，我们可以创建一个具有基本特征和行为的类，并通过创建继承此基类的类来创建其专用版本。同样，接口可以扩展现有接口。

我们会注意到使用多个术语来指代由另一种类型继承的类型，特别是：

- 基类型也称为超级类型或父类型

- 派生类型被称为扩展、子或子类型

## 3.阶级继承

### 3.1扩展一个类

一个类可以继承另一个类并定义其他成员。

<br/><br/><br/><br/><br/><br/>

让我们从定义基本级汽车开始：

```java
public class Car {
    int wheels;
    String model;
    void start() {
        // Check essential parts
    }
}
```

ArmoredCar类可以通过在 **其声明中使用关键字扩展来继承Car类的成员** ：

```java
public class ArmoredCar extends Car {
    int bulletProofWindows;
    void remoteStartCar() {
	// this vehicle can be started by using a remote control
    }
}
```

我们现在可以说，ArmoredCar类是Car的子类，后者是ArmoredCar的超类。

**Java中的类支持单个继承；ArmoredCar类不能扩展多个类**。

此外，请注意，在没有扩展关键字的情况下，类会隐式继承类java.lang.Object。

<br/><br/><br/><br/><br/><br/>

**子类类从超类类继承非静态保护和公共成员**。此外，如果两个类在同一软件包中，则继承具有默认（包私有）访问权限的成员。

另一方面，类的私有和静态成员不被继承。

### 3.2从子类访问父类成员

要访问继承的属性或方法，我们可以直接使用它们：

```java
public class ArmoredCar extends Car {
    public String registerModel() {
        return model;
    }
}
```

请注意，我们不需要对超类的引用来访问其成员。

## 4.接口继承

### 4.1实现多个接口

**虽然类只能继承一个类，但它们可以实现多个接口**。

想象一下，我们在上一节中定义的装甲车是超级间谍所必需的。因此，汽车制造公司考虑添加飞行和浮动功能：

```java
public interface Floatable {
    void floatOnWater();
}
```

```java
public interface Flyable {
    void fly();
}
```

```java
public class ArmoredCar extends Car implements Floatable, Flyable{
    public void floatOnWater() {
        System.out.println("I can float!");
    }
 
    public void fly() {
        System.out.println("I can fly!");
    }
}
```

在上面的示例中，我们注意到使用关键字 `implements` 从接口继承。

## 5.多重继承的问题

**Java允许使用接口进行多重继承。**


<br/><br/><br/><br/><br/><br/>

在Java 7之前，这不是一个问题。接口只能定义抽象方法，即没有任何实现的方法。因此，如果一个类实现了具有相同方法签名的多个接口，那就不是问题了。实现类最终只有一个方法可以实现。

让我们看看这个简单的方程是如何随着Java 8在接口中引入默认方法而变化的。

**从Java 8开始，接口可以选择为其方法定义默认实现（接口仍然可以定义抽象方法）**。这意味着，如果一个类实现多个接口，这些接口定义了具有相同签名的方法，则子类将继承单独的实现。这听起来很复杂，是不允许的。

**Java不允许继承在单独接口中定义的相同方法的多个实现。**

这里有一个例子:

```java
public interface Floatable {
    default void repair() {
    	System.out.println("Repairing Floatable object");	
    }
}
```

```java
public interface Flyable {
    default void repair() {
    	System.out.println("Repairing Flyable object");	
    }
}
```

```java
public class ArmoredCar extends Car implements Floatable, Flyable {
    // this won't compile
}
```

如果我们确实想实现这两个接口，我们必须覆盖repair()方法。

如果前面示例中的接口定义了具有相同名称的变量，例如持续时间，如果没有带有接口名称的变量名称，我们就无法访问它们：

```java
public interface Floatable {
    int duration = 10;
}
```

```java
public interface Flyable {
    int duration = 20;
}
```

```java
public class ArmoredCar extends Car implements Floatable, Flyable {
 
    public void aMethod() {
    	System.out.println(duration); // won't compile
    	System.out.println(Floatable.duration); // outputs 10
    	System.out.println(Flyable.duration); // outputs 20
    }
}
```


### 4.3扩展其他接口的接口

一个接口可以扩展多个接口。这里有一个例子：

```java
public interface Floatable {
    void floatOnWater();
}
```

```java
interface interface Flyable {
    void fly();
}
```

```java
public interface SpaceTraveller extends Floatable, Flyable {
    void remoteControl();
}
```

接口通过使用关键字扩展来继承其他接口。类使用关键字实现来继承接口。

## 5.继承类型

当一个类继承另一个类或接口时，除了继承其成员外，它还继承其类型。这也适用于继承其他接口的接口。

这是一个非常强大的概念，它允许开发人员对接口（基类或接口）进行编程，而不是对其实现进行编程。

例如，想象一个情况，一个组织维护其员工拥有的汽车清单。当然，所有员工都可能拥有不同的车型。那么，我们如何参考不同的汽车实例呢？解决方案如下：

```java
public class Employee {
    private String name;
    private Car car;
    
    // standard constructor
}
```

由于Car的所有派生类都继承了Car类型，因此可以使用Car类的变量来引用派生类实例：

```java
Employee e1 = new Employee("Shreya", new ArmoredCar());
Employee e2 = new Employee("Paul", new SpaceCar());
Employee e3 = new Employee("Pavni", new BMW());

```


## 6.隐藏的班级成员

### 6.1.隐藏实例成员

如果超类和子类都定义了同名的变量或方法，会发生什么？别担心；我们仍然可以访问他们两个。然而，我们必须向Java明确我们的意图，方法是将关键字this或super作为变量或方法的前缀。

此关键字指的是使用它的实例。超级关键字（似乎很明显）指的是父类实例：

```java
public class ArmoredCar extends Car {
    private String model;
    public String getAValue() {
    	return super.model;   // returns value of model defined in base class Car
    	// return this.model;   // will return value of model defined in ArmoredCar
    	// return model;   // will return value of model defined in ArmoredCar
    }
}
```

许多开发人员使用这个和超级关键字来明确说明他们指的是哪个变量或方法。然而，与所有成员一起使用它们会使我们的代码看起来杂乱无章。


### 6.2.隐藏的静态成员

当我们的基类和子类定义具有相同名称的静态变量和方法时，会发生什么？我们可以像实例变量一样，在派生类中从基类访问静态成员吗？

让我们用一个例子来找出答案：
```java
public class Car {
    public static String msg() {
        return "Car";
    }
}
```

```java
public class ArmoredCar extends Car {
    public static String msg() {
        return super.msg(); // this won't compile.
    }
}
```
不，我们不能。静态成员属于类，不属于实例。因此，我们无法在msg()中使用非静态超级关键字。

由于静态成员属于一个类，我们可以修改前面的调用如下：

```java
return Car.msg();
```

考虑以下示例，其中基类和派生类都定义了具有相同签名的静态方法msg()：

```java
public class Car {
    public static String msg() {
        return "Car";
    }
}
```

```java
public class ArmoredCar extends Car {
    public static String msg() {
        return "ArmoredCar";
    }
}
```

以下是我们如何称呼它们：

```java
Car first = new ArmoredCar();
ArmoredCar second = new ArmoredCar();
```

对于前面的代码，first.msg()将输出“Car”，second.msg()将输出“ArmoredCar”。调用的静态消息取决于用于引用ArmoredCar实例的变量类型。