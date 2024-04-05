---
# 这是文章的标题
title: 07. Java接口
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 7
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-19
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

在本教程中，我们将讨论Java中的接口。我们还将看到Java如何使用它们来实现多态性和多重继承。

<!-- more -->

## 1.什么是inteface(接口)

在Java中，接口是一种抽象类型，包含方法和常量变量的集合。它是Java的核心概念之一，**用于实现抽象、多态性和多重继承**。

让我们看看Java中接口的简单示例：

```java
public interface Electronic {

    // 常量变量
    String LED = "LED";

    // 抽象方法
    int getElectricityUse();

    // 静态方法
    static boolean isEnergyEfficient(String electtronicType) {
        if (electtronicType.equals(LED)) {
            return true;
        }
        return false;
    }

    // 默认方法
    default void printDescription() {
        System.out.println("Electronic Description");
    }
}

```

我们可以使用 `implements` 关键字在 Java 类中实现接口。

接下来，让我们创建一个计算机类，实现我们刚刚创建的电子接口：

<br/><br/><br/><br/><br/><br/>

```java
public class Computer implements Electronic {

    @Override
    public int getElectricityUse() {
        return 1000;
    }
}
```


## 2.创建接口的限制

接口中，我们允许使用：

- 常量变量

- 抽象方法

- 静态方法

- 默认方法

并有以下限制：

> - 不能直接实例化接口
> - 接口可以是空的，里面没有方法或变量
> - 我们不能在接口定义中使用最后一个词，因为它会导致编译器错误
> - 所有接口声明都应具有公共或默认访问修饰符；抽象修饰符将由编译器自动添加
> - 接口方法无法保护或最终
> - 在Java 9之前，接口方法不能是私有的；然而，Java 9引入了在接口中定义私有方法的可能性
> - 根据定义，接口变量是公共的、静态的和最终的；我们不允许更改它们的可见性


## 3.接口的作用

### 3.1行为功能

我们使用接口来添加某些行为功能，这些功能可以由不相关的类使用。例如，`Comparable`、`Comparator` 和 `Cloneable` 是Java接口，可以由不相关的类实现。

以下是用于比较员工类两个实例的比较器接口示例：

```java
public class Employee {

    private double salary;

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}

public class EmployeeSalaryComparator implements Comparator<Employee> {

    @Override
    public int compare(Employee employeeA, Employee employeeB) {
        if (employeeA.getSalary() < employeeB.getSalary()) {
            return -1;
        } else if (employeeA.getSalary() > employeeB.getSalary()) { 
            return 1;
        } else {
            return 0;
        }
    }
}
```

### 3.2多重继承

Java类只支持单继承。然而，通过使用接口，我们也能够间接实现多继承。

<br/><br/><br/><br/><br/><br/>

例如，在下面的示例中，我们注意到Car类实现了Fly和Transform接口。通过这样做，它继承了飞行和转换的方法：

```java
public interface Transform {
    void transform();
}

public interface Fly {
    void fly();
}

public class Car implements Fly, Transform {

    @Override
    public void fly() {
        System.out.println("I can Fly!!");
    }

    @Override
    public void transform() {
        System.out.println("I can Transform!!");
    }
}

```

### 3.3多态性

问这个问题开始：**什么是多态性**？它是对象在运行时采取不同形式的能力。更具体地说，是执行与运行时特定对象类型相关的覆盖方法。

**在Java中，我们可以使用接口实现多态性**。例如，形状界面可以采取不同的形式——它可以是圆形或正方形。

让我们从定义形状界面开始：
```java
public interface Shape {
    String name();
}
```

<br/><br/><br/><br/>

现在让我们创建Circle类：
```java
public class Circle implements Shape {

    @Override
    public String name() {
        return "Circle";
    }
}
```

还有Square类：

```java
public class Square implements Shape {

    @Override
    public String name() {
        return "Square";
    }
}
```

最后，是时候使用我们的Shape接口及其实现来看到多态性了。

让我们实例化一些形状对象，将它们添加到列表中，最后在循环中打印它们的名称：

```java
List<Shape> shapes = new ArrayList<>();
Shape circleShape = new Circle();
Shape squareShape = new Square();

shapes.add(circleShape);
shapes.add(squareShape);

for (Shape shape : shapes) {
    System.out.println(shape.name());
}
```

## 4.默认方法

Java 7及以下版本中的传统接口不提供向后兼容性。

这意味着，**如果您有用Java 7或更早版本编写的遗留代码，并且您决定向现有接口添加抽象方法，那么所有实现该接口的类都必须覆盖新的抽象方法。否则，代码将中断。**

Java 8通过引入可选且可以在接口级别实现的 **默认方法解决了这个问题。**

## 5.接口继承规则

为了通过接口实现多重继承，我们必须记住一些规则。

### 5.1扩展另一个接口的接口

当一个接口扩展另一个接口时，它会继承该接口的所有抽象方法。让我们从创建两个界面开始，HasColor和Shape：

```java
public interface HasColor {
    String getColor();
}

public interface Box extends HasColor {
    int getHeight()
}
```

在上面的示例中，Box使用关键字扩展从HasColor继承。通过这样做，Box接口继承了getColor。因此，Box界面现在有两种方法：getColor和getHeight。


<br/><br/><br/><br/><br/><br/>

### 5.2实现接口的抽象类

当抽象类实现接口时，它会继承其所有抽象和默认方法。让我们考虑Transform接口和实现它的抽象类Vicle：

```java
public interface Transform {
    
    void transform();
    default void printSpecs(){
        System.out.println("Transform Specification");
    }
}

public abstract class Vehicle implements Transform {}
```

Vehicle类继承了两种方法：抽象变换方法和默认的printSpecs方法。

## 6.功能接口

Java自早期以来就有许多功能接口，例如 `Comparable（自Java 1.2以来）` 和 `Runnable（自Java 1.0以来）`。

Java 8引入了新的功能接口，如谓词、消费者和函数。