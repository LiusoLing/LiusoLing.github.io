---
# 这是文章的标题
title: 01. Java基本语法
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-12
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

Java是一种静态类型、面向对象的高级编程语言。它与平台无关 -- Java可以在 Windows 平台上编写和编译，而在 MacOS 或 Linux 上运行，并且无需对源码进行任何的修改。

现在，让我们开始学习并理解Java语法的基础知识。

<!-- more -->

## 1.Java数据类型


Java中有两大数据类型：**原始类型**、**对象/引用类型**。

**原始类型是存储简单数据并构成数据操作基础的基本数据类型**。例如Java具有整数值（int、long、byte、short）、浮点值（float和double）、字符值（char）和逻辑值（boolean）的原始类型。


**引用类型是包含对值或其他对象的引用的对象，或对表示没有值的特殊值空的引用**。

String类是引用类型的一个很好的例子。该类的实例称为对象，表示一系列字符，例如“Hello World”。
<br/><br/><br/><br/><br/><br/>


## 2.在Java中声明变量

要在Java中声明变量，我们必须指定其`名称`（也称作标识符）和`类型`。让我们看一个简单示例：

```java
int a;
int b;
double c;
```

上述示例中，变量将根据其声明的类型接收默认初始值。

由于我们声明我们的变量为 `int` 和 `double` ，它们的默认值分别为 0 和 0.0。

**我们也可以使用赋值运算符（=）在声明期间初始化变量：**

```java
int a = 10;
```

在上述示例中，我们声明一个具有 `标识符a` 的变量为 `int类型` ，并使用 `赋值运算符（=）`为其赋值 `10`，并使用 `英文分号（;）`终止语句。

==在Java中，所有语句都必须以分号结尾。==

<br/><br/><br/><br/><br/><br/>

**标识符是任何长度的名称，由字母、数字、下划线和美元符号组成**，遵循以下规则：
- 以字母、下划线（_）或美元符号（$）开头
- 不能是保留的Java关键字
- 不能是 true, false, or null


让我们扩展上述示例代码，以一个包含简单的算术运算的代码作为示例：

```java
int a = 10;
int b = 5;
double c = a + b;
System.out.println( a + " + " + b + " = " + c);
```

我们可以将上面代码片段的前三行读为 “**将10的值分配给a，将5的值分配给b，将a和b的值相加，并将结果分配给c**”。

在最后一行中，我们将操作结果输出到控制台:

```java
10 + 5 = 15.0
```

其他类型变量的声明和初始化遵循我们上面显示的相同语法。

例如，我们声明 String、char和 boolen 变量：
```java
String name = "Blog";
char toggler = 'Y';
boolean isVerified = true;
```

为了强调字符，区别 `char` 和 `String` 的字面值的是围绕这些值的英文单引号和双引号。

因此，`'a'`是一个字符，而 `"a"` 是一个字符串。
<br/><br/><br/><br/><br/><br/>

## 3.数组

**数组** 是用于储存多个相同类型数据的集合。

在Java中声明数组的一般语法是：

  > **type[] identifier = new type[length];**

type 可以是任何原始或引用类型。

例如，让我们看看如何声明一个最多可以容纳100个整数的数组：
```java
int[] numbers = new int[100];
```

要引用数组的特定元素，或为元素分配值，我们使用变量名及其索引：
```java
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
int thirdElement = numbers[2];
```

在Java中，**数组索引从零开始**。数组的第一个元素在索引0，第二个元素在索引1，以此类推。

此外，我们可以通过调用numbers.length来获得数组的长度：
```java
int lengthOfNumbersArray = numbers.length;
```

## 4.关键字

**关键字是在Java中具有特殊含义的保留词。**

<br/><br/><br/><br/><br/><br/>

例如，`public`、`static`、`class`、`main`、`new`、`instanceof` 是 Java 中的关键字，因此，我们不能将它们作为标识符（变量名）。

## 5.java中的运算符

第二节中提到了 **赋值运算符（=）**，让我们了解Java语言中的其他类型的运算符。

### 5.1 算术运算符

Java支持以下**算术运算符**，可用于编写数学、计算逻辑：

- +（加法或自增；也用于字符串串联）
- –（减法或自减）
- *（乘法）
- /（分部）
- %（模数或余数）

之前的代码示例中使用了 `加号（+）运算符` 来执行两个变量相加。其他算术运算符使用也类似。

`加号（+）`的另一个用途是 `串联（连接）字符串` 以形成一个全新的字符串：
```java
String output =  a + " + " + b + " = " + c;
```

### 5.2 逻辑运算符

Java支持以下**逻辑运算符**来评估布尔表达式：
- &&（和）
- ||（或）
- !（不是）

思考一个逻辑 AND 和 OR 的代码片段，以下示例展示了 **当数字变量可被2和3整除时执行** 的打印语句：
```java
int number = 6;
        
if (number % 2 == 0 && number % 3 == 0) {
    System.out.println(number + " is divisible by 2 AND 3");
}
```
<br/><br/><br/><br/><br/><br/>

当数字能被2或5整除时，以下示例被执行：
```java
if (number % 2 == 0 || number % 5 == 0) {
    System.out.println(number + " is divisible by 2 OR 5");
}
```

### 5.3 比较运算符

java 中使用**比较运算符**将一个变量的值与另一个变量的值进行比较。

- `<（小于）`
- `<=（小于或等于）`
- `>（大于）`
- `>=（大于或等于）`
- `==（等于）`
- `!=（不等于）`

示例，我们可以使用比较运算符比较是否成年：

```java
public boolean isAdult(int age) {
    if(age < 18) {
        return false;
    }
    return true;
}
```

## 6.程序结构

现在我们已经了解了`数据类型`、`变量`和一些`基本运算符`，让我们看看如何将这些元素组装成一个简单的可执行程序。

**Java程序的基本单元是类。**

类可以有一个或多个字段（有时称为属性）、方法，甚至其他称为内部类的类成员。

**要让一个类成为可执行的，它必须有一个主方法。**主要方法表示程序的切入点。

让我们编写一个简单的可执行类来行使我们之前展示的代码片段：

```java
public class SimpleAddition {

    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        double c = a + b;
        System.out.println( a + " + " + b + " = " + c);
    }
}
```

该类的名称是 `SimpleAddition`，在类中，我们有一个主要方法 `main` 来容纳我们的逻辑。`main`方法的打开和关闭大括号 `{}` 之间的代码段称为代码块。

Java程序的源代码存储在扩展名为 `.java` 的文件中。
<br/><br/><br/><br/><br/><br/>

## 7.编译和执行程序

要执行我们的源代码，我们首先需要编译它，编译过程将生成一个具有 `.class` 扩展名的二进制文件。

我们可以在任何安装了 `Java运行时环境（JRE）` 的机器上执行二进制文件。

将上述示例中的源代码保存到一个名为 `SimpleAddition.java` 的文件中，并**从保存该文件的目录下**运行此命令编译文件：

```shell
javac SimpleAddition.java
```

要执行程序，我们只需运行：

```shell
java SimpleAddition
```

控制台将输出和下图所示相同的输出结果：
```shell
10 + 5 = 15.0
```

