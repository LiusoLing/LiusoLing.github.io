---
# 这是文章的标题
title: 05. Java泛型指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 5
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

JDK 5.0 引入了 Java 泛型，旨在减少错误并在类型上添加额外的抽象层。

<!-- more -->

## 1.泛型的需求
让我们想象一个场景，我们想在 Java 中创建一个列表来存储 Integer。

```java
List list = new LinkedList();
list.add(new Integer(1)); 
Integer i = list.iterator().next();
```

令人惊讶的是，编译器会抱怨最后一行。它不知道返回什么数据类型，编译器将需要显式强制转换。
```java
Integer i = (Integer) list.iterator.next();
```

没有 `约定` 可以保证列表的返回类型是 Integer。定义的列表可以包含任何对象。

我们只知道我们正在通过检查上下文来检索列表。在查看类型时，它只能保证它是一个 `Object`，因此需要显式强制转换以确保类型是安全的。

这种转换可能很烦人 — 我们知道此列表中的数据类型是 Integer。强制转换也使我们的代码变得混乱。如果程序员在显式强制转换中犯了错误，则可能会导致与类型相关的运行时错误。

如果程序员可以表达他们使用特定类型的意图，并且编译器确保了这些类型的正确性，那将容易得多。这是泛型背后的核心思想。

```java
List<Integer> list = new LinkedList<>();
```
通过添加包含该类型的菱形运算符 <>，我们将此列表的特化范围缩小到仅 Integer 类型。换句话说，我们指定列表中包含的类型。编译器可以在编译时强制执行该类型。

## 2.泛型方法

我们使用单个方法声明编写泛型方法，并且可以使用不同类型的参数调用它们。编译器将确保我们使用的任何类型的正确性。

以下是泛型方法的使用姿势：
- 泛型方法在方法声明的返回类型之前有一个类型参数；
- 类型参数可以是有界的；
- 泛型方法可以具有不同的类型参数，在方法签名中用逗号分隔；
- 泛型方法的方法主体与普通方法类似。

来看一个通用方法，将数组转换为列表：

```java
public <T> List<T> fromArrayToList(T[] a) {   
    return Arrays.stream(a).collect(Collectors.toList());
}
```

方法签名中的 <T> 意味着该方法将处理泛型类型 T。即使方法返回 void，也需要这样做。

该方法可以处理多个泛型类型。在这种情况下，我们必须将所有泛型类型添加到方法签名中。

我们传递一个函数，该函数将具有 T 类型元素的数组转换为具有 G 类型元素的列表。
```java
public static <T, G> List<G> fromArrayToList(T[] a, Function<T, G> mapperFunction) {
    return Arrays.stream(a)
      .map(mapperFunction)
      .collect(Collectors.toList());
}
```

看一个将 Integer 转换为它的 String 表示形式的例子：
```java
@Test
public void givenArrayOfIntegers_thanListOfStringReturnedOK() {
    Integer[] intArray = {1, 2, 3, 4, 5};
    List<String> stringList
      = Generics.fromArrayToList(intArray, Object::toString);
 
    assertThat(stringList, hasItems("1", "2", "3", "4", "5"));
}
```

## 3.有界泛型

类型参数是有界的，我们可以限制方法接受的类型。

例如，我们可以指定方法接受一个类型及其所有子类（上限）或一个类型及其所有超类（下限）。

在类型后面使用关键字 extends，后跟我们要使用的上限：

```java
public <T extends Number> List<T> fromArrayToList(T[] a) {
    ...
}
```

使用关键字 extends 来表示类型 T 在类的情况下扩展上限，或者在接口的情况下实现上限。

类型也可以有多个上限：
```java
<T extends Number & Comparable>
```

如果 T 扩展的类型之一是类（例如 Number），我们必须将其放在边界列表的首位。否则，将导致编译时错误。

## 4.通配符

通配符在 Java 中由问号 `?` 表示，我们用它们来指代未知类型。通配符对于泛型特别有用，可以用作参数类型。

想象这样的场景：
```java
public static void paintAllBuildings(List<Building> buildings) {
    buildings.forEach(Building::paint);
}
```

如果需要 Building的子类型也能作为参数使用，应该如何做到呢，有界通配符可以帮我们达成：
```java
public static void paintAllBuildings(List<? extends Building> buildings) {
    ...
}
```

现在，此方法将适用于 Building 类型及其所有子类型。这称为上限通配符，其中类型 Building 是上限。

我们还可以指定具有下限的通配符，其中 unknown 类型必须是指定类型的超类型。

可以使用 super 关键字后跟特定类型来指定下限。

例如，<？super T> 表示未知类型，它是 T 的超类 （= T 及其所有父级）。


## 5.类型擦除

为了确保泛型在运行时不会造成额外开销，编译器在编译时对泛型应用了一个称为类型擦除的过程。

类型擦除会删除所有类型参数，并将其替换为它们的边界，如果类型参数是无界的，则将其替换为 Object。

这样，编译后的字节码只包含普通的类、接口和方法，保证不会产生新的类型。在编译时，也会将正确的强制转换应用于 Object 类型。

示例：

```java
public <T> List<T> genericMethod(List<T> list) {
    return list.stream().collect(Collectors.toList());
}
```

```java
// for illustration
public List<Object> withErasure(List<Object> list) {
    return list.stream().collect(Collectors.toList());
}

// which in practice results in
public List withErasure(List list) {
    return list.stream().collect(Collectors.toList());
}
```