---
# 这是文章的标题
title: 07. Java数组
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 8
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
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

在Java编程中，流程控制通过条件语句来执行，条件语句是根据条件来执行特定分支的代码。

在Java语言中有两种条件语句，if语句和switch语句。

<!-- more -->

## 数组

数组是一个对象，它包含了一组固定数量的元素，并且这些元素的类型是相同的。

以下是一个简化的数组UML类图，通过它，我们可以看出类之间的关系：

```class
Object <|-- Cloneable
Object <|-- Class
ObjectArray <|-- Object
CloneableArray <|-- Cloneable
Serializable <|-- ObjectArray
Serializable <|-- CloneableArray

class Object {
  +equals(Object obj): boolean
  +getClass(): Class<?>
  +hashCode(): int
  +toString(): String
  #wait(): void
  #wait(long timeout): void
  #wait(long timeout, int nanos): void
  #notify(): void
  #notifyAll(): void
}

class Cloneable {
  #clone(): Object
}

class Class {
  +getName(): String
  +getSimpleName(): String
}

class ObjectArray {
  +length: int
}

class CloneableArray {
  +length: int
}

class Serializable {
}
```

从上可以看出：

- 所有类都是 `Object` 的子类，因为 `Object` 是所有类的根类。
- 数组类可以实现 `Cloneable` 和 `Serializable` 接口。
- `ObjectArray` 和 `CloneableArray` 分别表示了 `普通对象数组` 和 `实现了Cloneable接口的对象数组`。
- 数组类继承了`Object`，并且具有一个`length`属性表示数组的长度。

::: tip
`ObjectArray` 根据数据结构特点，可以是不同的数组，比如可以是 `ArrayList`、`ArraySet`。

`CloneableArray` 也一样。
:::