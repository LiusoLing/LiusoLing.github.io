---
# 这是文章的标题
title: 01. Java异常处理
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-02-21
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - exception
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

异常是程序执行过程中的异常行为。

让我们了解什么是Java异常，以及它们如何帮助我们编写更少容易出错的代码。

<!-- more -->

## 1.异常处理

### 1.1 什么是异常处理

类比现实，我们在网上购买了一件商品，在快递过程中，出现了意料之外的变故，比如破损、丢件等等意外情况，快递公司是会帮忙处理的，最终确保我们能准时收到包裹。

同样的，在运行Java 程序时，代码执行指令时可能会遇到错误。良好的异常处理可以处理错误，让我们的程序重新走回正轨，保证用户的积极体验。

### 1.2 为什么要使用异常处理

我们的编程环境总是一个 `理想` 的环境：文件系统是好的，网络是正常无波动的，JVM内存总是足够的。

这样的编程体验无疑是十分快乐的。


<br/><br/><br/><br/>

然而，在生产中，**文件系统可能会损坏，网络可能会崩溃，JVM会耗尽内存。** 我们代码的良好体验取决于它如何处理“不良环境”。

我们必须处理这些缺陷，因为它们对应用程序的正常运行产生负面影响，并形成异常：

```java
public static List<Player> getPlayers() throws IOException {
    Path path = Paths.get("players.dat");
    List<String> players = Files.readAllLines(path);

    return players.stream()
      .map(Player::new)
      .collect(Collectors.toList());
}
```

此代码选择不处理 `IOException` ，而是将其传递给调用堆栈。在理想化的环境中，代码工作正常。

但是，如果缺少 `players.dat`，生产中可能会发生什么？

```java
Exception in thread "main" java.nio.file.NoSuchFileException: players.dat <-- players.dat file doesn't exist
    at sun.nio.fs.WindowsException.translateToIOException(Unknown Source)
    at sun.nio.fs.WindowsException.rethrowAsIOException(Unknown Source)
    // ... more stack trace
    at java.nio.file.Files.readAllLines(Unknown Source)
    at java.nio.file.Files.readAllLines(Unknown Source)
    at Exceptions.getPlayers(Exceptions.java:12) <-- Exception arises in getPlayers() method, on line 12
    at Exceptions.main(Exceptions.java:19) <-- getPlayers() is called by main(), on line 19
```

**如果不处理这个异常，一个健康的程序可能会完全停止运行！** 我们需要确保我们的代码在出现问题时有一个兜底计划。

<br/><br/><br/><br/>

另请注意，这里对异常还有一个好处，那就是堆栈跟踪本身。由于这种堆栈跟踪，我们通常可以快速确定违规代码，而无需使用调试器逐行调试。

