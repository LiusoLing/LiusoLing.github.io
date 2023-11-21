---
# 这是文章的标题
title: 准备-安装JDK
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-10-22
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

不同的操作系统应该如何安装JDK呢？JDK和JRE又是什么关系？
<!-- more -->

## 安装 JDK

Java开发工具包（JDK），正式命名是 “Java平台标准版” 或 “JavaSE”，用于编写或运行 Java 程序。

## JDK 变体

截止目前，有两个主流 `JDK` 变体：
  - OpenJDK：由Oracle、Java社区、Red Hat、Azul Systems、IBM、Microsoft、Amazon、Apple、SAP开发的 [`"OpenJDK"`](https://openjdk.java.net) 是一个免费和开源的Java平台标准版官方参考实现。
    OpenJDK包括虚拟机（HotSpot）、Java类库和Java编译器，它不包括网络浏览器插件和网络启动。

  - OracleJDK：本文基于 [`"OracleJDK"`](https://www.oracle.com/java/)，它对于个人和开发用途是免费的，但对于商业用途不再是免费的。

这两者的主要区别在于许可，OpenJDK是完全开源的，使用 `GNU通用公共许可证`，OracleJDK 个人和开发用途免费，商业使用需要 Oracle 的商业许可证，自2019年起需要购买商业许可证才能接收软件更新。

## JDK 和 JRE ？

JDK（Java Development Kit）是用于开发 Java 应用程序的软件环境。里面包含运行时环境（JRE）和其他 Java 开发所需的工具，比如说解释器（java）、编译器（javac）、文档生成器（javadoc）等等。

JRE（Java Runtime Environment）是用于运行 Java 应用程序的软件环境。也就是说，如果只想运行 Java 程序而不需要开发 Java 程序的话，只需要安装 JRE 就可以了。

JVM (Java Virtual Machine) ，也就是 Java 虚拟机，由一套字节码指令集、一组寄存器、一个栈、一个垃圾回收堆和一个存储方法域等组成，屏蔽了不同操作系统（macOS、Windows、Linux）的差异性，使得 Java 能够“一次编译，到处运行”。

JRE 是 JDK 的一个子集，作为程序员，需要编写程序而不是仅仅运行程序，所以我们应该安装包含 JRE 的 JDK。

## 在 Windows 上安装 JDK
### 1. 卸载旧版本 JDK

为保证后续学习过程中的 JDK 版本一致，建议卸载系统中的旧版本 JDK。

前往 `系统控制面板` -> `程序`，在 `程序和功能` 中卸载所有以 `java` 开头的程序。

例如：`JavaSE Development Kit…`、`JavaSE Runtime…`、`JavaX Update…` 等等。

### 2. 下载 JDK

- 下载站点：[官方站点](https://www.oracle.com/java/technologies/javase-downloads.html)、[国内镜像](https://repo.huaweicloud.com/java/jdk/)。

- 下载版本：JDK 8-x64，例如：`jdk-8_windows-x64_bin.exe`。


### 3. 安装 JDK 

点击运行 exe 安装程序，接受默认值并按程序引导进行安装。

默认情况下，安装之后的 JDK 目录为：C:\Program Files\Java\jdk1.8.0_xxx

在下文中，默认我们将 JDK 的安装目录称为 <JAVA_HOME> 。

### 4. 添加环境变量

为了方便在系统控制台中使用 Java 命令，我们需要将 Java 可执行程序添加到系统变量中。

Windows 10以前的编辑PATH环境变量：

- 打开 `“控制面板”` - `“系统和安全”` - `“高级系统设置”` - `“高级”` - `“系统变量”` - `新建`：
  - 变量名：JAVA_HOME
  - 变量值：JDK的安装目录位置（C:\Program Files\Java\jdk1.8.0_191）

- 打开 `“控制面板”` - `“系统和安全”` - `“高级系统设置”` - `“高级”` - `“系统变量”` - `编辑` - `PATH变量`：
  - 光标移到 Path 变量值 末尾，输入 英文 分号 `;`
  - 输入 %JAVA_HOME%\bin 点击保存。

Windows 10以后的编辑PATH环境变量：

- 打开 `“控制面板”` - `“系统和安全”` - `“高级系统设置”` - `“高级”` - `“系统变量”`
  - 您将看到一个列出所有现有PATH条目的表（如果没有，请转到下一步）。

  - 单击“新建”，单击“浏览”并导航到您的JDK的“bin”目录，即“c:\Program Files\Java\jdk-15.0.{x}\bin”，其中{x}是您的安装更新号✔选择“向上移动”将此条目一直移动到顶部。

::: warning
  Windows 10以前的版本，在执行此步骤之前，一定要100%确定没问题再按“应用”或“确定”。

  一旦执行操作，无法撤消！！！
:::

您需要重新启动CMD才能使新环境设置生效。

### 5. 验证 JDK

打开控制台程序 CMD，执行命令出现类似下列输出即安装且配置成功：

```shell
> java -version

java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)

```

## 在 macOS 上安装 JDK

### 1. 检查 JDK 是否已安装

打开命令控制台，执行下列命令，查看已安装的 JDK 版本：

```shell
> javac -version
```

- 返回版本号，说明已安装有该版本号的 JDK，
- 未找到命令，说明未安装任何 JDK，根据步骤2 进行安装。

### 2. 下载 JDK

- 下载站点：[官方站点](https://www.oracle.com/java/technologies/javase-downloads.html)、[国内镜像](https://repo.huaweicloud.com/java/jdk/)。

- 下载版本：
  - M1 CPU的，下载 `Arm 64 DMG` 版本；
  - Intel CPU的，下载 `x64 DMG` 版本。

### 3. 安装 JDK

- 双击 .dmg 安装文件，按引导进行安装。
- 安装完成，弹出 dmg 安装程序。

### 4. 验证 JDK

打开控制台程序，执行命令出现类似下列输出即安装且配置成功：

```shell
> java -version

java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)

```

## 在 Ubuntu 上安装 JDK 
### 1. 检查 JDK 是否已安装

打开命令控制台，执行下列命令，查看已安装的 JDK 版本：

```shell
> javac -version
```

如果出现JDK版本号（例如，javac x.x.x），则说明JDK已经安装。

### 2. 卸载已安装的 JDK

打开命令控制台，执行下列命令，进行卸载：
```shell
> sudo apt-get purge openjdk-\*
```

### 2. 下载 JDK

- 下载站点：[官方站点](https://www.oracle.com/java/technologies/javase-downloads.html)、[国内镜像](https://repo.huaweicloud.com/java/jdk/)。

- 下载版本：选择 Linuxx64压缩存档，如：jdk-15.0.{x}-linux-x64_bin.tar.gz。
  - 默认情况下，将下载在目录“~/Downloads”中。

### 3. 安装 JDK

打开命令控制台，执行下列命令，进行解压缩和安装：
```shell
$ cd /usr/local

// Make new dir on /usr/loacal/java
$ sudo mkdir java

$ cd /usr/local/java
$ sudo tar xzvf ~/Downloads/jdk-15.0.{x}-linux-x64_bin.tar.gz

// Setup the location of java, javac and jshell via the "alternatives" system
$ sudo update-alternatives --install "/usr/bin/java" "java" "/usr/local/java/jdk-15.0.{x}/bin/java" 1

// --install symlink name path priority
$ sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/local/java/jdk-15.0.{x}/bin/javac" 1
$ sudo update-alternatives --install "/usr/bin/jshell" "java/usr/local/java/jdk-15.0.{x}/bin/jshell" 1

// Use this Oracle JDK/JRE as the default
$ sudo update-alternatives --set java /usr/local/java/jdk-15.0.{x}/bin/java

// --set name path
$ sudo update-alternatives --set javac /usr/local/java/jdk-15.0.{x}/bin/javac
$ sudo update-alternatives --set jshell /usr/local/java/jdk-15.0.{x}/bin/jshell

$ ls -ld /usr/bin/java*
lrwxrwxrwx 1 root root xx xxx xx xx:xx /usr/bin/java -> /etc/alternatives/java......
 
$ ls -ld /etc/alternatives/java*
lrwxrwxrwx 1 root root xx xxx xx xx:xx /etc/alternatives/java -> /usr/local/java/jdk-15.0.{x}/bin/java......

// As the result
java -> /usr/bin/java (thru PATH) -> /etc/alternatives/java -> /usr/local/java/jdk-15.0.{x}/bin/java (actual program)

// Show the Java Compiler (javac) version
$ javac -version
javac 15.0.{x}
 
// Show the Java Runtime (java) version
$ java -version
java version "15.0.{x}"......
 
// Show the location of javac and java
$ which javac
/usr/bin/javac

$ which java
/usr/bin/java

$ cd /etc
$ sudo nano profile

export JAVA_HOME=/usr/local/java/jdk-15.0.{x}
export PATH=$JAVA_HOME/bin:$PATH

// Refresh
$ source /etc/profile
 
// Check the new settings for JAVA_HOME and PATH
$ echo $JAVA_HOME
/usr/local/java/jdk-15.0.{x}
 
$ echo $PATH
/usr/local/java/jdk-15.0.{x}/bin:......
```