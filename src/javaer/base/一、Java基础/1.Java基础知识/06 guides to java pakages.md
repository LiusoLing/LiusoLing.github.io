---
# 这是文章的标题
title: 06. Java包名指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 6
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-12
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

本节介绍Java中软件包的基础知识。我们将了解如何创建软件包并访问我们放在其中的类型，我们还将讨论命名约定以及它与底层目录结构的关系。

最后，我们将编译并运行我们打包的Java类。

<!-- more -->


## 1.java软件包概述

在Java中，我们使用**软件包对相关类、接口和子软件包进行分组**。

这样做的主要好处是：

<br/><br/><br/><br/><br/><br/>

- **使相关类型更容易找到** -软件包通常包含逻辑相关的类型
- **避免命名冲突** -软件包将帮助我们唯一地识别一个类；例如，我们可以有com.zjy.Application，以及com.example.Application类
- **控制访问** -我们可以通过结合软件包和访问修饰符来控制对类型的可见性和访问

接下来，让我们看看如何创建和使用Java软件包。


## 2.创建一个软件包

要创建软件包，**我们必须使用软件包语句，将其添加为文件中的第一行代码**。

让我们在名为com.zjy.packages的软件包中放置一个类型：

```java
package com.zjy.packages;
```

**强烈建议将每种新类型放在一个包装中**。

如果我们定义类型，并且不将它们放在软件包中，它们将进入默认或未命名的软件包。使用默认软件包有几个缺点：

- 我们失去了拥有软件包结构的好处，我们不能有子软件包
- 我们无法从其他软件包导入默认软件包中的类型
- 受保护的和包式私有访问范围将毫无意义

正如[Java语言规范所述](https://docs.oracle.com/javase/specs/jls/se14/html/jls-7.html#jls-7.4.2)，未命名的软件包由Java SE平台提供，主要是为了方便开发小型或临时应用程序或刚开始开发时。

<br/><br/><br/><br/><br/><br/>

因此，**我们应该避免在实际使用的应用程序中使用未命名或默认软件包**。

### 2.1 命名惯例

为了避免具有相同名称的软件包，我们遵循一些命名惯例：

> 1. 用**小写**来定义我们的**软件包名称**
> 2. 软件包名称是句号分隔的
> 3. 名称也由**创建**它们的**公司**或**组织**决定

为了根据组织确定软件包名称，我们通常会从反转公司URL开始。在那之后，命名惯例由公司定义，可能包括部门名称和项目名称。

例如，要从www.zjy.com制作一个软件包，让我们反转它：
```java
com.zjy
```

然后，我们可以进一步定义这个的子包，如 `com.zjy.packages` 或 `com.zjy.packages.domain`。

<br/><br/><br/><br/><br/><br/>

### 2.2 目录结构

Java中的软件包与目录结构相对应。

**每个软件包和子软件包都有自己的目录**。因此，对于 `com.zjy.packages` 软件包，我们应该有一个 `com -> zjy -> packages` 的目录结构。

大多数 IDE 将帮助我们根据软件包名称创建好此目录结构，因此我们不必手动创建这些。

## 3.使用软件包成员

让我们从在名为 `domain`的子包中定义一个类 `TodoItem` 开始：

```java
package com.zjy.packages.domain;

public class TodoItem {
    private Long id;
    private String description;
    
    // standard getters and setters
}
```

### 3.1 import引入

为了从另一个软件包中的类中使用我们的 `TodoItem` 类，我们需要导入它。一旦它被导入，我们就可以按名称访问它。

**我们可以从软件包中导入单个类型，或者使用星号导入软件包中的所有类型**。

让我们导入整个 `domain` 子包：

```java
import com.zjy.packages.domain.*;
```

也可以只导入 `TodoItem` 类：

```java
import com.sky.packages.domain.TodoItem;
```

<br/><br/><br/><br/><br/><br/>

JDK和其他Java库也带有自己的软件包。**我们可以以同样的方式导入我们想要在项目中使用的预先存在的类**。

例如，让我们导入Java核心列表接口和ArrayList类：

```java
import java.util.ArrayList;
import java.util.List;
```

**然后，我们可以在应用程序中使用这些类型，只需使用它们的名称**：

```java
public class TodoList {
    private List<TodoItem> todoItems;

    public void addTodoItem(TodoItem todoItem) {
        if (todoItems == null) {
            todoItems = new ArrayList<TodoItem>();
        }
        todoItems.add(todoItem);
    }
}
```

在这里，我们使用我们的新类和Java核心类来创建ToDoItems列表。


### 3.2 全限定类名

有时，我们可能会从不同的软件包中使用两个名称相同的类。

例如，我们可能同时使用 `java.sql.Date` 和 `java.util.Date` 。当我们遇到命名冲突时，我们需要为至少一个类使用完全限定的类名。

```java

public class TodoList {
    private List<com.zjy.packages.domain.TodoItem> todoItems;

    public void addTodoItem(com.zjy.packages.domain.TodoItem todoItem) {
        if (todoItems == null) {
            todoItems = new ArrayList<com.zjy.packages.domain.TodoItem>();
        }todoItems.add(todoItem);
    }

    // standard getters and setters
}
```

## 4.javac编译

当需要编译我们的打包类时，我们需要记住我们的目录结构。

从源文件夹开始，我们需要告诉javac在哪里可以找到我们的文件。

我们需要先编译我们的 `TodoItem` 类，因为我们的 `TodoList` 类依赖于它。

<br/><br/><br/><br/><br/><br/>

让我们打开命令行或终端，然后导航到我们的源目录。

现在，让我们编译我们的 `com.zjy.packages.domain.TodoItem` 类：

```shell
> javac com/zjy/packages/domain/TodoItem.java
```

如果我们的类编译干净，我们将看不到错误消息，并且 `TodoItem.class` 文件应该出现在 `com/zjy/packages/domain` 目录中。

对于引用其他软件包中类型的类型，我们应该使用 `-classpath` 标志来告诉 `javac` 命令在哪里可以找到其他编译的类。

现在我们的 `TodoItem` 类已经编译了，我们可以编译我们的 `TodoList` 和 `TodoApp` 类：

```shell
>javac -classpath . com/zjy/packages/*.java
```

同样，我们应该没有看到错误消息，我们应该在 `com/zjy/packages` 目录中找到两个类文件。

让我们使用 `TodoApp` 类的完全限定名称运行我们的应用程序：

```shell
>java com.zjy.packages.TodoApp
```

此时，控制台将打印输出。

