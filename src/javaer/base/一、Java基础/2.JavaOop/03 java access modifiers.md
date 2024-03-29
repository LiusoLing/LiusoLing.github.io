---
# 这是文章的标题
title: 03. Java访问修饰符
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
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

了解Java中的访问修饰符，这些修饰符用于设置`类`、`变量`、`方法` 和 `构造函数` 的访问级别。

简单地说，有四个访问修饰符：**public、private、protected 和 default（无关键字）。**

在我们开始之前，注意，顶级类只能使用 public 或 default 访问修饰符。在成员层面，我们可以使用所有四个。

<!-- more -->

## 1.default(默认)

当我们不明确使用任何关键字时，Java将对给定类、方法或属性使用默认访问修饰符。

默认访问修饰符也称为 `package-private`，这意味着所有成员都在同一包中可见，但无法从其他包访问：

```java
package com.sky.accessmodifiers;

public class SuperPublic {
    static void defaultMethod() {
        ...
    }
}
```

defaultMethod() 可以在同一软件包的另一个类中访问：

<br/><br/><br/>

```java
package com.baeldung.accessmodifiers;

public class Public {
    public Public() {
        SuperPublic.defaultMethod(); // Available in the same package.
    }
}
```
然而，它在其他软件包中不可用。

## 2.public(公共)

添加到类、方法或属性中的 `pubilic` 能让所有软件包中的所有其他类访问**它修饰的类、方法或属性**。

这是限制最少的访问修饰符：

```java
package com.sky.accessmodifiers;

public class SuperPublic {
    public static void publicMethod() {
        ...
    }
}
```

publicMethod() 在另一个软件包中可用：

```java
package com.sky.accessmodifiers.another;

import com.sky.accessmodifiers.SuperPublic;

public class AnotherPublic {
    public AnotherPublic() {
        SuperPublic.publicMethod(); // Available everywhere. Let's note different package.
    }
}
```

## 3.private(私有)

任何具有 `private` 关键字的方法、属性或构造函数都**只能从同一类访问。**

这是限制性最强的访问修饰符，也是封装概念的核心。所有数据都将被外界隐藏：

<br/><br/><br/><br/><br/><br/>

```java
package com.sky.accessmodifiers;

public class SuperPublic {
    static private void privateMethod() {
        ...
    }
    
     private void anotherPrivateMethod() {
         privateMethod(); // available in the same class only.
    }
}
```


## 4.protected(受保护的)

`protected(受保护的)` 访问修饰符 介于 `public` 和 `private` 访问级别之间。

如果我们使用 `protected` 的关键字声明方法、属性或构造函数，我们可以从相同的软件包（如软件包私有访问级别）以及从其类的所有子类访问该成员，即使它们位于其他软件包中：

```java
package com.sky.accessmodifiers;

public class SuperPublic {
    static protected void protectedMethod() {
        ...
    }
}
```

protectedMethod() 在子类中可用（无论软件包如何）：

```java
package com.baeldung.accessmodifiers.another;

import com.baeldung.accessmodifiers.SuperPublic;

public class AnotherSubClass extends SuperPublic {
    public AnotherSubClass() {
        SuperPublic.protectedMethod(); // Available in subclass. Let's note different package.
    }
}
```

<br/><br/><br/><br/><br/><br/>

## 5.总结

| 访问控制修饰符 | 可见性范围 | 类成员访问权限 |
|----------------|-------------|-----------------|
| `public`       | 公共的      | 所有类都可以访问，无论它们在哪个包中。 |
| `protected`    | 受保护的    | 同一包中的类；不同包中该类的子类可以访问。 |
| `private`      | 私有的      | 仅限于当前类内部访问，子类也无法访问。   |
| `default`      | 默认        | 同一包中的其他类可以访问，但不同包中的类无法访问，即使它们是子类。 |