---
# 这是文章的标题
title: 11. Java组成、聚合和关联
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 11
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2024-03-22
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

对象在现实生活中和编程中都有它们之间的关系。有时很难理解或实现这些关系。

在本教程中，我们将重点关注Java对三种有时容易混淆的关系类型的看法：组合、聚合和关联。


<!-- more -->

## 1.组成

组成是一种“属于”的关系类型。这意味着其中一个对象是逻辑上更大的结构，其中包含另一个对象。换句话说，它是另一个对象的一部分或成员。

或者，**我们通常称其为“has-a”关系**（而不是“is-a”关系，即继承）。

例如，一个房间属于一个建筑，或者换句话说，一个建筑有一个房间。因此，基本上，我们是否称其为“属于”或“有”只是视角的不同。



<br/><br/><br/><br/><br/><br/>

构图是一种强烈的“has-a”关系，因为包含对象拥有它。因此，**物体的生命周期是绑定的。这意味着，如果我们销毁所有者对象，其成员也将与之一起被销毁**。

例如，在我们之前的例子中，房间与建筑一起被摧毁了。

请注意，这并不意味着包含的对象没有其任何部分就无法存在。例如，我们可以拆除建筑物内的所有墙壁，从而摧毁房间。但这座建筑仍将存在。

就基数而言，包含对象可以有我们想要的任意数量的部分。然而，所有部件都需要恰好有一个容器。


## 1.1源代码

在Java中，我们可以用一个非静态的内部类来建模：

```java
class Building {
    class Room {}   
}
```

或者，我们也可以在方法主体中声明该类。不管是命名类、匿名类还是lambda：

```java
class Building {
    Room createAnonymousRoom() {
        return new Room() {
            @Override
            void doInRoom() {}
        };
    }

    Room createInlineRoom() {
        class InlineRoom implements Room {
            @Override
            void doInRoom() {}
        }
        return new InlineRoom();
    }
    
    Room createLambdaRoom() {
        return () -> {};
    }

    interface Room {
        void doInRoom();
    }
}
```

<br/><br/><br/><br/><br/><br/>

请注意，至关重要的是，我们的内部类应该是非静态的，因为它将所有实例绑定到包含类。

通常，包含对象想要访问其成员。因此，我们应该存储他们的参考资料：

```java
class Building {
    List<Room> rooms;
    class Room {}   
}
```

请注意，所有内部类对象都存储对其包含对象的隐式引用。因此，我们不需要手动存储它来访问它：

```java
class Building {
    String address;
    
    class Room {
        String getBuildingAddress() {
            return Building.this.address;
        }   
    }   
}
```

## 2.集合

聚合也是一种“有”关系。它与构图的区别在于，它不涉及拥有。因此，对象的生命周期没有绑定：每个对象都可以独立存在。

例如，一辆汽车及其车轮。我们可以取下车轮，它们仍然存在。我们可以安装其他（预先存在的）车轮，或者将这些安装在另一辆车上，一切都会正常运行。

当然，没有轮子或分离轮子的汽车不会像有轮子的汽车那样有用。但这就是为什么这种关系首先存在：将部分组装成一个更大的结构，它能比它的部分有更多的东西。

由于**聚合不涉及拥有，因此成员不需要只绑定到一个容器**。例如，三角形是由段组成的。但三角形可以共享分段作为其边。


### 2.1源代码

在Java中，我们可以用一个普通的旧引用来建模聚合：

```java
class Wheel {}

class Car {
    List<Wheel> wheels;
}
```

成员可以是任何类型的类，除了非静态的内部类。

在上面的代码片段中，两个类都有单独的源文件。然而，我们也可以使用静态的内部类：

```java
class Car {
    List<Wheel> wheels;
    static class Wheel {}
}
```

请注意，Java只会在非静态内部类中创建隐式引用。正因为如此，我们必须在需要的地方手动保持这种关系：

```java
class Wheel {
    Car car;
}

class Car {
    List<Wheel> wheels;
}
```


## 3.关联

**关联是三者之间最薄弱的关系。它不是“有”关系，没有一个对象是另一个对象的一部分或成员。**

关联仅意味着对象“认识”对方。例如，一个母亲和她的孩子。

### 3.1源代码

在Java中，我们可以像聚合一样对关联进行建模：

```java
class Child {}

class Mother {
    List<Child> children;
}
```

**我们如何判断引用是聚合还是关联？**

**嗯，我们不能**。区别只是合乎逻辑的：其中一个对象是否是另一个对象的一部分。

此外，我们必须像聚合一样在两端手动维护引用：

```java
class Child {
    Mother mother;
}

class Mother {
    List<Child> children;
}
```


## 4.更复杂的例子

让我们看看一个（有点）更复杂的例子！

我们将模拟一所有院系的大学。教授们在每个系工作，他们之间也有朋友。

我们关闭大学后，这些系会存在吗？当然不存在了，但教授们仍然存在（希望如此）。

我们必须决定哪个更合乎逻辑：我们是否将教授视为系的一部分。或者：他们是否是各部门的成员？

是的，他们是。因此，这是一个聚合体。除此之外，教授可以在多个部门工作。

教授之间的关系是关联的，因为说一个教授是另一个教授的一部分没有任何意义。

Java代码看起来是这样的：

```java
class University {
    List<Department> department;   
}

class Department {
    List<Professor> professors;
}

class Professor {
    List<Department> department;
    List<Professor> friends;
}
```

请注意，如果我们依靠 **“has-a”、“belongs-to”、“member-of”、“part-of”等术语** ，我们可以更容易地识别对象之间的关系。









