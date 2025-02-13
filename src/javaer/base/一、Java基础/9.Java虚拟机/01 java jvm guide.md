---
# 这是文章的标题
title: 01. JVM概览
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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
  - jvm
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

身为Java开发者，对`JVM` 有一个准确的宏观认识，可以方便的让我们对程序是如何在机器上运行的有大概的认识。

对于无法触摸的代码或者概念而言，谈起内存，脑海中都会浮现出内存条的形象，这种实物带给我们对内存最直观的理解，本文的 `JVN` 也是一样。

<!-- more -->

## 1.什么是JVM

JVM 是支持执行 Java 字节码的虚拟机。JVM 充当 Java 编程语言和底层硬件之间的解释器。它为 Java 应用程序提供了一个运行时环境，以便在不同的平台和作系统上运行。

运行 java -version 指令可以查看当前的 JDK 版本，信息类似下面这样

```shell
➜  ~ java -version
java version "1.8.0_281"
Java(TM) SE Runtime Environment (build 1.8.0_281-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.281-b09, mixed mode)

#最下面一行显示 64 位的 HotSpot Server VM，说明当前 JDK 使用的是 HotSpot Server 版本虚拟机.
#实际上从 JDK1.3 开始，HotSpot VM 就已经是 Sun JDK 及 OpenJDK（JDK 的开源版本） 的默认虚拟机了，也是目前使用最广的虚拟机。
#名称中的 HotSpot 代表其具有的热点代码探测技术，可以通过计数器找出最具有编译价值的代码，然后通知 JIT 编译器以方法为单位进行编译。
#这样通过编译器和解释器恰当的协同工作，可以在程序响应时间和执行性能中取得最佳的平衡。
```

以下这张图，很清晰的描绘了整个JVM的内部结构，以及各部分的交互和作用：

![jvm内部结构](/assets/images/base/JVM.png)


从上图可以看到，`JVM` 由三大组件组成，通过这三大组件，串联起来整个运行过程：

- Class Loader  类加载器：类加载器负责查找和加载类文件（.class文件），它是JVM执行的第一步。类加载器按照类的全限定名定位类文件，将二进制数据流转化为方法区内的运行时数据结构，并最终创建 java.lang.Class 类的实例。

- Runtime Memory/Data Area  运行时内存/数据区：物理内存中开辟一块内存存储 `jvm`需要用到的对象，变量等，运行区数据有分很多小区，分别为：方法区，虚拟机栈，本地方法栈，堆，程序计数器

- Execution Engine  执行引擎：负责执行字节码指令，采用解释器逐条解释执行字节码。

- Native Interface 本地接口：提供Java代码与操作系统交互的能力，允许Java代码通过JNI（Java Native Interface）调用本地的C/C++代码。


## 2.代码执行时JVM如何运行

假设目前我们写了一个 Java 程序，如下：

```java
public class Test{
        public void hello(int a){
                 int b = a+1;
        }
        public static vid main(String args){
                 Test test = new Test();
                 test.hello(1);
        }
)
```

这段 Java 代码类 Test 中提供函数 hello() 和主入口函数 main() 的定义和使用。

当执行这个程序时，JVM（Java 虚拟机）会按照以下步骤来执行这段代码：

### 2.1 编译阶段

首先，通过 Java 编译器（如 javac）将这段源代码编译成 .class 字节码文件。

将会生成 Test.class 文件。现代的很多都是通过开发工具运行时自动帮我们编译了。

### 2.2 类加载阶段

- 当程序启动并执行 Test 类的 main() 方法时，JVM 的类加载器会找到 Test.class 文件，并将其加载到 JVM 中。

- 加载过程中，类加载器会验证字节码文件的结构、元数据和符号引用，确保它们符合 JVM 规范。同时类的加载需要符合双亲委派模型：

整个类加载过程如下图：

![类加载](/assets/images/base/classLoader.png)

### 2.3 内存分配

- JVM 为 Test 类创建对应的类对象，在这个例子中，Test整个类的字节码信息将被加载到方法区。

- 在执行 main() 方法时，遇到 Test test = new Test(); 这一行，JVM 会在堆区为 Test 对象分配内存空间，并调用其构造函数初始化对象。Test类的一个实例（即test对象）会被分配在堆上。

### 2.4 方法执行

- 它会在当前线程的Java方法栈上为 hello() 方法创建一个新的栈帧，用于存放局部变量表、操作数栈和其他运行时信息。

- 局部变量表中分配空间给形参 a 并初始化为传入的值 1。

- 根据字节码指令计算 a+1，并将结果赋值给局部变量 b。

- 执行完毕后，hello() 方法完成其逻辑且无返回值，因此栈帧被弹出，控制权返回到 main() 方法的栈帧。

- 如果程序中使用了 native 方法（本地方法），那么本地方法栈将会涉及到，但在这里并没有使用 native 方法。

- 当执行到 test.hello(1); 时，JVM 查找 hello() 方法的字节码指令并开始执行。

![方法执行](/assets/images/base/classMethod.png)

这里是一段代码，当是一个服务时就涉及运行时数据区的垃圾回收了.


## 3.常见的JVM设置

- -Xms：设置堆的初始大小。
- -Xmx：设置堆的最大大小。
- -Xmn：设置年轻代的大小。
- -Xss：设置线程栈的大小。
- -XX:PermSize 和 -XX:MaxPermSize：设置永久代的初始大小和最大大小（在Java 8及之前的版本中使用）。
- -XX:MaxMetaspaceSize：设置元空间的最大大小（在Java 8及之后的版本中替代了永久代）。
- -XX:NewRatio：设置年轻代与老年代的比例。
- -XX:MaxTenuringThreshold：设置对象在年轻代中经过多少次垃圾回收后进入老年代。
- -XX:SurvivorRatio：设置Eden区和两个Survivor区的比例。
- -XX:+UseParallelGC 或 -XX:+UseConcMarkSweepGC 等：选择垃圾回收器。


至此我们通过一段代码知道这些JVM组件共同协作，使得JVM能够加载、验证、执行Java字节码，并提供平台无关性、自动内存管理和安全性保障等特性。