---
# 这是文章的标题
title: 07. OutputStream
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 7
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-05
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

`OutputStream` 是 Java 中用于处理字节输出流的抽象类，它是所有字节输出流类的父类。

任何需要将字节数据写入到目标(如文件、网络连接、内存等)的类都继承自 `OutputStream`。

本文将详细介绍 `OutputStream` 的基本用法、常用子类及其应用场景。

<!-- more -->

## 1. `OutputStream` 概述

`OutputStream` 是一个抽象类，定义了字节输出流的基本操作。它的主要方法包括:

- `write(int b)`: 写入单个字节。
- `write(byte[] b)`: 写入字节数组。
- `write(byte[] b， int off， int len)`: 写入字节数组的一部分。
- `flush()`: 刷新输出流，确保所有缓冲的数据被写入目标。
- `close()`: 关闭输出流，释放相关资源。

### 1.1 基本用法

以下是一个简单的示例，展示如何使用 `OutputStream` 将数据写入文件:

```java
try (OutputStream os = new FileOutputStream("example.txt")) {
    byte[] data = "Hello， World!".getBytes();
    os.write(data);
    System.out.println("数据写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**代码说明**:
- `FileOutputStream` 是 `OutputStream` 的子类，用于将数据写入文件。
- 使用 `try-with-resources` 语句确保流自动关闭。

## 2. 常用子类

Java 提供了多种 `OutputStream` 的子类，用于处理不同的输出场景。

### 2.1 `FileOutputStream`

`FileOutputStream` 用于将数据写入文件。它支持写入字节数组或单个字节。

```java
try (FileOutputStream fos = new FileOutputStream("example.txt")) {
    byte[] data = { 72， 101， 108， 108， 111 }; // "Hello" 的字节表示
    fos.write(data);
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 默认情况下，`FileOutputStream` 会覆盖文件内容。可以通过 `true` 参数打开追加模式，保留原有内容。

### 2.2 `ByteArrayOutputStream`

`ByteArrayOutputStream` 用于将数据写入内存中的字节数组。

```java
ByteArrayOutputStream baos = new ByteArrayOutputStream();
baos.write("Hello， World!".getBytes());
byte[] result = baos.toByteArray();
System.out.println("写入内存的字节数据: " + new String(result));
```

**注意**:
- `ByteArrayOutputStream` 支持将数据写入内存，适合需要临时存储数据的场景。

### 2.3 `BufferedOutputStream`

`BufferedOutputStream` 为 `OutputStream` 提供缓冲功能，减少 I/O 操作次数，提升写入性能。

```java
try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("example.txt"))) {
    byte[] data = "Hello， World!".getBytes();
    bos.write(data);
    System.out.println("数据写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- `BufferedOutputStream` 默认缓冲区大小为 8192 字节，可以通过构造函数指定更大的缓冲区。

## 3. 高级用法

### 3.1 写入大文件

对于大文件，可以分块写入数据，避免一次性加载数据到内存。

```java
try (OutputStream os = new FileOutputStream("largefile.bin")) {
    byte[] buffer = new byte[8192];
    int bytesRead;
    while ((bytesRead = generateData(buffer)) != -1) {
        os.write(buffer， 0， bytesRead);
    }
    System.out.println("大文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 分块写入可以有效减少内存占用，适合处理大文件。

### 3.2 使用 `DataOutputStream` 写入基本数据类型

`DataOutputStream` 是 `OutputStream` 的装饰类，支持写入基本数据类型(如 `int`， `float`， `double` 等)。

```java
try (DataOutputStream dos = new DataOutputStream(new FileOutputStream("data.txt"))) {
    dos.writeInt(42);
    dos.writeDouble(3.14);
    dos.writeUTF("Hello， World!");
    System.out.println("基本数据类型写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- `DataOutputStream` 以二进制格式写入数据，适合需要序列化基本数据类型的场景。

## 4. 处理异常

在使用 `OutputStream` 时，可能会抛出 `IOException`，表示 I/O 操作失败。为确保资源正确释放，建议使用 `try-with-resources` 语句或手动关闭流。

### 4.1 使用 `try-with-resources`

`try-with-resources` 语句可以自动关闭流，避免资源泄露。

```java
try (OutputStream os = new FileOutputStream("example.txt")) {
    byte[] data = "Hello， World!".getBytes();
    os.write(data);
} catch (IOException e) {
    e.printStackTrace();
}
```

### 4.2 手动关闭流

如果不使用 `try-with-resources`，需要手动调用 `close()` 方法关闭流。

```java
OutputStream os = null;
try {
    os = new FileOutputStream("example.txt");
    byte[] data = "Hello， World!".getBytes();
    os.write(data);
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (os != null) {
        try {
            os.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**注意**:
- 手动关闭流时需要确保 `close()` 方法在 `finally` 块中执行，以防止资源泄露。

## 5. 总结

`OutputStream` 是 Java 中用于处理字节输出流的核心类，它提供了一系列方法用于将字节数据写入目标。
通过 `FileOutputStream`、`ByteArrayOutputStream`、`BufferedOutputStream` 等子类，开发者可以轻松实现文件的写入、内存数据的存储以及高效的批量写入。
此外，`DataOutputStream` 还支持写入基本数据类型，适合序列化场景。

在实际开发中，合理使用 `OutputStream` 及其子类可以提升数据写入的效率和可靠性。