---
title: Unix序员生存指南
icon: fab fa-linux
order: 2
category:
  - code before
tag:
  - unix
---


假设你是一名在 Unix 操作系统（macOS、Ubuntu）下工作、编程的程序员，那么以下的一些基本的 Unix 知识是你必须了解掌握的。

<!-- more -->

## 一、Unix 文件系统

在`Unix`系统中，文件按目录（又名文件夹）组织。
目录以分层树结构组织，从根目录开始。
目录可能包含子目录和文件。
子目录可能包含子目录和文件。

### 1.1 根目录

整个 Unix/macOS 的文件系统只有一个根目录。硬盘驱动器安装在根目录下的某个地方。
文件通过目录和文件名来标识，例如`/usr/lib/jvm/jdk1.7.0_07/bin/javac`。
前导`“/”`（正斜杠）表示根目录。
子目录也用`“/”`分隔。

### 1.2 Home目录

`Unix` 是一个多用户操作系统（尽管你们中的大多数人，尤其是 Mac 用户，将其用作单用户个人计算机）。

系统上的每个用户都分配了一个目录来存储他的文件，称为主目录。

用户的主目录分配在 `/Users`（对于macOS）或 `/home`（对于Ubuntu）下，子目录名称与用户名相同，

- macOS 中的 `/Users/peter`、`/Users/paul`;
- Ubuntu 中的 `/home/peter`、`/home/paul`。

您的主目录（`/Users/<username>`）包含 Downloads、Documents 等子目录。

它们的完整文件名分别是`/Users/<username>/Downloads`、`/Users/<username>/Documents`。

您可以使用特殊符号“~”来表示您的主目录。
换句话说，`~/Downloads` 与 `/Users/<username>/Downloads` 相同。

### 1.3 路径名和文件名

要引用文件，您需要提供路径名（目录和子目录名称）和文件名。

例如，在 `“/usr/lib/jvm/jdk1.7.0_07/bin/javac”` 中，
- 路径名是 `“/usr/lib/jvm/jdk1.7.0_07/bin/”`，
- 文件名是 `“javac”`。

::: tip
可以通过两种方式指定路径名：
- 绝对路径名：绝对路径从根目录开始。
  也就是说，它以 `“/”` 开头，后跟所有子目录，用 `“/”` 分隔，指向文件，
  - 例如 `“/usr/lib/jvm/jdk1.7.0_07/bin/”`。绝对路径也可以从当前用户的主目录开始（以 `“~"` 开头）， 
  - 例如 `“~/Downloads/jdk/”` 与 macOS 中的 `“/Users/<yourname>/Downloads/jdk/”`相同。
- 相对路径名：相对路径相对于所谓的当前工作目录，相对路径不以 `“/”` 或 `“~”` 开头。
  - 例如，如果当前工作目录是`“/usr/lib/jvm/”`，那么相对路径名 `jdk1.7.0_07/bin/”指的是“/usr/lib/jvm/jdk1.7.0_07/bin/`

:::

注意：Unix/macOS系统区分大小写，SKY和sky是不同的。

## 二、命令行界面“Bash”

程序员使用命令行界面（CLI）向操作系统（OS）发送文本命令，而不是单击图形用户界面（GUI）。

命令行界面比图形用户交互界面更加强大、更加灵活。

终端应用程序（命令解释器或命令提示符）是一个命令行界面（或者Shell）。

Ubuntu和macOS中的终端运行所谓的bash，它支持一组命令和实用程序，有自己的编程语言用于编写批处理文件（或Shell脚本）。

::: tip
可以通过以下方式启动终端：
   - 在macOS中，查找应用程序“终端”，点击打开；
   - 在Ubuntu中，在应用程序中查找“终端”，点击打开。
:::   
终端显示一个以“$”结尾的提示符，形式为“Username@ComputerName:CurrentDirectory$”。

### 2.1 当前目录命令

使用 pwd 命令列出当前目录完整路径
```shell
   ➜  ~ pwd                
   /Users/liusongling
```

当终端启动时，它将初始工作目录设置为当前登录用户的主目录（表示为“~”）。

### 2.2 更改目录命令

使用 cd 命令更改当前工作目录，发出命令 `“cd <new-pathname>”`。

您可以通过两种方式指定new-pathname：绝对或相对。

如前所述，绝对路径以`“/”`（根目录）或 `“~”`（主目录）开头；而相对路径相对于当前工作目录，不以 `“/”` 或 `“~”` 开头。

根（/）、主页（~）、父（…）、当前（.）上一个（-）目录

你可以用"/"表示根目录；"~"表示你的主目录；".."（双点）表示父目录；"."（单点）表示当前目录；"-"（破折号）表示前一个目录。
```shell
cd ~            // Change directory to the home directory of the current user
cd              // same as above, default for "cd" is home directory
cd ~/Documents  // Change directory to the sub-directory "Documents" of the home directory of the current user
cd ..           // Change directory to the parent directory of the current working directory
cd -            // Change directory to the previous working directory (OLDPWD)

```

### 2.3 列出目录命令
使用命令ls列出当前工作目录的内容，例如，
```shell
// List contents of current working directory in short format
➜  ~ ls
Desktop    Downloads         Music     Public     Videos
Documents  examples.desktop  Pictures  Templates

// List in "long" format
➜  ~ ls -l
total xx
drwxr-xr-x 2 myuser myuser 1024 Mar 22 21:32 Desktop
drwxr-xr-x 2 myuser myuser 1024 Mar 22 21:32 Documents
drwxr-xr-x 2 myuser myuser 1024 Mar 22 21:32 Downloads
-rw-r--r-- 1 myuser myuser 8445 Mar 22 17:30 examples.desktop
```

可以和通配符 * 搭配使用，列出选定的文件，它匹配0个或多个（任何）字符。例如，
```shell
ls *.java     // List files ending with ".java" in short format (default)
ls -l *.java  // List files ending with ".java" in long format
ls -ld my*    // List files and directories beginning with "my" in long format
```


### 2.4 终端快捷键

历史命令：使用向上/向下箭头键滚动浏览命令历史记录中的上一个/下一个命令；
TAB自动完成：键入文件/目录名称的前几个字符，然后按TAB键自动完成文件/目录名称。反复按TAB键循环浏览所有匹配项；
复制/粘贴：在macOS中：使用Cmd+C和Cmd+V；在Ubuntu中：使用Shift+Ctrl+C和Shift+Ctrl+V；
移动光标：在CMD中，您不能使用鼠标指针来移动命令行光标。相反，您需要使用左/右箭头、退格键或删除键来移动命令行光标。

1）左/右箭头键：将光标向左/向右移动一个字符；
2）Backspace/Delete 键：删除光标下的上一个/当前字符；
3）Esc 键：清除命令行。
4）Home/End 键：移动到命令行的开始/结束。
5）Ctrl+左/右-箭头键：向左/向右移动一个“单词”。

## 三、Unix 提示和技巧
   【TODO待办】

## 四、IDE代码编辑器
   Unix中的记事本是纯文本编辑器，不支持语法高亮和代码检查、代码提示等功能。编程时，请使用合适的IDE代码编辑器。