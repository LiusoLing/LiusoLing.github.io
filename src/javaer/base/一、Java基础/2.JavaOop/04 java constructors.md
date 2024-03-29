---
# 这是文章的标题
title: 04. Java构造函数
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-02-21
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

了解Java中的构造函数，清楚类的实例对象是如何创建的。

<!-- more -->


## 1.无参构造函数

想象一下，我们有一个银行账户，它将包含账户名、创建日期和余额。

重写 toString() 方法，将信息打印在控制台:

```java
class BankAccount {
    String name;
    LocalDateTime opened;
    double balance;
    
    @Override
    public String toString() {
        return String.format("%s, %s, %f", 
          this.name, this.opened.toString(), this.balance);
    }
}
```

<br/><br/><br/><br/><br/><br/>

现在，该类包含存储银行账户信息所需的所有必填字段，但尚未包含构造函数。

**这意味着，如果我们创建一个新对象，字段值将不会被初始化：**

```java
BankAccount account = new BankAccount();
account.toString();
```

运行上面的toString方法将导致异常，因为银行账号对象账号名、创建时间和余额仍然是空的：

```java
java.lang.NullPointerException
    at com.sky.constructors.BankAccount.toString(BankAccount.java:12)
    at com.sky.constructors.ConstructorUnitTest
      .givenNoExplicitContructor_whenUsed_thenFails(ConstructorUnitTest.java:23)
```

无参构造器可以解决这个问题：

```java
class BankAccount {
    public BankAccount() {
        this.name = "";
        this.opened = LocalDateTime.now();
        this.balance = 0.0d;
    }
}

```

它是一个方法，但它没有返回类型。这是因为构造函数隐式返回其创建的对象类型。

这种特殊类型的构造函数被称为无参数构造函数。

现在调用 `new BankAccount()` 将调用上面的构造函数。

这是因为当我们不明确编写任何构造函数时，编译器会添加一个默认的、无参数的构造函数。

这就是为什么我们能够第一次构造对象，即使我们没有明确地编写构造函数。默认，没有参数构造函数将简单地将所有成员设置为其默认值。

对于对象，这是空的，这导致了我们之前看到的异常。


<br/><br/><br/><br/><br/><br/>


## 2.有参构造函数

构造函数的真正好处是，它们帮助我们在向对象注入状态时保持封装。

想要这个账号能使用，我们需要向对象注入一些初始值。

要想做到这一点，需要使用有参数构造器来实现，来看一个有参构造器：

```java
class BankAccount {
    public BankAccount() { ... }
    public BankAccount(String name, LocalDateTime opened, double balance) {
        this.name = name;
        this.opened = opened;
        this.balance = balance;
    }
}

```

现在，我们可以用我们的 `BankAccount` 类做一些有用的事情：

```java
    LocalDateTime opened = LocalDateTime.of(2018, Month.JUNE, 29, 06, 30, 00);
    BankAccount account = new BankAccount("Tom", opened, 1000.0f); 
    account.toString();

```


## 3.拷贝构造器

构造函数不需要仅限于初始化。它们也可以用于以其他方式创建对象。**想象一下，我们需要能够从现有帐户创建一个新帐户。**

新帐户应与旧帐户同名，今天是创建日期，没有资金。**我们可以使用拷贝构造函数做到这一点：**


<br/><br/><br/><br/><br/><br/>


```java
public BankAccount(BankAccount other) {
    this.name = other.name;
    this.opened = LocalDateTime.now();
    this.balance = 0.0f;
}

```

可以通过上述实现如下效果：

```java
LocalDateTime opened = LocalDateTime.of(2018, Month.JUNE, 29, 06, 30, 00);
BankAccount account = new BankAccount("Tim", opened, 1000.0f);
BankAccount newAccount = new BankAccount(account);

assertThat(account.getName()).isEqualTo(newAccount.getName());
assertThat(account.getOpened()).isNotEqualTo(newAccount.getOpened());
assertThat(newAccount.getBalance()).isEqualTo(0.0f);

```

## 4.链式构造器

链式构造器通常指的是通过返回 `this` 实现的一种编程技巧，使得对象实例化过程可以像链条一样连续调用多个方法来逐步配置和初始化对象的属性。

这种模式常见于 `Builder` 模式中，它允许创建一个更加可读、灵活且不易出错的对象构建过程。

```java
public class User {
    private String name;
    private int age;
    private String email;

    // 非公开的构造器，防止直接实例化
    private User() {}

    // Builder类
    public static class UserBuilder {
        private String name;
        private int age;
        private String email;

        public UserBuilder setName(String name) {
            this.name = name;
            return this; // 这里返回this实现链式调用
        }

        public UserBuilder setAge(int age) {
            this.age = age;
            return this;
        }

        public UserBuilder setEmail(String email) {
            this.email = email;
            return this;
        }

        // 构建最终User对象的方法
        public User build() {
            User user = new User();
            user.name = this.name;
            user.age = this.age;
            user.email = this.email;
            return user;
        }
    }

    // 使用示例
    public static void main(String[] args) {
        User user = new User.UserBuilder()
                          .setName("John Doe")
                          .setAge(30)
                          .setEmail("john.doe@example.com")
                          .build();
    }
}
```

`UserBuilder` 类充当了用户对象的构造器，并且每个设置属性的方法都返回当前 `Builder` 对象自身，

这样就可以连续调用这些方法来一步步地配置新对象的状态，最后通过 `build()` 方法得到完全初始化的 `User` 对象实例。


## 5.不可变类型

**值对象是初始化后不会改变其内部状态的对象。**

<br/><br/><br/><br/><br/><br/>

创建一个不可变的类：

```java
class Transaction {
    final BankAccount bankAccount;
    final LocalDateTime date;
    final double amount;

    public Transaction(BankAccount account, LocalDateTime date, double amount) {
        this.bankAccount = account;
        this.date = date;
        this.amount = amount;
    }
}

```

请注意，在定义类成员时使用 `final` 关键字。**这意味着每个成员只能在类的构造函数中初始化。**

它们以后不能在任何其他方法中重新分配。我们可以读取这些值，但不能改变它们。

如果我们为类创建多个构造函数，**每个构造函数都需要初始化每个最终变量。**不这样做将导致编译错误。