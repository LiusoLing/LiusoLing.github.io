---
# 这是文章的标题
title: 08. Array和List之间的转换
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 8
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-03
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - arryay
  - list
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

本节学习如何使用核心 Java 库、Guava 和 Apache Commons Collections 在 Array 和 List 之间进行转换。

<!-- more -->

## 1.Java普通方法

使用普通 Java 从 List 到 Array 的转换：

```java
@Test
public void givenUsingCoreJava_whenListConvertedToArray_thenCorrect() {
    List<Integer> sourceList = Arrays.asList(0, 1, 2, 3, 4, 5);
    Integer[] targetArray = sourceList.toArray(new Integer[0]);
}
```

从 Array 到List：

```java
@Test
public void givenUsingCoreJava_whenArrayConvertedToList_thenCorrect() {
    Integer[] sourceArray = { 0, 1, 2, 3, 4, 5 };
    List<Integer> targetList = Arrays.asList(sourceArray);
}
```
请注意，这是一个固定大小的列表，仍将由数组支持。如果我们想要一个标准的 ArrayList，我们可以简单地实例化一个：

```java
List<Integer> targetList = new ArrayList<Integer>(Arrays.asList(sourceArray));
```


## 2.使用Guava

使用 Guava API 进行相同的转换：

```java
@Test
public void givenUsingGuava_whenListConvertedToArray_thenCorrect() {
    List<Integer> sourceList = Lists.newArrayList(0, 1, 2, 3, 4, 5);
    int[] targetArray = Ints.toArray(sourceList);
}
```

从 Array 到List：

```java
@Test
public void givenUsingGuava_whenArrayConvertedToList_thenCorrect() {
    Integer[] sourceArray = { 0, 1, 2, 3, 4, 5 };
    List<Integer> targetList = Lists.newArrayList(sourceArray);
}
```


## 3.使用Apache Commons Collections

使用 Apache Commons CollectionsCollectionUtils.addAll() API 可以将数组的元素填充到空 List 中：

```java
@Test 
public void givenUsingCommonsCollections_whenArrayConvertedToList_thenCorrect() { 
    Integer[] sourceArray = { 0, 1, 2, 3, 4, 5 }; 
    List<Integer> targetList = new ArrayList<>(6); 
    CollectionUtils.addAll(targetList, sourceArray); 
}
```