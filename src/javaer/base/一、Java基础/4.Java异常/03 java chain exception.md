---
# 这是文章的标题
title: 03. Java链式异常
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
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

在本文中，我们将非常简要地了解什么是异常，并深入讨论Java中的链式异常。

简而言之，异常是扰乱程序正常执行流程的事件。现在让我们看看如何将异常链接起来，以从中获得更好的语义。

<!-- more -->


## 1.链式异常

链式异常有助于识别一个异常导致应用程序中另一个异常的情况。

例如，考虑一种方法，该方法由于试图除以零而抛出ArithmeticException，但异常的实际原因是I/O错误，导致除数为零。

该方法将向调用者抛出ArithmeticException。来电者不知道异常的实际原因。在这种情况下使用ChainedException。

这个概念是在JDK 1.4中引入的。

让我们看看Java如何支持链式异常。

<br/><br/><br/><br/>


## 2.可抛类

可抛类有一些构造函数和方法来支持链式异常。首先，让我们看看构造函数。

- Throwable（Throwable cause）-Throwable有一个参数，它指定了异常的实际原因。
- Throwable（String desc，Throwable cause）-此构造函数也接受带有异常实际原因的异常描述。

接下来，让我们看看这个类提供的方法：

- getCause()方法-此方法返回与当前异常相关联的实际原因。
- initCause()方法-它通过调用异常设置一个底层原因。


## 3.示例

现在，让我们看看示例，我们将设置自己的异常描述并抛出一个链式异常：

```java
public class MyChainedException {

    public void main(String[] args) {
        try {
            throw new ArithmeticException("Top Level Exception.")
              .initCause(new IOException("IO cause."));
        } catch(ArithmeticException ae) {
            System.out.println("Caught : " + ae);
            System.out.println("Actual cause: "+ ae.getCause());
        }
    }    
}
```

正如猜测的那样，这将导致：

```java
Caught: java.lang.ArithmeticException: Top Level Exception.
Actual cause: java.io.IOException: IO cause.
```

### 3.1 不连锁异常

首先，我们将创建一系列例外：

```java
class NoLeaveGrantedException extends Exception {

    public NoLeaveGrantedException(String message, Throwable cause) {
        super(message, cause);
    }

    public NoLeaveGrantedException(String message) {
        super(message);
    }
}

class TeamLeadUpsetException extends Exception {
    // Both Constructors
}
```

现在，让我们开始在代码示例中使用上述异常：

```java
public class MainClass {

    public void main(String[] args) throws Exception {
        getLeave();
    }

    void getLeave() throws NoLeaveGrantedException {
        try {
            howIsTeamLead();
        } catch (TeamLeadUpsetException e) {
            e.printStackTrace();
            throw new NoLeaveGrantedException("Leave not sanctioned.");
        }
    }

    void howIsTeamLead() throws TeamLeadUpsetException {
        throw new TeamLeadUpsetException("Team Lead Upset");
    }
}
```

在上面的示例中，日志将看起来像这样：

```java
com.baeldung.chainedexception.exceptions.TeamLeadUpsetException: 
  Team lead Upset
    at com.baeldung.chainedexception.exceptions.MainClass
      .howIsTeamLead(MainClass.java:46)
    at com.baeldung.chainedexception.exceptions.MainClass
      .getLeave(MainClass.java:34)
    at com.baeldung.chainedexception.exceptions.MainClass
      .main(MainClass.java:29)
Exception in thread "main" com.baeldung.chainedexception.exceptions.
  NoLeaveGrantedException: Leave not sanctioned.
    at com.baeldung.chainedexception.exceptions.MainClass
      .getLeave(MainClass.java:37)
    at com.baeldung.chainedexception.exceptions.MainClass
      .main(MainClass.java:29)
```


### 3.2 连锁异常

链式异常：

```java
public class MainClass {
    public void main(String[] args) throws Exception {
        getLeave();
    }

    public getLeave() throws NoLeaveGrantedException {
        try {
            howIsTeamLead();
        } catch (TeamLeadUpsetException e) {
             throw new NoLeaveGrantedException("Leave not sanctioned.", e);
        }
    }

    public void howIsTeamLead() throws TeamLeadUpsetException {
        throw new TeamLeadUpsetException("Team lead Upset.");
    }
}
```

让我们看看通过链式异常获得的日志：

```java
Exception in thread "main" com.baeldung.chainedexception.exceptions
  .NoLeaveGrantedException: Leave not sanctioned. 
    at com.baeldung.chainedexception.exceptions.MainClass
      .getLeave(MainClass.java:36) 
    at com.baeldung.chainedexception.exceptions.MainClass
      .main(MainClass.java:29) 
Caused by: com.baeldung.chainedexception.exceptions
  .TeamLeadUpsetException: Team lead Upset.
    at com.baeldung.chainedexception.exceptions.MainClass
  .howIsTeamLead(MainClass.java:44) 
    at com.baeldung.chainedexception.exceptions.MainClass
  .getLeave(MainClass.java:34) 
    ... 1 more
```

我们可以很容易地比较显示的日志，并得出结论，链式异常会导致更干净的日志。