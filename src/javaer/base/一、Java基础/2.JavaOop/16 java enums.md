---
# 这是文章的标题
title: 16. Java enum枚举
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 16
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-04-22
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

在本教程中，我们将学习什么是Java枚举，它们解决了哪些问题，以及如何在实践中使用它们的一些设计模式。

<!-- more -->

## 1.enum枚举

**Java 5首先引入了枚举关键字**。它表示一种特殊类型的类，它总是扩展java.lang.Enumclass。有关使用的官方文档，我们可以前往文档。

以这种方式定义的常量使代码更具可读性，允许编译时检查，预先记录可接受的值列表，并避免因传递无效值而导致的意外行为。


以下是一个定义披萨订单状态的快速简单的枚举示例；订单状态可以订购、准备就绪或交付：


```java
public enum PizzaStatus {
    ORDERED,
    READY, 
    DELIVERED; 
}
```
此外，枚举附带了许多有用的方法，如果我们使用传统的公共静态最终常量，我们需要编写这些方法。

<br/><br/><br/><br/><br/><br/>

## 2.自定义枚举方法

现在我们已经基本了解了什么是枚举以及我们如何使用它们，我们将通过在枚举上定义一些额外的API方法将我们之前的示例提升到一个新的水平：

```java
public class Pizza {
    private PizzaStatus status;
    public enum PizzaStatus {
        ORDERED,
        READY,
        DELIVERED;
    }

    public boolean isDeliverable() {
        if (getStatus() == PizzaStatus.READY) {
            return true;
        }
        return false;
    }
    
    // Methods that set and get the status variable.
}

```

## 3.使用“==”运算符比较枚举类型

由于枚举类型确保JVM中**只存在一个常量实例**，我们可以安全地使用 `==` 运算符来比较两个变量，就像我们在上述示例中所做的那样。此外，`==` 运算符提供编译时和运行时安全。

首先，我们将在以下片段中查看运行时安全，我们将使用“==”运算符来比较状态。这两个值都可以是空的，我们不会得到NullPointerException。相反，如果我们使用equals方法，我们将得到一个NullPointerException：


```java
if(testPz.getStatus().equals(Pizza.PizzaStatus.DELIVERED)); 
if(testPz.getStatus() == Pizza.PizzaStatus.DELIVERED); 

```

至于编译时安全，让我们看看一个例子，通过使用 `equals`方法进行比较来确定不同类型的枚举是相等的。

这是因为枚举和getStatus方法的值巧合是相同的；然而，从逻辑上讲，比较应该是错误的。我们通过使用“==”运算符来避免这个问题。

编译器会将比较标记为不兼容错误：

<br/><br/><br/><br/><br/><br/>

```java
if(testPz.getStatus().equals(TestColor.GREEN));
if(testPz.getStatus() == TestColor.GREEN);
```

## 4.在switch中使用枚举

我们也可以在switch语句中使用枚举类型：

```java
public int getDeliveryTimeInDays() {
    switch (status) {
        case ORDERED: return 5;
        case READY: return 2;
        case DELIVERED: return 0;
    }
    return 0;
}
```

## 5.枚举中的字段、方法和构造函数

我们可以在枚举类型中定义构造函数、方法和字段，这使得它们非常强大。

接下来，让我们通过实施从披萨订单的一个阶段过渡到另一个阶段来扩展上面的示例。我们将看看如何摆脱之前使用的if和switch语句：

```java
public class Pizza {

    private PizzaStatus status;
    public enum PizzaStatus {
        ORDERED (5){
            @Override
            public boolean isOrdered() {
                return true;
            }
        },
        READY (2){
            @Override
            public boolean isReady() {
                return true;
            }
        },
        DELIVERED (0){
            @Override
            public boolean isDelivered() {
                return true;
            }
        };

        private int timeToDelivery;

        public boolean isOrdered() {return false;}

        public boolean isReady() {return false;}

        public boolean isDelivered(){return false;}

        public int getTimeToDelivery() {
            return timeToDelivery;
        }

        PizzaStatus (int timeToDelivery) {
            this.timeToDelivery = timeToDelivery;
        }
    }

    public boolean isDeliverable() {
        return this.status.isReady();
    }

    public void printTimeToDeliver() {
        System.out.println("Time to delivery is " + 
          this.getStatus().getTimeToDelivery());
    }
    
    // Methods that set and get the status variable.
}

```

下面的测试片段演示了这是如何工作的：


```java
@Test
public void givenPizaOrder_whenReady_thenDeliverable() {
    Pizza testPz = new Pizza();
    testPz.setStatus(Pizza.PizzaStatus.READY);
    assertTrue(testPz.isDeliverable());
}
```

## 6.EnumSet和EnumMap

### 6.1 EnumSet

EnumSet是一个专门的Set实现，旨在与Enum类型一起使用。

<br/><br/><br/><br/><br/><br/>

与HashSet相比，由于使用了内部位矢量表示，它是一组特定枚举常数的非常高效和紧凑的表示。它还为传统的基于int的“位标志”提供了一个类型安全的替代方案，允许我们编写更可读和维护的简明代码。

EnumSet是一个抽象类，有两个实现，RegularEnumSet和JumboEnumSet，其中一个是根据实例化时枚举中的常数数来选择的。

因此，每当我们想在大多数场景中使用枚举常量集合时，最好使用此集（如子设置、添加、删除和批量操作，如containsAll和removeAll），如果我们只想遍及所有可能的常量，则使用Enum.values()。

在下面的代码片段中，我们可以看到如何使用EnumSet创建常量子集：

```java
public class Pizza {

    private static EnumSet<PizzaStatus> undeliveredPizzaStatuses =
      EnumSet.of(PizzaStatus.ORDERED, PizzaStatus.READY);

    private PizzaStatus status;

    public enum PizzaStatus {
        ...
    }

    public boolean isDeliverable() {
        return this.status.isReady();
    }

    public void printTimeToDeliver() {
        System.out.println("Time to delivery is " + 
          this.getStatus().getTimeToDelivery() + " days");
    }

    public static List<Pizza> getAllUndeliveredPizzas(List<Pizza> input) {
        return input.stream().filter(
          (s) -> undeliveredPizzaStatuses.contains(s.getStatus()))
            .collect(Collectors.toList());
    }

    public void deliver() { 
        if (isDeliverable()) { 
            PizzaDeliverySystemConfiguration.getInstance().getDeliveryStrategy()
              .deliver(this); 
            this.setStatus(PizzaStatus.DELIVERED); 
        } 
    }
    
    // Methods that set and get the status variable.
}

```

执行以下测试演示了Set接口的EnumSet实现的强大功能：

```java
@Test
public void givenPizaOrders_whenRetrievingUnDeliveredPzs_thenCorrectlyRetrieved() {
    List<Pizza> pzList = new ArrayList<>();
    Pizza pz1 = new Pizza();
    pz1.setStatus(Pizza.PizzaStatus.DELIVERED);

    Pizza pz2 = new Pizza();
    pz2.setStatus(Pizza.PizzaStatus.ORDERED);

    Pizza pz3 = new Pizza();
    pz3.setStatus(Pizza.PizzaStatus.ORDERED);

    Pizza pz4 = new Pizza();
    pz4.setStatus(Pizza.PizzaStatus.READY);

    pzList.add(pz1);
    pzList.add(pz2);
    pzList.add(pz3);
    pzList.add(pz4);

    List<Pizza> undeliveredPzs = Pizza.getAllUndeliveredPizzas(pzList); 
    assertTrue(undeliveredPzs.size() == 3); 
}
```

### 6.2 EnumMap

EnumMap是一个专门的Map实现，旨在将枚举常量用作键。与对应的HashMap相比，它是一个高效而紧凑的实现，在内部表示为数组：

```java
EnumMap<Pizza.PizzaStatus, Pizza> map;
```

让我们看看我们如何在实践中使用它的例子：

```java
public static EnumMap<PizzaStatus, List<Pizza>> 
  groupPizzaByStatus(List<Pizza> pizzaList) {
    EnumMap<PizzaStatus, List<Pizza>> pzByStatus = 
      new EnumMap<PizzaStatus, List<Pizza>>(PizzaStatus.class);
    
    for (Pizza pz : pizzaList) {
        PizzaStatus status = pz.getStatus();
        if (pzByStatus.containsKey(status)) {
            pzByStatus.get(status).add(pz);
        } else {
            List<Pizza> newPzList = new ArrayList<Pizza>();
            newPzList.add(pz);
            pzByStatus.put(status, newPzList);
        }
    }
    return pzByStatus;
}
```
执行以下测试演示了EnumMap实现Map接口的强大功能：

<br/><br/><br/><br/><br/><br/>

```java
@Test
public void givenPizaOrders_whenGroupByStatusCalled_thenCorrectlyGrouped() {
    List<Pizza> pzList = new ArrayList<>();
    Pizza pz1 = new Pizza();
    pz1.setStatus(Pizza.PizzaStatus.DELIVERED);

    Pizza pz2 = new Pizza();
    pz2.setStatus(Pizza.PizzaStatus.ORDERED);

    Pizza pz3 = new Pizza();
    pz3.setStatus(Pizza.PizzaStatus.ORDERED);

    Pizza pz4 = new Pizza();
    pz4.setStatus(Pizza.PizzaStatus.READY);

    pzList.add(pz1);
    pzList.add(pz2);
    pzList.add(pz3);
    pzList.add(pz4);

    EnumMap<Pizza.PizzaStatus,List<Pizza>> map = Pizza.groupPizzaByStatus(pzList);
    assertTrue(map.get(Pizza.PizzaStatus.DELIVERED).size() == 1);
    assertTrue(map.get(Pizza.PizzaStatus.ORDERED).size() == 2);
    assertTrue(map.get(Pizza.PizzaStatus.READY).size() == 1);
}
```

## 7.使用枚举实现设计模式

### 7.1 单例模式

通常，使用Singleton模式实现一个类是相当不平凡的。枚举提供了一种快速简便的实现单项的方法。

此外，由于枚举类实现了Serializable接口，因此该类被JVM保证为单例。这与传统实现不同，我们必须确保在反序列化期间不会创建新实例。

在下面的代码片段中，我们看到了如何实现单人模式：

```java
public enum PizzaDeliverySystemConfiguration {
    INSTANCE;
    PizzaDeliverySystemConfiguration() {
        // Initialization configuration which involves
        // overriding defaults like delivery strategy
    }

    private PizzaDeliveryStrategy deliveryStrategy = PizzaDeliveryStrategy.NORMAL;

    public static PizzaDeliverySystemConfiguration getInstance() {
        return INSTANCE;
    }

    public PizzaDeliveryStrategy getDeliveryStrategy() {
        return deliveryStrategy;
    }
}
```

### 7.2 策略模式

通常，策略模式是通过有一个由不同类实现的接口编写的。

添加新策略意味着添加一个新的实现类。使用枚举，我们可以以更少的努力实现这一点，添加新的实现意味着简单地用一些实现来定义另一个实例。

下面的代码片段显示了如何实现策略模式：

```java
public enum PizzaDeliveryStrategy {
    EXPRESS {
        @Override
        public void deliver(Pizza pz) {
            System.out.println("Pizza will be delivered in express mode");
        }
    },
    NORMAL {
        @Override
        public void deliver(Pizza pz) {
            System.out.println("Pizza will be delivered in normal mode");
        }
    };

    public abstract void deliver(Pizza pz);
}
```

然后，我们将以下方法添加到Pizza类中：
```java
public void deliver() {
    if (isDeliverable()) {
        PizzaDeliverySystemConfiguration.getInstance().getDeliveryStrategy()
          .deliver(this);
        this.setStatus(PizzaStatus.DELIVERED);
    }
}
```

```java
@Test
public void givenPizaOrder_whenDelivered_thenPizzaGetsDeliveredAndStatusChanges() {
    Pizza pz = new Pizza();
    pz.setStatus(Pizza.PizzaStatus.READY);
    pz.deliver();
    assertTrue(pz.getStatus() == Pizza.PizzaStatus.DELIVERED);
}
```

## 8.java8和枚举

在Java 8中重写Pizza类，看看使用lambdas和Stream API，getAllUndeliveredPizzas()和groupPizzaByStatus()方法如何变得如此简洁：

<br/><br/><br/><br/><br/><br/>


```java
public static List<Pizza> getAllUndeliveredPizzas(List<Pizza> input) {
    return input.stream().filter(
      (s) -> !deliveredPizzaStatuses.contains(s.getStatus()))
        .collect(Collectors.toList());
}
```

```java
public static EnumMap<PizzaStatus, List<Pizza>> 
  groupPizzaByStatus(List<Pizza> pzList) {
    EnumMap<PizzaStatus, List<Pizza>> map = pzList.stream().collect(
      Collectors.groupingBy(Pizza::getStatus,
      () -> new EnumMap<>(PizzaStatus.class), Collectors.toList()));
    return map;
}
```

## 9.枚举的JSON表示

使用Jackson库，可以像POJO一样将枚举类型进行JSON表示。在下面的代码片段中，我们将了解如何使用Jackson注释：

```java
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum PizzaStatus {
    ORDERED (5){
        @Override
        public boolean isOrdered() {
            return true;
        }
    },
    READY (2){
        @Override
        public boolean isReady() {
            return true;
        }
    },
    DELIVERED (0){
        @Override
        public boolean isDelivered() {
            return true;
        }
    };

    private int timeToDelivery;

    public boolean isOrdered() {return false;}

    public boolean isReady() {return false;}

    public boolean isDelivered(){return false;}

    @JsonProperty("timeToDelivery")
    public int getTimeToDelivery() {
        return timeToDelivery;
    }

    private PizzaStatus (int timeToDelivery) {
        this.timeToDelivery = timeToDelivery;
    }
}
```