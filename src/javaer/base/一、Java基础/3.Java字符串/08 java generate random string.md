---
# 这是文章的标题
title: 08. Java生成随机字符串
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 8
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2023-12-13
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - string
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

在本文章中，学习如何在Java中生成随机字符串，首先使用标准Java库，然后使用Java 8变体，最后使用Apache Commons Lang库。

<!-- more -->

## Java标准库生成随机字符串

使用简单方法，生成一个以7个字符为界的随机字符串

```java
@Test
public void givenUsingPlainJava_whenGeneratingRandomStringUnbounded_thenCorrect() {
    byte[] array = new byte[7]; // length is bounded by 7
    new Random().nextBytes(array);
    String generatedString = new String(array, Charset.forName("UTF-8"));

    System.out.println(generatedString);
}
```

使用小写字母和设置长度生成一个随机字符：
```java
@Test
public void givenUsingPlainJava_whenGeneratingRandomStringBounded_thenCorrect() {
 
    int leftLimit = 97; // letter 'a'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 10;
    Random random = new Random();
    StringBuilder buffer = new StringBuilder(targetStringLength);
    for (int i = 0; i < targetStringLength; i++) {
        int randomLimitedInt = leftLimit + (int) 
          (random.nextFloat() * (rightLimit - leftLimit + 1));
        buffer.append((char) randomLimitedInt);
    }
    String generatedString = buffer.toString();

    System.out.println(generatedString);
}
```

## Java 8生成随机字符串

使用 `JDK 8` 中添加的 `Random.ints` 来生成==字母字符串==：
```java
@Test
public void givenUsingJava8_whenGeneratingRandomAlphabeticString_thenCorrect() {
    int leftLimit = 97; // letter 'a'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 10;
    Random random = new Random();

    String generatedString = random.ints(leftLimit, rightLimit + 1)
      .limit(targetStringLength)
      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
      .toString();

    System.out.println(generatedString);
}
```

使用 `JDK 8` 中添加的 `Random.ints` 来生成==字母数字字符串==：
```java
@Test
public void givenUsingJava8_whenGeneratingRandomAlphanumericString_thenCorrect() {
    int leftLimit = 48; // numeral '0'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 10;
    Random random = new Random();

    String generatedString = random.ints(leftLimit, rightLimit + 1)
      .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
      .limit(targetStringLength)
      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
      .toString();

    System.out.println(generatedString);
}
```
我们使用上面的过滤器方法省略了65到90之间的Unicode字符，以避免超出范围的字符。

## Apache Commons Lang生成随机字符串

使用Apache的Commons Lang库生成==字母字符串==：
```java
@Test
public void givenUsingApache_whenGeneratingRandomStringBounded_thenCorrect() {
 
    int length = 10;
    boolean useLetters = true;
    boolean useNumbers = false;
    String generatedString = RandomStringUtils.random(length, useLetters, useNumbers);

    System.out.println(generatedString);
}
```

简化版：
```java
@Test
public void givenUsingApache_whenGeneratingRandomAlphabeticString_thenCorrect() {
    String generatedString = RandomStringUtils.randomAlphabetic(10);

    System.out.println(generatedString);
}
```

使用Apache的Commons Lang库生成==字母数字字符串==:
```java
@Test
public void givenUsingApache_whenGeneratingRandomAlphanumericString_thenCorrect() {
    String generatedString = RandomStringUtils.randomAlphanumeric(10);

    System.out.println(generatedString);
}
```

## 题外话

上述程序示例中，`java.util.Random`，在加密上不安全。推荐使用 `java.security.SecureRandom` 用于安全敏感的应用程序。