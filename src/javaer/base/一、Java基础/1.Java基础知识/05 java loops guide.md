---
# 这是文章的标题
title: 05. for循环
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 5
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

学习 Java语言的一个核心方面——使用循环重复执行语句或一组语句。

<!-- more -->

## 1.循环简介

在编程语言中，**循环是一种功能，可以促进一组指令的执行，直到控制布尔表达式求值为false。**

Java提供不同类型的循环，以满足任何编程需求。每个循环都有自己的目的和合适的用例。

以下是我们可以在Java中找到的循环类型：

- for-i 循环
- for-each 循环
- while 循环
- do-while 循环


## 2.for循环

### 2.1 普通for循环

看下代码格式：

```java
for(初始变量; 条件; 自增/自减) {  
    // 循环体
}
```

每个部分解释如下：

 - **初始变量：** 循环开始执行时的初始条件；
 - **条件：** 循环每次执行时要判断的条件，为 true 执行循环体，为 false，就跳出循环。条件可选，当没有条件时，则会一直循环；
 - **自增/自减：** 初始变量变化的方式；
 - **循环体：** 循环每次要执行的代码块，直到条件变为 false。


<br/><br/><br/><br/><br/><br/>

写个示例：

```java
for (int i = 0; i < 5; i++) {
    System.out.println("循环第" + i + "次");
}
```

输出：
```java
循环第1次
循环第2次
循环第3次
循环第4次
循环第5次
```

::: danger 
for循环可嵌套，有一些约定俗成的规范需要遵循：

1. 命名： 使用有意义的变量名，尽量避免使用单个字母作为计数器，使用描述性的变量名可以提高代码的可读性。
2. 避免过深嵌套： 避免过度嵌套，通常超过三层的嵌套可能会使代码难以理解。如果嵌套太深，考虑将内部循环的逻辑提取为一个独立的方法。
3. 注释： 对于复杂的嵌套结构，添加适当的注释可以帮助理解代码的逻辑。
4. 使用一次循环： 如果可能，尝试将多个嵌套的循环合并为一个循环，这样可以减少循环次数。
5. 避免不必要的循环： 仔细检查循环的终止条件，确保不会执行不必要的循环。有时候可以通过更精确的条件来避免不必要的循环。
6. 使用并行处理： 在一些情况下，可以考虑使用并行处理来加速循环。例如Java 8引入的Stream API和并行流。
7. 注意循环顺序： 注意内外循环的顺序，一般将循环次数少的放外层。
:::


<br/><br/><br/><br/><br/><br/>

### 2.2 for-each循环

for-each循环是语法糖，一般用于遍历数组和集合，代码格式如下：
```java
for(元素类型 元素 : 数组或集合) {  
    // 要执行的代码
}  
```

写个示例：
```java
String[] strs = {"法外狂徒", "张三"};

for (String str : strs) {
    System.out.println(str);
}
```

输出：
```java
法外狂徒
张三
```


<br/><br/><br/><br/><br/><br/>

### 2.3 无限for循环

无限for循环也称死循环，如下所示：
```java
for(;;){
    System.out.println("根本停不下来。。。。");
}
```

除非强制停止，一旦运行，停不下来。

### 2.4 continue跳过for循环

当需要在 for 循环、while 循环或者 do-while 循环中，立即跳转到下一个循环时，可以使用 continue 关键字。

该关键字通常用于跳过指定条件下的循环体，如果循环是嵌套的，仅跳过当前层的循环。

写个示例：

```java
for (int i = 1; i <= 3; i++) {
    if (i == 2) {
        continue;   // 使用 continue 关键字，2 将会被跳过
    }
    System.out.println(i);
}
```


<br/><br/><br/><br/><br/><br/>

输出：

```java
1
3
```

while 和 do-while 循环不再举例，使用方法和 上面的例子一致。

### 2.5 break中断for循环

break 关键字通常用于中断循环或 switch 语句，它可用于所有类型循环语句，如for、while、do-while、switch等。

如果是多层循环，则仅中断当前层循环。

写个示例：

```java
for (int i = 1; i <= 3; i++) {
    if (i == 2) {
        break;
    }
    System.out.println(i);
}
```

输出：

```java
1
```


## 3.while循环

### 3.1 普通while循环

while循环的代码格式如下：

```java
while(条件) {  
    //循环体  
}  
```

写个示例：

```java
int i = 0;
while (true) {
    System.out.println("while循环");
    i++;
    if (i == 5) {
        break;
    }
}
```

输出：

```java
while循环
while循环
while循环
while循环
while循环
```


<br/><br/><br/><br/><br/><br/>

::: warning

while 中的条件为true，且循环体中没有 break时，将导致死循环，程序一旦运行，就停不下来。

```java
while (true) {
    System.out.println("根本停不下来。。。。");
}
```
:::

### 3.2 do-while循环

do-while的代码格式如下：

```java
do {  
    // 循环体

} while(条件);
```

写个示例：

```java
int i = 0;
do {
    System.out.println("do-while循环");
    i++;
    if (i == 5) {
        break;
    }
} while (true);
```

输出：

```java
do-while循环
do-while循环
do-while循环
do-while循环
do-while循环
```


<br/><br/><br/><br/><br/><br/>

do-while 循环，由于将循环体放在判断条件前面，所以无论 while 中的判断条件 是 true 还是 false，都==至少会执行一次循环体==。

和普通的 while 循环一样，当 do-while 循环体中 没有 break，且 判断条件为 true 时，将导致死循环。