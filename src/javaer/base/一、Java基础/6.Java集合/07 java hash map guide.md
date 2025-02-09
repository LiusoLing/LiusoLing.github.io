---
# 这是文章的标题
title: 07. HashMap
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 7
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

本节探讨另一种集合数据结构，HashMap，了解它内部是如何工作的。

<!-- more -->

## 1.HashMap简介

让我们首先看看 HashMap 是一个 map 是什么意思。

**map 是一个 key-value 映射，这意味着每个 key 都只映射到一个值，我们可以使用 key 从 map 中检索相应的值。**

既然有了List，我们为何还需要 HashMap呢？原因很简单，就是性能。

如果我们想在列表中查找特定元素，时间复杂度为 O（n），如果列表已排序，则使用例如二进制搜索时，它将为 O（log n）。

HashMap 的优点是插入和检索值的时间复杂度平均为 O（1）。

示例一个产品类，接下来都要用到它：

```java
public class Product {

    private String name;
    private String description;
    private List<String> tags;
    
    // standard getters/setters/constructors

    public Product addTagsOfOtherProduct(Product product) {
        this.tags.addAll(product.getTags());
        return this;
    }
}
```

## 2.获取

创建一个 HashMap，其中包含 String 类型的键和 Product 类型的元素：

```java
Map<String, Product> productsByName = new HashMap<>();
Product eBike = new Product("E-Bike", "A bike with a battery");
Product roadBike = new Product("Road bike", "A bike for competition");
productsByName.put(eBike.getName(), eBike);
productsByName.put(roadBike.getName(), roadBike);
```

我们可以通过 key 从 map 中检索一个值：

```java
Product nextPurchase = productsByName.get("E-Bike");
assertEquals("A bike with a battery", nextPurchase.getDescription());
```

如果我们尝试为 map 中不存在的 key 查找值，我们将得到一个 null 值：

```java
Product nextPurchase = productsByName.get("Car");
assertNull(nextPurchase);
```

如果我们插入具有相同键的第二个值，我们将只获得该键的最后一个插入值：

```java
Product newEBike = new Product("E-Bike", "A bike with a better battery");
productsByName.put(newEBike.getName(), newEBike);
assertEquals("A bike with a better battery", productsByName.get("E-Bike").getDescription());
```

## 3.NULL为key

HashMap 还允许我们将 null 作为键：

```java
Product defaultProduct = new Product("Chocolate", "At least buy chocolate");
productsByName.put(null, defaultProduct);

Product nextPurchase = productsByName.get(null);
assertEquals("At least buy chocolate", nextPurchase.getDescription());
```

此外，我们可以使用不同的 key 插入同一个对象两次：
```java
productsByName.put(defaultProduct.getName(), defaultProduct);
assertSame(productsByName.get(null), productsByName.get("Chocolate"));
```

## 4.删除值

我们可以从 HashMap 中删除一个键值映射：

```java
productsByName.remove("E-Bike");
assertNull(productsByName.get("E-Bike"));
```

## 5.key或value是否存在

要检查 map 中是否存在键，我们可以使用 containsKey（） 方法：

```java
productsByName.containsKey("E-Bike");
```

是否存在值，我们可以使用 containsValue（） 方法：

```java
productsByName.containsValue(eBike);
```
两个方法调用都将返回 true。尽管它们看起来非常相似，但这两个方法调用在性能上存在重要差异。 

**检查键是否存在的复杂度是 O（1），而检查元素的复杂度是 O（n），因为需要遍历 Map 中的所有元素。**

## 6.迭代

三种办法迭代HashMap中的所有键值对：

```java
for(String key : productsByName.keySet()) {
    Product product = productsByName.get(key);
}
```

或者我们可以迭代所有条目的集合：

```java
for(Map.Entry<String, Product> entry : productsByName.entrySet()) {
    Product product =  entry.getValue();
    String key = entry.getKey();
    //do something with the key and value
}
```

可以迭代所有的值：

```java
List<Product> products = new ArrayList<>(productsByName.values());
```

## 7.Key

我们可以使用任何类作为 HashMap 中的键。但是，为了使 map 正常工作，我们需要为 equals（） 和 hashCode（） 提供实现。

假设我们想要一个 map，其中 product 作为键，price 作为值：

```java
HashMap<Product, Integer> priceByProduct = new HashMap<>();
priceByProduct.put(eBike, 900);
```

让我们实现 equals（） 和 hashCode（） 方法：

```java
@Override
public boolean equals(Object o) {
    if (this == o) {
        return true;
    }
    if (o == null || getClass() != o.getClass()) {
        return false;
    }

    Product product = (Product) o;
    return Objects.equals(name, product.name) &&
      Objects.equals(description, product.description);
}

@Override
public int hashCode() {
    return Objects.hash(name, description);
}
```

请注意，hashCode（） 和 equals（） 只需要覆盖我们想用作 map 键的类，而不需要覆盖那些只用作 map 中的值的类。

## 8.java8中的新方法

使用 getOrDefault（） 方法，我们可以从 map 中获取一个值，或者在给定键没有映射的情况下返回一个 default 元素：

```java
Product chocolate = new Product("chocolate", "something sweet");
Product defaultProduct = productsByName.getOrDefault("horse carriage", chocolate); 
Product bike = productsByName.getOrDefault("E-Bike", chocolate);
```

java8之前：
```java
Product bike2 = productsByName.containsKey("E-Bike") 
    ? productsByName.get("E-Bike") 
    : chocolate;
Product defaultProduct2 = productsByName.containsKey("horse carriage") 
    ? productsByName.get("horse carriage") 
    : chocolate;
```

putIfAbsent() 方法可以添加新的映射，前提是给定键还没有映射：
```java
productsByName.putIfAbsent("E-Bike", chocolate);
```

java8之前：
```java
if(!productsByName.containsKey("E-Bike")) {
    productsByName.put("E-Bike", chocolate);
}
```

使用 merge()，如果存在 Map，我们可以修改给定 key 的值，否则添加新值：

```java
Product eBike2 = new Product("E-Bike", "A bike with a battery");
eBike2.getTags().add("sport");
productsByName.merge("E-Bike", eBike2, Product::addTagsOfOtherProduct);
```

java8之前：
```java
if(productsByName.containsKey("E-Bike")) {
    productsByName.get("E-Bike").addTagsOfOtherProduct(eBike2);
} else {
    productsByName.put("E-Bike", eBike2);
}
```


使用 calc（） 方法，我们可以计算给定键的值：

```java
productsByName.compute("E-Bike", (k,v) -> {
    if(v != null) {
        return v.addTagsOfOtherProduct(eBike2);
    } else {
        return eBike2;
    }
});
```

java8之前：
```java
if(productsByName.containsKey("E-Bike")) {    
    productsByName.get("E-Bike").addTagsOfOtherProduct(eBike2); 
} else {
    productsByName.put("E-Bike", eBike2); 
}
```

## 9.equals和HashCode

正如我们所看到的，我们可以使用 HashMap 的 key 从 HashMap 中检索一个元素。

一种方法是使用列表，迭代所有元素，并在找到键匹配的元素时返回。这种方法的时间和空间复杂度都是 O（n）。

使用 HashMap，我们可以实现 put 和 get作的平均时间复杂度为 O（1），空间复杂度为 O（n）。它是如何做到的呢？

因为 HashMap 不是迭代其所有元素，而是尝试根据其键计算值的位置。

HashMap 将元素存储在所谓的 buckets 中，bucket 的数量称为 capacity(容积)。


当我们在 map 中放置一个值时，该键的 hashCode（） 方法用于确定该值将存储在哪个存储桶中。

为了检索该值，HashMap 以相同的方式计算存储桶 - 使用 hashCode（）。然后，它会遍历在该存储桶中找到的对象，并使用 key 的 equals（） 方法查找完全匹配项。

## 10.key的不变性

让我们看看当我们使用 key 在 map 中存储值后发生变化时会发生什么。

```java
public class MutableKey {
    private String name;

    // standard constructor, getter and setter

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        MutableKey that = (MutableKey) o;
        return Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
```

测试如下：

```java
MutableKey key = new MutableKey("initial");

Map<MutableKey, String> items = new HashMap<>();
items.put(key, "success");

key.setName("changed");

assertNull(items.get(key));
```

正如我们所看到的，一旦 key 发生变化，我们就无法再获取相应的值，而是返回 null。这是因为 HashMap 在错误的存储桶中搜索。

## 11.Hash碰撞

要使其正常工作，相等的 key 必须具有相同的哈希值，但是，不同的 key 可以具有相同的哈希值。

如果两个不同的 key 具有相同的哈希值，则属于它们的两个值将存储在同一个存储桶中。

在存储桶中，值存储在列表中，并通过循环访问所有元素来检索。其成本为 O（n）。

从 Java 8 开始，如果存储桶包含 8 个或更多值，则存储一个存储桶内的值的数据结构将从列表更改为平衡树，如果在某些时候，存储桶中只剩下 6 个值，则将其改回列表。

这会将性能提高到 O（log n）。

## 12.容量和负载系数

为避免多个存储桶具有多个值，如果存储桶的 75%（负载因子）变为非空，则容量将增加一倍。负载系数的默认值为 75%，默认初始容量为 16。两者都可以在构造函数中设置。

当我们向 map 中添加一个元素时，HashMap 会计算 bucket。如果存储桶已包含值，则该值将添加到属于该存储桶的列表（或树）中。

如果负载系数大于地图的最大负载系数，则容量将增加一倍。

当我们想从 map 中获取一个值时，HashMap 会计算 bucket，并从列表（或树）中获取具有相同键的值。

## 13.初始化方法

静态代码块初始化：

```java
public static Map<String, String> articleMapOne;
static {
    articleMapOne = new HashMap<>();
    articleMapOne.put("ar01", "Intro to Map");
    articleMapOne.put("ar02", "Some article");
}
```

还可以使用双大括号语法初始化 Map：
```java
Map<String, String> doubleBraceMap  = new HashMap<String, String>() {{
    put("key1", "value1");
    put("key2", "value2");
}};
```

不过尽量避免这种初始化方式，因为它在每次使用时都会创建一个额外的匿名类，保存对封闭对象的匿名引用，可能导致内存泄漏问题。


Collections方式初始化：

```java
public static Map<String, String> createSingletonMap() {
    return Collections.singletonMap("username1", "password1");
}
```
请注意，这里的 map 是不可变的，如果我们尝试添加更多条目，它将抛出 java.lang.UnsupportedOperationException。
我们还可以使用 Collections.emptyMap（） 创建一个不可变的空映射：

```java
Map<String, String> emptyMap = Collections.emptyMap();
```

java8的方式初始化：

```java
Map<String, String> map = Stream.of(new String[][] {
  { "Hello", "World" }, 
  { "John", "Doe" }, 
}).collect(Collectors.toMap(data -> data[0], data -> data[1]));


Map<String, Integer> map = Stream.of(new Object[][] { 
    { "data1", 1 }, 
    { "data2", 2 }, 
}).collect(Collectors.toMap(data -> (String) data[0], data -> (Integer) data[1]));


Map<String, Integer> map = Stream.of(
  new AbstractMap.SimpleEntry<>("idea", 1), 
  new AbstractMap.SimpleEntry<>("mobile", 2))
  .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));


Map<String, Integer> map = Stream.of(
  new AbstractMap.SimpleImmutableEntry<>("idea", 1),    
  new AbstractMap.SimpleImmutableEntry<>("mobile", 2))
  .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
```


通过将 Collectors.toMap（） 包装在 Collectors.collectingAndThen（） 中初始化：

```java
Map<String, String> map = Stream.of(new String[][] { 
    { "Hello", "World" }, 
    { "John", "Doe" },
}).collect(Collectors.collectingAndThen(
    Collectors.toMap(data -> data[0], data -> data[1]), 
    Collections::<String, String> unmodifiableMap));
```
不过应该避免使用 Streams 进行此类初始化， 因为它可能会导致巨大的性能开销，并且会创建大量垃圾对象来初始化 Map。



Java 9 在 Map 接口中提供了各种工厂方法，这些方法简化了不可变映射的创建和初始化。

java9的初始化：
```java
Map<String, String> emptyMap = Map.of();
Map<String, String> singletonMap = Map.of("key1", "value");
Map<String, String> map = Map.of("key1","value1", "key2", "value2");
```
请注意，该方法最多仅支持 10 个键值对。


以下方式没有数量限制：

```java
Map<String, String> map = Map.ofEntries(
  new AbstractMap.SimpleEntry<String, String>("name", "John"),
  new AbstractMap.SimpleEntry<String, String>("city", "budapest"),
  new AbstractMap.SimpleEntry<String, String>("zip", "000000"),
  new AbstractMap.SimpleEntry<String, String>("home", "1231231231")
);
```
请注意，工厂方法会生成不可变的 Map，因此任何更改都会导致 UnsupportedOperationException。

此外，它们不允许 null 键或重复键。

如果我们在初始化后需要一个可变的或不断增长的 map，我们可以创建 Map 接口的任何实现，并在构造函数中传递这些不可变的 map：

```java
Map<String, String> map = new HashMap<String, String> (
  Map.of("key1","value1", "key2", "value2"));
Map<String, String> map2 = new HashMap<String, String> (
  Map.ofEntries(
    new AbstractMap.SimpleEntry<String, String>("name", "John"),    
    new AbstractMap.SimpleEntry<String, String>("city", "budapest")));
```

使用 Guava 初始化：

```java
Map<String, String> articles 
  = ImmutableMap.of("Title", "My New Article", "Title2", "Second Article");
```

方法 ImmutableMap.of（） 也有重载版本，最多可以接受 5 对键值参数。