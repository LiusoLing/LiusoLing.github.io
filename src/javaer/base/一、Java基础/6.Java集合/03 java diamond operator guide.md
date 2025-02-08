---
# 这是文章的标题
title: 03. Java菱形运算符指南 
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-03
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - list
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

了解菱形运算符，以及泛型和 Collection API 演变。

<!-- more -->

## 1.原始类型

在 Java 1.5 之前，Collections API 仅支持原始类型——在构造集合时无法参数化类型参数：

```java
List cars = new ArrayList();
cars.add(new Object());
cars.add("car");
cars.add(new Integer(1));
```
这导致集合允许添加任何类型，运行时会出现潜在的强制转换异常。

## 2.泛型

在 Java 1.5 中，引入了泛型——这允许我们在声明和构造对象时参数化类的类型参数，包括集合 API 中的类：
```java
List<String> cars = new ArrayList<String>();
```
我们必须在构造函数中指定参数化类型， 不指定的话，它也会提示我们一条警告消息：

```java
List<String> generics = new ArrayList<String>();
List<String> raws = new ArrayList();

ArrayList is a raw type. References to generic type ArrayList<E> should be parameterized
```

## 3.菱形运算符

在 Java 1.7 中引入 – 在使用泛型时，它增加了类型推断并减少了赋值中的冗长说明：

 ```java
List<String> cars = new ArrayList<>();
 ```

Java 1.7 编译器的类型推理功能确定与调用匹配的最合适的构造函数声明。

以下接口和类层次结构分别处理车辆和引擎：

```java
public interface Engine { }
public class Diesel implements Engine { }
public interface Vehicle<T extends Engine> { }
public class Car<T extends Engine> implements Vehicle<T> { }
```

创建一个 Car的新实例是这样：
```java
Car<Diesel> myCar = new Car<>();
```

在内部，编译器知道 Diesel 实现了 Engine 接口，然后能够通过推断类型来确定合适的构造函数。

简单地说，菱形运算符向编译器添加了类型推断功能，并减少了泛型引入的赋值的冗长解释说明。