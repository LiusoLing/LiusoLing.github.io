---
# 这是文章的标题
title: 04. Java带资源的捕获
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-07-19
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

对try-with-resources的支持——在Java 7中引入——允许我们声明在try块中使用的资源，并保证资源在执行该块后将被关闭。

声明的资源需要实现AutoCloseable接口。

<!-- more -->


## 1.使用try声明资源

要自动关闭，必须在try中声明资源：

```java
try (PrintWriter writer = new PrintWriter(new File("test.txt"))) {
    writer.println("Hello World");
}

```

## 2.try-with-resources取代try-catch-finally

使用新的try-with-resources功能的简单而明显的方法是替换传统的verbostry-catch-finally块。

让我们比较以下代码示例。

第一个是典型的try-catch-finally块：

```java
Scanner scanner = null;
try {
    scanner = new Scanner(new File("test.txt"));
    while (scanner.hasNext()) {
        System.out.println(scanner.nextLine());
    }
} catch (FileNotFoundException e) {
    e.printStackTrace();
} finally {
    if (scanner != null) {
        scanner.close();
    }
}
```

以下是使用try-with-resources的新的超级简洁解决方案：

```java
try (Scanner scanner = new Scanner(new File("test.txt"))) {
    while (scanner.hasNext()) {
        System.out.println(scanner.nextLine());
    }
} catch (FileNotFoundException fnfe) {
    fnfe.printStackTrace();
}
```
<br/><br/><br/><br/>


## 3.try-with-resources多种资源

我们可以通过用分号分隔多个资源，在try-with-resources块中声明多个资源：

```java
try (Scanner scanner = new Scanner(new File("testRead.txt"));
    PrintWriter writer = new PrintWriter(new File("testWrite.txt"))) {
    while (scanner.hasNext()) {
	writer.print(scanner.nextLine());
    }
}
```


## 4.带有自动关闭的自定义资源

要构建由try-with-resources块正确处理的自定义资源，该类应实现Closeable或AutoCloseable接口，并覆盖close方法：

```java
public class MyResource implements AutoCloseable {
    @Override
    public void close() throws Exception {
        System.out.println("Closed MyResource");
    }
}
```


## 5.有效的最终变量

在Java 9之前，我们只能在try-with-resources块中使用新的变量：

```java
try (Scanner scanner = new Scanner(new File("testRead.txt")); 
    PrintWriter writer = new PrintWriter(new File("testWrite.txt"))) { 
    // omitted
}
```


如上所示，在声明多个资源时，这尤其冗长。从Java 9开始，作为JEP 213的一部分，我们现在可以在try-with-resources块中使用最终甚至有效的最终变量：

```java
final Scanner scanner = new Scanner(new File("testRead.txt"));
PrintWriter writer = new PrintWriter(new File("testWrite.txt"))
try (scanner;writer) { 
    // omitted
}
```

简而言之，如果变量在第一次赋值后没有改变，即使它没有明确标记为最终，它实际上就是最终变量。

如上所示，scanner 变量被明确声明为final，因此我们可以将其与try-with-resources块一起使用。

虽然写入变量不是明确的最终变量，但在第一次分配后它不会改变。因此，我们也可以使用writer变量。
