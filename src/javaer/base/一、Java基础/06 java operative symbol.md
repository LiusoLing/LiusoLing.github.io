---
# 这是文章的标题
title: 05. Java运算符
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 6
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

在Java编程中，运算符是一种用于执行各种操作的特殊符号。这些操作可以涵盖基本的数学计算、逻辑判断和其他一些常见的任务。本文将介绍Java中的一些基本运算符。

<!-- more -->


## 1.算术运算符

Java提供了一组基本的算术运算符，用于执行数学运算。

**算术运算符：**

| 算术运算符 | 符号 | 说明                |
|------------|------|---------------------|
| 加法       | +    | 执行相加运算        |
| 减法       | -    | 执行相减运算        |
| 乘法       | *    | 执行相乘运算        |
| 除法       | /    | 执行相除运算        |
| 取余       | %    | 返回除法的余数      |

**算术运算语法糖：**

| 算术运算语法糖   | 符号 | 说明                   |
|------------------|------|------------------------|
| 自增运算（前缀） | ++   | 变量值加1，表达式的值为加1后的值 |
| 自增运算（后缀） | --   | 变量值加1，表达式的值为加1前的值 |


**程序示例：**

```java
public class OperatorExample {
    public static void main(String[] args) {
        // 算术运算符示例
        int a = 10;
        int b = 5;
        int sum = a + b;      // 加法
        int difference = a - b; // 减法
        int product = a * b;    // 乘法
        int quotient = a / b;   // 除法
        int remainder = a % b;  // 取余

        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Product: " + product);
        System.out.println("Quotient: " + quotient);
        System.out.println("Remainder: " + remainder);

        // 自增自减运算符示例
        int x = 5;
        int y = ++x; // 先自增，再赋值，y = 6
        int z = x--; // 先赋值，再自减，z = 6

        System.out.println("x: " + x);
        System.out.println("y: " + y);
        System.out.println("z: " + z);
    }
}
```

## 2.关系运算符

| 运算符    | 描述                                             |
|-----------|--------------------------------------------------|
| ==        | 判断两个操作数是否相等，相等返回 true，否则返回 false |
| !=        | 判断两个操作数是否不相等，不相等返回 true，否则返回 false |
| >         | 判断左操作数是否大于右操作数，大于返回 true，否则返回 false |
| <         | 判断左操作数是否小于右操作数，小于返回 true，否则返回 false |
| >=        | 判断左操作数是否大于或等于右操作数，是返回 true，否则返回 false |
| <=        | 判断左操作数是否小于或等于右操作数，是返回 true，否则返回 false |

**程序示例：**
```java
public class RelationalOperatorsExample {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        // 判断两个操作数是否相等
        boolean isEqual = (a == b);
        System.out.println("Is a equal to b? " + isEqual); // 输出：false

        // 判断两个操作数是否不相等
        boolean isNotEqual = (a != b);
        System.out.println("Is a not equal to b? " + isNotEqual); // 输出：true

        // 判断左操作数是否大于右操作数
        boolean isGreaterThan = (a > b);
        System.out.println("Is a greater than b? " + isGreaterThan); // 输出：false

        // 判断左操作数是否小于右操作数
        boolean isLessThan = (a < b);
        System.out.println("Is a less than b? " + isLessThan); // 输出：true

        // 判断左操作数是否大于或等于右操作数
        boolean isGreaterOrEqual = (a >= b);
        System.out.println("Is a greater or equal to b? " + isGreaterOrEqual); // 输出：false

        // 判断左操作数是否小于或等于右操作数
        boolean isLessOrEqual = (a <= b);
        System.out.println("Is a less or equal to b? " + isLessOrEqual); // 输出：true
    }
}
```

## 3.逻辑运算符

| 运算符 | 符号 | 作用                                           |
|--------|------|------------------------------------------------|
| AND    | &&   | 如果两个操作数都为true，则结果为true；否则为false |
| OR     | \|\|  | 如果两个操作数中至少有一个为true，则结果为true；否则为false |
| NOT    | !    | 如果操作数为true，则结果为false；如果操作数为false，则结果为true |

**程序示例：**

```java
public class LogicalOperatorsExample {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;

        // AND运算符示例
        boolean andResult = a && b; // false
        System.out.println("AND result: " + andResult);

        // OR运算符示例
        boolean orResult = a || b; // true
        System.out.println("OR result: " + orResult);

        // NOT运算符示例
        boolean notResult = !a; // false
        System.out.println("NOT result: " + notResult);
    }
}
```

## 4.三元运算符

| 运算符     | 符号 | 作用                                      |
|------------|------|-------------------------------------------|
| 三元运算符 | x ? y : z | 基于条件的真假来返回两个值中的一个         |

**程序示例：**

```java
public class TernaryOperatorExample {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;

        // 三元运算符示例
        int result = (x > y) ? x : y; // 10
        System.out.println("Result: " + result);
    }
}
```

## 5.赋值运算符

| 运算符      | 符号 | 作用                                            |
|-------------|------|-------------------------------------------------|
| 等号        | =    | 将右侧的值赋给左侧的变量                         |
| 扩展赋值运算符 | +=   | 将左侧的变量与右侧的表达式相加并将结果赋给变量   |
|             | -=   | 将左侧的变量与右侧的表达式相减并将结果赋给变量   |
|             | *=   | 将左侧的变量与右侧的表达式相乘并将结果赋给变量   |
|             | /=   | 将左侧的变量与右侧的表达式相除并将结果赋给变量   |
|             | %=   | 将左侧的变量与右侧的表达式取余并将结果赋给变量   |


**程序示例：**

```java
public class AssignmentOperatorsExample {
    public static void main(String[] args) {
        int num = 10;

        // 扩展赋值运算符示例
        num += 5; // num的值变为15，等同于 num = num + 5;
        System.out.println("Updated num: " + num);
    }
}
```

## 5.位运算符

| 运算符 | 符号 | 作用                                           |
|--------|------|------------------------------------------------|
| AND    | &    | 对整数的位进行AND运算                           |
| OR     | \|   | 对整数的位进行OR运算                            |
| XOR    | ^    | 对整数的位进行XOR运算                           |
| 左移   | <<   | 将整数的所有位向左移动指定数量的位置            |
| 右移   | >>   | 将整数的所有位向右移动指定数量的位置            |
| 无符号右移 | >>> | 将整数的所有位向右移动指定数量的位置，高位补0   |


**程序示例：**

```java
public class BitwiseOperatorsExample {
    public static void main(String[] args) {
        int a = 5; // 二进制表示为 0101
        int b = 3; // 二进制表示为 0011

        // AND运算符示例
        int andResult = a & b; // 0001 (1)
        System.out.println("AND result: " + andResult);

        // OR运算符示例
        int orResult = a \| b; // 0111 (7)
        System.out.println("OR result: " + orResult);

        // XOR运算符示例
        int xorResult = a ^ b; // 0110 (6)
        System.out.println("XOR result: " + xorResult);

        // 左移运算符示例
        int leftShift = a << 1; // 1010 (10)
        System.out.println("Left Shift result: " + leftShift);

        // 右移运算符示例
        int rightShift = a >> 1; // 0010 (2)
        System.out.println("Right Shift result: " + rightShift);
    }
}

```

