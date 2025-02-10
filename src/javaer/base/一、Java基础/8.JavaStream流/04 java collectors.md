---
# 这是文章的标题
title: 04. Collectors
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-04
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - stream
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

在Java 8中，`Collectors`是一个用于聚合数据的工具，可以与Streams API结合使用。

通过`Collectors`，我们可以将流中的元素收集到集合中、拼接字符串、统计元素等。

<!-- more -->

## 1. Collectors的基本用法

`Collectors`类提供了多种静态方法，允许开发者方便地将流中的元素汇聚成各种数据结构，最常见的是List、Set或者Map。

**示例:收集流中的元素到List**

```java
List<String> list = Stream.of("a"， "b"， "c").collect(Collectors.toList());
```

## 2. 常用的Collectors方法

- **toList()**:将流的元素收集到List中。
- **toSet()**:将流的元素收集到Set中。
- **toMap()**:将流的元素收集到Map中。

**示例:收集流中的元素到Map**

```java
Map<Integer， String> map = Stream.of("a"， "b"， "c")
    .collect(Collectors.toMap(String::length， Function.identity()));
```

## 3. 聚合操作

`Collectors`还支持各种聚合操作，如计数、求和等。

- **counting()**:统计流中的元素数量。
- **summarizingInt()**:统计整数类型元素的汇总信息(总数、最小值、最大值、平均值等)。

**示例:元素计数**

```java
long count = Stream.of("a"， "b"， "a")
    .collect(Collectors.counting());
```

## 4. 分组和分区

- **groupingBy()**:根据某个属性对元素进行分组。
- **partitioningBy()**:将流的元素划分成两个集合，基于给定的条件。

**示例:按字符串长度分组**

```java
Map<Integer， List<String>> groupedByLength = Stream.of("a"， "bb"， "ccc")
    .collect(Collectors.groupingBy(String::length));
```

**示例:按条件分区**

```java
Map<Boolean， List<String>> partitioned = Stream.of("a"， "bb"， "ccc")
    .collect(Collectors.partitioningBy(s -> s.length() > 1));
```

## 5. 自定义收集器

如果内置的收集器无法满足需求，可以自定义收集器。要实现一个自定义的收集器，需要实现`Collector`接口。

**示例:自定义收集器**

```java
Collector<String， StringBuilder， String> customCollector =
    Collector.of(StringBuilder::new， StringBuilder::append， StringBuilder::append， StringBuilder::toString);
```

## 总结

`Collectors`是Java 8的强大特性，使得数据聚合操作变得简单而高效。

通过结合Streams API，我们可以用更加声明式的风格处理数据，提高代码的可读性和可维护性。