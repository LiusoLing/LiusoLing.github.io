---
# 这是文章的标题
title: 10. Java方法的重载和重写
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 10
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-22
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

重写和重载是Java编程语言的关键概念。让我们一探究竟


<!-- more -->

## 1.方法重载

**方法重载是一种强大的机制，允许我们定义有凝聚力的类API。**

为了更好地理解为什么方法重载是一个如此有价值的功能，让我们看看一个简单的例子。

假设我们编写了一个天真的效用类，实现了两个数字、三个数字相乘的不同方法。

如果我们给方法提供了误导性或模棱两可的名称，如乘法2（），乘法3（），乘法4（），那么这将是一个设计糟糕的类API。这就是方法重载发挥作用的地方。

<br/><br/><br/><br/><br/><br/>

**简而言之，我们可以以两种不同的方式实现方法重载：**

- 实现两个或多个具有相同名称但参数数量不同的方法

- 实现两个或多个具有相同名称但接受不同类型参数的方法

### 1.1不同数量的重载

简而言之，乘数类展示了如何通过简单地定义两个接受不同数量参数的实现来重载乘法（）方法：

```java
public class Multiplier {
    
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public int multiply(int a, int b, int c) {
        return a * b * c;
    }
}
```

### 1.2不同类型的重载

同样，我们可以通过让乘法（）接受不同类型的参数来重载乘法：

```java
public class Multiplier {
    
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public double multiply(double a, double b) {
        return a * b;
    }
}

```

此外，用两种方法重载定义乘数类是合法的：

```java
public class Multiplier {
    
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public int multiply(int a, int b, int c) {
        return a * b * c;
    }
    
    public double multiply(double a, double b) {
        return a * b;
    }
}

```
然而，值得注意的是，**不可能有两个只在返回类型上不同的方法实现。**

为了了解原因-让我们考虑以下示例：

```java
public int multiply(int a, int b) { 
    return a * b; 
}
 
public double multiply(int a, int b) { 
    return a * b; 
}
```
在这种情况下，**代码根本无法编译，因为方法调用模棱两可** ——编译器不知道要调用哪个实现的multi()。


### 1.3类型提升

方法重载提供的一个整洁的功能是所谓的 `类型提升` ，又称 `拓宽原始转换`。

简单地说，当传递给重载方法的参数类型与特定方法实现之间不匹配时，一个给定类型被隐式提升为另一个类型。

为了更清楚地了解类型推广的工作原理，请考虑以下multiplet()方法的实现：

<br/><br/><br/><br/><br/><br/>

```java
public double multiply(int a, long b) {
    return a * b;
}

public int multiply(int a, int b, int c) {
    return a * b * c;
}

```

现在，调用具有两个int参数的方法将导致第二个参数被提升到long，因为在这种情况下，没有具有两个int参数的方法的匹配实现。

让我们看看一个快速单元测试来演示类型推广：

```java
@Test
public void whenCalledMultiplyAndNoMatching_thenTypePromotion() {
    assertThat(multiplier.multiply(10, 10)).isEqualTo(100.0);
}
```

相反，如果我们用匹配的实现调用该方法，则不会进行类型提升：

```java
@Test
public void whenCalledMultiplyAndMatching_thenNoTypePromotion() {
    assertThat(multiplier.multiply(10, 10, 10)).isEqualTo(1000);
}
```
只能向上提升。

### 1.4静态绑定

将特定方法调用与方法主体相关联的能力被称为绑定。

在方法重载的情况下，绑定在编译时静态执行，因此称为静态绑定。

编译器只需检查方法的签名，就可以在编译时有效地设置绑定。


## 2.方法重写

**方法重写允许我们在子类中为基类中定义的方法提供细粒度的实现。**

<br/><br/><br/><br/><br/><br/>

虽然方法重写是一个强大的功能——考虑到这是使用继承的逻辑结果，这是OOP的最大支柱之一——但应在每个用例的基础上仔细分析何时何地使用它。

现在让我们看看如何通过创建简单的、基于继承的（“is-a”）关系来使用方法覆盖。

这是基类：

```java
public class Vehicle {
    
    public String accelerate(long mph) {
        return "The vehicle accelerates at : " + mph + " MPH.";
    }
    
    public String stop() {
        return "The vehicle has stopped.";
    }
    
    public String run() {
        return "The vehicle is running.";
    }
}
```


这里有一个人为的子类：

```java
public class Car extends Vehicle {

    @Override
    public String accelerate(long mph) {
        return "The car accelerates at : " + mph + " MPH.";
    }
}
```

在上面的层次结构中，我们只是覆盖了accelerate()方法，以便为子类型Car提供更精细的实现。

在这里，很明显，**如果应用程序使用Hicle类的实例，那么它也可以与Car的实例一起工作**，因为加速（）方法的两个实现具有相同的签名和相同的返回类型。

让我们写几个单元测试来检查车辆和汽车类别：

```java
@Test
public void whenCalledAccelerate_thenOneAssertion() {
    assertThat(vehicle.accelerate(100))
      .isEqualTo("The vehicle accelerates at : 100 MPH.");
}
    
@Test
public void whenCalledRun_thenOneAssertion() {
    assertThat(vehicle.run())
      .isEqualTo("The vehicle is running.");
}
    
@Test
public void whenCalledStop_thenOneAssertion() {
    assertThat(vehicle.stop())
      .isEqualTo("The vehicle has stopped.");
}

@Test
public void whenCalledAccelerate_thenOneAssertion() {
    assertThat(car.accelerate(80))
      .isEqualTo("The car accelerates at : 80 MPH.");
}
    
@Test
public void whenCalledRun_thenOneAssertion() {
    assertThat(car.run())
      .isEqualTo("The vehicle is running.");
}
    
@Test
public void whenCalledStop_thenOneAssertion() {
    assertThat(car.stop())
      .isEqualTo("The vehicle has stopped.");
}

```

现在，让我们看看一些单元测试，这些测试显示了未被覆盖的run()和stop()方法如何为汽车和车辆返回等值：


```java
@Test
public void givenVehicleCarInstances_whenCalledRun_thenEqual() {
    assertThat(vehicle.run()).isEqualTo(car.run());
}
 
@Test
public void givenVehicleCarInstances_whenCalledStop_thenEqual() {
   assertThat(vehicle.stop()).isEqualTo(car.stop());
}
```

在我们的案例中，我们可以访问两个类的源代码，因此我们可以清楚地看到，在基本车辆实例上调用 accelerate()方法，并在汽车实例上调用 accelerate()，将为同一参数返回不同的值。

<br/><br/><br/><br/><br/><br/>

因此，以下测试表明，对于Car的实例，调用了重写方法：

```java
@Test
public void whenCalledAccelerateWithSameArgument_thenNotEqual() {
    assertThat(vehicle.accelerate(100)).isNotEqualTo(car.accelerate(100));
}
```


### 2.1类型可替代性

OOP的一个核心原则是类型可替代性，这与利斯科夫替代原则（LSP）密切相关。

简单地说，LSP指出，**如果一个应用程序使用给定的基类型，那么它也应该使用其任何子类型**。这样，类型可替代性就得到了妥善保留。

**方法重写的最大问题是，派生类中的一些特定方法实现可能不完全符合LSP，因此无法保留类型可替代性。**

当然，制作一个重写的方法来接受不同类型的参数并返回不同的类型是有效的，但要完全遵守这些规则：

- 如果基类中的方法采用给定类型的参数，则重写方法应采用相同的类型或超类型（又称逆变量方法参数）

- 如果基类中的方法返回void，重写的方法应返回void

- 如果基类中的方法返回一个原语，则重写方法应返回相同的原语

- 如果基类中的方法返回特定类型，重写方法应返回相同的类型或子类型（又叫协变返回类型）

- 如果基类中的方法抛出异常，重写方法必须抛出相同的异常或基类异常的子类型

### 2.2动态绑定

考虑到方法重写只能通过继承来实现，其中存在基类型和子类型的层次结构，编译器无法在编译时确定要调用什么方法，因为基类和子类都定义了相同的方法。

因此，编译器需要检查对象的类型，以了解应该调用什么方法。

由于这种检查发生在运行时，方法重写是动态绑定的典型例子。



