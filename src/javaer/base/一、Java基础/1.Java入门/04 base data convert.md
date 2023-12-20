---
# 这是文章的标题
title: 04. 数据类型转换
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-11-21
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

现实中，经常碰到各种转换，数据类型转换也是一样的，由于数据类型不匹配或数据存储、数据处理、数据计算等等其他原因，我们需要将数据转换成想要的类型。
<!-- more -->

## 自动类型转换

自动类型转换（自动类型提升）是 Java 编译器在不需要显式转换的情况下，将一种基本数据类型自动转换为另一种基本数据类型的过程。

这种转换通常发生在表达式求值期间（当不同类型的数据需要相互兼容时）。

==自动类型转换只能向上转换==。即从较小的数据类型（如 int）到较大的数据类型（如 long 或 double），因为较大的数据类型可以容纳较小数据类型的所有可能值，所以它们的转换是安全的。

::: tip
基本数据类型间的自动转换：

byte -> short -> int -> long -> float -> double

char -> int -> long -> float -> double
:::

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

## 强制类型转换

强制类型转换需要程序员显式地指定要执行的转换，强制类型转换可能会导致数据丢失或精度降低，因为目标类型可能无法容纳原始类型的所有可能值。

::: tip
基本数据类型间的强制转换：

double -> float -> long -> int -> char -> short -> byte
:::

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

## 进制

计算机存储都以2进制比特位数据来存储的。

1byte=8bit（8个位数的二进制）

1个数字或者1个字母占用1个字节，1个汉字占用2个字节。

为什么Java中char类型只能存1个字母或数字呢？

char类型的值是1个字符（无论是数字、字母还是汉字），1个字符在计算机中占用2个字节。

::: tip 常用进制

- 十进制：逢十进一，每个位数上只能是0-9的任意数字；
- 二进制：逢二进一，每个位数上只能是0或1；
- 八进制：逢八进一，每个位数上只能是0-7的任意数字；
- 十六进制：逢十六进一，每个数位上可以使0-9，A-F的任意数字；
:::

通过Java内置类实现进制转换：
```java
public class Demo05 {
    public static void main(String[] args) {

        // toBinaryString() 将数值转换为二进制
        System.out.println("十进制55转换为二进制结果为："+Integer.toBinaryString(55));

        // toOctalString() 将数值转换为八进制
        System.out.println("十进制55转换为八进制结果为："+Integer.toOctalString(55));

        // toHexString() 将数值转换为十六进制
        System.out.println("十进制55转换为十六进制结果为："+Integer.toHexString(55)); 
    }
}
```

## 小结

一图总结如下：

![类型转换](/assets/images/base/base-04.jpg)