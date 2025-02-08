---
# 这是文章的标题
title: 02. Java已检查未检查异常
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
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

Java异常分为两大类：检查异常和未检查异常。

在本教程中，我们将提供一些关于如何使用它们的代码示例。

<!-- more -->


## 1.检查异常

一般来说，检查的异常代表程序无法控制的错误。例如，如果输入文件不存在，`FileInputStream` 的构造函数会抛出 `FileNotFoundException`。

**Java在编译时验证检查的异常。**

因此，我们应该使用 throws 关键字来声明一个检查的异常：

```java
private static void checkedExceptionWithThrows() throws FileNotFoundException {
    File file = new File("not_existing_file.txt");
    FileInputStream stream = new FileInputStream(file);
}
```


我们还可以使用try-catch块来处理已选中的异常：


```java
private static void checkedExceptionWithTryCatch() {
    File file = new File("not_existing_file.txt");
    try {
        FileInputStream stream = new FileInputStream(file);
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    }
}
```

Java中一些常见的检查异常是 `IOException`、`SQLException` 和 `ParseException`。

`Exception`类是检查异常的超类，因此我们可以通过扩展 `Exception` 来创建自定义检查异常：


```java
public class IncorrectFileNameException extends Exception {
    public IncorrectFileNameException(String errorMessage) {
        super(errorMessage);
    }
}
```

<br/><br/><br/><br/>


## 2.未检查的异常

如果程序抛出未检查的异常，它会在程序逻辑中反映一些错误。

例如，如果我们将一个数字除以0，Java将抛出ArithmeticException：


```java
private static void divideByZero() {
    int numerator = 1;
    int denominator = 0;
    int result = numerator / denominator;
}
```

**Java不会在编译时验证未检查的异常。**

此外，我们不必在使用 throws 关键字的方法中声明未选中的异常。尽管上述代码在编译时没有任何错误，但它将在运行时抛出ArithmeticException。


Java中一些常见的未检查异常是 `NullPointerException`、`ArrayIndexOutOfBoundsException` 和 `IllegalArgumentException`。

`RuntimeException` 类是所有未选中异常的超类，因此我们可以通过扩展 `RuntimeException` 来创建自定义未选中异常：

```java
public class NullOrEmptyException extends RuntimeException {
    public NullOrEmptyException(String errorMessage) {
        super(errorMessage);
    }
}
```

## 3.何时使用检查异常和未检查异常

在Java中使用异常是一个很好的做法，这样我们就可以将错误处理代码与常规代码分开。然而，我们需要决定抛出哪种类型的异常。

Oracle Java文档提供了有关何时使用已检查的异常和未检查的异常的指导：

**“如果可以合理地期望客户端从异常中恢复，请将其定为已检查的异常。如果客户端无法从异常中恢复，请将其定为未检查的异常。”**

例如，在我们打开文件之前，我们可以先验证输入文件名。如果用户输入文件名无效，我们可以抛出一个自定义检查异常：

```java
if (!isCorrectFileName(fileName)) {
    throw new IncorrectFileNameException("Incorrect filename : " + fileName );
}

```

通过这种方式，我们可以通过接受另一个用户输入文件名来恢复正常使用系统。

但是，如果输入文件名是空指针或空字符串，则意味着我们在代码中存在一些错误。在这种情况下，我们应该抛出一个未检查的异常：

```java
if (fileName == null || fileName.isEmpty())  {
    throw new NullOrEmptyException("The filename is null or empty.");
}
