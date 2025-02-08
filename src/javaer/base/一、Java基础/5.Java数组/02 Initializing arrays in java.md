---
# 这是文章的标题
title: 02. Java数组初始化
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-01
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

数组是一种数据结构，它允许我们**存储和作相同数据类型的元素集合。数组具有固定大小，在初始化期间确定，在运行时无法更改**。

<!-- more -->


## 1.什么是数组

在 Java 中，数组是可以存储相同数据类型的多个元素的对象。我们可以通过索引访问数组中的所有元素，索引是从零开始的数字位置。此外，数组的长度表示它可以容纳的元素总数：

**如果我们尝试访问数组有效索引范围之外的元素，它会引发 ArrayIndexOutOfBoundsException。**


## 2.声明和初始化一维数组

我们可以通过指定数组的数据类型，后跟方括号和数组名称来轻松声明数组：
```java
int[] anArray;
```

此外，我们**必须初始化一个数组才能使用它**。初始化涉及使用 new 关键字分配内存并指定数组长度：

```java
var numbers = new int[7];
```

初始化后，我们可以使用索引为各个元素赋值，也可以使用元素的索引来检索元素值：
```java
numbers[0] = 10;
numbers[1] = 20;

assertEquals(20, numbers[1]);
```

值得注意的是，数组的长度始终是固定的，并且在初始化后无法扩展。
<br/><br/><br/><br/>


### 2.声明未知大小的数组

当我们声明一个数组时，不必要知道大小。我们可以将数组赋值为 null 或空数组

```java
int[] numbers = null;

int[] numbers = new int[0];
```

但是我们在初始化它时需要知道它的大小，因为 Java 虚拟机必须为其保留连续的内存块。
如果我们想调整数组的大小，我们可以通过创建一个更大大小的数组并将之前的数组元素复制到新数组来实现：

```java
int newSize = 10; // New desired size
int[] newArray = new int[newSize];

// Copy elements from the old array to the new array
System.arraycopy(numbers, 0, newArray, 0, numbers.length);

numbers = newArray // reference to new array
```

ArrayList 在内部使用数组和 System.arrayCopy（） 来支持动态调整大小。
```java
// we can add elements dynamically without specifying the size
List<Integer> numbers = new ArrayList<>();
numbers.add(1);
numbers.add(2);
numbers.add(3);
```

### 3.数组元素的默认值

初始化后，将根据数组的数据类型自动为数组的元素分配默认值。这些值表示数组元素在我们显式分配任何值之前的初始状态。

默认情况下，int、short、long、float 和 double 数据类型的数组将所有元素设置为零：

```java
int[] array = new int[5];
assertArrayEquals(new int[] { 0, 0, 0, 0, 0 }, array);
```
此外，对于布尔数组，所有元素的默认值为 false：

```java
boolean[] array = new boolean[5];
assertArrayEquals(new boolean[] { false, false, false, false, false }, array);
```

最后，对于对象类型的数组（如 String），所有元素的默认值都设置为 null：
```java
String[] array = new String[5];
assertArrayEquals(new String[] { null, null, null, null, null }, array);
```




<br/><br/><br/><br/>

## 3.数组的初始化

让我们看几组数组初始化的示例：
```java
String[] brand = new String[] { "Toyota", "Mercedes", "BMW", "Volkswagen", "Skoda" };
int[] array = { 1, 2, 3, 4, 5 };

var arr = new int[]{1,2,3,4,5};
```


## 4.向数组添加值

java.util.Arrays 类有几个名为 fill（） 的方法，它们接受不同类型的参数并使用相同的值填充整个数组：

```java
long array[] = new long[5];
Arrays.fill(array, 30);
```

该方法还有几种选择，可将数组的给定范围设置为特定值：

```java
int[] array = new int[5];
Arrays.fill(array, 0, 3, -50);
```
fill（） 方法分别接受初始化的数组、开始填充的索引、结束填充的索引（不包括）和值本身作为参数。

还有一种方法是 Arrays.setAll（）使用生成器函数设置数组的所有元素。当我们需要将遵循特定模式或逻辑的值添加到数组中时，此方法非常有用。

```java
int[] numbers = new int[5];
Arrays.setAll(numbers, i -> i * 2);
assertArrayEquals(new int[] {0, 2, 4, 6, 8}, numbers);
```


## 5.复制数组

方法 Arrays.copyOf（） 通过从现有数组中复制元素来创建新数组。该方法具有许多重载，这些重载接受不同类型的参数。

```java
int[] array = { 1, 2, 3, 4, 5 };
int[] copy = Arrays.copyOf(array, 5);
```

需要注意：
- 该方法接受两个参数，源数组和要创建的新数组的所需长度。
- 如果长度大于要复制的数组的长度，则额外的元素将使用其类型的默认值进行初始化。
- 如果源数组尚未初始化，则引发 NullPointerException。


Apache Commons Lang 3 中的 ArrayUtils.clone（） API，它通过创建另一个数组的直接副本来初始化一个数组：
```java
char[] array = new char[] {'a', 'b', 'c'};
char[] copy = ArrayUtils.clone(array);
```

## 6.声明和初始化二维数组

通过指定两组方括号来声明一个 int 数据类型的二维数组。让我们初始化数组并指定行数和列数：

```java
int[][] matrix = new int[2][5];

matrix[0][0] = 10;
matrix[0][1] = 20;
matrix[0][2] = 30;
matrix[0][3] = 40;
matrix[0][4] = 50;
matrix[1][0] = 60;
matrix[1][1] = 70;
matrix[1][2] = 80;
matrix[1][3] = 90;
matrix[1][4] = 100;
```

我们可以将其视为具有 2 行和 5 列的数组。


## 7,使用Stream API初始化数组

Stream API 提供了从元素流创建数组的便捷方法，包括 Arrays.stream（）、IntStream.of（）、DoubleStream.of（） 等方法。这些方法允许我们使用指定值初始化数组。

```java
 int[] values = IntStream.of(1, 2, 3, 4, 5).toArray();
```

同样，我们可以使用 Stream API 初始化一个更高维的数组。让我们使用这种方法来初始化一个二维数组：

```java
int[][] matrix = IntStream.range(0, 3)
  .mapToObj(i -> IntStream.range(0, 4).map(j -> i * 4 + j).toArray())
  .toArray(int[][]::new);
```