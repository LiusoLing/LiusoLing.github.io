---
# 这是文章的标题
title: 01. Java数组指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-07-19
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - array
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

在本教程中，我们将深入研究Java语言的一个核心概念——数组。

我们将首先看看什么是数组，然后如何使用它们；总的来说，我们将介绍如何：

- 开始使用数组
- 读写数组元素
- 在数组上循环
- 将数组转换为其他对象，如列表或流
- 排序、搜索和组合数组

<!-- more -->


## 1.什么是数组

首先，我们需要定义什么是数组？根据Java文档，**数组是包含固定数量的相同类型值的对象。**数组的元素是索引的，这意味着我们可以用数字（称为索引）访问它们。

我们可以将数组视为Excel单元格的编号列表，每个单元格都是一个包含值的变量。在Java中，编号从0开始。

有原始类型数组和对象类型数组。这意味着我们可以使用int、float、boolean...的数组，也可以使用String、Object和自定义类型的数组。

以下是一个简化的数组UML类图，通过它，我们可以看出类之间的关系：

```class
Object <|-- Cloneable
Object <|-- Class
ObjectArray <|-- Object
CloneableArray <|-- Cloneable
Serializable <|-- ObjectArray
Serializable <|-- CloneableArray

class Object {
  +equals(Object obj): boolean
  +getClass(): Class<?>
  +hashCode(): int
  +toString(): String
  #wait(): void
  #wait(long timeout): void
  #wait(long timeout, int nanos): void
  #notify(): void
  #notifyAll(): void
}

class Cloneable {
  #clone(): Object
}

class Class {
  +getName(): String
  +getSimpleName(): String
}

class ObjectArray {
  +length: int
}

class CloneableArray {
  +length: int
}

class Serializable {
}
```

从上可以看出：

- 所有类都是 `Object` 的子类，因为 `Object` 是所有类的根类。
- 数组类可以实现 `Cloneable` 和 `Serializable` 接口。
- `ObjectArray` 和 `CloneableArray` 分别表示了 `普通对象数组` 和 `实现了Cloneable接口的对象数组`。
- 数组类继承了`Object`，并且具有一个`length`属性表示数组的长度。

::: tip
`ObjectArray` 根据数据结构特点，可以是不同的数组，比如可以是 `ArrayList`、`ArraySet`。

`CloneableArray` 也一样。
:::

## 2.设置一个数组

既然数组已经定义清楚了，让我们深入了解它们的用法。

让我们先进行声明和初始化。



<br/><br/><br/><br/>


### 2.1 声明数组

我们将从声明开始。在Java中声明数组有两种方法：

```java
int[] anArray;
```

或者：
```java
int anOtherArray[];
```
**前者比后者使用得更广泛。**


### 2.2 初始化

现在让我们看看如何初始化数组。同样，有多种方法可以初始化数组。

让我们从一个简单的方法开始：

```java
int[] anArray = new int[10];
```

通过使用这种方法，我们初始化了一个由十个int元素组成的数组。请注意，我们需要指定数组的大小。

使用此方法时，**我们将每个元素初始化为其默认值，此处为0。初始化Object数组时，元素默认为null**。

我们现在将看到另一种方法，让我们有可能在创建数组时直接为数组设置值：


```java
int[] anArray = new int[] {1, 2, 3, 4, 5};
```

在这里，我们初始化了一个包含数字1到5的五个元素数组。使用此方法时，我们不需要指定数组的长度，而是在大括号之间直接声明的元素数。




<br/><br/><br/><br/>

## 3.数组的长度
**数组的长度表示数组中的元素数，创建后，长度是固定的，无法更改。**

Java 提供了可用于确定数组长度的内置属性 length。此属性适用于所有数组类型，返回数组中的元素数：
```java
int[] anArray = new int[] { 1, 2, 3, 4, 5 };
System.out.println("anArray's length: " + anArray.length);

anArray's length: 5
```

除了使用 length 属性来确定数组的大小外，我们还可以使用 java.lang.reflect.Array 类中的 Array.getLength（） 方法： 
```java
System.out.println("[Array.getLength()] anArray's length: " + Array.getLength(anArray));
```

Array.getLength（） 接受 Object type 中的参数。它在通用或反射上下文中处理数组的情况下很有用，例如当我们在编译时没有数组类型时。

看个例子：
```java
Object arrayAsObj = anArray;
System.out.println("the array Object (anArray) 's length: " + Array.getLength(arrayAsObj));

//output:
the array Object (anArray) 's length: 5 
``` 

**Array.getLength（） 允许我们确定任何数组对象的长度，而无需将其转换为特定类型。**


## 4.访问元素

现在让我们看看如何访问数组的元素。我们可以通过要求数组的索引位置来实现这一点。

例如，这个小代码片段将打印10到控制台：

```java
anArray[0] = 10;
System.out.println(anArray[0]);
```

注意我们如何使用 index 来访问数组单元。**括号之间的数字是我们想要访问的数组的特定位置**。

访问单元格时，如果传递的索引为负数或超过最后一个单元格，Java将抛出 `ArrayIndexOutOfBoundException`。

所以我们应该小心，**不要使用负索引，或大于或等于数组大小的索引访问元素**。


## 4.迭代数组

逐个访问元素可能很有用，但我们可能想通过数组进行遍历。让我们看看如何做到这一点。
<br/><br/><br/><br/>

第一种方法是使用for循环：

```java
int[] anArray = new int[] {1, 2, 3, 4, 5};
for (int i = 0; i < anArray.length; i++) {
    System.out.println(anArray[i]);
}
```

这应该将数字1到5打印到控制台。正如我们所看到的，我们利用了**长度属性。这是一个公共属性，给我们数组的大小**。

当然，可以使用其他循环机制，如while或do while。但是，对于Java集合，可以使用foreach循环在数组上循环：

```java
int[] anArray = new int[] {1, 2, 3, 4, 5};
for (int element : anArray) {
    System.out.println(element);
}
```
这是for的增强语法糖，适用于不需要修改数组、不需要index来做其他事情的情况。


## 5.变量

Java源码中有 varargs 用于将任意数量的参数传递给方法这样的用法：


```java
void varargsMethod(String... varargs) {}
```

此方法可以传递从 0 到任意数量的 String 参数。
这里我们必须知道的是，在方法体中，varargs 参数会变成一个数组。我们也可以直接将数组作为参数传递。
让我们看看如何重用上面声明的示例方法：

```java
String[] anArray = new String[] {"Milk", "Tomato", "Chips"};
varargsMethod(anArray);
```


## 6.将数组转为集合

数组很好，当我们有时候处理集合会更方便，那如何将数组变成集合呢？

最无脑的方法是，创建一个空列表，然后迭代数组时填充元素到空列表中：

```java
int[] anArray = new int[] {1, 2, 3, 4, 5};

List<Integer> aList = new ArrayList<>();
for (int element : anArray) {
    aList.add(element);
}
```

但是还有另一种更简洁的方法：
```java
Integer[] anArray = new Integer[] {1, 2, 3, 4, 5};
List<Integer> aList = Arrays.asList(anArray);
```

静态方法 Arrays.asList 采用 varargs 参数，并使用传递的值创建一个列表。不过这种方法有一些缺点：
- 不能使用基本数据类型的数组
- 不能在创建的列表中添加或删除元素，会抛出 UnsupportedOerationException


## 7.数组到流

从Java8开始，数组可以使用 stream API，Java提供了相关方法：

```java
String[] anArray = new String[] {"Milk", "Tomato", "Chips"};
Stream<String> aStream = Arrays.stream(anArray);
Stream<String> subStream = Arrays.stream(anArray, 1, 3);
```

当把Object数组传递给该方法时，它将返回匹配类型的 stream。

## 8.数组排序

如何对数组进行排序，即按照特定顺序重新排列其元素。

**Arrays类为我们提供了 sort 方法。**

```java
int[] anArray = new int[] {5, 2, 1, 4, 8};
Arrays.sort(anArray); // anArray is now {1, 2, 4, 5, 8}

String[] yetAnotherArray = new String[] {"A", "E", "Z", "B", "C"};
Arrays.sort(yetAnotherArray, 1, 3, 
  Comparator.comparing(String::toString).reversed()); // yetAnotherArray is now {"A", "Z", "E", "B", "C"}
```


## 9.在数组中搜索

搜素数组最简单的方法，就是遍历数组并在数组元素中搜索要找的元素：
```java
int[] anArray = new int[] {5, 2, 1, 4, 8};
for (int i = 0; i < anArray.length; i++) {
    if (anArray[i] == 4) {
        System.out.println("Found at index " + i);
        break;
    }
}
```

如果是一个有序的排序数组，我们可以使用另一种搜索方式，二叉搜索。

不过，Java提供了现成的API可以使用，我们可以利用 **Arrays.binarySearch 方法**

让我们看一个二分搜索方法用法的示例：

```java
int[] anArray = new int[] {1, 2, 3, 4, 5};
int index = Arrays.binarySearch(anArray, 4);
System.out.println("Found at index " + index);
```

## 10.连接数组

如何连接两个数组。这个想法是创建一个数组，其长度是要连接的两个数组之和。之后，我们必须添加第一个的元素，然后添加第二个的元素：

```java
int[] anArray = new int[] {5, 2, 1, 4, 8};
int[] anotherArray = new int[] {10, 4, 9, 11, 2};

int[] resultArray = new int[anArray.length + anotherArray.length];
for (int i = 0; i < resultArray.length; i++) {
    resultArray[i] = (i < anArray.length ? anArray[i] : anotherArray[i - anArray.length]);
}
```

我们可以使用 Arrays.setAll 方法来避免编写循环：

```java
int[] anArray = new int[] {5, 2, 1, 4, 8};
int[] anotherArray = new int[] {10, 4, 9, 11, 2};

int[] resultArray = new int[anArray.length + anotherArray.length];
Arrays.setAll(resultArray, i -> (i < anArray.length ? anArray[i] : anotherArray[i - anArray.length]));
```
