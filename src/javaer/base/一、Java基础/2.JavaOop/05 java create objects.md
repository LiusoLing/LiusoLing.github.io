---
# 这是文章的标题
title: 05. Java对象初始化
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 5
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-02-21
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

简单地说，我们在使用JVM上的对象之前，必须先初始化它。

本节，我们研究初始化原始类型和对象的各种方法。

<!-- more -->

## 1.声明和初始化

首先

**声明**：是定义变量及其类型和名称的过程。

看一个声明id变量的示例：
```java
int id;
```

**初始化**：就是要分配一个值。

```java
id = 1;
```

这里声明一个稍微复杂的用户类，方便后续演示：
```java
public class User {
    private String name;
    private int id;
    
    // standard constructor, getters, setters,
}
```

## 2.原始类型和引用类型

Java提供了两种类型的数据表示：原始类型和引用类型。在本节中，我们将讨论两者在初始化方面的差异。

Java有八种内置数据类型，称为Java原始类型；这种类型的变量直接保存其值。


<br/><br/><br/><br/><br/><br/>

引用类型保存对对象（类实例）的引用。**与在分配变量的内存中保存其值的原始类型不同，引用不保存它们所引用的对象的值。**

相反，**引用通过存储对象所在的内存地址来指向对象。**

请注意，Java不允许我们发现物理内存地址是什么。因此，我们只能使用引用来引用对象。

让我们看看一个从我们的用户类中声明和初始化引用类型的示例：

```java
@Test
public void whenIntializedWithNew_thenInstanceIsNotNull() {
    User user = new User();
 
    assertThat(user).isNotNull();
}
```

正如我们所看到的，可以使用关键字 `new` 将引用分配给新对象，该关键字负责创建新用户对象。


## 3.创建对象

与原始类型不同，引用类型对象的创建更复杂一些。

`new` 关键字负责通过构造函数为新对象分配内存。

构造函数通常用于初始化表示所创建对象主要属性的实例变量。

如果我们不明确提供构造函数，编译器将创建一个没有参数的默认构造函数，并且只是为对象分配内存。

一个类可以有许多构造函数，只要它们的参数列表不同（过载）。每个不调用同一类中另一个构造函数的构造函数都有对其父构造函数的调用，无论是显式编写的还是由编译器通过super()插入的。

让我们在用户类中添加一个构造函数：

```java
public User(String name, int id) {
    this.name = name;
    this.id = id;
}
```

现在，我们可以使用我们的构造函数创建一个具有其属性初始值的用户对象：

```java
User user = new User("Alice", 1);
```

<br/><br/><br/><br/><br/><br/>

## 4.可变范围


### 4.1实例和类变量

实例和类变量不需要我们初始化它们。一旦我们声明这些变量，它们就会被赋予一个默认值：

现在，让我们尝试定义一些实例和类相关变量，并测试它们是否有默认值：
```java
@Test
public void whenValuesAreNotInitialized_thenUserNameAndIdReturnDefault() {
    User user = new User();
 
    assertThat(user.getName()).isNull();
    assertThat(user.getId() == 0);
}
```

### 4.2局部变量

局部变量在使用前必须初始化，因为它们没有默认值，编译器不会让我们使用未初始化的值。

例如，以下代码生成编译器错误：
```java
public void print(){
    int i;
    System.out.println(i);
}
```


## 5.final关键字

`final` 关键字意味着该字段的值在初始化后无法再更改。通过这种方式，我们可以在Java中定义常量。

<br/><br/><br/><br/><br/><br/>

让我们在用户类中添加一个常量：

```java
private static final int YEAR = 2000;
```

常量必须在声明时或在构造函数中初始化。


## 6.Java中的初始化器

在Java中，**初始化器是一个代码块，它没有关联的名称或数据类型**，并被放置在任何方法、构造函数或其他代码块之外。

Java提供两种类型的初始化器，静态初始化器和实例初始化器。让我们看看如何使用它们中的每一个。

### 6.1实例初始化器

我们可以使用这些来初始化实例变量。

为了演示，我们将使用用户类中的实例初始化器为用户ID提供一个值：

```java
{
    id = 0;
}
```

### 6.2静态初始化块

静态初始化器或静态块是用于初始化静态字段的代码块。换句话说，这是一个标有 `static` 关键字静态的简单初始化器：

```java
private static String forum;
static {
    forum = "Java";
}
```

## 7.初始化顺序

在编写初始化不同类型字段的代码时，我们必须注意初始化的顺序。

在Java中，初始化语句的顺序如下：

<br/><br/><br/><br/>

- 静态变量和静态初始化器按顺序排列

- 实例变量和实例初始化器按顺序排列

- 构造器

## 8.对象声明周期

现在我们已经学会了如何声明和初始化对象，让我们来了解当对象不使用时会发生什么。

与其他我们必须担心对象销毁的语言不同，Java通过其垃圾收集器处理过时的对象。

**Java中的所有对象都存储在我们程序的堆内存中**。事实上，该堆代表分配给我们的Java应用程序的大量未使用的内存池。

另一方面，**垃圾收集器是一个Java程序**，通过删除无法再访问的对象来**管理自动内存**。

要使Java对象变得无法到达，它必须遇到以下情况之一：

- 该对象不再有任何指向它的引用。

- 所有指向对象的引用都超出范围。

总之，对象首先从类中创建，通常使用关键字new。然后，该物体过着它的生活，并为我们提供了访问其方法和领域的机会。

最后，当不再需要它时，垃圾收集器会销毁它。

## 9.创建对象的其他方法

在本节中，我们将**简要了解创建对象的新关键字以外的方法，并学习如何应用它们，特别是反射、克隆和序列化。**

<br/><br/><br/><br/>

**反射是一种机制，我们可以用它来在运行时检查类、字段和方法**。以下是使用反射创建用户对象的示例：

```java
@Test
public void whenInitializedWithReflection_thenInstanceIsNotNull() 
  throws Exception {
    User user = User.class.getConstructor(String.class, int.class)
      .newInstance("Alice", 2);
 
    assertThat(user).isNotNull();
}
```

在这种情况下，我们使用反射来查找并调用用户类的构造函数。

下一个方法，**克隆，是创建对象的精确副本的一种方法**。为此，我们的用户类必须实现可克隆接口：

```java
public class User implements Cloneable { //... }
```

现在，我们可以使用clone()方法创建一个新的clonedUser对象，该对象的属性值与用户对象相同：

```java
@Test
public void whenCopiedWithClone_thenExactMatchIsCreated() 
  throws CloneNotSupportedException {
    User user = new User("Alice", 3);
    User clonedUser = (User) user.clone();
 
    assertThat(clonedUser).isEqualTo(user);
}
```

**我们也可以使用sun.misc.Unsafe类为对象分配内存，而无需调用构造函数**：

```java
User u = (User) unsafeInstance.allocateInstance(User.class);
```

