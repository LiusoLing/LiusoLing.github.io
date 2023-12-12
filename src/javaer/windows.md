---
# 这是文章的标题
title: Windows程序员生存指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: fab fa-windows
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Hunter
# 设置写作时间
date: 2023-09-19
# 一个页面可以有多个分类
category:
  - code before
# 一个页面可以有多个标签
tag:
  - windows
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

假设你是一名在 Windows 操作系统下工作、编程的程序员，那么以下的一些基本的 Windows 知识是你必须了解掌握的。

<!-- more -->

## 一、Windows 文件系统

在 `Windows` 系统中，文件被组织在目录（又叫文件夹）中。

这些目录以分层树形结构组织，从硬盘驱动器每个根目录的所谓根目录开始（如下图 p-1 所示）。

一个目录可能包含子目录和文件，子目录可能包含子子目录和文件，依此类推。

`Windows` 的文件系统被组织在驱动器中，由驱动器号后面跟冒号进行标识，例如，`C:` 、`D:`和 `E:`。

::: tip
每个驱动器都有自己的根目录，例如，`C:\`、`D:\` 和 `E:\` ，其中 `\`（反斜杠）表示每个驱动器的根目录。

Windows系统不区分大小写，SKY 和 sky 是一样的。
:::


### 1.1 文件名和文件类型

Windows 的文件名由两部分组成：文件名和文件类型（又叫文件扩展名），用符号点分隔。

例如，`Hello.java`、`Hello.txt`、`Hello.ppt` 等。

对于程序员而言，在 “文件资源管理器” 中看到文件类型很重要。

默认情况下文件类型是隐藏的，例如，Hello.java 显示为 Hello，要查看文件类型，勾选 “文件资源管理器” 的 “查看” 下的 “显示” 下的 “文件扩展名”。

::: info 
Windows 可以将程序和每种文件类型进行关联。

例如，双击 .txt 调用记事本程序；双击 .jpg 调用照片程序，Windows 中用 “文件资源管理器” 查看文件类型。
:::

### 1.2 驱动器号、路径名和文件名

要引用文件，就必须提供驱动器号、名录名称（路径名）和文件名。

例如，`C:\Program Files\java\jdk1.7.0_07\bin\javac.exe`。

驱动器号是 `C:`，路径名是 `\Program Files\java\jdk1.7.0_07\bin\`，文件名是 `javac.exe`，前导 `\`（反斜杠）表示该驱动器的根目录，子目录由 `\`（反斜杠）分隔。

::: tip 
路径名可以通过两种方式指定：

- 绝对路径名：绝对路径名从驱动器的根目录开始。它以 `X:\` 开头（其中 `X` 表示驱动器号，前导 `\` 表示根），并包含所有指向由 `\` 分隔的文件的子目录。例如，`C:\Program Files\java\jdk1.7.0_07\bin\`。

- 相对路径名：相对路径名相对于所谓的当前驱动器和当前工作目录。例如，如果当前驱动器和工作目录是 `C:\Program Files\java\`，则相对路径 `jdk1.7.0_07\bin\` 解析为 `C:\Program Files\java\jdk1.7.0_07\bin\`。相对路径名不以前导 `\`（反斜杠）开头。
:::

## 二、命令行界面“CMD”

程序员使用命令行界面（CLI）向操作系统（OS）发送文本命令，而不是单击图形用户界面（GUI）。

命令行界面比图形用户交互界面更加强大、更加灵活。

`CMD`（命令解释器或命令提示符）是一个命令行界面（或者`Shell`）。它支持一组命令和实用程序，有自己的编程语言用于编写批处理文件（或Shell脚本）。

::: tip
可以通过以下方式启动 `CMD`：
- 点击 `开始` 按钮，弹框中输入 `CMD`，回车；
- 同时按下 `win + R`，弹框中输入 `CMD`，回车；
:::

`CMD`显示一个以 `>` 结尾的提示符，形式为 `驱动器号:\路径名>` ，例如，`C:\Windosws\System>`。此时，可以在提示符后输入命令。


### 2.1 当前驱动器和当前目录

每个CMD会话维护一个所谓的当前驱动器和当前工作目录。

在提示中以 `drive:\path\to\current-directory>` 的形式显示，所有相对路径名都是相对于这个当前驱动器和当前工作目录的。


### 2.2 切换驱动器命令

要设置或更改当前驱动器，请输入驱动器号+冒号（:），例如：
