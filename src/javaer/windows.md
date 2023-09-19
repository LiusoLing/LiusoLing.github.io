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

`more` 注释之前的内容被视为文章摘要。

<!-- more -->

假设你是一名在 Windows 操作系统下工作、编程的程序员，那么以下的一些基本的 Windows 知识是你必须了解掌握的。

<!-- more -->

## Windows 文件系统
在Windows系统中，文件被组织在目录（又叫文件夹）中。这些目录以分层树形结构组织，从硬盘驱动器每个根目录的所谓根目录开始（如下图 p-1 所示）。

一个目录可能包含子目录和文件。子目录可能包含子子目录和文件，依此类推。

Windows的文件系统被组织在驱动器中，由驱动器号后面跟冒号进行标识，例如，C: 、D: 和 E: 。每个驱动器都有自己的根目录，例如，C:\、D:\ 和 E:\ ，其中 “\”（反斜杠）表示每个驱动器的根目录。

::: tip
Windows系统不区分大小写，SKY 和 sky 是一样的。
:::