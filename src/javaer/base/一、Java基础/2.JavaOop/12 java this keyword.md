---
# 这是文章的标题
title: 12. Java this关键字
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 12
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

在本教程中，我们将看看 `this` Java关键字。

在Java中，this关键字是**对正在调用其方法的当前对象的引用。**

让我们探索如何以及何时使用该关键字。

<!-- more -->

## 1.消除歧义

**该关键字对于消除本地参数的实例变量的歧义非常有用。** 最常见的原因是，当我们有与实例字段同名的构造函数参数时：

```java
public class KeywordTest {

    private String name;
    private int age;
    
    public KeywordTest(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

<br/><br/><br/><br/><br/><br/>

正如我们在这里看到的，我们正在将其与名称和年龄实例字段一起使用——以将它们与参数区分开来。

另一种用法是将其与本地范围内的参数隐藏一起使用。


## 2.引用同一类的构造函数

**从构造函数中，我们可以使用this()调用同一类的不同构造函数。**

在这里，我们使用this()进行构造函数链，以减少代码使用。

最常见的用例是从参数化构造函数调用默认构造函数：


```java
public KeywordTest(String name, int age) {
    this();
    
    // the rest of the code
}
```

或者，我们可以从无参数构造函数调用参数化构造函数，并传递一些参数：


```java
public KeywordTest() {
    this("John", 27);
}
```
请注意，this()应该是构造函数中的第一个语句，否则将发生编译错误。


## 3.作为参数传递

在这里，我们有printInstance()方法，其中定义了此关键字参数：

<br/><br/><br/><br/><br/><br/>

```java
public KeywordTest() {
    printInstance(this);
}

public void printInstance(KeywordTest thisKeyword) {
    System.out.println(thisKeyword);
}
```

在构造函数中，我们调用printInstance()方法。有了这一点，我们传递了对当前实例的引用。

## 4.作为返回值

**我们还可以使用此关键字从方法返回当前类实例。**


```java

public class BankAccount {
    
    private String name;
    private String accountNumber;
    private String email;
    private boolean newsletter;

    // constructors/getters
    
    public static class BankAccountBuilder {
    
        private String name;
        private String accountNumber;
        private String email;
        private boolean newsletter;
        
        public BankAccountBuilder(String name, String accountNumber) {
            this.name = name;
            this.accountNumber = accountNumber;
        }

        public BankAccountBuilder withEmail(String email) {
            this.email = email;
            return this;
        }

        public BankAccountBuilder wantNewsletter(boolean newsletter) {
            this.newsletter = newsletter;
            return this;
        }
        
        public BankAccount build() {
            return new BankAccount(this);
        }
    }
}

```

构造器模式可以如下使用：


```java
BankAccount newAccount = new BankAccount
  .BankAccountBuilder("Jon", "22738022275")
  .withEmail("jon@example.com")
  .wantNewsletter(true)
  .build();
```

## 5.内部类使用

我们还用它来从内部类中访问外部类实例：

```java
public class KeywordTest {

    private String name;

    class ThisInnerClass {

        boolean isInnerClass = true;

        public ThisInnerClass() {
            KeywordTest thisKeyword = KeywordTest.this;
            String outerString = KeywordTest.this.name;
        }
    }
}
```

在这里，在构造函数中，我们可以使用KeywordTest.this调用获取对KeywordTest实例的引用。我们可以更深入地访问实例变量，如KeywordTest.this.name字段。
