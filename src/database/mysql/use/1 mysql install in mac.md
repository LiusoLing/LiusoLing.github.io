---
# 这是文章的标题
title: MacOS安装卸载MySQL
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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
  - Mac
  - install
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

由于个人使用Mac电脑，这里记录下在 MacOS 下的 MySQL 的安装和卸载教程。

<!-- more -->

## 前言

安装 MySQL 前，如果电脑已经正确装有 MySQL，那么这篇文章可以略过不看。

当我想在控制台用 MySQL 命令进行数据导入时，发现提示我 MySQL 命令不存在：
```bash
Last login: Mon Dec  4 11:00:35 on ttys001
➜  ~ mysql --version

command not found: mysql
```

出现该提示的原因有如下几种情况：

1. MySQL安装位置未包含在系统路径中：当你在控制台执行命令时，系统会搜索路径中的可执行文件。如果MySQL的安装路径不在系统路径中，系统将无法找到mysql命令。你可以尝试手动指定MySQL的安装路径来执行命令。

2. 未正确安装MySQL：如果MySQL未正确安装，可执行文件可能未正确配置或丢失。

3. 环境变量不正确配置：可能是因为环境变量$PATH没有正确包含MySQL可执行文件的路径。


这些情况我不想去一一排查修复，干脆彻底卸载重装。

## MySQL完全卸载

1. 停止MySQL服务：

```bash
# mysql 5 卸载
sudo launchctl unload -F /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist 

# mysql 8 卸载
sudo launchctl unload -F /Library/LaunchDaemons/com.mysql.mysql.plist

# 删除启动项
sudo rm -rf /Library/LaunchDaemons/com.mysql.mysql.plist

# 清除已安装的 MySQL 候选项
sudo pkgutil --forget com.mysql.mysql
```

2. 卸载MySQL软件包：
```bash
sudo rm -rf /usr/local/mysql
sudo rm -rf /usr/local/mysql-*
sudo rm /etc/my.cnf
```

3. 删除配置文件和日志文件：MySQL的配置文件和日志文件通常位于/etc和/var/log目录中
```bash
sudo rm -rf /etc/my.cnf
sudo rm -rf /var/log/mysql
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*
```

4. 删除用户数据文件：MySQL的数据文件通常位于/usr/local/mysql/data目录中
```bash
sudo rm -rf /usr/local/mysql*
sudo rm -rf /usr/local/var/mysql*
sudo rm -rf /var/db/mysql*
```

5. 删除用户账户和组：MySQL安装通常会创建一个名为_mysql的用户和组
```bash
sudo dscl . -delete /Users/_mysql
sudo dscl . -delete /Groups/_mysql
```

6. 清除系统路径和环境变量中的MySQL配置：如果你曾手动修改过系统路径和环境变量以包含MySQL相关内容，应该将这些修改也一并撤销。
```bash
# 查找其他残留MySQL文件
sudo find / -name "mysql" -print
```

## MySQL命令安装

Mac 使用 HomeBrew 作为包管理器工具，这里使用 brew 命令安装 MySQL，以下是安装步骤：

1. brew 命令安装 MySQL
```bash
brew install mysql
```

2. 设置 root 密码
```bash
# 启动 MySQL 服务
brew services start mysql

# MySQL root 用户无密码登录
mysql -u root
```

3. 设置低强度密码策略（可跳过）
```bash
SET GLOBAL validate_password.policy = LOW;
SET GLOBAL validate_password.policy = 0;
```

4. 设置 root 用户新密码
```bash
# 只有本地能使用root账号
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_new_password';

# 任何主机上都能使用root账号
ALTER USER 'root'@'%' IDENTIFIED BY 'your_new_password';

# 刷新权限以使新密码生效
FLUSH PRIVILEGES;
```

5. mysql_secure_installation也能设置root密码（不推荐）：
```bash
# mysql_secure_installation 选择了错误的密码强度策略将无法返回修改，
# 所以不推荐此种方式设置root用户密码
mysql_secure_installation
```

至此，MySQL 安装完毕。