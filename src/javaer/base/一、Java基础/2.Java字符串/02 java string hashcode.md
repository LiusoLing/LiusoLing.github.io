---
# 这是文章的标题
title: 02. Java HashCode
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
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

散列是计算机科学的一个基本概念。

`hashCode()` 返回一个由散列算法生成的整数值。

<!-- more -->

## 什么是HashCode

摘自【百度百科：】

`hash code` 是一种编码方式，在Java中，每个对象都会有一个hashcode，Java可以通过这个hashcode来识别一个对象。

`Hash`，一般翻译做“散列”，也有直接音译为"哈希"的，就是把任意长度的输入（又叫做预映射， pre-maping），通过散列算法，变换成固定长度的输出，该输出就是散列值。

这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，不同的输入可能会散列成相同的输出，而不可能从散列值来唯一的确定输入值。

## HashCode的工作原理

相等的对象（根据`equals()`）必须返回相同的哈希代码。不同的对象不需要返回不同的散列代码。

翻译：两个对象值相同 `(x.equals(y) == true)`，不一定相等。

hashCode() 有如下约定：

- Java应用程序执行期间在同一对象上多次调用时，`hashCode()`必须始终如一地返回相同的值，前提是对象上相等比较中使用的信息不会被修改。此值不需要从应用程序的一次执行到同一应用程序的另一次执行保持一致。
- 如果 `equals(Object)` 方法，两个对象相等，则在两个对象上调用 `hashCode()` 方法必须产生相同的值。
- 如果 `equals(java.lang.Object)` 方法，两个对象是不相等的，则在两个对象上调用 `hashCode` 方法不需要产生不同的整数结果。然而，开发人员应该意识到，为不等的对象生成不同的整数结果可以提高哈希表的性能。

## 幼稚的HaseCode实现

完全遵照上面的约定，我们可以写出一个非常幼稚的实现，如下：

```java
public class User {

    private long id;
    private String name;
    private String email;

    // standard getters/setters/constructors

    // getters and setters here
        
    @Override
    public int hashCode() {
        return 1;
    }
        
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        if (this.getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id 
          && (name.equals(user.name) 
          && email.equals(user.email));
    }
}
```

上面 User 类自定义实现的 `equals()` 和 `hashCode()` 完全遵守了约定。

然而，这个实现使得哈希表的性能为零，因为每个对象都会存储在相同的单个桶中。

在这种情况下，哈希表查找是线性执行的，不会给我们带来任何真正的性能优势。

## 改进的HashCode实现

改进的自定义 `hashCode` 实现将User类的所有字段参与进来，以便它可以为不同的对象产生不同的结果：

```java
@Override
public int hashCode() {
    return (int) id * name.hashCode() * email.hashCode();
}
```

这个哈希算法肯定比前一个算法好得多。这是因为它只需将名称、电子邮件字段和ID的哈希代码相乘，即可计算对象的哈希代码。

一般来说，我们可以说这是一个合理的`hashCode()`实现，只要我们保持`equals()`实现与它一致。

## 标准的HashCode实现

我们用于计算哈希代码的哈希算法越好，哈希表的性能就越好。

让我们看看一个“标准”实现，它使用两个素数为计算的哈希代码添加更多的唯一性：

```java
@Override
public int hashCode() {
    int hash = 7;
    hash = 31 * hash + (int) id;
    hash = 31 * hash + (name == null ? 0 : name.hashCode());
    hash = 31 * hash + (email == null ? 0 : email.hashCode());
    return hash;
}
```

虽然我们需要了解 `hashCode()` 和 `equals()` 方法的作用，但我们不必每次都从头开始实现它们。

这是因为大多数IDE可以生成自定义 `hashCode()` 和 `equals()` 实现。
从Java 7开始，我们有一个用于合适的散列 `Objects.hash()` 实用程序方法：

```java
Objects.hash(name, email)

//IntelliJ IDEA 生成以下实现 
@Override
public int hashCode() {
    int result = (int) (id ^ (id >>> 32));
    result = 31 * result + name.hashCode();
    result = 31 * result + email.hashCode();
    return result;
}

//Eclipse 生成以下实现
@Override
public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((email == null) ? 0 : email.hashCode());
    result = prime * result + (int) (id ^ (id >>> 32));
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    return result;
}
```

除了IDE自动帮我们生成，我们也可以使用 `Lombok` 自生成高效实现：

首先引入 `Lombok`:
```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version>
</dependency>
```

用 `@EqualsAndHashCode` 注释用户类：
```java
@EqualsAndHashCode 
public class User {
    // fields and methods here
}
```

严格意义上讲，没有通用的 `HashCode()` 实现标准，不过推荐阅读大厂的 [Joshua Bloch的有效Java](https://www.amazon.com/Effective-Java-3rd-Joshua-Bloch/dp/0134685997)，它提供了实现高效散列算法的全面指南列表。

你也许注意到了，上面各类实现经常出现一个数字31，这是因为31有一个不错的特性。它的乘法可以被位移取代，比标准乘法更快：
```java
31 * i == (i << 5) - i
```


## 处理Hash碰撞


在Java中，哈希碰撞(Hash Collision)是指不同的输入数据产生了相同的哈希值（不同的输入得到了同一个哈希值，就发生了"哈希碰撞"）。

哈希函数是将输入映射到固定大小的哈希值的函数，而碰撞指的是两个不同的输入映射到了相同的哈希值。

处理它的[方式多种多样](https://courses.cs.washington.edu/courses/cse373/18au/files/slides/lecture13.pdf)，每种方法都有其优点和缺点。Java的 `HashMap` 使用单独的链地址法来处理冲突：

“当两个或多个对象指向同一个桶时，它们只是存储在链接列表中。在这种情况下，散列表是一个链接列表的数组，每个具有相同散列的对象都附加到数组中桶索引的链接列表中。

在最坏的情况下，几个桶将有一个链接列表绑定到它，列表中对象的检索将以线性方式进行。”

散列冲突方法，说明了为什么高效地实现 `hashCode()` 如此重要。

Java 8增强了 `HashMap` 实现。如果桶大小超过特定阈值，树形图将取代链接列表。把复杂度提升为 `O（logn）`的查找，而不是 `O（n）`。

## HashCode程序示例

这是 `User`类的 `HashCode` 实现:
```java
public class User {

    // ...

    public int hashCode() {
        int hash = 7;
        hash = 31 * hash + (int) id;
        hash = 31 * hash + (name == null ? 0 : name.hashCode());
        hash = 31 * hash + (email == null ? 0 : email.hashCode());
        logger.info("hashCode() called - Computed hash: " + hash);
        return hash;
    }
}
```

这是应用程序：
```java
public class Application {

    public static void main(String[] args) {
        Map<User, User> users = new HashMap<>();
        User user1 = new User(1L, "John", "john@domain.com");
        User user2 = new User(2L, "Jennifer", "jennifer@domain.com");
        User user3 = new User(3L, "Mary", "mary@domain.com");

        users.put(user1, user1);
        users.put(user2, user2);
        users.put(user3, user3);
        if (users.containsKey(user1)) {
            System.out.print("User found in the collection");
        }
    }
}
```

我们可以看到输出，每次将对象存储在哈希映射中并使用containsKey()方法检查时，都会调用hashCode()，并将计算的哈希代码打印到控制台：
```java
[main] INFO com.baeldung.entities.User - hashCode() called - Computed hash: 1255477819
[main] INFO com.baeldung.entities.User - hashCode() called - Computed hash: -282948472
[main] INFO com.baeldung.entities.User - hashCode() called - Computed hash: -1540702691
[main] INFO com.baeldung.entities.User - hashCode() called - Computed hash: 1255477819
User found in the collection
```

## 结论

生成高效自定义的 `hashCode()` 实现通常需要一些数学概念（即素数和任意数）、逻辑和基本数学运算的混合。

无论如何，我们可以有效地实现 `hashCode()`，而无需诉诸这些技术。

我们只需要确保散列算法为不等的对象生成不同的散列代码，并且它与 `equals()` 的实现一致。