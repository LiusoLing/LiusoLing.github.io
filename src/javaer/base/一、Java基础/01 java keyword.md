---
# 这是文章的标题
title: 01. Java关键字
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-12
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

Java关键字是电脑语言里事先定义的，有特别意义的标识符，有时又叫保留字，还有特别意义的变量。

Java的关键字对Java的编译器有特殊的意义，他们用来表示一种数据类型，或者表示程序的结构等，关键字不能用作变量名、方法名、类名、包名和参数。
<!-- more -->

## 关键字

| 关键字     | 作用                   |
|------------|------------------------|
| abstract   | 用于声明抽象类或抽象方法。抽象类不能被实例化，通常包含抽象方法，需要子类实现。       |
| assert     | 在调试期间添加断言，确保程序中的某个条件为真。在发布版本中，这些断言可以被禁用。         |
| boolean    | 布尔数据类型的关键字，表示真或假。                                     |
| break      | 用于在循环或 switch 语句中终止执行，并跳出循环或 switch。                     |
| byte       | 字节数据类型的关键字，用于表示8位有符号整数。                               |
| case       | 在 switch 语句中定义不同的情况。                                         |
| catch      | 用于捕获异常，处理 try 块中抛出的异常。                                   |
| char       | 字符数据类型的关键字，用于表示16位Unicode字符。                            |
| class      | 用于声明一个类。                                                        |
| const      | 在Java中，并没有真正的 const 关键字。在其他语言中用于定义常量的 const 在Java中通过 final 实现。|
| continue   | 用于终止循环的当前迭代，并跳到下一次迭代的开始。                             |
| default    | 在 switch 语句中定义默认情况。                                           |
| do         | 用于创建一个 do-while 循环。                                             |
| double     | 双精度浮点数据类型的关键字，用于表示64位双精度浮点数。                      |
| else       | 在 if 语句中定义条件不满足时的执行块。                                   |
| enum       | 用于声明枚举类型。                                                     |
| extends    | 在类声明中用于指定一个类是另一个类的子类。                               |
| final      | 用于声明不可更改的常量、类或方法。                                       |
| finally    | 用于定义在 try 块执行后必须执行的代码块。                                 |
| float      | 单精度浮点数据类型的关键字，用于表示32位单精度浮点数。                      |
| for        | 用于创建一个 for 循环。                                                 |
| goto       | 在Java中并不使用，是保留关键字。                                          |
| if         | 用于创建一个条件语句。                                                 |
| implements | 在类声明中用于指定一个类实现一个或多个接口。                              |
| import     | 用于导入包或类。                                                       |
| instanceof | 用于测试一个对象是否为某个类的实例。                                    |
| int        | 整数数据类型的关键字，用于表示32位有符号整数。                            |
| interface  | 用于声明接口。                                                         |
| long       | 长整数数据类型的关键字，用于表示64位有符号整数。                          |
| native     | 在方法声明中用于指示该方法是用非Java语言编写的，并且依赖于平台特定的本地库。     |
| new        | 用于创建新的对象或数组。                                               |
| null       | 表示一个不引用任何对象的关键字。                                         |
| package    | 用于声明一个包。                                                       |
| private    | 用于指定类、方法或变量只能在声明它们的类内部访问。                         |
| protected  | 用于指定类、方法或变量可以在声明它们的类及其子类中访问。                   |
| public     | 用于指定类、方法或变量可以被任何类访问。                                 |
| return     | 用于从方法中返回一个值，并结束该方法的执行。                              |
| short      | 短整数数据类型的关键字，用于表示16位有符号整数。                           |
| static     | 用于指定变量或方法是静态的，属于类而不是实例。                            |
| strictfp   | 用于指定浮点运算严格按照 IEEE 754 标准执行。                             |
| super      | 用于引用父类的成员或调用父类的方法。                                   |
| switch     | 用于创建一个 switch 语句，根据表达式的值选择执行不同的代码块。             |
| synchronized | 用于指定方法或代码块是同步的，防止多个线程同时访问。                     |
| this       | 用于引用当前对象。                                                     |
| throw      | 用于在方法内部抛出一个异常。                                           |
| throws     | 在方法声明中用于指定可能抛出



:::tip
java关键字按作用可以大致划分为四类：

1. **用于标识一种数据类型**，如：boolean、byte、char、 double、 float、int、long、new、short、void、instanceof

2. **用于表示程序结构**，如：break、case、 catch、 continue、 default 、do、 else、 for、 if、return、switch、try、 while、 finally、 throw、this、 super

3. **用于修饰**，如： abstract、final、native、private、 protected、public、static、synchronized、transient、 volatile

4. **用于方法、包、接口和异常**，如：class、 extends、 implements、interface、 package、import、throws
:::


## 标识符

标识符 指所有能够自己定义名字的地方都叫做标识符。

例如：==类名、变量名、方法名、接口名、枚举名==。

标识符的命名要遵循下面的规则：

- 标识符只能使用：字母、数字、下划线_、美元符$；
- 标识符不能以数字开头；
- 标识符中不能有空格；
- 标识符不能是Java中的关键字或保留字。

::: warning 
以上是语言层面的规则，在实际开发过程中，标识符的命名还有一些约定俗成的规范：

标识符的名称要有意义，尽量做到见名知义，一般使用英文单词，不要使用拼音；

1. 类名、接口名、枚举名使用大驼峰的命名规则（每个单词首字母大写）；
```java
public class ArrayList {}
```


2. 变量名、方法名使用小驼峰的命名规则（第一个单词首字母小写，其余单词首字母大写）；
```java
String gender = "男";
String firstName = "李";
```


3. 常量名遵循 snake_case 规范，单词要大写，使用下划线连接多个单词；
```java
final String COMMON_KEY_PREFIX = "key";
```
:::