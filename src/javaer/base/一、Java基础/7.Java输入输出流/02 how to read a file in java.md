---
# 这是文章的标题
title: 02. 读取文件
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
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

在Java中，读取文件是一项常见的操作。无论是读取文本文件、二进制文件，还是处理大型文件，Java都提供了多种方法来实现这些需求。本文将介绍几种常见的文件读取方法，并简要说明它们的优缺点。

<!-- more -->

## 1. 使用 `java.io` 包中的类

### 1.1 `BufferedReader` 读取文本文件

`BufferedReader` 是读取文本文件最常用的类之一。它提供了高效的方式读取字符流，尤其是处理大文件时，可以通过缓存减少I/O操作。

```java
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 适合读取大文件，性能较好。
- 提供了逐行读取的便利方法。

**缺点**:
- 仅适用于文本文件，无法处理二进制文件。

### 1.2 `FileInputStream` 读取二进制文件

如果需要读取二进制文件，可以使用 `FileInputStream`。它可以读取字节流，适合处理图片、视频等非文本文件。

```java
try (FileInputStream fis = new FileInputStream("file.bin")) {
    int content;
    while ((content = fis.read()) != -1) {
        System.out.print((char) content);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 可以处理任何类型的文件，包括二进制文件。

**缺点**:
- 不适合读取文本文件，可能需要额外的处理来解析文本。

## 2. 使用 `java.nio` 包中的类

### 2.1 `Files` 类的 `readAllLines` 方法

Java 7 引入了 `java.nio.file.Files` 类，提供了更简洁的文件读取方式。`readAllLines` 方法可以一次性读取文件的所有行，并返回一个 `List<String>`。

```java
try {
    List<String> lines = Files.readAllLines(Paths.get("file.txt"));
    for (String line : lines) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 代码简洁，适合小文件。
  
**缺点**:
- 对于大文件，可能会占用大量内存。

### 2.2 `Files` 类的 `lines` 方法

如果需要处理大文件，可以使用 `Files.lines` 方法。它返回一个 `Stream<String>`，支持流式处理，避免一次性加载整个文件。

```java
try (Stream<String> stream = Files.lines(Paths.get("file.txt"))) {
    stream.forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 适合处理大文件，内存占用低。
  
**缺点**:
- 需要熟悉Java 8的Stream API。

## 3. 使用第三方库

### 3.1 Apache Commons IO

Apache Commons IO 提供了一个 `FileUtils` 类，可以简化文件读取操作。它提供了多种方法来读取文件内容。

```java
try {
    List<String> lines = FileUtils.readLines(new File("file.txt")， StandardCharsets.UTF_8);
    for (String line : lines) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 简化了代码，提供了更多功能。

**缺点**:
- 需要引入第三方库。

### 3.2 Google Guava

Google Guava 是另一个常用的第三方库，提供了 `Files` 类来读取文件。它支持读取文件的所有行，并将其转换为一个 `List<String>`。

```java
try {
    List<String> lines = com.google.common.io.Files.readLines(new File("file.txt")， StandardCharsets.UTF_8);
    for (String line : lines) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**优点**:
- 代码简洁，功能强大。

**缺点**:
- 需要引入第三方库。

## 总结

在Java中，读取文件的方式多种多样，选择合适的方法取决于具体的应用场景。

✅ 对于小型文本文件，可以使用 `Files.readAllLines` 方法;
✅ 对于大型文件，`BufferedReader` 或 `Files.lines` 是更好的选择;
✅ 如果需要处理二进制文件，`FileInputStream` 是常用的工具。
✅ 此外，第三方库如Apache Commons IO和Google Guava也提供了强大的文件操作功能，可以简化开发。
