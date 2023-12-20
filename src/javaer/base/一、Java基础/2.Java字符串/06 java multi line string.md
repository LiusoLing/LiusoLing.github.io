---
# 这是文章的标题
title: 06. Java多行字符串
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 6
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-13
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - string
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

在本文章中，我们将学习如何在Java中声明多行字符串。

<!-- more -->

## 文本块方式

```java
public String textBlocks() {
    return """
        Get busy living
        or
        get busy dying.
        --Stephen King""";
}
```

`JDK 15` 版本及以上，通过三引号 `"""` 声明字符串的方式来使用文本块，这是迄今为止声明多行字符串的最便捷方式，我们不必处理线分隔符或缩进空间。

## 获取操作系统分隔符

不同的操作系统，定义的分隔符都不同，使用Java中的系统方法获取操作系统的分隔符
```
String newLine = System.getProperty("line.separator");
```

`newLine` 对象将在下文使用，后文不再重新获取。

## 字符串连接方式

字符串连接是一种简单的方法，可用于创建多行字符串：

版本一：
```java
public String stringConcatenation() {
    return "Get busy living"
            .concat(newLine)
            .concat("or")
            .concat(newLine)
            .concat("get busy dying.")
            .concat(newLine)
            .concat("--Stephen King");
}
```

版本二：
```java
public String stringConcatenation() {
    return "Get busy living"
            + newLine
            + "or"
            + newLine
            + "get busy dying."
            + newLine
            + "--Stephen King";
}
```

## 字符串join方式

`Java 8` 引入了 `String.join`，它使用分隔符和一些字符串作为参数，返回一个最终字符串，所有输入字符串通过分隔符连接在一起：

```java
public String stringJoin() {
    return String.join(newLine,
                       "Get busy living",
                       "or",
                       "get busy dying.",
                       "--Stephen King");
}
```

## 字符串生成器方式

`StringBuilder` 是构建字符串的辅助类。`StringBuilder` 在 `Java 1.5` 中引入，作为 `StringBuffer` 的替代品。

一般用于在循环中构建巨大的字符串：

```java
public String stringBuilder() {
    return new StringBuilder()
            .append("Get busy living")
            .append(newLine)
            .append("or")
            .append(newLine)
            .append("get busy dying.")
            .append(newLine)
            .append("--Stephen King")
            .toString();
}
```

## 字符串写方式

`StringWriter` 也可以用来创建多行字符串。这里不再使用 `newLine`，使用 `PrintWriter` ，`println` 功能会自动添加新行：

```java
public String stringWriter() {
    StringWriter stringWriter = new StringWriter();
    PrintWriter printWriter = new PrintWriter(stringWriter);
    printWriter.println("Get busy living");
    printWriter.println("or");
    printWriter.println("get busy dying.");
    printWriter.println("--Stephen King");
    return stringWriter.toString();
}
```

## 第三方库方式

引入第三方包，借助第三方封装好的字符串操作方法。这里谷歌的 `Guava` 库是个不错的选择：

```java
public String guavaJoiner() {
    return Joiner.on(newLine).join(ImmutableList.of("Get busy living",
        "or",
        "get busy dying.",
        "--Stephen King"));
}
```