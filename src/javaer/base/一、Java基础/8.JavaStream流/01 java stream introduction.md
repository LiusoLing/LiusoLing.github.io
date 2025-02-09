---
# 这是文章的标题
title: 01. Stream流
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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
  - Stream
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

本文快速浏览 java 8 添加的主要新功能之一 - Streams。

<!-- more -->

## 1.Stream API

Java 8 中的主要新特性之一是引入了流功能 java.util.stream ，它包含用于处理元素序列的类。

中心 API 类是 `Stream<T>`。 


## 2.创建Stream
借助 stream（） 和 of（） 方法，可以从不同的元素源（例如集合或数组）创建流：

```java
String[] arr = new String[]{"a", "b", "c"};
Stream<String> stream = Arrays.stream(arr);
stream = Stream.of("a", "b", "c");
```

在 Collection 接口中添加了一个 stream（） 默认方法，并允许使用任何集合作为元素源来创建 `Stream<T>`:
```java
Stream<String> stream = list.stream();
```

## 3.Stream中的多线程

Stream API 还通过提供 parallelStream（） 方法简化了多线程处理，该方法以并行模式对流的元素运行作。

```java
list.parallelStream().forEach(element -> doWork(element));
```

## 4.Stream动作

可以对流执行许多有用的动作。

它们分为中间动作 （return `Stream<T>`） 和终端动作 （返回确定类型的结果）。

中间动作允许串联，而且对 streams 的动作不会更改源。

```java
long count = list.stream().distinct().count();
```

distinct（） 方法表示一个中间动作，它创建一个包含前一个流的唯一元素的新流。count（） 方法是一个终端动作，它返回 stream 的大小。

## 5,迭代

Stream API 有助于 substitute for、for-each 和 while 循环。

```java
for (String string : list) {
    if (string.contains("a")) {
        return true;
    }
}
```

使用 Stream 后：

```java
boolean isExist = list.stream().anyMatch(element -> element.contains("a"));
```

## 6.过滤

filter（） 方法允许我们选择满足谓词的元素流。

以下代码创建 `List<String>` 的 `Stream<String>`，查找此流中包含字符 “d” 的所有元素，并创建一个仅包含筛选元素的新流：

```java
ArrayList<String> list = new ArrayList<>();
list.add("One");
list.add("OneAndOnly");
list.add("Derek");
list.add("Change");
list.add("factory");
list.add("justBefore");
list.add("Italy");
list.add("Italy");
list.add("Thursday");
list.add("");
list.add("");

Stream<String> stream = list.stream().filter(element -> element.contains("d"));
```

## 7.映射

通过对 Stream 的元素应用特殊函数来转换它们并将这些新元素收集到 Stream 中，我们可以使用 map（） 方法：

```java
List<String> uris = new ArrayList<>();
uris.add("C:\\My.txt");
Stream<Path> stream = uris.stream().map(uri -> Paths.get(uri));
```
上面的代码通过将特定的 lambda 表达式应用于初始 Stream 的每个元素，将 `Stream<String>` 转换为 `Stream<Path>`。

如果你有一个流，其中每个元素都包含它嵌套元素，并且你想创建一个所有内部元素的扁平流，你应该使用 flatMap（） 方法：

```java
List<Detail> details = new ArrayList<>();
details.add(new Detail());
Stream<String> stream
  = details.stream().flatMap(detail -> detail.getParts().stream());
```

在此示例中，我们有一个 Detail 类型的元素列表。Detail 类包含一个字段 PARTS，该字段是 `List<String>`。

在 flatMap（） 方法的帮助下，字段 PARTS 中的每个元素都将被提取并添加到新的结果流中。

## 8.匹配

Stream API 提供了一组方便的工具，用于根据某些谓词验证序列的元素。为此，可以使用以下方法之一：

anyMatch（）、allMatch（）、noneMatch（）。 

```java
boolean isValid = list.stream().anyMatch(element -> element.contains("h")); // true
boolean isValidOne = list.stream().allMatch(element -> element.contains("h")); // false
boolean isValidTwo = list.stream().noneMatch(element -> element.contains("h")); // false
```

对于空流，具有任何给定谓词的 allMatch（） 方法都将返回 true：

```java
Stream.empty().allMatch(Objects::nonNull); // true
```

同样，anyMatch（） 方法总是为空流返回 false：

```java
Stream.empty().anyMatch(Objects::nonNull); // false
```

## 9.减少

Stream API 允许借助 Stream 类型的 reduce（） 方法，根据指定的函数将元素序列减少到某个值。此方法采用两个参数：first – 起始值，second – 累加器函数。

假设有一个 `List<Integer>`，并且您希望获得所有这些元素和一些初始 Integer 的总和（在本例中为 23）。

您可以运行以下代码，结果将为 26 （23 + 1 + 1 + 1）。

```java
List<Integer> integers = Arrays.asList(1, 1, 1);
Integer reduced = integers.stream().reduce(23, (a, b) -> a + b);
```

## 10.收集

reduce 也可以由 Stream 类型的 collect（） 方法提供。在将流转换为 Collection 或 Map 并以单个字符串的形式表示流的情况下，此作非常方便。 

有一个实用程序类 Collectors，它为几乎所有典型的收集作提供了解决方案。对于某些重要的任务，可以创建自定义 Collector。

```java
List<String> resultList 
  = list.stream().map(element -> element.toUpperCase()).collect(Collectors.toList());
```