---
# 这是文章的标题
title: 05. Java的StringBuilder和StringBuffer
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 5
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

在本文章中，我们将学习Java中StringBuilder和StringBuffer之间的异同。

StringBuilder是在Java 1.5中引入的，作为StringBuffer的替代品。

<!-- more -->

## StringBuilder和StringBuffer异同

`StringBuilder` 和 `StringBuffer` 都创建包含可变字符序列的对象。

让我们看看它是如何工作的，以及它与不可变字符串类 `String` 的比较：

```java
String immutable = "abc";
immutable = immutable + "def";
```
尽管看起来我们通过连接符连接 `def` 来修改同一对象，但其实正在创建一个新对象，因为 `String` 实例无法修改。

而使用 `StringBuffer` 或 `StringBuilder `时，我们可以使用 `append()` 方法：
```java
StringBuffer sb = new StringBuffer("abc");
sb.append("def");
```

这里没有创建新对象。我们在 sb 实例上调用了 `append()` 方法，并修改了其内容。`StringBuffer` 和 `StringBuilder` 是可变对象。

不同之处：

- **StringBuffer**：使用了 `synchronized` 关键字，因此线程安全。

- **StringBuilder**：线程不安全，速度更快，API方法与 `StringBuffer` 一致。

## 基准测试

在迭代次数小时，两者性能的差异微乎其微，我们可以用 JMH 做一个微基准测试，反应出性能速度的差别：

```java
@State(Scope.Benchmark)
public static class MyState {
    int iterations = 1000;
    String initial = "abc";
    String suffix = "def";
}

@Benchmark
public StringBuffer benchmarkStringBuffer(MyState state) {
    StringBuffer stringBuffer = new StringBuffer(state.initial);
    for (int i = 0; i < state.iterations; i++) {
        stringBuffer.append(state.suffix);
    }
    return stringBuffer;
}

@Benchmark
public StringBuilder benchmarkStringBuilder(MyState state) {
    StringBuilder stringBuilder = new StringBuilder(state.initial);
    for (int i = 0; i < state.iterations; i++) {
        stringBuilder.append(state.suffix);
    }
    return stringBuilder;
}
```

我们使用了默认的吞吐量模式——即每单位时间的操作（得分越高越好），上述测试有如下结果：
```java
Benchmark                                          Mode  Cnt      Score      Error  Units
StringBufferStringBuilder.benchmarkStringBuffer   thrpt  200  86169.834 ±  972.477  ops/s
StringBufferStringBuilder.benchmarkStringBuilder  thrpt  200  91076.952 ± 2818.028  ops/s
```

当迭代次数从 1K 调整为 1M 时，更能看清楚这种差别：
```java
Benchmark                                          Mode  Cnt   Score   Error  Units
StringBufferStringBuilder.benchmarkStringBuffer   thrpt  200  77.178 ± 0.898  ops/s
StringBufferStringBuilder.benchmarkStringBuilder  thrpt  200  85.769 ± 1.966  ops/s
```

