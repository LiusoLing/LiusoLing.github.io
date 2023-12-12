---
# 这是文章的标题
title: Hello World
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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

## Hello World

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

**第一部分：**

::: code-tabs#java

@tab:active java

```java {1-3}
/*
 * 第一个Java程序，对外宣告：hello, world
 */
public class Hello {   // 保存为 "Hello.java" 文件
   public static void main(String[] args) {  // 程序切入点
      System.out.println("hello, world");    // 输出文字: hello, world
   }
}
```

@tab 结构解释一

```shell
/* ......*/

多行注释：以/*开头，以*/结束，可能跨越多行（如第1-3行）。
```
:::

**第二部分：**

::: code-tabs#java2

@tab:active java2

```java {4}
/*
 * 第一个Java程序，对外宣告：hello, world
 */
public class Hello {   // 保存为 "Hello.java" 文件
   public static void main(String[] args) {  // 程序切入点
      System.out.println("hello, world");    // 输出文字: hello, world
   }
}
```

@tab 结构解释二

```shell
public class Hello {.....}

Java程序的基本单元是类(class)。"Hello" 类是通过关键字 `class` 定义的。
大括号 `{......}` 包裹的是程序body。

//...... 
行末注释或单行注释：以//开头，一直持续到当前行末尾。

```
:::

**第三部分：**

::: code-tabs#java3

@tab:active java3

```java {5-7}
/*
 * 第一个Java程序，对外宣告：hello, world
 */
public class Hello {   // 保存为 "Hello.java" 文件
   public static void main(String[] args) {  // 程序切入点
      System.out.println("hello, world");    // 输出文字: hello, world
   }
}
```

@tab 结构解释三

```shell
public static void main(String[] args) {.....}

定义了所谓的main()方法，这是程序执行的入口点。同样，大括号{......}包含该方法的主体，
其中包含编程语句。

System.out.println("hello, world");

打印字符串"Hello, world"显示在控制台。字符串被一对双引号包围，并包含文本。
文本将按原样打印，不带双引号。
编程语句以英文分号（;）结尾。

```
:::

