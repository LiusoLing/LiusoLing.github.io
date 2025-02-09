---
# 这是文章的标题
title: 06. HashSet
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 6
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

本节探讨另一种集合数据结构，HashSet，最流行的 Set 实现之一。

<!-- more -->

## 1.HashSet简介

HashSet 是 Java Collections API 中的基本数据结构之一.

让我们了解一下它重要的点：

- 它存储元素唯一并允许 null；
- 它由 HashMap 提供支持；
- 它不维持插入顺序；
- 它不是线程安全的。

请注意，这个内部 HashMap 在创建 HashSet 的实例时被初始化：

```java
public HashSet() {
    map = new HashMap<>();
}
```

## 2.添加

add（） 方法可用于将元素添加到集合中。方法协定规定，仅当元素尚未存在于 set 中时，才会添加该元素。如果添加了元素，则该方法返回 true，否则返回 false 。

```java
@Test
public void whenAddingElement_shouldAddElement() {
    Set<String> hashset = new HashSet<>();
 
    assertTrue(hashset.add("String Added"));
}
```
实现细节说明了 HashSet内部的工作原理，它利用了 HashMap的 put方法：

```java
public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}
```

map 变量是对内部支持的 HashMap的引用：

```java
private transient HashMap<E, Object> map;
```

## 3.包含

contains 方法的目的是检查给定的 HashSet 中是否存在元素。 如果找到元素，则返回 true，否则返回 false。

```java
@Test
public void whenCheckingForElement_shouldSearchForElement() {
    Set<String> hashsetContains = new HashSet<>();
    hashsetContains.add("String Added");
 
    assertTrue(hashsetContains.contains("String Added"));
}
```

每当将对象传递给此方法时，都会计算哈希值。然后，解析并遍历相应的存储桶位置。


## 4.删除

该方法从集中删除指定的元素（如果存在）。如果集合包含指定的元素，则此方法返回 true。

```java
@Test
public void whenRemovingElement_shouldRemoveElement() {
    Set<String> removeFromHashSet = new HashSet<>();
    removeFromHashSet.add("String Added");
 
    assertTrue(removeFromHashSet.remove("String Added"));
}
```

如果打算从 Set 中删除所有元素时，可以使用 清除方法：

```java
@Test
public void whenClearingHashSet_shouldClearHashSet() {
    Set<String> clearHashSet = new HashSet<>();
    clearHashSet.add("String Added");
    clearHashSet.clear();
    
    assertTrue(clearHashSet.isEmpty());
}
```

## 5.迭代器

该方法返回 Set 中元素的迭代器。元素的访问没有特定的顺序，迭代器是快速失败的。

```java
@Test
public void whenIteratingHashSet_shouldIterateHashSet() {
    Set<String> hashset = new HashSet<>();
    hashset.add("First");
    hashset.add("Second");
    hashset.add("Third");
    Iterator<String> itr = hashset.iterator();
    while(itr.hasNext()){
        System.out.println(itr.next());
    }
}
```

如果在创建迭代器后的任何时间以除迭代器自己的 remove 方法以外的任何方式修改了该 Set 集合，则迭代器将引发 ConcurrentModificationException。

如果我们使用迭代器的 remove 方法，那么我们就不会遇到异常：

```java
@Test
public void whenRemovingElementUsingIterator_shouldRemoveElement() {
 
    Set<String> hashset = new HashSet<>();
    hashset.add("First");
    hashset.add("Second");
    hashset.add("Third");
    Iterator<String> itr = hashset.iterator();
    while (itr.hasNext()) {
        String element = itr.next();
        if (element.equals("Second"))
            itr.remove();
    }
 
    assertEquals(2, hashset.size());
}
```

## 6.唯一性

当我们将一个对象放入 HashSet 中时，它使用该对象的 hashcode 值来确定某个元素是否已经不在集合中。

每个哈希代码值对应于一个特定的存储桶位置，该位置可以包含各种元素，计算出的哈希值相同。但是具有相同 hashCode 的两个对象可能不相等。

因此，将使用 equals（） 方法比较同一存储桶中的对象。


## 7.性能

HashSet 的性能主要受两个参数的影响——初始容量和负载因子。

向 set 添加元素的预期时间复杂度为 O（1），在最坏的情况下（只有一个存储桶）可能会下降到 O（n） —— 因此，保持正确的 HashSet 容量至关重要。

重要提示：从 JDK 8 开始，最坏情况下的时间复杂度是 O（log*n）。

负载系数描述了最大填充级别是多少，超过该级别，需要调整一组的大小。

我们还可以创建一个具有初始容量和负载因子自定义值的 HashSet：

```java
Set<String> hashset = new HashSet<>();
Set<String> hashset = new HashSet<>(20);
Set<String> hashset = new HashSet<>(20, 0.5f);
```

在第一种情况下，使用默认值 – 初始容量 16 和负载系数 0.75。
在第二个版本中，我们覆盖默认容量，
在第三个版本中，我们覆盖这两个容量。

**较低的初始容量会降低空间复杂性，但会增加重新哈希的频率，这是昂贵的代价。另一方面，较高的初始容量会增加迭代成本和初始内存消耗。**

根据经验：

- 高初始容量适用于大量条目，并且很少或没有迭代；
- 较低的初始容量适用于具有大量迭代的几个条目。

因此，在两者之间取得正确的平衡非常重要。
