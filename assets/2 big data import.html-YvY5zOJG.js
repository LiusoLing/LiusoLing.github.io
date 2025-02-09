import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e,a as t,f as l}from"./app-LeoV-3ht.js";const p={},o=t("p",null,"工作中难免遇到数据分析、数据迁移等场景，这时就需要进行数据转储，此篇文章介绍一种可用的经过实践的 MySQL 大数据导入方法。",-1),i=l(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述场景中，运维提供的备份SQL文件或自行备份的数据库文件。</p><p>当文件大小大于 1GB 时，市面流行的数据库管理工具（Navicat、DBeaver、MySQL Workbench、SQLyog、DataGrid）都存在导入太慢甚至导入失败的问题。</p><p>至于网上的其它方法例如修改缓存大小、通信区间缓存大小等等方法，是自己本地的数据库还好，但当被导入的数据库是生产或者远程数据库，这些方法就不适用了，此篇文章介绍一种可用的经过实践的 MySQL 大数据导入方法。</p></div><h2 id="mysql大数据导出" tabindex="-1"><a class="header-anchor" href="#mysql大数据导出" aria-hidden="true">#</a> MySQL大数据导出</h2><p>使用命令备份数据库，而不是可视化工具，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Last login: Mon Dec  <span class="token number">4</span> <span class="token number">11</span>:00:35 on ttys001

➜  ~ mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>                          <span class="token comment"># 按下Enter回车键</span>
<span class="token comment"># 远程数据库使用：mysql -u root -p -h127.0.0.1 -P3306</span>
<span class="token comment"># - u：用户名</span>
<span class="token comment"># - p：密码</span>
<span class="token comment"># - h：服务器主机，可以是IP或域名</span>
<span class="token comment"># - P：端口号</span>

Enter password:                                 <span class="token comment"># 输入root用户密码</span>
mysql<span class="token operator">&gt;</span> mysqldump db_name <span class="token operator">&gt;</span> filename.sql         <span class="token comment"># 备份指定数据库到指定文件</span>

<span class="token comment"># 备份指定数据库到指定文件（表定义文件和数据文件将分开独立备份如：a.sql a.txt b.sql b.txt）</span>
mysql<span class="token operator">&gt;</span> mysqldump db_name <span class="token parameter variable">--tab</span> <span class="token operator">=</span> /home/downloads 
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql大数据导入" tabindex="-1"><a class="header-anchor" href="#mysql大数据导入" aria-hidden="true">#</a> MySQL大数据导入</h2><p>执行命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Last login: Mon Dec  <span class="token number">4</span> <span class="token number">11</span>:00:35 on ttys001

➜  ~ mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>                   <span class="token comment"># 按下Enter回车键</span>
Enter password:                         <span class="token comment"># 输入root用户密码</span>
mysql<span class="token operator">&gt;</span> use db_name<span class="token punctuation">;</span>                     <span class="token comment"># 使用指定数据库</span>

mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> names utf8<span class="token punctuation">;</span>                  <span class="token comment"># 设置编码格式，防止乱码（可不执行）</span>
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> unique_checks <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>           <span class="token comment"># 关闭唯一性校验</span>
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> Autocommit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>              <span class="token comment"># 关闭事务提交模式</span>

mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> /home/downloads/xxxx.sql  <span class="token comment"># 导入大数据文件（文件路径为绝对路径），末尾没有分号</span>

mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> unique_checks <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>           <span class="token comment"># 开启唯一性校验</span>
mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> Autocommit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>              <span class="token comment"># 开启事务提交模式</span>

mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2><p>查找资料过程中，了解到 MySQL 支持多种导入方式，下面的它们的适用场景：</p><ul><li><p>mysqldump：导出的是SQL语句，而不是数据本身，所以导入时效率略低，但胜在整库，多个库，多个表一起导出，适合整库的转储。</p></li><li><p>select into outfile + load data：导出的是纯数据，导入时效率高，适合单个大表的转储。</p></li><li><p>mysql批处理 + load data：导出的是纯数据，而且使用SQL语句选择数据，灵活性高，导入效率也高。</p></li></ul>`,10);function c(r,m){return n(),a("div",null,[o,e(" more "),i])}const v=s(p,[["render",c],["__file","2 big data import.html.vue"]]);export{v as default};
