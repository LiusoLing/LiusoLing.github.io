---
# 这是文章的标题
title: 01. Java字符串初识
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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

`String` 可以说是编码过程中最常用的数据类型之一，所以了解它非常重要。

`String` 是Java定义的一种数据类型，是Java中的一个类，位于 `java.lang` 包下。

`String` 是引用数据类型，遵循引用类型的基本规律和要求。

<!-- more -->

## 什么是`String`类

`String` 类是 Java 标准库中提供的一个核心类，定义在 `java.lang` 包下，是一个 `final` 类，不可被继承，用于表示字符串的不可变序列。

```java
//JDK String 类源码
package java.lang;

import ......;

public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
      ......
}
```

## String类图

我们先来看下 `String` 的类图：

![String类图](/assets/images/base/string-uml.jpg)


结合源代码（太长不贴），可以得出 `String` 类的几个特点：

- String对象不可变：一旦创建出一个String对象，其值就不能被改变。任何对String对象的操作，都会返回一个新的String对象，原始对象保持不变。这种特性使String对象具有线程安全性和内存安全性。
- String不可被继承：String类被final修饰，是一个不可被继承的类。
- String可以序列化：String类实现了 Serializable 接口，这意味着它可以序列化。
- String可以做比较：String类实现了 Comparable 接口，所以不要用 `==` 比较字符串是否相等，可以使用 `compareTo()`。


## 创建String对象

下面代码演示了三种常用的创建 `String` 对象的方法：
```java
String str1 = "hello"; //字面量创建对象str1，值是"hello"
String str2 = new String();//不传参，创建空null的字符串对象，使用时再赋值
String str3 = new String("hello")//创建对象str3，值是"hello"
```

`String` 类有 11 种构造方法，这些方法提供不同的参数来初始化字符串，具体可以查看 `String` 源代码。

## String支持方法

下面是`String`类提供的方法，更多详细，可以查看 [Java String API](https://www.runoob.com/manual/jdk11api/java.base/java/lang/String.html)

| 方法名 | 方法描述 |
|--------|---------|
| `charAt(int index)` | 返回指定索引处的字符 |
| `codePointAt(int index)` | 返回指定索引处的字符（Unicode 代码点） |
| `codePointBefore(int index)` | 返回指定索引之前的字符（Unicode 代码点） |
| `codePointCount(int beginIndex, int endIndex)` | 返回此字符串中的 Unicode 代码点数 |
| `compareTo(String anotherString)` | 按字典顺序比较两个字符串 |
| `compareToIgnoreCase(String str)` | 按字典顺序比较两个字符串，不考虑大小写 |
| `concat(String str)` | 将指定字符串连接到此字符串的末尾 |
| `contains(CharSequence sequence)` | 判断此字符串是否包含指定的字符序列 |
| `contentEquals(CharSequence cs)` | 判断此字符串是否与指定的字符序列相等 |
| `endsWith(String suffix)` | 测试此字符串是否以指定的后缀结束 |
| `equals(Object anObject)` | 将此字符串与指定的对象比较 |
| `equalsIgnoreCase(String anotherString)` | 将此字符串与指定的字符串比较，忽略大小写 |
| `getBytes()` | 使用平台的默认字符集将该 String 编码为字节数组 |
| `getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)` | 将字符从此字符串复制到目标字符数组 |
| `hashCode()` | 返回此字符串的哈希码 |
| `indexOf(int ch)` | 返回指定字符在此字符串中第一次出现的索引 |
| `indexOf(int ch, int fromIndex)` | 返回指定字符在此字符串中第一次出现的索引，从指定的索引开始搜索 |
| `indexOf(String str)` | 返回指定子字符串在此字符串中第一次出现的索引 |
| `indexOf(String str, int fromIndex)` | 返回指定子字符串在此字符串中第一次出现的索引，从指定的索引开始搜索 |
| `intern()` | 返回字符串对象的规范化表示形式 |
| `isEmpty()` | 当且仅当 length() 为 0 时返回 true |
| `lastIndexOf(int ch)` | 返回指定字符在此字符串中最后一次出现的索引 |
| `lastIndexOf(int ch, int fromIndex)` | 返回指定字符在此字符串中最后一次出现的索引，从指定的索引开始反向搜索 |
| `lastIndexOf(String str)` | 返回指定子字符串在此字符串中最右边出现的索引 |
| `lastIndexOf(String str, int fromIndex)` | 返回指定子字符串在此字符串中最后一次出现的索引，从指定的索引开始反向搜索 |
| `length()` | 返回此字符串的长度 |
| `matches(String regex)` | 判断此字符串是否匹配给定的正则表达式 |
| `regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len)` | 测试两个字符串区域是否相等 |
| `replace(char oldChar, char newChar)` | 返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的 |
| `replace(CharSequence target, CharSequence replacement)` | 将与给定的 target 匹配的此字符串的子字符串替换为指定的字符串 |
| `replaceAll(String regex, String replacement)` | 使用给定的 replacement 替换此字符串所有匹配给定的正则表达式的子字符串 |
| `replaceFirst(String regex, String replacement)` | 使用给定的 replacement 替换此字符串匹配给定的正则表达式的第一个子字符串 |
| `split(String regex)` | 根据给定正则表达式的匹配拆分此字符串 |
| `startsWith(String prefix)` | 测试此字符串是否以指定的前缀开始 |
| `startsWith(String prefix, int toffset)` | 测试此字符串从指定索引开始是否以指定的前缀开始 |
| `subSequence(int beginIndex, int endIndex)` | 返回一个新的字符序列，它是此序列的一个子序列 |
| `substring(int beginIndex)` | 返回从指定索引开始到末尾的子字符串 |
| `substring(int beginIndex, int endIndex)` | 返回指定索引范围的子字符串 |
| `toCharArray()` | 将此字符串转换为一个新的字符数组 |
| `toLowerCase()` | 使用默认语言环境的规则将此字符串转换为小写 |
| `toUpperCase()` | 使用默认语言环境的规则将此字符串转换为大写 |
| `trim()` | 返回字符串的副本，删除前导空白和尾部空白 |
| `valueOf(boolean b)` | 返回 boolean 参数的字符串表示形式 |
| `valueOf(char c)` | 返回 char 参数的字符串表示形式 |
| `valueOf(char[] data)` | 返回 char 数组参数的字符串表示形式 |
| `valueOf(char[] data, int offset, int count)` | 返回 char 数组参数的子数组的字符串表示形式 |
| `valueOf(double d)` | 返回 double 参数的字符串表示形式 |
| `valueOf(float f)` | 返回 float 参数的字符串表示形式 |
| `valueOf(int i)` | 返回 int 参数的字符串表示形式 |
| `valueOf(long l)` | 返回 long 参数的字符串表示形式 |
| `valueOf(Object obj)` | 返回 Object 参数的字符串表示形式 |
