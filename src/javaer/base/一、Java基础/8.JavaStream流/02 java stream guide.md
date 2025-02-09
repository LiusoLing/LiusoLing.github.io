---
# 这是文章的标题
title: 02. Stream API
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 2
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
  - Stream
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

本文快速介绍 Java Streams 的实际用途

<!-- more -->

## 2. 流创建
有多种方法可以创建不同源的流实例。创建后，实例将不会修改其源，因此允许从单个源创建多个实例。

### 2.1. 空流
在创建空流的情况下，我们应该使用 empty（） 方法：
```java
Stream<String> streamEmpty = Stream.empty();
```
我们通常在创建时使用 empty（） 方法，以避免为没有元素的流返回 null：
```java
public Stream<String> streamOf(List<String> list) {
    return list == null || list.isEmpty() ? Stream.empty() : list.stream();
}
```

### 2.2. 收集流
我们还可以创建任何类型的 Collection （Collection， List， Set） 的流：

```
Collection<String> collection = Arrays.asList("a", "b", "c");
Stream<String> streamOfCollection = collection.stream();
```

### 2.3. 数组流

数组也可以是流的源：
```java
Stream<String> streamOfArray = Stream.of("a", "b", "c");
```

我们还可以从现有数组或数组的一部分中创建流：
```java
String[] arr = new String[]{"a", "b", "c"};
Stream<String> streamOfArrayFull = Arrays.stream(arr);
Stream<String> streamOfArrayPart = Arrays.stream(arr, 1, 3);
```


### 2.4. Stream.builder（）
使用 builder 时，应在语句的右侧额外指定所需的类型，否则 build（） 方法将创建 `Stream<Object>` 的实例：

```java
Stream<String> streamBuilder =
  Stream.<String>builder().add("a").add("b").add("c").build();
```

### 2.5. Stream.generate（）

generate（） 方法接受 `Supplier<T>` 进行元素生成。由于生成的流是无限的，因此开发人员应指定所需的大小，否则 generate（） 方法将一直工作到达到内存限制：

```java
Stream<String> streamGenerated =
  Stream.generate(() -> "element").limit(10);
```
上面的代码创建了一个包含 10 个字符串的序列，其值为 “element”。


### 2.6. Stream.iterate（）
创建无限流的另一种方法是使用 iterate（） 方法：
```java
Stream<Integer> streamIterated = Stream.iterate(40, n -> n + 2).limit(20);
```
结果流的第一个元素是 iterate（） 方法的第一个参数。在创建每个后续元素时，指定的函数将应用于前一个元素。在上面的示例中，第二个元素将为 42。


### 2.7. 原始流

Java 8 提供了从三种原始类型创建流的可能性：int、long 和 double。由于 `Stream<T>` 是一个泛型接口，并且无法将基元用作泛型的类型参数，

因此创建了三个新的特殊接口：IntStream、LongStream、DoubleStream。

使用新界面可以减少不必要的自动装箱，从而提高工作效率：

```java
IntStream intStream = IntStream.range(1, 3);
LongStream longStream = LongStream.rangeClosed(1, 3);
```

range（int startInclusive， int endExclusive） 方法创建从第一个参数到第二个参数的有序流。它递增 step 等于 1 的后续元素的值。结果不包括最后一个参数，它只是序列的上限。

rangeClosed（int startInclusive， int endInclusive） 方法执行相同的作，只有一个区别，即包含第二个元素。我们可以使用这两种方法来生成三种类型的 primitive 流中的任何一种。

从 Java 8 开始，Random 类提供了多种生成基元流的方法。例如，下面的代码创建一个 DoubleStream，它有三个元素：

```java
Random random = new Random();
DoubleStream doubleStream = random.doubles(3);
```


### 2.8. 字符串流
我们还可以在 String 类的 chars（） 方法的帮助下，将 String 用作创建流的源。由于 JDK 中没有 CharStream 的接口，因此我们使用 IntStream 来表示 char 流。
```java
IntStream streamOfChars = "abc".chars();
```

以下示例根据指定的 RegEx 将 String 拆分为多个子字符串：
```java
Stream<String> streamOfString =
  Pattern.compile(", ").splitAsStream("a, b, c");
```

### 2.9. 文件流

此外，Java NIO 类 Files 允许我们通过 lines（） 方法生成文本文件的 `Stream<String>`。文本的每一行都成为流的一个元素：

```java
Path path = Paths.get("C:\\file.txt");
Stream<String> streamOfStrings = Files.lines(path);
Stream<String> streamWithCharset = 
  Files.lines(path, Charset.forName("UTF-8"));
```
可以将 Charset 指定为 lines（） 方法的参数。


## 3. 引用流

我们可以实例化一个流，并有一个可访问的引用，只要只调用中间动作。执行终端动作会使流无法访问.

为了演示这一点，我们将暂时忘记最佳实践是链接作序列。除了不必要的冗长之外，从技术上讲，以下代码是有效的：

```java
Stream<String> stream = 
  Stream.of("a", "b", "c").filter(element -> element.contains("b"));
Optional<String> anyElement = stream.findAny();
```
但是，在调用终端动作后尝试重用相同的引用将触发 IllegalStateException：

```java
Optional<String> firstElement = stream.findFirst();
```
由于 IllegalStateException 是 RuntimeException，因此编译器不会发出问题信号。因此，请务必记住 Java 8 流不能重复使用。

这种行为是合乎逻辑的。我们设计了流，以将有限的作序列应用于函数式样式中的元素源，而不是存储元素。

因此，要使前面的代码正常工作，应该进行一些更改：
```java
List<String> elements =
  Stream.of("a", "b", "c").filter(element -> element.contains("b"))
    .collect(Collectors.toList());
Optional<String> anyElement = elements.stream().findAny();
Optional<String> firstElement = elements.stream().findFirst();
```

## 4. 流管道

要对数据源的元素执行一系列作并聚合其结果，我们需要三个部分：源、中间动作和终端动作。

中间动作返回新的修改流。例如，要创建现有流的新流而没有几个元素，应使用 skip（） 方法：
```java
Stream<String> onceModifiedStream =
  Stream.of("abcd", "bbcd", "cbcd").skip(1);
```

如果我们需要多个修改，我们可以链接中间动作。假设我们还需要将当前 `Stream<String>`的每个元素替换为前几个字符的子字符串。我们可以通过链接 skip（） 和 map（） 方法来做到这一点：
```java
Stream<String> twiceModifiedStream =
  stream.skip(1).map(element -> element.substring(0, 3));
```
正如我们所看到的，map（） 方法将 lambda 表达式作为参数。如果我们想了解有关 Lambda 的更多信息，可以查看我们的教程 Lambda 表达式和函数接口：提示和最佳实践。

流本身毫无价值;用户对终端动作的结果感兴趣，该结果可以是某种类型的值，也可以是应用于 Stream 的每个元素的 Action。我们每个流只能使用一个终端动作。

使用 streams 的正确且最方便的方法是使用 stream pipeline，它是 stream source、intermediate operations 和 terminal operations 的链：
```java
List<String> list = Arrays.asList("abc1", "abc2", "abc3");
long size = list.stream().skip(1)
  .map(element -> element.substring(0, 3)).sorted().count();
```

## 5. 延迟调用

中间动作是惰性的。这意味着只有在终端动作执行需要时才会调用它们。


例如，让我们调用方法 wasCalled（），每次调用它时，它都会增加一个内部计数器：
```java
private long counter;
 
private void wasCalled() {
    counter++;
}
```

现在让我们从作 filter（） 中调用方法 wasCalled（）：
```java
List<String> list = Arrays.asList(“abc1”, “abc2”, “abc3”);
counter = 0;
Stream<String> stream = list.stream().filter(element -> {
    wasCalled();
    return element.contains("2");
});
```

由于我们有一个包含三个元素的源，我们可以假设 filter（） 方法将被调用三次，并且 counter 变量的值将为 3。

但是，运行此代码根本不会更改 counter，它仍然是零，因此 filter（） 方法甚至没有调用一次。原因是缺少终端动作。

让我们通过添加 map（）作和终端动作 findFirst（） 来稍微重写此代码。我们还将添加在 logging 的帮助下跟踪方法调用顺序的功能：
```java
Optional<String> stream = list.stream().filter(element -> {
    log.info("filter() was called");
    return element.contains("2");
}).map(element -> {
    log.info("map() was called");
    return element.toUpperCase();
}).findFirst();
```

结果日志显示我们调用了 filter（） 方法两次，map（） 方法调用了一次。这是因为管道是垂直执行的。在我们的示例中，stream 的第一个元素不满足 filter 的谓词。

然后我们调用第二个元素的 filter（） 方法，该方法通过了 filter。在没有为第三个元素调用 filter（） 的情况下，我们通过管道向下转到 map（） 方法。

findFirst（）作仅满足一个元素。因此，在这个特定示例中，延迟调用允许我们避免对 filter（） 进行一次方法调用。

## 6. 执行顺序
从性能的角度来看，正确的顺序是 stream pipeline 中链接作的最重要方面之一：
```java
long size = list.stream().map(element -> {
    wasCalled();
    return element.substring(0, 3);
}).skip(2).count();
```

执行此代码会将 counter 的值增加 3。这意味着我们调用了 stream 的 map（） 方法三次，但 size 的值为 1。

所以结果流只有一个元素，我们在三次中无缘无故地执行了两次昂贵的 map（）作。

如果我们更改 skip（） 和 map（） 方法的顺序，计数器将只增加 1。因此，我们只调用 map（） 方法一次：
```java
long size = list.stream().skip(2).map(element -> {
    wasCalled();
    return element.substring(0, 3);
}).count();
```
这给我们带来了以下规则：减小流大小的中间动作应放在应用于每个元素的作之前。因此，我们需要将 skip（）、filter（） 和 distinct（） 等方法保留在流管道的顶部。

## 7. 流减少

API 具有许多终端动作，这些动作将流聚合为类型或原始类型：count（）、max（）、min（） 和 sum（）。

但是，这些动作根据预定义的实现工作。那么，如果开发人员需要自定义 Stream 的缩减机制怎么办？有两种方法可以让我们做到这一点，reduce（） 和 collect（） 方法。


### 7.1. reduce（） 方法

此方法有三种变体，它们的签名和返回类型有所不同。它们可以具有以下参数：

- identity – 累加器的初始值，如果流为空且没有要累积的内容，则为默认值

- accumulator – 指定元素聚合逻辑的函数。由于 accumulator 为每一步 reduceing 创建一个新值，因此新值的数量等于 stream 的大小，并且只有最后一个值有用。这对性能不是很好。

- Combiner – 聚合 Acculator 结果的函数。我们只在 parallel 模式下调用 combiner，以减少来自不同线程的 accumulator 的结果。

现在让我们看看这三种方法的实际应用：
```java
OptionalInt reduced =
  IntStream.range(1, 4).reduce((a, b) -> a + b);
```

reduced = 6 (1 + 2 + 3)

```java
int reducedTwoParams =
  IntStream.range(1, 4).reduce(10, (a, b) -> a + b);
reducedTwoParams = 16 (10 + 1 + 2 + 3)
reducedTwoParams = 16 （10 + 1 + 2 + 3）

int reducedParams = Stream.of(1, 2, 3)
  .reduce(10, (a, b) -> a + b, (a, b) -> {
     log.info("combiner was called");
     return a + b;
  });
```
结果将与前面的示例 （16） 相同，并且不会有 login，这意味着没有调用 combiner。要使 combiner 工作，流应该是并行的：
```java
int reducedParallel = Arrays.asList(1, 2, 3).parallelStream()
    .reduce(10, (a, b) -> a + b, (a, b) -> {
       log.info("combiner was called");
       return a + b;
    });
```
这里的结果是不同的 （36），并且 combiner 被调用了两次。这里，缩减通过以下算法工作：通过将流的每个元素添加到 identity 中，累加器运行了 3 次。

这些动作是并行进行的。结果，他们有 （10 + 1 = 11; 10 + 2 = 12; 10 + 3 = 13;）。

现在 combiner 可以合并这三个结果。它需要两次迭代 （12 + 13 = 25;25 + 11 = 36）。

### 7.2. collect（） 方法

流的缩减也可以由另一个终端动作 collect（） 方法执行。

它接受 Collector 类型的参数，该参数指定归约机制。对于大多数常见作，已经创建了预定义的收集器。

可以在 Collectors 类型的帮助下访问它们。

在本节中，我们将使用以下 List 作为所有流的源：

```java
List<Product> productList = Arrays.asList(new Product(23, "potatoes"),
  new Product(14, "orange"), new Product(13, "lemon"),
  new Product(23, "bread"), new Product(13, "sugar"));
```

将流转换为 Collection （Collection， List 或 Set）：
```java
List<String> collectorCollection = 
  productList.stream().map(Product::getName).collect(Collectors.toList());
```


归纳为 String：
```java
String listToString = productList.stream().map(Product::getName)
  .collect(Collectors.joining(", ", "[", "]"));
```
joining（） 方法可以有一到三个参数（delimiter、prefix、suffix）。使用 joining（） 最方便的一点是，开发人员不需要检查流是否到达其末尾即可应用后缀，而无需应用分隔符。

Collector 会处理这个问题。


处理流中所有数字元素的平均值：
```java
double averagePrice = productList.stream()
  .collect(Collectors.averagingInt(Product::getPrice));
```


处理流的所有数字元素的总和：
```java
int summingPrice = productList.stream()
  .collect(Collectors.summingInt(Product::getPrice));
```
方法 averagingXX（）、summingXX（） 和 summarizingXX（） 可以与基元 （int， long， double） 和它们的包装类 （Integer， Long， Double） 一起使用。

这些方法的另一个强大功能是提供映射。因此，开发人员不需要在 collect（） 方法之前使用额外的 map（）作。

收集有关 stream 元素的统计信息：
```java
IntSummaryStatistics statistics = productList.stream()
  .collect(Collectors.summarizingInt(Product::getPrice));
```

通过使用 IntSummaryStatistics 类型的结果实例，开发人员可以通过应用 toString（） 方法创建统计报告。

结果将是此 String 的公共 “IntSummaryStatistics{count=5， sum=86， min=13， average=17,200000， max=23}”。

通过应用方法 getCount（）、getSum（）、getMin（）、getAverage（） 和 getMax（），也很容易从此对象中提取 count、sum、min、average 和 max 的单独值。所有这些值都可以从单个管道中提取。


根据指定的函数对 stream 的元素进行分组：
```java
Map<Integer, List<Product>> collectorMapOfLists = productList.stream()
  .collect(Collectors.groupingBy(Product::getPrice));
```
在上面的示例中，流被缩减为 Map，它按价格对所有产品进行分组。

根据一些谓词将 stream 的元素划分为组：
```java
Map<Boolean, List<Product>> mapPartioned = productList.stream()
  .collect(Collectors.partitioningBy(element -> element.getPrice() > 15));
```
推动收集器执行其他转换：
```java
Set<Product> unmodifiableSet = productList.stream()
  .collect(Collectors.collectingAndThen(Collectors.toSet(),
  Collections::unmodifiableSet));
```
在此特定情况下，收集器已将流转换为 Set，然后从中创建不可更改的 Set。

Custom collector:  自定义收集器：

如果出于某种原因应该创建自定义收集器，则最简单且最不冗长的方法是使用 Collector 类型的 of（） 方法。
```java
Collector<Product, ?, LinkedList<Product>> toLinkedList =
  Collector.of(LinkedList::new, LinkedList::add, 
    (first, second) -> { 
       first.addAll(second); 
       return first; 
    });

LinkedList<Product> linkedListOfPersons =
  productList.stream().collect(toLinkedList);
```
在此示例中，Collector 的一个实例被缩减为 LinkedList。

## 8. 并行流

在 Java 8 之前，并行化很复杂。ExecutorService 和 ForkJoin 的出现稍微简化了开发人员的生活，

但仍然值得记住如何创建特定的 executor、如何运行它等等。Java 8 引入了一种以函数式风格实现并行的方法。

API 允许我们创建并行流，这些流以并行模式执行作。当流的源是 Collection 或数组时，可以借助 parallelStream（） 方法实现：

```java
Stream<Product> streamOfCollection = productList.parallelStream();
boolean isParallel = streamOfCollection.isParallel();
boolean bigPrice = streamOfCollection
  .map(product -> product.getPrice() * 12)
  .anyMatch(price -> price > 200);
```

如果流的源不是 Collection 或数组，则应使用 parallel（） 方法：
```java
IntStream intStreamParallel = IntStream.range(1, 150).parallel();
boolean isParallel = intStreamParallel.isParallel();
```
在后台，Stream API 会自动使用 ForkJoin 框架并行执行作。默认情况下，将使用公共线程池，并且没有办法（至少现在是）为其分配一些自定义线程池。

这可以通过使用一组自定义的并行收集器来克服。

在并行模式下使用流时，请避免阻塞作。当任务需要类似的执行时间时，最好使用 parallel 模式。如果一项任务的持续时间比另一项长得多，则可能会减慢整个 App 的工作流程。

可以使用 sequential（） 方法将并行模式下的流转换回顺序模式：
```java
IntStream intStreamSequential = intStreamParallel.sequential();
boolean isParallel = intStreamSequential.isParallel();
```

## 9. Java 9 中的流 API 增强功能

Java 9 对 Stream API 引入了一些显著的改进，使流的使用更加富有表现力和效率。在本节中，我们将介绍 takeWhile（）、dropWhile（）、iterate（） 和 ofNullable（） 方法，探索与 Java 8 相比，它们如何简化各种作。


### 9.1. takeWhile（） 和 dropWhile（）

新的 takeWhile（） 和 dropWhile（） 方法使用 Predicate 来指定在流中包含或排除元素的条件。这些方法对于有序流特别有用，因为它们允许我们根据按顺序应用的条件处理元素。

使用 takeWhile（），我们可以从流的开头开始收集元素，直到不再满足给定条件。一旦元素不符合此条件，takeWhile（） 就会停止收集更多元素：

```java
Stream<String> stream = Stream.iterate("", s -> s + "s")
  .takeWhile(s -> s.length() < 10);
```
在这里，takeWhile（） 应用谓词 “s -> s.length（） < 10”，这意味着只要字符串长度小于 10，它就会不断向流中添加元素。一旦元素不再满足条件，集合就会停止收集元素。

相反， dropWhile（） 丢弃流开头的元素，只要它们满足给定的 Predicate。当元素不符合条件时，它会停止删除元素，此时它将包含流中的其余元素：
```java
Stream<String> stream = Stream.of("a", "aa", "aaa", "aaaaa")
  .dropWhile(s -> s.length() < 5);
```
在这种情况下，dropWhile（） 将跳过元素，直到遇到长度为 5 或更大的字符串，此时它会停止删除元素。

### 9.2. 增强的 iterate（） 方法

Java 9 添加了 iterate（） 方法的一个变体，它允许我们指定一个条件，在该条件将停止生成元素，从而有效地创建一个有限流。此增强的 iterate（） 函数可以在需要时指定停止条件：
```java
Stream.iterate(0, i -> i < 10, i -> i + 1)
  .forEach(System.out::println);
```
此示例生成从 0 到 9 的数字，直接将停止条件集成到 iterate（） 方法本身中，使其比 Java 8 的无限流更简单、更清晰。

### 9.3. 可选元素的 ofNullable（）

通常，我们可能需要创建一个具有可能为 null 的元素的流。Java 9 的 ofNullable（） 方法通过在提供的元素为 null 时返回空流来解决此问题，从而避免了对复杂条件逻辑的需求：
```java
collection.stream()
  .flatMap(s -> Stream.ofNullable(map.get(s)))
  .collect(Collectors.toList());
```
这个 ofNullable（） 方法消除了对三元表达式或 null 检查的需求，简化了需要添加条件元素的代码。
