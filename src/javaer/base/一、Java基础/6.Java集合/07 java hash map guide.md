---
# 这是文章的标题
title: 06. HashSet
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 5
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

## 10.key的不变性

## 11.Hash碰撞

## 12.容量和负载系数