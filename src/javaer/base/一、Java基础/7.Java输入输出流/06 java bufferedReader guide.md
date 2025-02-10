---
# 这是文章的标题
title: 06. BufferedReader
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 6
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-04
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - i/o
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---


`BufferedReader` 是 Java 中用于高效读取文本文件的类。它通过缓冲机制减少 I/O 操作次数，从而提升读取性能，特别适合处理大文本文件或需要逐行读取的场景。

本文将详细介绍 `BufferedReader` 的使用方法及其优势。


<!-- more -->

## 1. 基本用法

### 1.1 创建 `BufferedReader`

`BufferedReader` 通常包装一个 `FileReader` 或其他字符流对象。以下是一个简单的示例，展示如何使用 `BufferedReader` 读取文件内容:

```java
try (BufferedReader br = new BufferedReader(new FileReader("example.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**代码说明**:
- `BufferedReader` 包装了 `FileReader`，用于读取文件内容。
- `readLine()` 方法逐行读取文件，返回 `null` 时表示文件结束。
- 使用 `try-with-resources` 语句确保流自动关闭。

### 1.2 读取单行数据

`readLine()` 是 `BufferedReader` 的核心方法，用于读取文件的每一行数据。

```java
try (BufferedReader br = new BufferedReader(new FileReader("example.txt"))) {
    String line = br.readLine();
    System.out.println("第一行内容: " + line);
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- `readLine()` 返回的字符串不包含行尾符(如 `\n` 或 `\r\n`)。

## 2. 使用 `BufferedReader` 的优势

### 2.1 缓冲机制提升性能

`BufferedReader` 通过内部缓冲机制减少磁盘 I/O 操作次数。它会一次性从磁盘读取大量数据存入缓冲区，后续读取操作直接从缓冲区中获取数据，从而提升读取效率。

### 2.2 支持逐行读取

`readLine()` 方法使得 `BufferedReader` 非常适合处理需要逐行处理的文本文件，如日志文件、CSV 文件等。

## 3. 其他常用方法

### 3.1 `read()` 方法

`read()` 方法用于读取单个字符或字符数组。

```java
try (BufferedReader br = new BufferedReader(new FileReader("example.txt"))) {
    int character;
    while ((character = br.read()) != -1) {
        System.out.print((char) character);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- `read()` 返回一个整数，表示读取的字符。如果到达文件末尾，返回 `-1`。

### 3.2 `skip()` 方法

`skip()` 方法用于跳过指定数量的字符。

```java
try (BufferedReader br = new BufferedReader(new FileReader("example.txt"))) {
    br.skip(10); // 跳过前 10 个字符
    String line = br.readLine();
    System.out.println("跳过后读取的内容: " + line);
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- `skip()` 返回实际跳过的字符数。

### 3.3 `mark()` 和 `reset()` 方法

`mark()` 和 `reset()` 方法用于标记和重置读取位置。

```java
try (BufferedReader br = new BufferedReader(new FileReader("example.txt"))) {
    br.mark(100); // 标记当前读取位置，最多回退 100 个字符
    String line1 = br.readLine();
    System.out.println("第一次读取: " + line1);
    br.reset(); // 重置到标记位置
    String line2 = br.readLine();
    System.out.println("第二次读取: " + line2);
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- `mark()` 方法需要一个参数，表示后续读取的字节数不能超过该值，否则标记失效。
- `reset()` 方法将读取位置重置到 `mark()` 标记的位置。

## 4. 处理大文件和性能优化

### 4.1 使用较大的缓冲区

`BufferedReader` 的默认缓冲区大小为 8192 字符，但可以通过构造函数指定更大的缓冲区以提升读取性能。

```java
try (BufferedReader br = new BufferedReader(new FileReader("example.txt")， 16384)) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 较大的缓冲区会占用更多内存，但在处理大文件时能显著提升性能。

### 4.2 并行处理大文件

对于非常大的文件，可以将文件分割成多个部分，使用多线程并行处理。

```java
ExecutorService executor = Executors.newFixedThreadPool(4);
try (BufferedReader br = new BufferedReader(new FileReader("largefile.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        executor.submit(() -> processLine(line));
    }
} catch (IOException e) {
    e.printStackTrace();
} finally {
    executor.shutdown();
}
```

**注意**:
- 并行处理需要小心处理线程安全和资源竞争问题。

## 5. 常用场景

### 5.1 处理日志文件

`BufferedReader` 非常适合逐行读取日志文件并进行处理。

```java
try (BufferedReader br = new BufferedReader(new FileReader("log.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        if (line.contains("ERROR")) {
            System.out.println("发现错误日志: " + line);
        }
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### 5.2 读取配置文件

`BufferedReader` 也可以用于逐行读取配置文件并进行解析。

```java
try (BufferedReader br = new BufferedReader(new FileReader("config.properties"))) {
    String line;
    while ((line = br.readLine()) != null) {
        String[] parts = line.split("=");
        if (parts.length == 2) {
            System.out.println("Key: " + parts[0] + "， Value: " + parts[1]);
        }
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

## 6. 总结

`BufferedReader` 是 Java 中用于高效读取文本文件的重要工具。它通过缓冲机制减少 I/O 操作，提升读取性能，特别适合处理大文件或需要逐行读取的场景。

通过 `readLine()`、`read()`、`skip()` 等方法，开发者可以轻松实现文件的读取和处理。

此外，通过调整缓冲区大小或并行处理，可以进一步优化大文件的读取性能。
