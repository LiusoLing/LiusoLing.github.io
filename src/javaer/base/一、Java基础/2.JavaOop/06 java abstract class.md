---
# 这是文章的标题
title: 06. Java抽象类
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 6
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-19
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

在某些情况下，比如执行合同时，我们希望推迟执行合同的某些部分，以便稍后完成。

类似这样的操作，我们可以通过抽象类在Java中轻松完成。

在本教程中，我们将学习Java中抽象类的基础知识，以及它们在哪些情况下会有帮助。

<!-- more -->

## 1.抽象类

**抽象类的特征：**

- 我们用类关键字 `abstract` 修饰符定义一个抽象类

- 抽象类可以派生子类，但不能实例化

- 如果一个类定义了一个或多个抽象方法，那么该类本身必须声明为抽象

- 抽象类可以声明抽象方法和具体方法

- 从抽象类派生的子类必须实现所有基类的抽象方法，或者本身是抽象的


为了更好地理解这些概念，我们将创建一个简单的示例。

让我们的基本抽象类定义棋盘游戏的抽象API：

<br/><br/><br/><br/><br/><br/>

```java
public abstract class BoardGame {

    //... field declarations, constructors

    public abstract void play();

    //... concrete methods
}
```

然后，我们可以创建一个实现play方法的子类：

```java
public class Checkers extends BoardGame {

    public void play() {
        //... implementation
    }
}
```


## 2.何时使用抽象类

**我们可以举例一些经典场景，在这类场景中，往往使用抽象类，好过使用接口和具体类：**

- 我们希望将一些通用功能封装在一个地方（代码重用），多个相关子类将共享

- 我们需要部分定义一个API，我们的子类可以轻松扩展和细化

- 子类需要继承一个或多个具有受保护访问修饰符的常见方法或字段


上述所有这些场景都是完全、基于继承的遵守 `开放/封闭原则` 的良好例子。

此外，由于使用抽象类隐式处理基类型和子类型，我们也在利用 `多态性` 。

请注意，只要保留类层次结构中的 “is-a” 关系，代码重用就是使用抽象类的一个非常令人信服的理由。

<br/><br/><br/><br/><br/><br/>

## 3.使用示例

为了更清楚的了解抽象类如何运用，这里展示一个使用范例以供了解。

### 3.1定义一个基本抽象类

如果我们想要几种类型的文件阅读器，我们可能会创建一个抽象类，封装文件读取的常见内容：

```java
public abstract class BaseFileReader {
    
    protected Path filePath;
    
    protected BaseFileReader(Path filePath) {
        this.filePath = filePath;
    }
    
    public Path getFilePath() {
        return filePath;
    }
    
    public List<String> readFile() throws IOException {
        return Files.lines(filePath)
          .map(this::mapFileLine).collect(Collectors.toList());
    }
    
    protected abstract String mapFileLine(String line);
}
```

请注意，我们已经保护了 `filePath`，以便子类可以在需要时访问它。

更重要的是，我们留下了一些未完成的事情：**如何实际解析文件内容中的一行文本。**

我们的计划很简单：虽然我们的具体类没有特殊的方式来存储文件路径或浏览文件，但它们每个类都有一种特殊的方式来转换每行。

<br/><br/><br/><br/><br/><br/>

乍一看，BaseFileReader可能看起来没有必要。然而，这是干净、易于扩展的设计的基础。

从中，**我们可以轻松实现不同版本的文件阅读器，这些文件阅读器可以专注于其独特的业务逻辑。**


### 3.2定义子类

一个可能的文件阅读器可能是将文件内容转换为小写：

```java
public class LowercaseFileReader extends BaseFileReader {

    public LowercaseFileReader(Path filePath) {
        super(filePath);
    }

    @Override
    public String mapFileLine(String line) {
        return line.toLowerCase();
    }   
}
```


也可能是将文件内容转换为大写：

```java
public class UppercaseFileReader extends BaseFileReader {

    public UppercaseFileReader(Path filePath) {
        super(filePath);
    }

    @Override
    public String mapFileLine(String line) {
        return line.toUpperCase();
    }
}
```

正如我们从这个简单的示例中看到的，**每个子类都可以专注于其独特的行为**，而无需指定文件读取的其他方面。


### 3.3使用子类

使用从抽象类继承的类与任何其他具体类没有什么不同：

```java
@Test
public void givenLowercaseFileReaderInstance_whenCalledreadFile_thenCorrect() throws Exception {
    URL location = getClass().getClassLoader().getResource("files/test.txt")
    Path path = Paths.get(location.toURI());
    BaseFileReader lowercaseFileReader = new LowercaseFileReader(path);
        
    assertThat(lowercaseFileReader.readFile()).isInstanceOf(List.class);
}
```