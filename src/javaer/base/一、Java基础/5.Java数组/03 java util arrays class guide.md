---
# 这是文章的标题
title: 03. java.util.Arrays类指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-02
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - array
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

java.util.Arrays是Java程序包中的类，使用它，我们可以创建、比较、排序、搜索、流式传输和转换数组。

<!-- more -->


## 1.创建

`copyOfRange`，我们需要原始数组以及要复制的开始索引（包括）和结束索引（不包括）：
```java
String[] intro = new String[] { "once", "upon", "a", "time" };
String[] abridgement = Arrays.copyOfRange(storyIntro, 0, 3); 

assertArrayEquals(new String[] { "once", "upon", "a" }, abridgement); 
assertFalse(Arrays.equals(intro, abridgement));
```
要使用 copyOf，我们将获取 intro 和目标数组大小，然后返回该长度的新数组。

```java
String[] revised = Arrays.copyOf(intro, 3);
String[] expanded = Arrays.copyOf(intro, 5);

assertArrayEquals(Arrays.copyOfRange(intro, 0, 3), revised);
assertNull(expanded[4]);
```

请注意，如果我们的目标大小大于原始大小，则 copyOf 会用 nulls 填充数组

另一种方法可以创建一个固定长度的数组，即 fill， 当我们想要一个所有元素都相同的数组时，这很有用：

```java
String[] stutter = new String[3];
Arrays.fill(stutter, "once");

assertTrue(Stream.of(stutter)
  .allMatch(el -> "once".equals(el));
```


## 2.比较

我们使用 equals 按大小和内容进行简单的数组比较，如果我们将 null 添加为元素之一，则内容检查将失效：

```java
assertTrue(
  Arrays.equals(new String[] { "once", "upon", "a", "time" }, intro));
assertFalse(
  Arrays.equals(new String[] { "once", "upon", "a", null }, intro));
```

当我们有嵌套或多维数组时，我们可以使用 deepEquals来检查顶级元素，还可以递归地执行检查：

```java
Object[] story = new Object[] { intro, new String[] { "chapter one", "chapter two" }, end };
Object[] copy = new Object[] { intro, new String[] { "chapter one", "chapter two" }, end };

assertTrue(Arrays.deepEquals(story, copy));
assertFalse(Arrays.equals(story, copy));
```

因为 deepEquals 每次遇到 数组时最终都会调用自身，而 equals 将简单地比较子数组的引用。

就同equals的区别， hashCode 和 deepHashCode也有区别：

```java
Object[] looping = new Object[]{ intro, intro }; 
int hashBefore = Arrays.hashCode(looping);
int deepHashBefore = Arrays.deepHashCode(looping);

intro[3] = null;
int hashAfter = Arrays.hashCode(looping);
int deepHashAfter = Arrays.deepHashCode(looping);
assertEquals(hashAfter, hashBefore);
assertNotEquals(deepHashAfter, deepHashBefore);
```

## 3.排序和搜索

如果我们的元素是 基本数据类型 或它们实现了 Comparable，我们可以使用 sort 来执行内联排序：
```java
String[] sorted = Arrays.copyOf(intro, 4);
Arrays.sort(sorted);

assertArrayEquals(new String[]{ "a", "once", "time", "upon" }, sorted);
```

**注意 sort 会改变原始引用**，这就是我们在这里执行 copy 的原因。

sort 将对不同的数组元素类型使用不同的算法。
- 原始类型使用双枢轴快速排序，
- Object 类型使用 Timsort。
- 对于随机排序的数组，两者都具有 O（n log（n）） 的平均情况。

从 Java 8 开始，parallelSort 可用于并行排序-合并。 它提供了一种使用多个 Arrays.sort 任务的并发排序方法。

在未排序的数组中搜索是线性的，但是如果我们有一个排序的数组，那么我们可以在 O（log n） 中进行搜索，这就是我们可以使用 binarySearch 执行的作：

```java
int exact = Arrays.binarySearch(sorted, "time");
int caseInsensitive = Arrays.binarySearch(sorted, "TiMe", String::compareToIgnoreCase);

assertEquals("time", sorted[exact]);
assertEquals(2, exact);
assertEquals(exact, caseInsensitive);
```

如果我们不提供 Comparator 作为第三个参数，则 binarySearch 将我们的元素类型视为 Comparable 类型。

**如果我们的数组没有首先排序，那么 binarySearch 将无法按预期工作**


## 4.Stream流

Java8 的Stream对 Arrays有一些方法API

```java
Assert.assertEquals(Arrays.stream(intro).count(), 4);

exception.expect(ArrayIndexOutOfBoundsException.class);
Arrays.stream(intro, 2, 1).count();
```

我们可以为流提供包含和排除索引，但如果索引无序、负数或超出范围，我们会得到 ArrayIndexOutOfBoundsException。


## 5.打印

使用 toString 可以打印数组内容：

```java
assertEquals("[once, upon, a, time]", Arrays.toString(storyIntro));
```

如果是嵌套数组，那么就必须使用 deepToStrng打印：

```java
assertEquals(
  "[[once, upon, a, time], [chapter one, chapter two], [the, end]]",
  Arrays.deepToString(story));
```


## 6.asList

Arrays 提供 asList 方法可以将数组转换为集合：

```java
List<String> rets = Arrays.asList(storyIntro);

assertTrue(rets.contains("upon"));
assertTrue(rets.contains("time"));
assertEquals(rets.size(), 4);
```

但是，返回的 List 将是固定长度的，因此我们无法添加或删除元素。

## 7.设置元素

Arrays 提供 setAll 方法可以设置数组元素：

```java
String[] longAgo = new String[4];
Arrays.setAll(longAgo, i -> this.getWord(i)); 
assertArrayEquals(longAgo, new String[]{"a","long","time","ago"});
```

## 8.parallelPrefix

如果运算符执行加法，如下图所示，则【1，2，3，4】将生成【1，3，6，10】：

```java
int[] arr = new int[] { 1, 2, 3, 4};
Arrays.parallelPrefix(arr, (left, right) -> left + right);
assertThat(arr, is(new int[] { 1, 3, 6, 10}));
```

此外，我们可以为动作指定一个子范围：
```java
int[] arri = new int[] { 1, 2, 3, 4, 5 };
Arrays.parallelPrefix(arri, 1, 4, (left, right) -> left + right);
assertThat(arri, is(new int[] { 1, 2, 5, 9, 5 }));
```

该方法是并行执行的，累积动作也是独立的。


## 9.性能

并行前缀计算通常比 Sequential Loop 更有效，尤其是对于大型数组。
在使用 JMH 的 Intel Xeon 机器（6 核）上运行微基准测试时，以下是基准测试代码：

```java
@Benchmark
public void largeArrayLoopSum(BigArray bigArray, Blackhole blackhole) {
  for (int i = 0; i < ARRAY_SIZE - 1; i++) {
    bigArray.data[i + 1] += bigArray.data[i];
  }
  blackhole.consume(bigArray.data);
}

@Benchmark
public void largeArrayParallelPrefixSum(BigArray bigArray, Blackhole blackhole) {
  Arrays.parallelPrefix(bigArray.data, (left, right) -> left + right);
  blackhole.consume(bigArray.data);
}
```


我们可以看到性能有了很大的提升：

```java
Benchmark                      Mode        Cnt       Score   Error        Units
largeArrayLoopSum             thrpt         5        9.428 ± 0.075        ops/s
largeArrayParallelPrefixSum   thrpt         5       15.235 ± 0.075        ops/s

Benchmark                     Mode         Cnt       Score   Error        Units
largeArrayLoopSum             avgt          5      105.825 ± 0.846        ops/s
largeArrayParallelPrefixSum   avgt          5       65.676 ± 0.828        ops/s
```