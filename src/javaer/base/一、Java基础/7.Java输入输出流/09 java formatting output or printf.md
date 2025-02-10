---
# 这是文章的标题
title: 09. 格式化输出
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 9
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-05
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - i/o
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

`PrintStream` 是 Java 中用于输出格式化文本的类。它提供了多种方法来将数据输出到控制台或文件，其中 `printf` 是最常用的方法之一。

`printf` 方法允许开发者使用格式字符串来控制输出的格式，类似于 C 语言中的 `printf` 函数。

本文将详细介绍 `PrintStream` 的 `printf` 方法及其使用场景。

<!-- more -->

## 1. `PrintStream` 概述

`PrintStream` 是 `OutputStream` 的子类，用于输出格式化的文本。它支持多种输出方法，如 `print()`、`println()` 和 `printf()`。`printf` 方法特别适合需要格式化输出的场景。

### 1.1 基本用法

以下是一个简单的示例，展示如何使用 `PrintStream` 的 `printf` 方法:

```java
public class PrintfExample {
    public static void main(String[] args) {
        System.out.printf("Hello， %s!%n"， "World");
    }
}
```

**代码说明**:
- `%s` 是格式说明符，用于插入字符串。
- `%n` 表示换行符，相当于 `\n`。

输出结果为:
```
Hello， World!
```

## 2. `printf` 方法详解

`printf` 方法的语法如下:

```java
public PrintStream printf(String format， Object... args)
```

- `format`: 格式字符串，包含普通文本和格式说明符。
- `args`: 要插入到格式字符串中的参数。

### 2.1 常用格式说明符

以下是一些常用的格式说明符:

| 说明符 | 描述                | 示例           |
|--------|---------------------|----------------|
| `%s`   | 字符串              | `"Hello"`      |
| `%d`   | 十进制整数          | `42`           |
| `%f`   | 浮点数              | `3.14`         |
| `%c`   | 字符                | `'A'`          |
| `%b`   | 布尔值              | `true`         |
| `%x`   | 十六进制整数        | `0x1F`         |
| `%o`   | 八进制整数          | `017`          |
| `%e`   | 科学计数法浮点数    | `1.23e+10`     |
| `%t`   | 日期/时间          | `2023-10-01`   |
| `%n`   | 换行符              | (无)           |

### 2.2 格式化整数

`%d` 用于格式化整数。可以指定宽度和对齐方式。

```java
int number = 42;
System.out.printf("Number: %d%n"， number);
System.out.printf("Number: %5d%n"， number); // 宽度为 5，右对齐
System.out.printf("Number: %-5d%n"， number); // 宽度为 5，左对齐
```

输出结果为:
```
Number: 42
Number:    42
Number: 42   
```

### 2.3 格式化浮点数

`%f` 用于格式化浮点数。可以指定精度和宽度。

```java
double pi = 3.14159;
System.out.printf("Pi: %.2f%n"， pi); // 保留两位小数
System.out.printf("Pi: %10.2f%n"， pi); // 宽度为 10，保留两位小数
```

输出结果为:
```
Pi: 3.14
Pi:       3.14
```

### 2.4 格式化日期和时间

`%t` 用于格式化日期和时间。可以使用不同的格式符号来表示日期和时间的各个部分。

```java
import java.util.Date;

public class DateFormatExample {
    public static void main(String[] args) {
        Date now = new Date();
        System.out.printf("Date: %tD%n"， now); // MM/dd/yy 格式
        System.out.printf("Time: %tT%n"， now); // HH:mm:ss 格式
    }
}
```

输出结果为:
```
Date: 10/01/23
Time: 14:30:45
```

### 2.5 格式化布尔值

`%b` 用于格式化布尔值。它可以将任何非 `null` 对象格式化为 `true`，将 `null` 格式化为 `false`。

```java
boolean flag = true;
System.out.printf("Flag: %b%n"， flag);
System.out.printf("Flag: %b%n"， null);
```

输出结果为:
```
Flag: true
Flag: false
```

## 3. 使用 `PrintStream` 输出到文件

除了输出到控制台，`PrintStream` 还可以用于将格式化文本写入文件。

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

public class FilePrintStreamExample {
    public static void main(String[] args) {
        try (FileOutputStream fos = new FileOutputStream("output.txt");
             PrintStream ps = new PrintStream(fos)) {
            ps.printf("Hello， %s!%n"， "World");
            ps.printf("Pi: %.2f%n"， 3.14159);
            System.out.println("数据已写入 output.txt 文件");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**代码说明**:
- `PrintStream` 包装了 `FileOutputStream`，用于将数据写入文件。

## 4. 使用 `PrintStream` 的注意事项

### 4.1 异常处理

`PrintStream` 的方法不会抛出 `IOException`，而是通过 `checkError()` 方法检查是否发生错误。

```java
PrintStream ps = new PrintStream(System.out);
ps.printf("Hello， %s!%n"， "World");
if (ps.checkError()) {
    System.err.println("写入时发生错误");
}
```

**注意**:
- `checkError()` 方法返回 `true` 表示在写入过程中发生了错误。

### 4.2 关闭流

在使用完 `PrintStream` 后，应调用 `close()` 方法关闭流，以释放系统资源。如果使用 `try-with-resources` 语句，流会自动关闭。

```java
try (PrintStream ps = new PrintStream("output.txt")) {
    ps.printf("Hello， %s!%n"， "World");
} catch (IOException e) {
    e.printStackTrace();
}
```

## 5. 总结

`PrintStream` 的 `printf` 方法是 Java 中格式化输出的强大工具。

通过使用格式说明符，开发者可以轻松控制输出的格式，包括字符串、整数、浮点数、日期和布尔值等。

`PrintStream` 不仅可以输出到控制台，还可以将数据写入文件。在实际开发中，合理使用 `printf` 方法可以让输出更加清晰和易读。