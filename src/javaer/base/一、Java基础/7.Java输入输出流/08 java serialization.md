---
# 这是文章的标题
title: 08. 序列化
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 8
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-05
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


**序列化**是 Java 中一种将对象转换为字节流的机制，以便可以将其存储到文件、通过网络传输或在内存中保存。

反序列化则是将字节流重新转换为对象的过程。Java 提供了内置的序列化机制，使得开发者可以轻松地实现对象的持久化和传输。

本文将详细介绍 Java 序列化的基本概念、使用方法以及一些需要注意的事项。

## 1. 基本概念

### 1.1 什么是序列化?

**序列化**是将对象的状态转换为字节流的过程，以便可以将其保存到文件、数据库或通过网络传输。反序列化则是将字节流重新转换为对象的过程。

### 1.2 为什么需要序列化?

序列化的主要用途包括:

- **持久化**:将对象保存到文件或数据库中，以便在程序重启后恢复对象状态。
- **网络通信**:在分布式系统中，序列化允许对象通过网络传输。
- **内存存储**:将对象保存到内存中，以便在程序的不同部分共享。

## 2. 实现序列化

### 2.1 `Serializable` 接口

Java 中的序列化是通过实现 `java.io.Serializable` 接口来实现的。该接口是一个标记接口，不包含任何方法。任何实现了 `Serializable` 接口的类都可以被序列化。

```java
import java.io.Serializable;

public class Person implements Serializable {
    private String name;
    private int age;

    public Person(String name， int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "'， age=" + age + '}';
    }
}
```

**注意**:
- `Serializable` 接口没有任何方法，它只是一个标记接口，表示该类可以被序列化。

### 2.2 序列化对象

要将对象序列化到文件中，可以使用 `ObjectOutputStream` 类。

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class SerializationExample {
    public static void main(String[] args) {
        Person person = new Person("John Doe"， 30);

        try (FileOutputStream fileOut = new FileOutputStream("person.ser");
             ObjectOutputStream out = new ObjectOutputStream(fileOut)) {
            out.writeObject(person);
            System.out.println("对象已序列化到 person.ser 文件中");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**代码说明**:
- `ObjectOutputStream` 用于将对象写入文件。
- `writeObject()` 方法将 `Person` 对象序列化并写入文件中。

### 2.3 反序列化对象

要将对象从文件中反序列化，可以使用 `ObjectInputStream` 类。

```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class DeserializationExample {
    public static void main(String[] args) {
        Person person = null;

        try (FileInputStream fileIn = new FileInputStream("person.ser");
             ObjectInputStream in = new ObjectInputStream(fileIn)) {
            person = (Person) in.readObject();
            System.out.println("对象已从 person.ser 文件中反序列化");
            System.out.println(person);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

**代码说明**:
- `ObjectInputStream` 用于从文件中读取对象。
- `readObject()` 方法将字节流反序列化为 `Person` 对象。

## 3. 序列化的注意事项

### 3.1 `serialVersionUID`

`serialVersionUID` 是序列化机制中的一个重要字段，用于标识类的版本。如果序列化后的类发生改变(例如添加或删除字段)，反序列化时可能会抛出 `InvalidClassException`。为了避免这种情况，建议为每个可序列化的类显式声明 `serialVersionUID`。

```java
private static final long serialVersionUID = 1L;
```

**注意**:
- 如果不显式声明 `serialVersionUID`，Java 会根据类的结构和字段自动生成一个。如果类发生变化，自动生成的 `serialVersionUID` 也会变化，可能导致反序列化失败。

### 3.2 序列化继承

如果父类实现了 `Serializable` 接口，子类将自动支持序列化。如果父类没有实现 `Serializable`，子类仍然可以实现序列化，但父类的字段不会被序列化。

```java
public class Employee extends Person {
    private String department;

    public Employee(String name， int age， String department) {
        super(name， age);
        this.department = department;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "department='" + department + '\'' +
                "} " + super.toString();
    }
}
```

**注意**:
- 如果父类没有实现 `Serializable`，子类可以通过实现 `Serializable` 来支持序列化，但父类中的字段不会被序列化。

### 3.3 `transient` 关键字

`transient` 关键字用于标记不需要序列化的字段。例如，敏感数据(如密码)或派生字段(可以根据其他字段计算得出的字段)可以标记为 `transient`。

```java
public class User implements Serializable {
    private String username;
    private transient String password; // 不会序列化

    public User(String username， String password) {
        this.username = username;
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{username='" + username + "'， password='" + password + "'}";
    }
}
```

**注意**:
- `transient` 字段在序列化时会被忽略，反序列化时其值为默认值(如 `null` 或 `0`)。

### 3.4 自定义序列化

如果需要自定义序列化过程，可以在类中实现 `writeObject` 和 `readObject` 方法。

```java
private void writeObject(ObjectOutputStream out) throws IOException {
    out.defaultWriteObject(); // 默认序列化
    out.writeUTF(password); // 自定义序列化
}

private void readObject(ObjectInputStream in) throws IOException， ClassNotFoundException {
    in.defaultReadObject(); // 默认反序列化
    password = in.readUTF(); // 自定义反序列化
}
```

**注意**:
- 自定义序列化通常用于处理敏感数据或优化序列化性能。

## 4. 序列化的局限性

### 4.1 性能问题

Java 的默认序列化机制在性能上可能不如其他序列化框架(如 JSON、Protocol Buffers 等)。对于需要高性能的场景，建议使用更高效的序列化工具。

### 4.2 兼容性问题

如果序列化后的类发生改变(例如添加或删除字段)，反序列化时可能会抛出异常。因此，序列化机制不适合用于长期存储或跨版本的场景。

### 4.3 安全性问题

Java 序列化机制存在一定的安全风险，恶意代码可以通过反序列化攻击攻击系统。因此，建议避免反序列化不受信任的数据。

## 5. 总结

Java 序列化是一种将对象转换为字节流的机制，便于对象的持久化、网络传输和内存存储。通过实现 `Serializable` 接口，开发者可以轻松实现序列化。

然而，序列化也存在一些局限性，如性能问题、兼容性问题和安全性问题。

在实际开发中，应根据具体需求选择合适的序列化机制，并注意处理 `serialVersionUID`、`transient` 字段以及自定义序列化等问题。