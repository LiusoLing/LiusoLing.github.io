---
# 这是文章的标题
title: 04. 控制结构
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

以底层的方式看，程序就是一系列指令的列表。**控制结构**，可以改变我们执行这些指令的先后顺序。

在本教程中，我们将探索Java中的控制结构。
<!-- more -->

## 1.控制结构

java中，存在三种控制结构：

- 条件分支：我们用于在两个或多个路径之间进行选择。Java中有三种类型：`if/else/else if`、`三元运算符` 和 `switch`。
- 循环分支：用于迭代多个值/对象并重复运行特定代码块的循环。Java中的基本循环类型是 `for`、`while` 和 `do while`。
- 分支中断：用于改变循环中的控制流。Java中有两种类型：`break` 和 `continue`。


## 2.if-else-if

`if-else` 是==最基本的控制结构==，也被认为是编程决策的基础。

虽然if可以单独使用，但最常见的使用场景是使用if/else在两条路径之间进行选择：

<br/><br/><br/><br/><br/><br/>


```java
if (count > 2) {
    System.out.println("Count is higher than 2");
} else {
    System.out.println("Count is lower or equal than 2");
}
```

**理论上讲，我们可以无限地链接或嵌套if/else块**，可是这会损害代码的可读性，所以不建议这么做。


## 3.三元运算符

我们可以使用 `三元运算符` 作为速记表达式，其工作原理就像 `if/else` 语句一样。

让我们再看看我们的 `if/else` 示例：

```java
if (count > 2) {
    System.out.println("Count is higher than 2");
} else {
    System.out.println("Count is lower or equal than 2");
}
```

我们可以用以下三元来重构它：

<br/><br/><br/><br/><br/><br/>


```java
System.out.println(count > 2 ? "Count is higher than 2" : "Count is lower or equal than 2");
```

虽然三元是使我们的代码更具可读性的好方法，但它并不是万能灵药，不是所有场景都能替代 `if/else`。

## 4.switch

**如果我们有多个案例可供选择，我们可以使用switch语句。**

让我们再次看一个简单的例子：

```java
int count = 3;
switch (count) {
case 0:
    System.out.println("Count is equal to 0");
    break;
case 1:
    System.out.println("Count is equal to 1");
    break;
default:
    System.out.println("Count is either negative, or higher than 1");
    break;
}
```

`三个或更多if/else语句` 可能很难阅读。作为可能的变通办法之一，我们可以使用 `switch`，如上所述。

还要记住，**switch有范围和输入限制**，我们在使用之前需要记住。


::: warning

1. `switch` 判断的变量的类型可以是 byte、short、int 或者 char，或者对应的包装器类型 Byte、Short、Integer、Character，外加 String 、Enum类型。

2. break 是可选的，如果case 没有 break，它将往下一直执行下一个case，直到有break，然后跳出。

3. case 的判断值必须唯一。

4. 用于判断的变量值 和 case 后的常量值 类型必须保持一致。
:::

<br/><br/><br/><br/><br/><br/>

## 5.循环

**当我们需要连续多次重复相同的代码时，我们使用循环。**

让我们看看几个循环类型的快速示例：

```java
// for-i 循环
for (int i = 1; i <= 50; i++) {
    methodToRepeat();
}

// for-each 循环
50Lists.forEach(i -> methodToRepeat());

// while 循环
int whileCounter = 1;
while (whileCounter <= 50) {
    methodToRepeat();
    whileCounter++;
}

// do-while 循环
int i = 0;
do {
    System.out.println("do-while......");
    i++;
    if (i == 5) {
        break;
    }
} while (true);

//死循环、无限循环
for(;;){
    System.out.println("can't stop......");
}

```

<br/><br/><br/><br/><br/><br/>

## 6.中断

**使用中断提前退出循环。**

看两个简短的例子：
```java
for (int i = 1; i <= 3; i++) {
    if (i == 2) {
        continue;   // 使用 continue 关键字，2 将会被跳过
    }
    System.out.println(i);
}


List<String> names = getNameList();
String name = "John Doe";
int index = 0;
for ( ; index < names.length; index++) {
    if (names[index].equals(name)) {
        break;
    }
}
```

在这里，我们正在名单中寻找一个名字，一旦我们找到了它，我们就想停止寻找它。

完成整个循环通常会找到，但我们在这里用 `break` 来短路并提前退出，提前结束剩余的无意义的循环。

::: tip
1. break 仅中断当前所在层循环

2. continue 仅跳过指定条件下的某次循环，并不中断
:::