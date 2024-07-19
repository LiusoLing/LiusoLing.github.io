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

值得注意的是，这里暴露的异常还有一个好处，那就是堆栈跟踪本身。正是这种堆栈跟踪，让我们可以快速确定违规代码，而无需附加调试器。

<br/><br/><br/><br/>


## 2.异常层次结构

归根结底，`exception` 只是 `Java对象`，它们都从 `Throwable` 扩展：


```java
              ---> Throwable <--- 
              |    (checked)     |
              |                  |
              |                  |
      ---> Exception           Error
      |    (checked)        (unchecked)
      |
RuntimeException
  (unchecked)
```

特殊情况有三大类：

- 检查的例外情况
- 未选中的异常/运行时异常
- 错误


### 2.1 检查的例外情况

**检查的异常是Java编译器要求我们处理的异常**。我们必须要么声明性地将异常扔到调用堆栈中，要么我们必须自己处理它。稍后会有更多关于这两者的信息。

甲骨文的文档告诉我们，当我们可以合理地期望我们方法的调用者能够恢复时，使用检查的异常。

检查异常的几个例子是 `IOException` 和 `ServletException`。


### 2.2 未检查的例外情况

未选中的异常是Java编译器不需要我们处理的异常。

简单地说，如果我们创建一个扩展`RuntimeException`的异常，它将被取消选中；否则，它将被选中。

虽然这听起来很方便，但甲骨文的文档告诉我们，这两个概念都有充分的理由，例如区分情境错误（已选中）和使用错误（未选中）。

一些未检查异常的例子有 `NullPointerException`、`IllegalArgumentException` 和 `SecurityException`。


### 2.3 错误

错误代表严重且通常无法恢复的情况，如库不兼容、无限递归或内存泄漏。

即使它们没有扩展 `RuntimeException`，它们也会被取消选中。

在大多数情况下，我们处理、实例化或扩展错误会很奇怪。通常，我们希望这些一直传播。

几个错误示例是 `StackOverflowError` 和 `OutOfMemoryError`。


## 3.处理异常情况

在Java API中，有很多地方可能会出错，其中一些地方在签名或Javadoc中都标有异常：

```java
/**
 * @exception FileNotFoundException ...
 */
public Scanner(String fileName) throws FileNotFoundException {
   // ...
}
```

当我们使用这些“风险”方法时，我们必须处理检查的异常，并且我们可以处理未检查的异常。Java为我们提供了几种方法来做到这一点：

### 3.1 抛出

“处理”异常的最简单方法是重新抛出它：

```java
public int getPlayerScore(String playerFile) throws FileNotFoundException {
 
    Scanner contents = new Scanner(new File(playerFile));
    return Integer.parseInt(contents.nextLine());
}
```

由于FileNotFoundException是一个检查的异常，**这是满足编译器的最简单方法，但它确实意味着任何调用我们方法的人现在也需要处理它！**

`parseInt` 可以抛出 `NumberFormatException`，但由于它未选中，我们不需要处理它。

### 3.2 捕获

如果我们想尝试自己处理异常，我们可以使用try-catch块。我们可以通过重新抛出我们的异常来处理它：

```java
public int getPlayerScore(String playerFile) {
    try {
        Scanner contents = new Scanner(new File(playerFile));
        return Integer.parseInt(contents.nextLine());
    } catch (FileNotFoundException noFile) {
        throw new IllegalArgumentException("File not found");
    }
}
```

或者通过不处理来执行恢复步骤：

```java
public int getPlayerScore(String playerFile) {
    try {
        Scanner contents = new Scanner(new File(playerFile));
        return Integer.parseInt(contents.nextLine());
    } catch ( FileNotFoundException noFile ) {
        logger.warn("File not found, resetting score.");
        return 0;
    }
}
```

### 3.3 最终

有时无论是否发生异常，我们都有需要执行的代码，这就是 `finally` 关键字的来源。

在我们迄今为止的示例中，潜伏着一个讨厌的错误，即默认情况下，Java不会将文件句柄返回给操作系统。

当然，无论我们是否可以阅读文件，我们都希望确保我们进行适当的清理！

让我们先用“懒惰”的方式试试这个：

```java
public int getPlayerScore(String playerFile)
  throws FileNotFoundException {
    Scanner contents = null;
    try {
        contents = new Scanner(new File(playerFile));
        return Integer.parseInt(contents.nextLine());
    } finally {
        if (contents != null) {
            contents.close();
        }
    }
}
```

在这里，最后块指示我们希望Java运行什么代码，无论尝试读取文件时会发生什么。

即使FileNotFoundException被抛出调用堆栈，Java也会在这样做之前调用final的内容。

我们也可以处理异常，并确保我们的资源被关闭：

```java
public int getPlayerScore(String playerFile) {
    Scanner contents;
    try {
        contents = new Scanner(new File(playerFile));
        return Integer.parseInt(contents.nextLine());
    } catch (FileNotFoundException noFile ) {
        logger.warn("File not found, resetting score.");
        return 0; 
    } finally {
        try {
            if (contents != null) {
                contents.close();
            }
        } catch (IOException io) {
            logger.error("Couldn't close the reader!", io);
        }
    }
}
```

**因为关闭也是一种“有风险”的方法，我们也需要捕获它的异常！**

这可能看起来很复杂，但我们需要每一块来正确处理每个可能出现的潜在问题。


### 3.4 捕获语法糖

幸运的是，从Java 7开始，在处理扩展AutoCloseable的东西时，提供了对应的语法糖让我们可以简化上述语法：

```java
public int getPlayerScore(String playerFile) {
    try (Scanner contents = new Scanner(new File(playerFile))) {
      return Integer.parseInt(contents.nextLine());
    } catch (FileNotFoundException e ) {
      logger.warn("File not found, resetting score.");
      return 0;
    }
}
```
当我们在try声明中放置自动可关闭的引用时，我们不需要自己关闭资源。

不过，我们仍然可以使用最后一个块来进行我们想要的任何其他类型的清理。


### 3.5 多次捕获

有时，代码可以抛出多个异常，我们可以有多个捕获块单独处理每个异常：

```java
public int getPlayerScore(String playerFile) {
    try (Scanner contents = new Scanner(new File(playerFile))) {
        return Integer.parseInt(contents.nextLine());
    } catch (IOException e) {
        logger.warn("Player file wouldn't load!", e);
        return 0;
    } catch (NumberFormatException e) {
        logger.warn("Player file was corrupted!", e);
        return 0;
    }
}
```
如果需要，多次捕获让我们有机会以不同的方式处理每个异常。

另请注意，我们没有捕获FileNotFoundException，这是因为它扩展了IOException。因为我们捕获了IOException，Java将考虑也处理其任何子类。

不过，假设我们需要将FileNotFoundException与更一般的IOException区别对待：

```java
public int getPlayerScore(String playerFile) {
    try (Scanner contents = new Scanner(new File(playerFile)) ) {
        return Integer.parseInt(contents.nextLine());
    } catch (FileNotFoundException e) {
        logger.warn("Player file not found!", e);
        return 0;
    } catch (IOException e) {
        logger.warn("Player file wouldn't load!", e);
        return 0;
    } catch (NumberFormatException e) {
        logger.warn("Player file was corrupted!", e);
        return 0;
    }
}
```

Java允许我们单独处理子类异常，**但你需要将它们放在捕获列表中的更高位置。**

当我们想联合处理多个异常时，Java 7引入了在同一块中捕获多个异常的能力：

```java
public int getPlayerScore(String playerFile) {
    try (Scanner contents = new Scanner(new File(playerFile))) {
        return Integer.parseInt(contents.nextLine());
    } catch (IOException | NumberFormatException e) {
        logger.warn("Failed to load score!", e);
        return 0;
    }
}
```

## 4.异常继承

当我们用 `throws` 关键字标记方法时，它会影响子类如何覆盖我们的方法。

在我们的方法抛出检查异常的情况下：

```java
public class Exceptions {
    public List<Player> loadAllPlayers(String playersFile) 
      throws TimeoutException {
        // ...
    }
}
```

子类可以有一个“风险较小”的异常：
```java
public class FewerExceptions extends Exceptions {	
    @Override
    public List<Player> loadAllPlayers(String playersFile) {
        // overridden
    }
}
```

但不允许“更危险”的签名：

```java
public class MoreExceptions extends Exceptions {		
    @Override
    public List<Player> loadAllPlayers(String playersFile) throws MyCheckedException {
        // overridden
    }
}
```
这是因为约定是在编译时由参考类型确定的。如果我创建一个 `MoreExceptions` 的实例并将其保存到 `Exceptions`：

```java
Exceptions exceptions = new MoreExceptions();
exceptions.loadAllPlayers("file");
```

然后JVM只会告诉我抓住 `TimeoutException`，这是错误的，因为我说过 `MoreExceptions#loadAllPlayers` 抛出不同的异常。

**简而言之，子类可以抛出比其超类更少的检查异常，但不能更多。**


## 5.吃掉异常


```java
public int getPlayerScore(String playerFile) {
    try {
        // ...
    } catch (Exception e) {} // <== catch and swallow
    return 0;
}
```

以上称为吃掉异常。大多数时候，这样做对我们来说有点不合适，因为它没有解决问题，而且它使其他代码也无法解决问题。

但有时，有一个经过检查的例外，我们相信永远不会发生。在这些情况下，我们至少应该添加一个评论，说明我们故意吃了异常：

```java
public int getPlayerScore(String playerFile) {
    try {
        // ...
    } catch (IOException e) {
        // this will never happen
    }
}
```

或者简单地打印出错误异常堆栈：

```java
public int getPlayerScore(String playerFile) {
    try {
        // ...
    } catch (Exception e) {
        e.printStackTrace();
    }
    return 0;
}
```

不过，对我们来说，使用日志会更好：

```java
public int getPlayerScore(String playerFile) {
    try {
        // ...
    } catch (IOException e) {
        logger.error("Couldn't load the score", e);
        return 0;
    }
}
```

## 6.final中使用return

另一种吃掉异常的方法是从 final 中进行 return。这很糟糕，因为通过突然返回，JVM将删除异常，即使它是由我们的代码抛出的：

```java
public int getPlayerScore(String playerFile) {
    int score = 0;
    try {
        throw new IOException();
    } finally {
        return score; // <== the IOException is dropped
    }
}
```


## 7.常见的异常和错误

### 7.1 常见异常
- IOException - 此异常通常是一种表示网络、文件系统或数据库上某些内容失败的方式。
- ArrayIndexOutOfBoundsException - 此异常意味着我们试图访问不存在的数组索引，就像试图从长度为3的数组获取索引5时一样。
- ClassCastException - 此异常意味着我们试图执行非法转换，例如尝试将字符串转换为列表。我们通常可以通过在铸造前进行防御性检查来避免它。
- IllegalArgumentException - 此异常是我们表示提供的方法或构造函数参数之一无效的通用方式。
- IllegalStateException - 这个异常是一种通用方式，我们可以说我们的内部状态，就像对象的状态一样，是无效的。
- NullPointerException - 此异常意味着我们尝试引用空对象。我们通常可以通过执行防御性空值检查或使用可选来避免它。
- NumberFormatException - 此异常意味着我们试图将字符串转换为数字，但该字符串包含非法字符，例如试图将“5f3”转换为数字。


### 7.2 常见错误

- StackOverflowError - 此异常意味着堆栈跟踪太大。这有时可能发生在大型应用程序中；然而，这通常意味着我们的代码中发生了一些无限的递归。
- NoClassDefFoundError - 此异常意味着类因不在类路径上或静态初始化失败而无法加载。
- OutOfMemoryError - 此异常意味着JVM没有更多可用于分配更多对象的内存。有时，这是由于内存泄漏。
