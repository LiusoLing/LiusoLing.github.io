---
# 这是文章的标题
title: 13. Java super关键字
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 13
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-25
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

在这个快速教程中，我们将看看 `super` Java关键字。

简单地说，**我们可以使用超级关键字来访问父类。**

让我们探索核心关键字在语言中的应用。

<!-- more -->

## 1.构造函数的super关键字

**我们可以使用super()调用父默认构造函数。**它应该是构造函数中的第一个语句。

在我们的示例中，我们将super（消息）与String参数一起使用：


```java
public class SuperSub extends SuperBase {

    public SuperSub(String message) {
        super(message);
    }
}
```

让我们创建一个子类实例，看看后面发生了什么：

<br/><br/><br/><br/><br/><br/>


```java
SuperSub child = new SuperSub("message from the child class");
```
新关键字调用SuperSub的构造函数，它本身首先调用父构造函数，并将String参数传递给它。


## 2.访问父类变量

让我们创建一个带有消息实例变量的父类：

```java
public class SuperBase {
    String message = "super class";

    // default constructor

    public SuperBase(String message) {
        this.message = message;
    }
}
```


现在，我们创建一个具有相同名称变量的子类：

```java
public class SuperSub extends SuperBase {

    String message = "child class";

    public void getParentMessage() {
        System.out.println(super.message);
    }
}
```
我们可以使用超级关键字从子类访问父变量。


## 3.重写方法

让我们向父类添加一个实例方法：
```java
public class SuperBase {

    String message = "super class";

    public void printMessage() {
        System.out.println(message);
    }
}
```


<br/><br/><br/><br/><br/><br/>
覆盖我们子类中的printMessage()方法：


```java
public class SuperSub extends SuperBase {

    String message = "child class";

    public SuperSub() {
        super.printMessage();
        printMessage();
    }

    public void printMessage() {
        System.out.println(message);
    }
}
```

**我们可以使用super从子类访问重写方法。** 构造函数中的super.printMessage()调用来自SuperBase的父方法。

