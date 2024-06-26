---
# 这是文章的标题
title: 02. Java原始类型
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-11-22
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

Java语言具有八种原始数据类型。

在本教程中，我们将认识这些原始类型是什么，并回顾每种类型。

<!-- more -->

## 1.原始数据类型

Java中定义的八个原始数据类型是`int、byte、short、long、float、double、boolean和char`。

这些不被视为对象，代表原始值。

**它们直接存储在堆栈上**（查看本文，了解有关Java内存管理的更多信息）。

我们将了解这些类型的`存储大小`、`默认值`以及`如何使用`每种类型的示例。

以下图表可以快速参考：

| 类型   | 大小（位） | 最小值          | 最大程度          | 示例              |
|--------|------------|-----------------|-------------------|-------------------|
| 字节   | 8          | -2^7            | 2^7 - 1           | byte b = 100；     |
| 短整型 | 16         | -2^15           | 2^15 - 1          | short s = 30_000； |
| 整型   | 32         | -2^31           | 2^31 - 1          | int i = 100_000_000; |
| 长整型 | 64         | -2^63           | 2^63 - 1          | long l = 100_000_000_000_000; |
| 浮点型 | 32         | -2^-149         | (2^-23) * 2^127   | float f = 1.456f; |
| 双精度 | 64         | -2^-1074        | (2^-52) * 2^1023  | double d = 1.456789012345678; |
| 字符型 | 16         | 0               | 2^16 - 1          | char c = 'c';    |
| 布尔型 | 1          | –               | –                 | boolean b = true;   |


<br/><br/><br/><br/><br/><br/>


- **比特：** 比特作为信息技术的最基本存储单位，非常小，它的简写为小写字母“b”，也称作 **位**。我们知道，计算机是以二进制存储数据的，二进制的一位，就是 1 比特，也就是说，比特要么为 0 要么为 1。

- **字节：** 比特这个单位太小了，就好像我们除了个，还需要十百千万这样的更大描述单位一样，字节是更大的描述单位。

==1 字节 = 8 比特==

通常来说，一个英文字符是一个字节，一个中文字符是两个字节。

再往上的单位就是 KB，并不是 1000 字节，因为计算机只认识二进制，因此是 2 的 10 次方，也就是 1024 个字节。

![换算单位](/assets/images/base/base-01.png)



## 2.int

我们了解的第一个原始数据类型是 `int`。

int类型也称为整数，是使用最广泛的数值数据类型之一。**Java使用32位内存来存储它。** 

换而言之，它可以表示从 `-2,147,483,648（-231）` 到 `2,147,483,647（231-1）` 的值。

在Java 8中，可以使用新的特殊辅助函数存储高达 `4,294,967,295（232-1）` 的无符号整数值。


<br/><br/><br/><br/><br/><br/>

我们可以简单地声明一个int：
```java
int x = 424_242;

int y;
```

**在没有赋值的情况下声明的int的默认值是0。**

**如果变量是在方法中定义的，我们必须先分配一个值，然后才能使用它。**

我们可以在int上执行所有标准算术运算。请注意，在整数上执行这些时，十进制值将被忽略。

## 3.byte

字节是一种类似于int的原始数据类型，**只是它只占用8位内存**。这就是为什么我们称它为字节。

由于内存大小非常小，字节只能容纳从 `-128（-27）`到`127（27-1）`的值。

以下是我们创建字节的方法：

<br/><br/><br/><br/>

```java
byte b = 100;

byte empty;
```
**字节的默认值也是0**。

## 4.short

如果我们想节省内存，但又觉得 `byte` 太小时，我们可以使用 `byte` 和 `int` 之间的类型：**short**。

**java中它占16位内存**，它是 int 的一半大小和 byte 大小的两倍。

它的可能值范围为 `-32,768（-215）` 至 `32,767（215-1）`。

short 是这样声明的：

```java
short s = 20_020;

short s;
```

与其他类型类似，**默认值为0**。我们也可以在该类型上使用所有标准算术。

## 5.long

`long` 是 `int`的大哥。**存储在64位内存中**，因此它可以容纳一组更大的可能值。

<br/><br/><br/><br/><br/><br/>

long 的可能值在 `-9,223,372,036,854,775,808（-263）` 到 `9,223,372,036,854,775,807（263-1）` 之间。

我们可以简单地声明一个：

```java
long l = 1_234_567_890;

long l;
```

与其他类型类似，**默认值为0**。我们也可以在该类型上使用所有标准算术。

## 6.float

在Java中，使用浮点类型表示小数。

这是一个单精度的十进制数。这意味着，如果我们超过小数点后六个点，这个数字就会变得不那么精确，而更像是一个估计。



在大多数情况下，我们并不关心精确的损失。但是，如果我们的计算需要绝对的精确度（例如，财务操作、科学计算等），我们就需要使用特定类型。有关更多信息，请查看Java类Big Decimal。

**float 类型存储在32位内存中，就像int一样**。

然而，由于浮点小数点，其范围大不相同。它可以表示正数和负数。最小小数为 `1.40239846 x 10-45`，最大值为 `3.40282347 x 1038`。

我们声明浮点数与任何其他类型相同：

```java
float f = 3.145f;

float f;
```
**默认值是0.0而不是0**。

此外，请注意，数字末尾带有字符 `f`，以定义浮点数。否则，Java将抛出错误，因为十进制值的默认类型是整型 `int`。

<br/><br/><br/><br/>

我们还可以在浮点数上执行所有标准算术运算。然而，重要的是要注意，我们执行浮点算术与整数算术非常不同。

## 7.double

这是一个双精度的十进制数。**它存储在64位内存中。**这意味着它代表的可能数字范围比浮动大得多。

范围为 `4.9406564584124654 x 10-324` 至 `1.7976931348623157 x 10308`。这个范围也可以是正的，也可以是负的。

声明double与其他数字类型相同：

```java
double d = 3.13457599923384753929348D;

double d;
```
**默认值也是0.0**，与 `float` 类似，数字末尾附上字符 `D`，标识双精度浮点数。

## 8.boolean

最简单的原始数据类型是布尔值。它只能包含两个值：**true或false**。

它将其**值存储在单个位**中。

然而，为了方便起见，**Java填充值并将其存储在单个字节中**。

<br/><br/><br/><br/>

声明 boolean 与其他数字类型相同：

```java
boolean b = true;

boolean b;
```

在没有值的情况下声明它**默认为false**。

布尔值是控制我们程序流的基石。我们可以在它们上使用布尔运算符（例如，and(&&)，or(||)等）。


## 9.char

`char` 也称为字符，是一个16位整数，代表Unicode编码的字符。

它的范围从 `0` 到 `65,535`。在Unicode中，这表示 `“\u0000”` 到 `“\uffff”`。

有关所有可能的Unicode值的列表，请查看[Unicode表](https://unicode-table.com/en/)等网站。

声明一个字符：

```java
char c = 'a';

char c = 65;

char c;
```

在定义变量时，我们可以使用任何字符文字，它们将自动转换为我们的Unicode编码。字符的默认值是'/u0000'。

## 10.溢出

原始类型都有数据范围大小的限制，当我们试图存储一个超过其数据范围大小的值时，会发生什么？

<br/><br/><br/><br/>

**我们将遇到一种叫做溢出的情况**。

当整数溢出时，它会滚动到最小值，并从那里开始计数。

浮点数通过返回Infinity溢出：

```java
int i = Integer.MAX_VALUE;
int j = i + 1;
// j will roll over to -2_147_483_648

double d = Double.MAX_VALUE;
double o = d + 1;
// o will be Infinity
```

下流是同样的问题，只是它涉及存储小于最小值的值。当数字不足时，它们返回0.0。


## 11.自动装箱

每个原始数据类型还有一个完整的Java类实现，可以包装它。

例如，`Integer`类可以包装一个`int`。有时需要从原始类型转换为其对象包装器。

Java可以自动为我们执行此转换，这个过程称为自动装箱：

```java
Character c = 'c';

Integer i = 1;
```

<br/><br/><br/><br/>

## 12.类型转换

原始类型之间可以互相转换，转换分为 **自动转换** 和 **强制转换**

#### 自动转换

> 自动类型转换：（自动类型提升）是 Java 编译器在不需要显式转换的情况下，将一种基本数据类型自动转换为另一种基本数据类型的过程。

> 这种转换通常发生在表达式求值期间（当不同类型的数据需要相互兼容时）。

> ==自动类型转换只能向上转换==。即从较小的数据类型（如 int）到较大的数据类型（如 long 或 double），因为较大的数据类型可以容纳较小数据类型的所有可能值，所以它们的转换是安全的。


#### 强制转换

> 强制类型转换：需要程序员显式地指定要执行的转换，强制类型转换可能会导致数据丢失或精度降低，因为目标类型可能无法容纳原始类型的所有可能值。

一图总结如下：

![类型转换](/assets/images/base/base-04.jpg)


自动转换正确示例：

```java
int intValue = 5;
double doubleValue = 2.5;

// 自动类型转换：intValue 被转换为 double 类型
double result = intValue * doubleValue;
System.out.println("结果: " + result); // 输出：结果: 12.5


float price1 = 10.9f; // 定义牙膏的价格，单精度浮点型float
double price2 = 5.8; // 定义面巾纸的价格，双精度浮点型double
int num1 = 2; // 定义牙膏的数量，整型 int
int num2 = 4; // 定义面巾纸的数量，整型 int
double res = price1 * num1 + price2 * num2; // 计算总价
System.out.println("一共付给收银员" + res + "元"); // 输出：一共付给收银员44.99999923706055元
```

自动转换错误示例：

```java
byte b = 50;

// 当表达式求值的时候，操作数被自动的提升为 int 型，
// 计算结果也被提升为 int 型，无法再用 byte 型接收结果。
b = b * 2; // Type mismatch: cannot convert from int to byte

// 正确写法
b = (byte) b * 2;
```

强制转换示例：

```java
double doubleValue = 42.8;

// 强制类型转换：将 double 类型转换为 int 类型
int intValue = (int) doubleValue;
System.out.println("整数值: " + intValue); // 输出：整数值: 42


float price1 = 10.9f;
double price2 = 5.8;
int num1 = 2;
int num2 = 4;
int res2 = (int) (price1 * num1 + price2 * num2);
System.out.println("一共付给收银员" + res2 + "元"); //输出：一共付给收银员44元
```