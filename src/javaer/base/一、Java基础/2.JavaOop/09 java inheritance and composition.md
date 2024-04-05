---
# 这是文章的标题
title: 09. Java中的继承和组合
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 9
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-21
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

继承和组合——以及抽象、封装和多态——是面向对象编程（OOP）的基石。

在本教程中，我们将介绍继承和组合的基础知识，我们将重点关注发现这两种关系之间的差异。

<!-- more -->

## 1.继承的基础知识

**继承是一种强大但过度使用和滥用的机制。**

简单地说，通过继承，基类（又称基类型）定义了给定类型常见的状态和行为，并允许子类（又称子类型）提供该状态和行为的专门版本。

为了清楚地了解如何处理继承，让我们创建一个例子：

一个基类 `Person`，它为一个人定义了公共字段和方法，而子类 `Waitress` 和 `Actress` 则提供额外的、细粒度的方法实现。

<br/><br/><br/><br/><br/><br/>

这是Person类：

```java
public class Person {
    private final String name;

    // other fields, standard constructors, getters
}
```

这些是子类：

```java
public class Waitress extends Person {

    public String serveStarter(String starter) {
        return "Serving a " + starter;
    }
    
    // additional methods/constructors
}
```


```java
public class Actress extends Person {
    
    public String readScript(String movie) {
        return "Reading the script of " + movie;
    } 
    
    // additional methods/constructors
}
```

此外，让我们创建一个单元测试，以验证女服务员和女演员类的实例也是Person的实例，从而表明“is-a”条件在类型级别上得到满足：

```java
@Test
public void givenWaitressInstance_whenCheckedType_thenIsInstanceOfPerson() {
    assertThat(new Waitress("Mary", "mary@domain.com", 22)).isInstanceOf(Person.class);
}
    
@Test
public void givenActressInstance_whenCheckedType_thenIsInstanceOfPerson() {
    assertThat(new Actress("Susan", "susan@domain.com", 30)).isInstanceOf(Person.class);
}
```
**在这里强调继承的语义方面很重要**。除了重用 Person 类的实现外，

我们还在基本类型 `Person` 和子类型 `Waitress` 和 `Actress` 之间建立了定义明确的“is-a”关系。

女服务员和女演员实际上是人。

这可能会让我们产生疑问：在哪些用例中继承是正确的方法？

<br/><br/><br/><br/><br/><br/>

**如果子类型满足“is-a”条件，并主要在类层次结构下提供加法功能，那么继承就是你要的。**

当然，只要重写的方法保留了Liskov替换原则所推动的基本类型/子类型可替代性，就可以重写方法。

此外，我们应该记住，**子类型继承了基类型的API**，在某些情况下，这可能会过度或只是不可取。

否则，我们应该使用构图来代替。


## 2.设计模式中的继承

虽然共识是，我们应该尽可能地支持组合而不是继承，但有一些典型的用例表明继承占有一席之地。

### 2.1图层超类型模式

在这种情况下，**我们使用继承在每层的基础上将公共代码移动到基类（超类型）。**

以下是此模式在域层中的基本实现：


```java
public class Entity {
    
    protected long id;
    
    // setters
}
```


```java
public class User extends Entity {
    
    // additional fields and methods   
}
```
我们可以将相同的方法应用于系统中的其他层，例如服务和持久性层。

### 2.2模板方法模式

在模板方法模式中，**我们可以使用基类来定义算法的不变部分，然后在子类中实现变体部分：**

```java
public abstract class ComputerBuilder {
    
    public final Computer buildComputer() {
        addProcessor();
        addMemory();
    }
    
    public abstract void addProcessor();
    
    public abstract void addMemory();
}

```

```java
public class StandardComputerBuilder extends ComputerBuilder {

    @Override
    public void addProcessor() {
        // method implementation
    }
    
    @Override
    public void addMemory() {
        // method implementation
    }
}
```

## 3.组合的基础知识

组合是OOP为重用实现提供的另一种机制。

简而言之，**组合允许我们对由其他对象组成的对象进行建模，** 从而定义它们之间的“has-a”关系。

此外，**组合是最强的关联形式**，这意味着**当一个对象被破坏时，组成或包含一个对象的对象也会被销毁**。

为了更好地了解构图的工作原理，让我们假设我们需要处理代表计算机的对象。

<br/><br/><br/><br/><br/><br/>

计算机由不同的部分组成，包括微处理器、内存、声卡等，因此我们可以将计算机及其每个部分建模为单独的类。

以下是计算机类的简单实现情况：

```java
public class Computer {

    private Processor processor;
    private Memory memory;
    private SoundCard soundCard;

    // standard getters/setters/constructors
    
    public Optional<SoundCard> getSoundCard() {
        return Optional.ofNullable(soundCard);
    }
}
```

以下类模拟了微处理器、内存和声卡（为了简洁起见，省略了接口）：
```java
public class StandardProcessor implements Processor {

    private String model;
    
    // standard getters/setters
}
```

```java
public class StandardMemory implements Memory {
    
    private String brand;
    private String size;
    
    // standard constructors, getters, toString
}

```

```java
public class StandardSoundCard implements SoundCard {
    
    private String brand;

    // standard constructors, getters, toString
}

```

**在每个有可能在给定类和其他类之间建立语义正确的“has-a”关系的场景中，组合是正确的选择。**

在上述示例中，计算机通过对其部件建模的类满足“has-a”条件。

还值得注意的是，在这种情况下，**包含的计算机对象拥有所包含对象的所有权，当且仅当这些对象无法在另一个计算机对象中重复使用。** 

如果可以的话，我们将使用聚合，而不是合成，其中不隐含所有权。


## 4.没有抽象的构图

我们可以通过硬编码计算机类的依赖项来定义合成关系，而不是在构造函数中声明它们：


```java
public class Computer {

    private StandardProcessor processor = new StandardProcessor("Intel I3");
    private StandardMemory memory = new StandardMemory("Kingston", "1TB");
    
    // additional fields / methods
}
```

显而易见，**这将是一个刚性、紧密耦合的设计，因为我们将使计算机强烈依赖处理器和内存的特定实现。**

我们不会利用接口和依赖注入提供的抽象水平。

通过基于接口的初始设计，我们得到了一个松散耦合的设计，这也更容易测试。
