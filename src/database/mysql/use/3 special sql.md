---
# 这是文章的标题
title: 特殊SQL处理
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: pen-to-square
# 这是侧边栏的顺序
order: 3
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

工作中遇到的用于特殊场景下的SQL，记录下来方便以后遇到相同的或类似的场景时使用。

<!-- more -->

## 特殊SQL

### 1. 删除重复数据只保留一条

**删除重复数据，只保留ID最大的那条**
```sql
-- 已验证
delete from users where is_delete = 0 and id not in (
        select t.max_id from (
                select max(id) as max_id from users group by identity_id,name
            ) as t
        );

-- 未验证
delete p1 
from
 Person as p1,Person as p2 
where p1.is_delete = 0 and p1.Email=p2.Email and p1.Id > p2.Id;
```

### 2. 获取分组后某字段的最大值所在的那条记录
```sql
-- 实战验证（多次审核记录最新的一次结果）
select a.* from audit_record as a
where a.id = (
    select max(b.id) 
    from audit_record as b 
    where a.pojo_id = b.pojo_id 
    and b.review_type = 1
)
and a.review_status = 2;

-- 未验证
select * from test as a
where typeindex = (
    select max(b.typeindex) 
    from test as b 
    where a.type = b.type
);
```

### 3. group by和order by一起使用
```sql
-- 1.group by 先于order by执行
-- 2.group by 的时候 会首先对结果进行排序 然后再分组的
-- 3.group by 的排序是升序的
-- 4.如果你只是排分组字段的顺序为升序，那么你都可以不用order by 直接group by的结果就ok
-- 5.如果是降序 或者其他字段 那么 可能你类似这样的写法

-- 无效写法
select *  from table group by xxx order by xxx;

-- 有效写法
select * from (
    select * from tableA 
    where column1='xxx' 
    order by  xxx desc
) temp  
group by xxx ;
```

### 4. 数据库AES加解密
```sql
-- HEX 十六进制
-- aes 加密
select (HEX(AES_ENCRYPT(pass1, 'key2')));

-- aes 解密
select AES_DECRYPT(UNHEX(pass1), 'key2');
```

### 5. 锁定行以处理并发
```sql
-- 票务系统中，当多个用户同时尝试购买最后几张票时，我们需要确保每个用户正确地锁定资源。
-- 通过FOR UPDATE关键字锁定了一行记录，以便进行事务处理
select * from tickets
where event_id = 1 
and status = 'available'
limit 1
for update;
```

### 6. 数据库分区
```sql
-- 对于日志记录等大量写入操作的业务场景，数据库分区可以提高性能和管理的便捷性。

create table logs (
    log_id int not null,
    event_time datetime not null
) partition by range (YEAR(event_time)) (
    partition p0 values LESS THAN (1991),
    partition p1 values LESS THAN (1992),
    partition p2 values LESS THAN (1993),
    ...
);
```