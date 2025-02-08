---
# 这是文章的标题
title: 01. ArrayList
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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

ArrayList 是一个构建在数组之上的 List 实现，它可以在我们 添加/删除 元素时动态的增长和收缩，我们可以通过索引来访问元素：

- 随机访问时间复杂度为 O(1) 次
- 添加一个元素的均摊时间复杂度为 O(1)
- 插入/删除元素的时间复杂度为 O(n)
- 对于未排序的数组，搜索需要 O(n) 时间，已排序的，搜索需要 O(log n)时间

<!-- more -->

## 1.创建 ArrayList

首先, `ArrayList<E>` 是一个泛型类;因此，我们可以用我们想要的任何类型的方式来参数化它。
编译器检查我们不能使用不兼容的类型。例如，我们不能将 Integer 值放在 String 集合中。对此，从集合中检索元素时，我们不需要强制转换元素。

我们应该使用通用接口 `List<E>` 作为变量类型作为最佳实践，因为它将其与任何特定实现分离。

大部分情况下，默认使用无参构造函数创建空的 ArrayList 实例：

```java
List<String> list = new ArrayList<>();
assertTrue(list.isEmpty());
```

也可以创建指定初始长度的集合，避免在使用初始容量的集合在添加新元素时进行不必要的大小调整：

```java
List<String> list = new ArrayList<>(20);
```

我们可以使用 Collection 实例的元素创建一个新的 ArrayList 实例来填充底层数组：

```java
Collection<Integer> numbers = IntStream.range(0, 10).boxed().collect(toSet());

List<Integer> list = new ArrayList<>(numbers);
assertEquals(10, list.size());
assertTrue(numbers.containsAll(list));
```

## 2.添加元素

我们可以在末尾或特定索引位置添加元素：

```java
List<Long> list = new ArrayList<>();

list.add(1L);
list.add(2L);
list.add(1, 3L);

assertThat(Arrays.asList(1L, 3L, 2L), equalTo(list));
```

我们还可以添加一个集合或一批元素：

```java
List<Long> list = new ArrayList<>(Arrays.asList(1L, 2L, 3L));
LongStream.range(4, 10).boxed()
  .collect(collectingAndThen(toCollection(ArrayList::new), ys -> list.addAll(0, ys)));
assertThat(Arrays.asList(4L, 5L, 6L, 7L, 8L, 9L, 1L, 2L, 3L), equalTo(list));
```

## 3.迭代

ArrayList 有两种类型的迭代器可使用：Iterator 和 ListIterator。

我们使用 Iterator 仅在一个方向上遍历列表，使用 ListIterator 在两个方向上遍历它。

```java
List<Integer> list = new ArrayList<>(
  IntStream.range(0, 10).boxed().collect(toCollection(ArrayList::new))
);
ListIterator<Integer> it = list.listIterator(list.size());
List<Integer> result = new ArrayList<>(list.size());
while (it.hasPrevious()) {
    result.add(it.previous());
}

Collections.reverse(list);
assertThat(result, equalTo(list));
```

我们还可以使用迭代器搜索、添加或删除元素。

使用集合进行搜索：

```java
List<String> list = LongStream.range(0, 16)
  .boxed()
  .map(Long::toHexString)
  .collect(toCollection(ArrayList::new));
List<String> stringsToSearch = new ArrayList<>(list);
stringsToSearch.addAll(list);
```

## 4.查找

我们可以使用 indexOf（） 或 lastIndexOf（） 方法来查找元素。它们都接受一个对象并返回一个 int 值：

```java
assertEquals(10, stringsToSearch.indexOf("a"));
assertEquals(26, stringsToSearch.lastIndexOf("a"));
```

如果要找到满足条件的元素，可以使用 Java8 的 Stream API：

```java
Set<String> matchingStrings = new HashSet<>(Arrays.asList("a", "c", "9"));

List<String> result = stringsToSearch
  .stream()
  .filter(matchingStrings::contains)
  .collect(toCollection(ArrayList::new));

assertEquals(6, result.size());
```

也可以使用 for 循环或迭代器：

```java
Iterator<String> it = stringsToSearch.iterator();
Set<String> matchingStrings = new HashSet<>(Arrays.asList("a", "c", "9"));

List<String> result = new ArrayList<>();
while (it.hasNext()) {
    String s = it.next();
    if (matchingStrings.contains(s)) {
        result.add(s);
    }
}
```

## 5.搜索排序

要搜索排序数组，我们可以使用二叉搜索算法，它比线性搜索工作得更快：

```java
List<String> copy = new ArrayList<>(stringsToSearch);
Collections.sort(copy);
int index = Collections.binarySearch(copy, "f");
assertThat(index, not(equalTo(-1)));
```

如果未找到元素，则返回 -1。

## 6.删除元素

要删除一个元素，我们找到它的索引，然后使用 remove() 方法删除它。我们还可以使用此方法的重载版本，它接受一个对象，搜索它，并删除它的第一个匹配项：

```java
List<Integer> list = new ArrayList<>(
  IntStream.range(0, 10).boxed().collect(toCollection(ArrayList::new))
);
Collections.reverse(list);

list.remove(0);
assertThat(list.get(0), equalTo(8));

list.remove(Integer.valueOf(0));
assertFalse(list.contains(0));
```

我们可以使用迭代器来删除几个项目：

```java
Set<String> matchingStrings
  = HashSet<>(Arrays.asList("a", "b", "c", "d", "e", "f"));

Iterator<String> it = stringsToSearch.iterator();
while (it.hasNext()) {
    if (matchingStrings.contains(it.next())) {
        it.remove();
    }
}
```

## 7.其他方法

我们可以使用排序集合添加、获取和删除 ArrayList 中的第一个或最后一个元素。在 Java 21 中引入了序列化集合，并引入了新的 `java.util.SequencedCollection<E>`接口。

已排序的集合具有其元素的明确定义的遭遇顺序。因此，元素具有线性排列：第一个元素、第二个元素、...和最后一个元素。

将 `java.util.Collection<E>` 作为集合层次结构中的根接口，`java.util.SequencedCollection<E>` 对其进行扩展，以便为集合的元素提供顺序排列。

`java.util.SequencedCollection<E>` 接口提供了几种方法来添加/获取/删除序列中第一个或最后一个元素：

| 类型          | 大小（位）               |
| ------------- | ------------------------ |
| addFirst(E e) | 将元素添加为第一个元素   |
| addLast(E e)  | 将元素添加为最后一个元素 |
| getFirst()    | 获取第一个元素           |
| getLast()     | 获取最后一个元素         |
| removeFirst() | 删除并返回第一个元素     |
| removeLast()  | 删除并返回最后一个元素   |
