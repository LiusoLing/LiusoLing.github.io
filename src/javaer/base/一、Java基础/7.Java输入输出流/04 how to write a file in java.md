---
# 这是文章的标题
title: 04. 写入文件
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
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

在Java中,将数据写入文件是一项常见的任务。无论是写入文本数据、二进制数据,还是追加内容,Java都提供了多种方法来实现这些需求。

本文将介绍几种常见的文件写入方法,并简要说明它们的优缺点。

## 1.使用 `java.io` 包中的类

### 1.1 `FileWriter` 写入文本文件

`FileWriter` 是写入文本文件最常用的类之一。它可以直接将字符串写入文件,适合处理简单的文本数据。

```java
try (FileWriter writer = new FileWriter("example.txt")) {
    writer.write("Hello, World!");
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 简单易用,适合快速写入文本数据。

**缺点**:
- 需要手动处理 `IOException`,且不支持缓冲写入。

### 1.2 `BufferedWriter` 提高写入效率

`BufferedWriter` 是对 `FileWriter` 的封装,提供缓冲写入功能。它可以减少I/O操作次数,提升写入效率,特别适合处理大量数据。

```java
try (BufferedWriter writer = new BufferedWriter(new FileWriter("example.txt"))) {
    writer.write("Hello, World!");
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 提高写入效率,适合处理大文件。

**缺点**:
- 需要手动处理 `IOException`。

### 1.3 `FileOutputStream` 写入二进制数据

如果需要写入二进制数据,可以使用 `FileOutputStream`。它可以将字节流写入文件,适合处理图片、视频等非文本数据。

```java
try (FileOutputStream fos = new FileOutputStream("example.bin")) {
    byte[] data = {0x48, 0x65, 0x6C, 0x6C, 0x6F}; // "Hello" 的字节表示
    fos.write(data);
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 可以处理任何类型的二进制数据。

**缺点**:
- 不适合写入文本数据,需要手动处理字节流。

## 2.使用 `java.nio` 包中的类

### 2.1 `Files.write()` 方法

Java 7 引入了 `java.nio.file.Files` 类,提供了更简洁的文件写入方式。`Files.write()` 方法可以直接将字节数组或字符串写入文件。

```java
Path path = Paths.get("example.txt");
try {
    Files.write(path, "Hello, World!".getBytes());
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 代码简洁,支持多种数据类型。

**缺点**:
- 需要处理 `IOException`。

### 2.2 `Files.newBufferedWriter()` 方法

`Files.newBufferedWriter()` 方法返回一个 `BufferedWriter`,支持高效写入文本数据。它还允许指定字符编码。

```java
Path path = Paths.get("example.txt");
try (BufferedWriter writer = Files.newBufferedWriter(path, StandardCharsets.UTF_8)) {
    writer.write("Hello, World!");
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 支持字符编码,提高写入效率。

**缺点**:
- 需要处理 `IOException`。

## 3.追加内容到文件

在某些情况下,我们可能需要将内容追加到已有文件中,而不是覆盖原有内容。Java 提供了多种方式来实现追加写入。

### 3.1 `FileWriter` 追加模式

`FileWriter` 的构造函数支持一个布尔参数,设置为 `true` 时,新内容将追加到文件末尾。

```java
try (FileWriter writer = new FileWriter("example.txt", true)) {
    writer.write("Appended text.");
    System.out.println("内容追加成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 简单易用,适合追加文本数据。

**缺点**:
- 需要手动处理 `IOException`。

### 3.2 `Files.write()` 追加模式

`Files.write()` 方法也支持追加模式,可以通过 `StandardOpenOption.APPEND` 选项实现。

```java
Path path = Paths.get("example.txt");
try {
    Files.write(path, "Appended text.".getBytes(), StandardOpenOption.APPEND);
    System.out.println("内容追加成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 代码简洁,支持多种数据类型。

**缺点**:
- 需要处理 `IOException`。

## 4.使用第三方库

### 4.1 Apache Commons IO

Apache Commons IO 提供了 `FileUtils` 类,可以简化文件写入操作。它支持将字符串、字节数组等写入文件。

```java
File file = new File("example.txt");
try {
    FileUtils.writeStringToFile(file, "Hello, World!", StandardCharsets.UTF_8);
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 简化了代码,提供了更多功能。

**缺点**:
- 需要引入第三方库。

### 4.2 Google Guava

Google Guava 也提供了 `Files` 类,支持文件写入操作。它可以简化字节数组和字符串的写入。

```java
File file = new File("example.txt");
try {
    com.google.common.io.Files.write("Hello, World!".getBytes(), file);
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 代码简洁,功能强大。

**缺点**:
- 需要引入第三方库。

## 总结

在Java中,写入文件的方式多种多样。

✅ 对于简单的文本数据,`FileWriter` 和 `BufferedWriter` 是常用的选择;
✅ 如果需要处理二进制数据,`FileOutputStream` 是更好的选择。
✅ Java 7 引入的 `Files` 类提供了更简洁的写入方式,特别适合现代Java开发。
✅ 此外,第三方库如 Apache Commons IO 和 Google Guava 也提供了强大的文件操作功能,可以简化开发。