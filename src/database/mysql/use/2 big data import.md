---
# 这是文章的标题
title: MySQL大数据导入
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-11
# 一个页面可以有多个分类
category:
  - mysql
# 一个页面可以有多个标签
tag:
  - mysql
  - dataImport
  - dataExport
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

工作中难免遇到数据分析、数据迁移等场景，这时就需要进行数据转储，此篇文章介绍一种可用的经过实践的 MySQL 大数据导入方法。

<!-- more -->

:::tip
上述场景中，运维提供的备份SQL文件或自行备份的数据库文件。

当文件大小大于 1GB 时，市面流行的数据库管理工具（Navicat、DBeaver、MySQL Workbench、SQLyog、DataGrid）都存在导入太慢甚至导入失败的问题。

至于网上的其它方法例如修改缓存大小、通信区间缓存大小等等方法，是自己本地的数据库还好，但当被导入的数据库是生产或者远程数据库，这些方法就不适用了，此篇文章介绍一种可用的经过实践的 MySQL 大数据导入方法。
:::

## MySQL大数据导出

使用命令备份数据库，而不是可视化工具，命令如下：
```bash
Last login: Mon Dec  4 11:00:35 on ttys001

➜  ~ mysql -u root -p                          # 按下Enter回车键
# 远程数据库使用：mysql -u root -p -h127.0.0.1 -P3306
# - u：用户名
# - p：密码
# - h：服务器主机，可以是IP或域名
# - P：端口号

Enter password:                                 # 输入root用户密码
mysql> mysqldump db_name > filename.sql         # 备份指定数据库到指定文件

# 备份指定数据库到指定文件（表定义文件和数据文件将分开独立备份如：a.sql a.txt b.sql b.txt）
mysql> mysqldump db_name --tab = /home/downloads 
mysql> exit;
```

## MySQL大数据导入

执行命令如下：
```bash
Last login: Mon Dec  4 11:00:35 on ttys001

➜  ~ mysql -u root -p                   # 按下Enter回车键
Enter password:                         # 输入root用户密码
mysql> use db_name;                     # 使用指定数据库

mysql> set names utf8;                  # 设置编码格式，防止乱码（可不执行）
mysql> set unique_checks = 0;           # 关闭唯一性校验
mysql> set Autocommit = 0;              # 关闭事务提交模式

mysql> source /home/downloads/xxxx.sql  # 导入大数据文件（文件路径为绝对路径），末尾没有分号

mysql> set unique_checks = 1;           # 开启唯一性校验
mysql> set Autocommit = 1;              # 开启事务提交模式

mysql> exit;
```

## 拓展

查找资料过程中，了解到 MySQL 支持多种导入方式，下面的它们的适用场景：

- mysqldump：导出的是SQL语句，而不是数据本身，所以导入时效率略低，但胜在整库，多个库，多个表一起导出，适合整库的转储。

- select into outfile + load data：导出的是纯数据，导入时效率高，适合单个大表的转储。

- mysql批处理 + load data：导出的是纯数据，而且使用SQL语句选择数据，灵活性高，导入效率也高。