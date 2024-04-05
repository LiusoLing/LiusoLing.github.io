---
# 这是文章的标题
title: 03. main方法解释
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-11-21
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

每个程序都需要一个入口来执行。在Java中，main方法就是这个入口。

<!-- more -->


## 1.通用签名

`main` 方法模板示例如下：

```java
public static void main(String[] args) { }
```

IDE 为我们自动生成了模板代码，这使得我们忽略了其他的一些变种。

让我们了解通用签名的每个关键字的含义：

- `public`：访问修饰符，意味着全局可见性
- `static`：该方法可以直接从类访问，我们不必实例化对象即可具有引用并使用它
- `void`  ：表示此方法不返回值
- `main`  ：方法的名称，这是JVM在执行Java程序时查找的标识符
- `args`  ：方法收到的值，第一次启动程序时将参数传递给程序的方式

例如，示例中，我们正在检查args，以决定是加载测试参数还是生产参数：

```java
public static void main(String[] args) {
    if (args.length > 0) {
        if (args[0].equals("test")) {
            // load test parameters
        } else if (args[0].equals("production")) {
            // load production parameters
        }
    }
}
```

## 2.main方法变种

让我们学习编写 `main` 方法的一些不同方式。虽然它们不是很常见，但它们是有效的。

请注意，这些都不是特定于 `main方法` 的，它们可以与 `任何Java方法` 一起使用，但它们也是主方法的有效部分。

方括号可以放在String附近，就像在普通模板中一样，也可以放在两边的args附近：

```java
public static void main(String []args) { }
```

```java
public static void main(String args[]) { }
```

参数可以表示为varargs：

```java
public static void main(String...args) { }
```

我们甚至可以为main()方法添加strictfp，该方法用于处理浮点值时处理器之间的兼容性：

```java
public strictfp static void main(String[] args) { }
```

final可以应用于args，以防止数组被修改：

```java
public static void main(final String[] args) { }
```

<br/><br/><br/><br/><br/><br/>

所有上述的关键字也可以组合成下方示例，它也是有效的：

```java
final static synchronized strictfp void main(final String[] args) { }
```

## 3.多个main方法

我们也可以在应用程序中**定义多个main方法**。

事实上，有些人把它作为一种原始测试技术来验证单个类（尽管像JUnit这样的测试框架更适用于此活动）。

为了指定JVM应该执行哪个 `main方法`作为 我们应用程序的入口点，我们使用 `MANIFEST.MF` 文件。

在 `MANIFEST.MF` 文件中，我们可以指示主类：
```java
Main-Class: mypackage.ClassWithMainMethod
```
这主要在创建的 `可执行的.jar文件` 中使用。

我们通过位于 `META-INF/MANIFEST.MF`（在UTF-8中编码）的清单文件来指示哪个类开始执行main方法。
