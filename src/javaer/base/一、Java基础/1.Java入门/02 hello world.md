---
# 这是文章的标题
title: 02. Hello World
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

假设您已经安装好了Java开发工具包（JDK 8），同时安装好了市面上流行的任意一款代码编辑器IDE（vsCode、idea、Sublime Text、Atom、NotePad++、TextPad），那快让我们来编写人生中第一个Java程序 “Hello World”，和Java编程世界打个招呼吧！
<!-- more -->

## 引言

要想精通一门编程语言，你需要掌握两件事：

   - 掌握编程语言的语法：学习一小组关键字和语法并不难。例如，JDK 1.8 有 48 个关键字；C11 有 44 个；C++11 有 73 个。

   - 熟练使用语言相关的应用程序接口 （API） 库： 谁也不想自己从头开始编写所有内容。学习库可能很困难，因为它非常庞大，不断发展，可以作为一种编程语言富有生命力的象征。

话不多说，让我们以”Hello World“向编程世界打个招呼吧！

## Hello World

java编程步骤如下图所示：

![编程步骤](/assets/images/base/programming_steps.gif)

**<font color = red>1.编写源代码：</font>**

新建一个名为“Hello”后缀为".java"的文件，并输入以下源代码，该代码在代码编辑器中定义了一个名为“Hello”的类，注意最左侧的行号忽略不计。

```java
/*
 * 第一个Java程序，对外宣告：hello, world
 */
public class Hello {   // 保存为 "Hello.java" 文件
   public static void main(String[] args) {  // 程序切入点
      System.out.println("hello, world");    // 输出文字: hello, world
   }
}
```

**<font color = red>2.编译源代码：</font>**

使用 JDK 的Java编译器`javac`将源代码文件 `Hello.java` 编译成 `Java字节码文件 Hello.class`。

启动CMD Shell（Windows）或终端（UNIX/Linux/macOS），并执行以下命令：

```shell
// 先切换到 Hello.java 文件所在的目录地址
➜  ~ cd /xxxx

// 编译源代码，执行后在同目录下生成 Hello.class 字节码文件
➜  ~ javac Hello.java
```

**<font color = red>3.运行程序：</font>**

在第二步的基础上，执行以下命令，使用JDK的Java运行时“java”运行机器代码：

```shell
// 运行程序
➜  ~ java Hello

// 程序输出
➜  ~ hello, world
```

## 程序结构解释

让我们看看人生第一个代码的程序结构是如何。

```java
/*
 * 第一个Java程序，对外宣告：hello, world
 */
public class Hello {   // 保存为 "Hello.java" 文件
   public static void main(String[] args) {  // 程序切入点
      System.out.println("hello, world");    // 输出文字: hello, world
   }
}


/* ......*/
// 多行注释：以/*开头，以*/结束，可能跨越多行（如第1-3行）。


public class Hello {.....}
// Java程序的基本单元是类(class)。"Hello" 类是通过关键字 `class` 定义的。
// 大括号 `{......}` 包裹的是程序body。


// 保存为 "Hello.java" 文件
// 行末注释或单行注释：以//开头，一直持续到当前行末尾。


public static void main(String[] args) {.....}
// 定义了所谓的main()方法，这是程序执行的入口点。同样，大括号{......}包含该方法的主体，
// 其中包含编程语句。


System.out.println("hello, world");
// 打印字符串"Hello, world"显示在控制台。字符串被一对双引号包围，并包含文本。
// 文本将按原样打印，不带双引号。
// 编程语句以英文分号（;）结尾。
```

## 总结

### 1.Java 两种注释

注释用于记录和解释代码和程序逻辑，注释不是编程语句，编译器会忽略它们，并且不会对程序执行产生任何影响。

注释对于为其他人提供文档和解释以理解您的程序（以及三天后您自己）非常重要。

1. <font color = red>多行注释：</font> 一种为 /*...*/，可以跨越多行。 另一种/** .... */ 是一个特殊的文档注释，可以提取这些注释以生成文档。

2. <font color = red>行尾（单行）注释：</font> 从 //...... 当前行开始并持续到当前行的末尾。


### 2.Java 语句和块

<font color = red>语句：</font>语句是程序中的最小独立单元，就像中文中的句子一样。它执行一段编程操作，必须以英文的分号 `;` 结尾。

::: tip
为什么不像句子一样使用句号结尾呢？

在计算机早期，由于句号和小数点特别相像，导致无法区分句号和小数点，于是约定以可以清楚区分的分号作为编程语句的结尾符号，并一直沿用至今。

:::

语句 示例：

```java
// 每一行都是一条语句，执行一段编程动作，并以分号结尾 (;).
int number1 = 10;
int number2, number3 = 99;
int product;
number2 = 8;
product = number1 * number2 * number3;
System.out.println("Hello");
```

<font color = red>块：</font>块是一组被一对大括号 `{ }` 包围的编程语句。大括号内的所有语句都被视为一个单元。

块在类、方法、if-else 和循环等结构中用作主体，这些结构可能包含多个语句，但被视为一个单元（一个主体）。

块无需在右大括号后加上分号来结束复合语句，允许使用空块（即大括号内没有任何语句）。

块示例：

```java
if (mark >= 50) {     // 声明一个if判断
   System.out.println("PASS");
   System.out.println("Well Done!");
   System.out.println("Keep it Up!");
}
 
if (input != -1) {   // 声明一个if-else
   System.out.println("Continue"); 
} else { 
   System.out.println("Exit"); 
}
 
i = 1;
while (i < 8) {      // 声明一个while循环
   System.out.print(i + " ");
   ++i; 
}
 
public static void main(String[] args) {   // 声明一个方法
   ...statements... 
}
 
public class Hello {   // 声明一个类
   ...statements... 
}
```

### 3.Java 空格和格式化代码

也许你注意到了，上述示例代码中，第二行代码要么与上一行代码平齐，要么比上一行代码多几个空格，而且单词与单词之间也存在空格。

<font color = red>空格：</font>空格、制表符和换行符统称为空格。

Java使用空格来分隔两个关键字或标记以避免歧义，示例：

```java
int sum = 0;  
double average;
```
java 会忽略多余的空格，适当的缩进（带有制表符和空格）和额外的空行大大提高了程序的可读性。这对于其他人（以及三天后的你自己）了解您的程序非常重要。

不信的话，让我们来看看一个不带缩进和换行的程序，非常难读：
```java
public class Hello{public static void main(String[] args){System.out.println("Hello, world!");}}
```

