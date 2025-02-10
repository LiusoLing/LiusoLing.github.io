---
# 这是文章的标题
title: 03. 函数式接口
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-04
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - lambda
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

Java 8 通过引入 **Lambda表达式** 和 **函数式接口（Functional Interfaces）** 彻底改变了代码编写方式。

这类接口为函数式编程提供了强大支持，同时保持了对旧版本Java的兼容性。本文将深入探讨Java 8内置的核心函数式接口及其实际应用场景。

<!-- more -->

## 什么是函数式接口？
函数式接口是 **仅包含一个抽象方法** 的接口（允许包含默认方法和静态方法），可通过 `@FunctionalInterface` 注解显式声明。编译器会强制检查接口是否符合函数式接口规范。

```java
@FunctionalInterface
public interface SimpleFuncInterface {
    void doWork();  // 唯一抽象方法
}
```

---

## 核心函数式接口一览

Java 8 在 `java.util.function` 包中提供了40+个预定义函数式接口，以下是6个最常用的核心接口：

### 1. Predicate（断言型接口）
- **功能**：条件判断（返回布尔值）
- **方法**：`test(T t)`
- **链式操作**：`and()`， `or()`， `negate()`

```java
Predicate<String> isLong = s -> s.length() > 5;
System.out.println(isLong.test("HelloWorld")); // 输出：true
```

### 2. Function（函数型接口）
- **功能**：类型转换（输入T类型，返回R类型）
- **方法**：`apply(T t)`
- **链式操作**：`compose()`， `andThen()`

```java
Function<Integer， String> intToString = Object::toString;
Function<String， String> quote = s -> "'" + s + "'";

Function<Integer， String> quoteInt = quote.compose(intToString);
System.out.println(quoteInt.apply(42)); // 输出：'42'
```

### 3. Supplier（供给型接口）
- **功能**：无参生成值
- **方法**：`get()`

```java
Supplier<LocalDate> now = LocalDate::now;
System.out.println(now.get()); // 输出当前日期
```

### 4. Consumer（消费型接口）
- **功能**：执行副作用操作
- **方法**：`accept(T t)`
- **链式操作**：`andThen()`

```java
Consumer<String> printer = System.out::println;
printer.accept("Hello Functional World!");
```

### 5. Operator扩展接口
- **UnaryOperator**：单参数同类型转换
  ```java
  UnaryOperator<String> upperCase = String::toUpperCase;
  System.out.println(upperCase.apply("hello")); // 输出：HELLO
  ```
  
- **BinaryOperator**：双参数同类型操作
  ```java
  BinaryOperator<Integer> sum = Integer::sum;
  System.out.println(sum.apply(10， 20)); // 输出：30
  ```

---

## 原始类型特化接口
为避免自动装箱开销，Java 8 提供了针对原始类型的优化接口：

| 通用接口        | 原始类型特化         |
|----------------|---------------------|
| `Predicate<T>` | `IntPredicate`      |
| `Function<T，R>`| `IntToDoubleFunction`|
| `Consumer<T>`  | `LongConsumer`      |

```java
IntPredicate even = i -> i % 2 == 0;
System.out.println(even.test(100)); // 输出：true（避免Integer装箱）
```

---

## 双参数接口
处理需要两个参数的场景：

- **BiPredicate<T，U>**
- **BiFunction<T，U，R>**
- **BiConsumer<T，U>**

```java
BiFunction<String， Integer， String> padLeft = 
    (str， num) -> String.format("%" + num + "s"， str);
System.out.println(padLeft.apply("Java"， 10)); // 输出："      Java"
```

---

## 最佳实践
1. **优先使用内置接口**：避免重复造轮子
2. **注意类型推断**：明确指定参数类型可提升可读性
3. **方法引用优化**：用 `Class::method` 替代冗长Lambda
4. **避免过度链式**：保持代码可维护性

---

## 总结
Java 8 函数式接口为开发者提供了标准化的函数式编程工具集，配合Lambda表达式可实现：

✅ 更简洁的代码结构  
✅ 更强的类型安全  
✅ 更好的并行处理支持