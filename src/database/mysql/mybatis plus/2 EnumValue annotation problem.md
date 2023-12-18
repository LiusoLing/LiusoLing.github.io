---
# 这是文章的标题
title: EnumValue注解映射问题
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-18
# 一个页面可以有多个分类
category:
  - mysql
  - mybatis plus
# 一个页面可以有多个标签
tag:
  - mysql
  - mybatis plus
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

Mybatis Plus 有一个很方便的注解 `@EnumValue`，该注解用在枚举类的 `code` 属性上，这样 `Entity` 可以直接使用 枚举 作为属性，保存 和 查询 Entity 时，mybatis plus 会自行处理映射关系。

但有一个问题，使用 `@EnumValue` 注解时，数据库为 `null`，默认会映射成 `ordinaral` 为 0 的枚举值。

<!-- more -->

## @EnumValue

`@EnumValue` 注解官方使用示例:

```java
/**
 * 支持普通枚举类字段, 只用在enum类的字段上
 * <p>当实体类的属性是普通枚举，且是其中一个字段，使用该注解来标注枚举类里的那个属性对应字段</p>
 * <p>
 * 使用方式参考 com.baomidou.mybatisplus.test.h2.H2StudentMapperTest
 *
 * @author yuxiaobin
 * @date 2018/8/30
 */
 class Student {
    private Integer id;
    private String name;
    private GradeEnum grade;//数据库grade字段类型为int
 }
 
 public enum GradeEnum {
    PRIMARY(1,"小学"),
    SECONDORY("2", "中学"),
    HIGH(3, "高中");
 
    @EnumValue
    private final int code;
    private final String descp;
}
```

## 问题

**<font color = red>环境版本：</font>**

- mybatis plus：3.5.2
- mysql-connector-java：8.0.16

**<font color = red>问题溯源：</font>**

使用 `@EnumValue`注解，当数据库为 null 时，仍然映射了 `ordinaral` 为 0 的枚举值。

`debug` 时发现问题出现在 `MybatisEnumTypeHandler` 类中，`getNullableResult` 方法的第一行，`ResultSet.getObject` 方法返回的是 0 而不是 null：

![MybatisEnumTypeHandler](/assets/images/base/enumvalue-problem.bmp)

看代码就能见名知义，`ResultSet.getObject(columnName, this.propertyType)` ==根据列名和数据库表列字段类型，获取到数据库列的值。==

这里就有一个疑问，数据库字段的值不是 `null` 吗？为什么该方法会返回 `0` 呢？

**<font color = red>问题解决：</font>**

搜索官方issue列表发现，该问题已有人提出并解决：

[使用枚举映射时, 如果数据库为null, 返回的是0值的枚举对象 #5266](https://github.com/baomidou/mybatis-plus/issues/5266)

![官方issue解决](/assets/images/base/enumvalue-solve.bmp)

所以最终通过将 `pom.xml` 中的 `mysql-connector-java` 驱动版本升级为 `8.0.33` 解决了该问题。

```xml
<!--MySQL连接驱动-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version>
</dependency>
```