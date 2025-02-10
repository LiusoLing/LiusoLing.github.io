---
# 这是文章的标题
title: 05. NIO2
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 5
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

Java NIO.2(New I/O.2)是 Java 7 引入的一套新的文件处理 API，提供了比传统的 `java.io` 包更强大和灵活的文件操作功能。

`java.nio.file` 包是 NIO.2 的核心部分，提供了许多现代化的文件操作工具。本文将介绍 Java NIO.2 文件 API 的主要功能和使用方法。

<!-- more -->

## 1.核心类概述

### 1.1 `Path` 类

`Path` 是 NIO.2 的核心类之一，用于表示文件或目录的路径。它比传统的 `File` 类更灵活，支持跨平台路径操作。

```java
Path path = Paths.get("example.txt");
System.out.println("文件路径: " + path.toAbsolutePath());
```

**主要功能**:
- 获取路径的各个部分(如文件名、父目录等)。
- 解析相对路径和绝对路径。
- 跨平台路径操作。

### 1.2 `Files` 类

`Files` 类提供了大量的静态方法，用于文件操作，如创建、删除、复制、移动文件等。

```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
Files.copy(source， target， StandardCopyOption.REPLACE_EXISTING);
System.out.println("文件复制成功!");
```

**主要功能**:
- 文件的创建、删除、复制、移动。
- 文件属性的读取和设置。
- 文件的读写操作。

### 1.3 `Paths` 类

`Paths` 类是一个工具类，提供了用于创建 `Path` 实例的工厂方法。它简化了 `Path` 对象的创建过程。

```java
Path path = Paths.get("example.txt");
```

**主要功能**:
- 通过字符串路径创建 `Path` 对象。

## 2.常见文件操作

### 2.1 创建文件

使用 `Files.createFile()` 方法可以创建一个新文件。

```java
Path path = Paths.get("example.txt");
try {
    Files.createFile(path);
    System.out.println("文件创建成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 如果文件已存在，会抛出 `FileAlreadyExistsException`。

### 2.2 删除文件

使用 `Files.delete()` 方法可以删除文件。

```java
Path path = Paths.get("example.txt");
try {
    Files.delete(path);
    System.out.println("文件删除成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 如果文件不存在，会抛出 `NoSuchFileException`。

### 2.3 复制文件

使用 `Files.copy()` 方法可以复制文件。

```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
try {
    Files.copy(source， target， StandardCopyOption.REPLACE_EXISTING);
    System.out.println("文件复制成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 可以使用 `StandardCopyOption.REPLACE_EXISTING` 替换已存在的文件。

### 2.4 移动文件

使用 `Files.move()` 方法可以移动或重命名文件。

```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
try {
    Files.move(source， target， StandardCopyOption.REPLACE_EXISTING);
    System.out.println("文件移动成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 可以使用 `StandardCopyOption.REPLACE_EXISTING` 替换已存在的文件。

### 2.5 读取文件内容

使用 `Files.readAllLines()` 方法可以读取文件的所有行。

```java
Path path = Paths.get("example.txt");
try {
    List<String> lines = Files.readAllLines(path);
    for (String line : lines) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 文件内容较大时，可能会占用较多内存。

### 2.6 写入文件内容

使用 `Files.write()` 方法可以将内容写入文件。

```java
Path path = Paths.get("example.txt");
try {
    Files.write(path， "Hello， World!".getBytes());
    System.out.println("文件写入成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 可以使用 `StandardOpenOption.APPEND` 选项追加内容。

## 3.文件属性操作

### 3.1 获取文件属性

使用 `Files.readAttributes()` 方法可以读取文件的属性。

```java
Path path = Paths.get("example.txt");
try {
    BasicFileAttributes attrs = Files.readAttributes(path， BasicFileAttributes.class);
    System.out.println("文件大小: " + attrs.size());
    System.out.println("创建时间: " + attrs.creationTime());
    System.out.println("最后修改时间: " + attrs.lastModifiedTime());
} catch (IOException e) {
    e.printStackTrace();
}
```

**主要属性**:
- 文件大小、创建时间、最后修改时间、文件类型等。

### 3.2 设置文件属性

使用 `Files.setAttribute()` 方法可以设置文件的属性。

```java
Path path = Paths.get("example.txt");
try {
    Files.setAttribute(path， "dos:readonly"， true);
    System.out.println("文件属性设置成功!");
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 不同操作系统支持的文件属性可能不同。

## 4.文件遍历与搜索

### 4.1 遍历目录

使用 `Files.walk()` 方法可以递归遍历目录中的所有文件和子目录。

```java
Path start = Paths.get(".");
try (Stream<Path> stream = Files.walk(start)) {
    stream.forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 可以使用 `Files.walkFileTree()` 方法自定义遍历行为。

### 4.2 搜索文件

使用 `Files.find()` 方法可以根据条件搜索文件。

```java
Path start = Paths.get(".");
int maxDepth = 10;
BiPredicate<Path， BasicFileAttributes> matcher = (path， attrs) -> path.toString().endsWith(".txt");

try (Stream<Path> stream = Files.find(start， maxDepth， matcher)) {
    stream.forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
```

**注意**:
- 可以根据文件名、文件属性等条件进行搜索。

## 5.总结

Java NIO.2 文件 API 提供了比传统 `java.io` 包更强大和灵活的文件操作功能。

✅ 通过 `Path`、`Files` 和 `Paths` 等核心类，开发者可以轻松实现文件的创建、删除、复制、移动、读写等操作。
✅ 此外，NIO.2 还支持文件属性操作、目录遍历和文件搜索等高级功能。
✅ 对于现代 Java 开发，NIO.2 是处理文件操作的首选工具。