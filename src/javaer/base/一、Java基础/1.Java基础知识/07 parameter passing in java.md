---
# 这是文章的标题
title: 07. Java参数传递
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 7
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-18
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

将参数传递给方法的两种最普遍的模式是 `按值传递` 和 `按引用传递`。不同的编程语言以不同的方式使用这些概念。

**就Java而言，严格意义上说一切都是按值传递**。

在本教程中，我们将说明Java如何传递各种类型的参数。

<!-- more -->

## 1.值传递和引用传递


让我们思考一些将参数传递给函数的不同机制：

- value
- reference
- result
- value-result
- name

现代编程语言中最常见的两种机制是 `Pass-by-Value` 和 `Pass-by-Reference`。


### 1.1 值传递

当参数是逐值传递时，调用方和被调用方法在两个不同的变量上操作，这两个变量是彼此的副本。对一个变量的任何更改都不会修改另一个变量。

这意味着在调用方法时，**传递给被调用方法的参数将是原始参数的克隆**。在调用方法中完成的任何修改都不会对调用方法中的原始参数产生影响。


<br/><br/>


### 1.2 引用传递

当参数是传递引用时，调用者和被调用者在同一对象上操作。

这意味着当变量通过引用时，**对象的唯一标识符将发送到该方法**。对参数实例成员的任何更改都将导致对原始值进行更改。


<br/><br/>


## 2.传递参数

任何编程语言的基本概念都是 `值` 和 `引用`。在Java中，**原始变量存储实际值，而非原始变量存储指向它们所引用对象地址的参考变量**。值和引用都存储在堆栈内存中。


<br/><br/><br/><br/><br/><br/>

Java中的参数总是按值传递。在方法调用期间，每个参数的副本（无论是值还是引用）都会在堆栈内存中创建，然后传递给方法。

对于原语，该值只需在堆栈内存中复制，然后传递给调用方法；对于非原语，堆栈内存中的引用指向驻留在堆栈中的实际数据。当我们传递一个对象时，堆栈内存中的引用被复制，新的引用被传递给该方法。

现在让我们在一些代码示例的帮助下看看这个动作。

### 2.1 传递原始类型

Java编程语言具有八种原始数据类型。

**原始变量直接存储在堆栈内存中。每当原始数据类型的任何变量作为参数传递时，实际参数都会被复制到形式参数中，这些形式参数在堆栈内存中积累自己的空间。**

这些形式参数的寿命仅在该方法运行时持续，返回时，这些形式参数将从堆栈中清除并丢弃。



<br/><br/><br/><br/><br/><br/>

尝试通过代码进行理解：

```java
public class PrimitivesUnitTest {
 
    @Test
    public void whenModifyingPrimitives_thenOriginalValuesNotModified() {
        
        int x = 1;
        int y = 2;
       
        // Before Modification
        assertEquals(x, 1);
        assertEquals(y, 2);
        
        modify(x, y);
        
        // After Modification
        assertEquals(x, 1);
        assertEquals(y, 2);
    }
    
    public static void modify(int x1, int y1) {
        x1 = 5;
        y1 = 10;
    }
}
```

让我们尝试通过分析这些值如何存储在内存中来理解上述程序中的断言：

- 主方法中的变量“x”和“y”是原始类型，其值直接存储在堆栈内存中
- 当我们调用方法modify()时，每个变量的确切副本都会创建并存储在堆栈内存的不同位置
- 对这些副本的任何修改只影响它们，并使原始变量保持不变


<br/><br/><br/><br/><br/><br/>

### 2.2 传递引用


在Java中，所有对象都动态存储在引擎盖下的Heap空间中。这些对象是从称为引用变量的引用中引用的。

与原始对象相反，Java对象分为两个阶段存储。引用变量存储在堆栈内存中，它们所引用的对象存储在堆内存中。

**每当对象作为参数传递时，都会创建引用变量的确切副本，该副本指向对象在堆内存中与原始引用变量相同的位置。**

**因此，每当我们对方法中的同一对象进行任何更改时，该更改都会反映在原始对象中。** 

但是，如果我们将一个新对象分配给传递的引用变量，那么它将不会反映在原始对象中。



<br/><br/><br/><br/><br/><br/>

尝试通过代码进行理解：

```java
public class NonPrimitivesUnitTest {
 
    @Test
    public void whenModifyingObjects_thenOriginalObjectChanged() {
        Foo a = new Foo(1);
        Foo b = new Foo(1);

        // Before Modification
        assertEquals(a.num, 1);
        assertEquals(b.num, 1);
        
        modify(a, b);
        
        // After Modification
        assertEquals(a.num, 2);
        assertEquals(b.num, 1);
    }
 
    public static void modify(Foo a1, Foo b1) {
        a1.num++;
       
        b1 = new Foo(1);
        b1.num++;
    }
}
 
class Foo {
    public int num;
   
    public Foo(int num) {
        this.num = num;
    }
}
```


<br/><br/>

让我们分析一下上述程序中的断言。

我们在 modify() 方法中传递了具有相同值 1 的对象 a 和 b。最初，这些对象引用指向堆空间中两个不同的对象位置，

当这些引用a和b在modify()方法中传递时，它会创建指向相同旧对象的引用a1和b1的镜像副本，

在modify()方法中，当我们修改引用a1时，它会更改原始对象。

然而，对于参考b1，我们分配了一个新对象。因此，它现在指向堆内存中的一个新对象。

对b1所做的任何更改都不会反映原始对象中的任何内容。

