---
# 这是文章的标题
title: 04. Java比较器和可比较器
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 4
# 设置作者
author: LiuSongLing
# 设置写作时间
date: 2025-01-03
# 一个页面可以有多个分类
category:
  - java
# 一个页面可以有多个标签
tag:
  - java
  - list
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: MIT
---

Java中的比较很容易，但是当使用自定义类型或者尝试比较不直接可比的对象时，我们需要使用比较策略。

方法有两个，使用 Comparator 或 Comparable 接口。

<!-- more -->

## 1.比较

假设有一些球员：
```java
public class Player {
    private int ranking;
    private String name;
    private int age;
    
    // constructor, getters, setters  
}
```
我们试着对其进行排序：
```java
public static void main(String[] args) {
    List<Player> footballTeam = new ArrayList<>();
    Player player1 = new Player(59, "John", 20);
    Player player2 = new Player(67, "Roger", 22);
    Player player3 = new Player(45, "Steven", 24);
    footballTeam.add(player1);
    footballTeam.add(player2);
    footballTeam.add(player3);

    System.out.println("Before Sorting : " + footballTeam);
    Collections.sort(footballTeam);
    System.out.println("After Sorting : " + footballTeam);
}

```

我们只会得到一个错误：
```java
The method sort(List<T>) in the type Collections 
  is not applicable for the arguments (ArrayList<Player>)
```

为了能够进行排序，我们必须通过实现 Comparable 接口将 Player 对象定义为 comparable:
```java
public class Player implements Comparable<Player> {

    // same as before

    @Override
    public int compareTo(Player otherPlayer) {
        return Integer.compare(getRanking(), otherPlayer.getRanking());
    }

}
```

排序顺序由 compareTo（） 方法的返回值决定。如果 x 小于 y，则 Integer.compare（x， y） 返回 -1，如果它们相等，则返回 0，否则返回 1。
该方法返回一个数字，指示被比较的对象是小于、等于还是大于作为参数传递的对象。


## 2.比较器

Comparator 接口定义了一个 compare（arg1， arg2） 方法，其中包含两个表示比较对象的参数，其工作方式类似于 Comparable.compareTo（） 方法。

创建一个 Comparator 来使用 Player 的 ranking 属性对玩家进行排序：
```java
public class PlayerRankingComparator implements Comparator<Player> {

    @Override
    public int compare(Player firstPlayer, Player secondPlayer) {
       return Integer.compare(firstPlayer.getRanking(), secondPlayer.getRanking());
    }

}
```

同样，我们可以创建一个 Comparator 来使用 Player 的 age 属性对玩家进行排序：

```java
public class PlayerAgeComparator implements Comparator<Player> {

    @Override
    public int compare(Player firstPlayer, Player secondPlayer) {
       return Integer.compare(firstPlayer.getAge(), secondPlayer.getAge());
    }

}
```

这样就能根据不同的需要，使用不同的排序策略：
```java
PlayerRankingComparator playerComparator = new PlayerRankingComparator();
Collections.sort(footballTeam, playerComparator);

Before Sorting : [John, Roger, Steven]
After Sorting by ranking : [Steven, John, Roger]


PlayerAgeComparator playerComparator = new PlayerAgeComparator();
Collections.sort(footballTeam, playerComparator);

Before Sorting : [John, Roger, Steven]
After Sorting by age : [Roger, John, Steven]
```

## 3.java8比较器

Java 8 通过使用 lambda 表达式和 comparing（） 静态工厂方法提供了定义 Comparator 的新方法。

```java
Comparator byRanking = 
  (Player player1, Player player2) -> Integer.compare(player1.getRanking(), player2.getRanking());
```

Comparator.comparing 方法采用一个计算将用于比较项目的属性的方法，并返回一个匹配的 Comparator 实例：

```java
Comparator<Player> byRanking = Comparator.comparing(Player::getRanking);
Comparator<Player> byAge = Comparator.comparing(Player::getAge);
```

## 4.优缺点

Comparable 接口是定义默认比较策略的不错选择，换句话说，它是比较对象的主要方式。

那么，如果我们已经有 Comparable，为什么还要使用 Comparator 呢？

原因如下：
- 有时我们无法修改我们想要排序的对象所在的类的源代码，因此无法使用 Comparable
- 使用 Comparators 可以避免向类添加额外的代码
- 我们可以定义多个不同的比较策略，这在使用 Comparable 时是不可能的

## 5.注意

我们一般用 Integer.compare（） 方法来比较两个整数。

但有的人会说，为什么不用 Comparator 方法呢，不是挺方面的么：
```java
Comparator<Player> comparator = (p1, p2) -> p1.getRanking() - p2.getRanking();
```

原因就在于它隐含着潜在的风险：
```java
Player player1 = new Player(59, "John", Integer.MAX_VALUE);
Player player2 = new Player(67, "Roger", -1);

List<Player> players = Arrays.asList(player1, player2);
players.sort(comparator);
```

由于 -1 远小于 Integer.MAX_VALUE，因此在排序集合中，“Roger” 应位于 “John” 之前。但是，由于整数溢出， “Integer.MAX_VALUE – （-1）” 将小于零。所以基于 Comparator/Comparable 合约，Integer.MAX_VALUE 小于 -1，这显然是不正确的。

```java
assertEquals("John", players.get(0).getName());
assertEquals("Roger", players.get(1).getName());
```