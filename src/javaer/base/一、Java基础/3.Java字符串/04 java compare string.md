---
# 这是文章的标题
title: 04. Java比较字符串
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
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

在本文章中，学习如何使用不同方式在Java中比较字符串。

由于String是Java中最常用的数据类型之一，这自然是一个非常常用的操作。
<!-- more -->

## 字符串与字符串类的比较

### 1.使用“==”比较运算符

使用 `==` 运算符比较文本值是Java初学者最常见的错误之一。

这是错误的，因为 `==` 只检查两个字符串的引用地址是否相同，而不比较它们的内容。

看一个 `==` 运算符比较示例：

```java
String string1 = "using comparison operator";
String string2 = "using comparison operator";
String string3 = new String("using comparison operator");
 
assertThat(string1 == string2).isTrue(); // 断言为真
assertThat(string1 == string3).isFalse(); // 断言为假
```

第一个断言为真，因为两个变量指向相同的字符串文字。

第二个断言为假，因为 string1 是用文字创建的，而 string3 是使用 new 运算符创建的，因此它们引用了不同的对象。

### 2.使用equals()方法

`String` 类重写了从 `Object` 继承的 `equals()`。该方法逐个字符比较两个字符串，忽略它们的地址。

如果它们长度相同，字符顺序相同，则认为它们相等，这才是正确的字符串比较方法：

看一个 `equal()` 示例：

```java
String string1 = "using equals method";
String string2 = "using equals method";
        
String string3 = "using EQUALS method";
String string4 = new String("using equals method");

assertThat(string1.equals(string2)).isTrue(); // 断言为真
assertThat(string1.equals(string4)).isTrue(); // 断言为真

assertThat(string1.equals(null)).isFalse(); // 断言为假
assertThat(string1.equals(string3)).isFalse(); // 断言为真
```

`string1`、`string2` 和 `string4` 变量是相等的，因为它们具有相同的大小写和值，无论其引用地址如何。

而比较的两个字符串，任意一个为null，都返回false。

### 3.使用 equalsIgnoreCase()方法

equalsIgnoreCase()方法返回一个布尔值。顾名思义，此方法在比较字符串时忽略了字符大小写：

```java
String string1 = "using equals ignore case";
String string2 = "USING EQUALS IGNORE CASE";

assertThat(string1.equalsIgnoreCase(string2)).isTrue();
```

### 4.使用 compareTo()方法

compareTo()方法返回一个int类型值，并根据字典或自然顺序按字符词典比较两个字符串字符。

如果两个字符串相等，则返回0，如果第一个字符串在参数之前，则返回负数，如果第一个字符串在参数字符串之后，则返回大于零的数字。

看一个 `compareTo()` 示例：

```java
String author = "author";
String book = "book";
String duplicateBook = "book";

assertThat(author.compareTo(book)).isEqualTo(-1);
assertThat(book.compareTo(author)).isEqualTo(1);
assertThat(duplicateBook.compareTo(book)).isEqualTo(0);
```

### 5.使用 compareToIgnoreCase()方法

`compareToIgnoreCase()` 与 `compreTo()` 方法相似，只是它忽略了大小写：

```java
String author = "Author";
String book = "book";
String duplicateBook = "BOOK";

assertThat(author.compareToIgnoreCase(book)).isEqualTo(-1);
assertThat(book.compareToIgnoreCase(author)).isEqualTo(1);
assertThat(duplicateBook.compareToIgnoreCase(book)).isEqualTo(0);
```

## Objects类的equals()方法字符串比较

`Objects` 类包含一个 `equals()` 的静态方法，在比较字符串时非常有用。

如果两个字符串相等，则该方法返回true，首先使用其地址（即“==”）进行比较。因此，如果两个参数都是空的，则返回true，如果恰好一个参数为空，则返回false。

否则，它只需调用传递的参数类型类的equals()方法（如果传入的是 String 类型，即调用 String 内部的 equals 方法）：

```java
String string1 = "using objects equals";
String string2 = "using objects equals";
String string3 = new String("using objects equals");

assertThat(Objects.equals(string1, string2)).isTrue();
assertThat(Objects.equals(string1, string3)).isTrue();

assertThat(Objects.equals(null, null)).isTrue();
assertThat(Objects.equals(null, string1)).isFalse();
```

## Apache Commons方法字符串比较

`Apache Commons` 库包含一个名为 `StringUtils` 的实用工具类，用于与字符串相关的操作；

```java
assertThat(StringUtils.equals(null, null)).isTrue();
assertThat(StringUtils.equals(null, "equals method")).isFalse();
assertThat(StringUtils.equals("equals method", "equals method")).isTrue();
assertThat(StringUtils.equals("equals method", "EQUALS METHOD")).isFalse();

assertThat(StringUtils.equalsIgnoreCase("equals method", "equals method")).isTrue();
assertThat(StringUtils.equalsIgnoreCase("equals method", "EQUALS METHOD")).isTrue();
```

`equalsAny()` 方法的第一个参数是 `String`，第二个是 `args` 类型 `CharSequence`。

任何其他给定的字符串与第一个字符串大小写匹配，则该方法返回true，否则，返回false：

```java
assertThat(StringUtils.equalsAny(null, null, null)).isTrue();
assertThat(StringUtils.equalsAny("equals any", "equals any", "any")).isTrue();
assertThat(StringUtils.equalsAny("equals any", null, "equals any")).isTrue();
assertThat(StringUtils.equalsAny(null, "equals", "any")).isFalse();
assertThat(StringUtils.equalsAny("equals any", "EQUALS ANY", "ANY")).isFalse();

assertThat(StringUtils.equalsAnyIgnoreCase("ignore case", "IGNORE CASE", "any")).isTrue();
```

`StringUtils`` 类中的 `compare()`` 方法是 String 类 compareTo() 方法的空安全版本，通过考虑小于非空值的null来处理空值。

两个null值被认为是相等的：

```java
assertThat(StringUtils.compare(null, null)).isEqualTo(0);
assertThat(StringUtils.compare(null, "abc")).isEqualTo(-1);
assertThat(StringUtils.compare("abc", "bbc")).isEqualTo(-1);
assertThat(StringUtils.compare("bbc", "abc")).isEqualTo(1);

assertThat(StringUtils.compareIgnoreCase("Abc", "bbc")).isEqualTo(-1);
assertThat(StringUtils.compareIgnoreCase("bbc", "ABC")).isEqualTo(1);
assertThat(StringUtils.compareIgnoreCase("abc", "ABC")).isEqualTo(0);
```


