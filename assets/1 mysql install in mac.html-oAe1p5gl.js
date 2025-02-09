import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e,a as l,f as i}from"./app-LeoV-3ht.js";const r={},c=l("p",null,"由于个人使用Mac电脑，这里记录下在 MacOS 下的 MySQL 的安装和卸载教程。",-1),t=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>安装 MySQL 前，如果电脑已经正确装有 MySQL，那么这篇文章可以略过不看。</p><p>当我想在控制台用 MySQL 命令进行数据导入时，发现提示我 MySQL 命令不存在：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Last login: Mon Dec  <span class="token number">4</span> <span class="token number">11</span>:00:35 on ttys001
➜  ~ mysql <span class="token parameter variable">--version</span>

<span class="token builtin class-name">command</span> not found: mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出现该提示的原因有如下几种情况：</p><ol><li><p>MySQL安装位置未包含在系统路径中：当你在控制台执行命令时，系统会搜索路径中的可执行文件。如果MySQL的安装路径不在系统路径中，系统将无法找到mysql命令。你可以尝试手动指定MySQL的安装路径来执行命令。</p></li><li><p>未正确安装MySQL：如果MySQL未正确安装，可执行文件可能未正确配置或丢失。</p></li><li><p>环境变量不正确配置：可能是因为环境变量$PATH没有正确包含MySQL可执行文件的路径。</p></li></ol><p>这些情况我不想去一一排查修复，干脆彻底卸载重装。</p><h2 id="mysql完全卸载" tabindex="-1"><a class="header-anchor" href="#mysql完全卸载" aria-hidden="true">#</a> MySQL完全卸载</h2><ol><li>停止MySQL服务：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mysql 5 卸载</span>
<span class="token function">sudo</span> launchctl unload <span class="token parameter variable">-F</span> /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist 

<span class="token comment"># mysql 8 卸载</span>
<span class="token function">sudo</span> launchctl unload <span class="token parameter variable">-F</span> /Library/LaunchDaemons/com.mysql.mysql.plist

<span class="token comment"># 删除启动项</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Library/LaunchDaemons/com.mysql.mysql.plist

<span class="token comment"># 清除已安装的 MySQL 候选项</span>
<span class="token function">sudo</span> pkgutil <span class="token parameter variable">--forget</span> com.mysql.mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>卸载MySQL软件包：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/mysql
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/mysql-*
<span class="token function">sudo</span> <span class="token function">rm</span> /etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>删除配置文件和日志文件：MySQL的配置文件和日志文件通常位于/etc和/var/log目录中</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/my.cnf
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/mysql
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Library/StartupItems/MySQLCOM
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Library/PreferencePanes/My*
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Library/Receipts/mysql*
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Library/Receipts/MySQL*
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/db/receipts/com.mysql.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>删除用户数据文件：MySQL的数据文件通常位于/usr/local/mysql/data目录中</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/mysql*
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/var/mysql*
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/db/mysql*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>删除用户账户和组：MySQL安装通常会创建一个名为_mysql的用户和组</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dscl <span class="token builtin class-name">.</span> <span class="token parameter variable">-delete</span> /Users/_mysql
<span class="token function">sudo</span> dscl <span class="token builtin class-name">.</span> <span class="token parameter variable">-delete</span> /Groups/_mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>清除系统路径和环境变量中的MySQL配置：如果你曾手动修改过系统路径和环境变量以包含MySQL相关内容，应该将这些修改也一并撤销。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找其他残留MySQL文件</span>
<span class="token function">sudo</span> <span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;mysql&quot;</span> <span class="token parameter variable">-print</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql命令安装" tabindex="-1"><a class="header-anchor" href="#mysql命令安装" aria-hidden="true">#</a> MySQL命令安装</h2><p>Mac 使用 HomeBrew 作为包管理器工具，这里使用 brew 命令安装 MySQL，以下是安装步骤：</p><ol><li>brew 命令安装 MySQL</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>设置 root 密码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 MySQL 服务</span>
brew services start mysql

<span class="token comment"># MySQL root 用户无密码登录</span>
mysql <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>设置低强度密码策略（可跳过）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SET GLOBAL validate_password.policy <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
SET GLOBAL validate_password.policy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>设置 root 用户新密码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只有本地能使用root账号</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;your_new_password&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 任何主机上都能使用root账号</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;your_new_password&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 刷新权限以使新密码生效</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>mysql_secure_installation也能设置root密码（不推荐）：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mysql_secure_installation 选择了错误的密码强度策略将无法返回修改，</span>
<span class="token comment"># 所以不推荐此种方式设置root用户密码</span>
mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，MySQL 安装完毕。</p>`,33);function o(d,p){return a(),n("div",null,[c,e(" more "),t])}const v=s(r,[["render",o],["__file","1 mysql install in mac.html.vue"]]);export{v as default};
