---
# 这是文章的标题
title: 07. Java检查空字符串
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 7
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

在本文章中，学习在Java中检查空或空字符串的一些方法。

<!-- more -->

## 空定义

首先确保我们对空字符串的定义意见一致。

- 空的（empty）：字符串是空的（null）或没有任何长度的字符串
- 空白（blank）：字符串仅由空格组成

让我们看看四种不同的空字符串:
```java
String emptyNull = null;                    // empty
String emptyNewStringTwo = new String();    // empty

String emptyLiteral = "";                   // blank
String emptyNewString = new String("");     // blank
```


## Empty字符串校验

**Java 6及更高版本**
```java
boolean isEmptyString(String string) {
    return string == null || string.isEmpty();
}
```

**Java 5及以下版本**
```java
boolean isEmptyString(String string) {
    return string == null || string.length() == 0;
}
```

## Blank字符串校验

```java
boolean isBlankString(String string) {
    return string == null || string.trim().isEmpty();
}
```

`trim` 方法将删除所有Unicode代码小于或等于U+0020的前导和尾随字符。字符串是不可变的，所以 `trim` 修剪实际上不会改变原始字符串。

JDK 11及以上提供了 `isBlank` 方法更快的判断：
```java
boolean isBlankString(String string) {
    return string == null || string.isBlank();
}
```

## 正则校验

正则验证 `Blank`，这需要在 `Java Bean Validation`中使用：
```java
public class User {

  // other properties

  @Pattern(regexp = "\\A(?!\\s*\\Z).+")
  String someString;
}
```

该正则确保了 empty 或 blank 的空字符串将无法通过校验。

## Apache Commons校验

借助 Apache Commons Lang 进行空字符串校验，首先引入 Apache Commons Lang：

在 pom.xml 中加入依赖
```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
</dependency>
```

借助工具类的静态方法校验空字符串：
```java
StringUtils.isBlank(string);
StringUtils.isEmpty(string);
```

## Google Guava校验

借助 Google guava 进行空字符串校验，首先引入 Google guava：

在 pom.xml 中加入依赖
```xml
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>32.1.3-jre</version>
</dependency>
```

借助工具类的静态方法校验空字符串：
```java
Strings.isNullOrEmpty(string)
```

它检查给定的字符串是 null 还是 empty，但不会检查仅为空格的字符串。

## Spring校验

Spring Core库提供了一个名为StringUtils的类，该类具有检查字符串是否为空的方法。

更高的版本Spring 5.3.0及以上被被ObjectUtils类代替。

在 pom.xml 中加入依赖
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>5.3.0</version>
</dependency>
```

借助工具类的静态方法校验空字符串：
```java
ObjectUtils.isEmpty(emptyString)
```

## 总结

有几种方法可以检查字符串是否为空。通常，我们还想检查字符串是否为空格组成。

最方便的方法是使用 `Apache Commons Lang` ，它提供了 `StringUtils.isBlank` 等便捷方法。

如果我们想坚持使用纯Java，我们可以将 `String#trim` 与 `String#isEmpty` 或 `String#length` 组合使用。

对于 `Java Bean Validation`，可以使用正则表达式。