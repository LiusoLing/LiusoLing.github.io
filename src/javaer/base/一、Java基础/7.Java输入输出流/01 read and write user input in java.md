---
# 这是文章的标题
title: 01. java输入和输出
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 1
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
  - i/o
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

尽管现代Java应用多采用GUI或Web界面，但控制台交互仍是**单元测试**、**运维工具**和**教学演示**的核心场景。

本文将全面解析Java控制台I/O的六大核心技巧，涵盖从基础的`Scanner`使用到安全的密码处理等高级话题，并特别针对中文环境下的常见问题进行深度优化。

<!-- more -->

## 1.控制台输入三大法宝

### 1.Scanner类：快速开发首选
```java
Scanner scanner = new Scanner(System.in);

System.out.print("请输入您的姓名：");
String name = scanner.nextLine();  // 读取整行输入

System.out.print("请输入年龄：");
int age = scanner.nextInt();       // 自动类型转换

System.out.printf("您好，%s！%d年后您将年满%d岁%n"， 
    name， 10， age + 10);

scanner.close();  // 重要！关闭资源防止内存泄漏
```

**适用场景**：
- 快速原型开发
- 需要自动类型转换的简单输入

**中文陷阱**：

⚠️ 混合使用`nextLine()`与`nextInt()`可能导致输入错位：
```java
// 错误示例：
int num = scanner.nextInt();
String str = scanner.nextLine(); // 此处会读取空行！

// 正确做法：
int num = Integer.parseInt(scanner.nextLine());
```

### 2.BufferedReader：高性能读取
```java
BufferedReader reader = new BufferedReader(
    new InputStreamReader(System.in， StandardCharsets.UTF_8)); // 显式指定中文编码

System.out.print("请输入文件路径：");
String path = reader.readLine();

System.out.println("您输入的是：" + path);
reader.close();
```

**性能对比**：
| 方式            | 内存占用 | 读取速度 | 中文支持 |
|----------------|--------|--------|--------|
| Scanner        | 较高    | 较慢    | 需指定编码 |
| BufferedReader | 低      | 快30%+ | 默认UTF-8 |

### 3.System.console()：安全密码输入
```java
Console console = System.console();
if (console == null) {
    System.err.println("当前环境不支持控制台！");
    System.exit(1);
}

char[] password = console.readPassword("请输入数据库密码："); 
// 密码以字符数组形式存储，避免字符串驻留风险

console.printf("密码长度：%d%n"， password.length);
Arrays.fill(password， ' '); // 立即清空内存中的密码
```

**安全规范**：
- 必须处理`console`为null的情况（常见于IDE运行环境）
- 使用`char[]`替代`String`存储密码
- 处理完成后立即覆盖内存数据

---

## 2.控制台输出进阶技巧

### 1.格式化输出：打造专业CLI工具
```java
// 创建中文表格头
System.out.println("|------员工信息表------|");
System.out.printf("| %-6s | %-4s | %-11s |%n"， "姓名"， "年龄"， "手机号");

// 模拟数据
String[][] employees = {
    {"张三"， "28"， "13800138000"}，
    {"李四"， "35"， "13912345678"}
};

for (String[] emp : employees) {
    System.out.printf("| %-6s | %-4s | %s |%n"， 
        emp[0]， 
        emp[1]， 
        emp[2].replaceAll("(\\d{3})\\d{4}(\\d{4})"， "$1****$2")); // 手机号脱敏
}

// 输出结果：
// |------员工信息表------|
// | 姓名   | 年龄 | 手机号      |
// | 张三   | 28  | 138****8000 |
// | 李四   | 35  | 139****5678 |
```

### 2.彩色输出：增强可读性
```java
// ANSI颜色代码定义
public class ConsoleColors {
    public static final String RED = "\033[31m";
    public static final String GREEN = "\033[32m";
    public static final String RESET = "\033[0m";
}

System.out.println(ConsoleColors.RED + "错误：文件未找到！" + ConsoleColors.RESET);
System.out.println(ConsoleColors.GREEN + "操作成功完成" + ConsoleColors.RESET);
```

---

## 3.生产环境最佳实践

### 1.输入验证框架
```java
public static String readNonEmptyInput(String prompt， Scanner scanner) {
    while (true) {
        System.out.print(prompt);
        String input = scanner.nextLine().trim();
        
        if (!input.isEmpty()) {
            return input;
        }
        System.out.println("输入不能为空，请重新输入！");
    }
}

// 使用示例
String companyName = readNonEmptyInput("请输入企业名称："， scanner);
```

### 2.异常处理模板
```java
try (Scanner scanner = new Scanner(
    new InputStreamReader(System.in， "GBK"))) { // 处理Windows默认编码
    
    // 业务逻辑
} catch (InputMismatchException e) {
    System.err.println("错误：输入类型不匹配");
} catch (UnsupportedEncodingException e) {
    System.err.println("不支持的编码格式");
} finally {
    // 资源释放保障
}
```

### 3.日志记录规范
```java
// 使用SLF4J记录控制台操作
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ConsoleApp {
    private static final Logger logger = LoggerFactory.getLogger(ConsoleApp.class);

    public static void main(String[] args) {
        logger.info("应用程序启动");
        try {
            // 核心逻辑
        } catch (Exception e) {
            logger.error("运行时异常："， e);
            System.err.println("系统错误，请联系管理员");
        }
    }
}
```

---

## 4.常见问题排查指南

| 问题现象                 | 原因分析                  | 解决方案                  |
|-------------------------|-------------------------|-------------------------|
| 中文显示乱码             | 控制台编码与程序编码不一致 | 启动JVM时添加`-Dfile.encoding=UTF-8` |
| 密码输入可见             | 使用了Scanner.nextLine() | 改用System.console().readPassword() |
| 输入阻塞无响应           | 未关闭前一个输入流        | 确保每个输入流只打开一次并及时关闭   |
| 数字输入报InputMismatch   | 输入包含非数字字符         | 先读取字符串再转换为数字       |

---

## 总结
Java控制台I/O看似简单，实则需要关注：

✅ **编码问题**：中文字符处理必须统一编码  
✅ **资源管理**：使用try-with-resources自动关闭流  
✅ **安全性**：敏感信息采用安全读取方式  
✅ **健壮性**：添加输入验证和异常处理  