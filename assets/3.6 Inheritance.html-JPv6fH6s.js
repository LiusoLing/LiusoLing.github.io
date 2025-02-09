import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-LeoV-3ht.js";const p={},t=e(`<p>继承是来自面向对象的数据库的一个概念。</p><p>现在有两个表：一个表 cities 和一个表 capitals。</p><p>当然，首都也是城市，因此在列出所有城市时，您需要某种方式来隐式显示首都。</p><p>聪明如你可能会想到：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> capitals <span class="token punctuation">(</span>
  name       <span class="token keyword">text</span><span class="token punctuation">,</span>
  population <span class="token keyword">real</span><span class="token punctuation">,</span>
  elevation  <span class="token keyword">int</span><span class="token punctuation">,</span>    <span class="token comment">-- (in ft)</span>
  state      <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> non_capitals <span class="token punctuation">(</span>
  name       <span class="token keyword">text</span><span class="token punctuation">,</span>
  population <span class="token keyword">real</span><span class="token punctuation">,</span>
  elevation  <span class="token keyword">int</span>     <span class="token comment">-- (in ft)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> cities <span class="token keyword">AS</span>
  <span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> population<span class="token punctuation">,</span> elevation <span class="token keyword">FROM</span> capitals
    <span class="token keyword">UNION</span>
  <span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> population<span class="token punctuation">,</span> elevation <span class="token keyword">FROM</span> non_capitals<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在查询中它运行得当，但是更新时，你会发现它会变得很丑陋。</p><p>PostgreSQL 有更好的解决办法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> cities <span class="token punctuation">(</span>
  name       <span class="token keyword">text</span><span class="token punctuation">,</span>
  population <span class="token keyword">real</span><span class="token punctuation">,</span>
  elevation  <span class="token keyword">int</span>     <span class="token comment">-- (in ft)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> capitals <span class="token punctuation">(</span>
  state      <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> INHERITS <span class="token punctuation">(</span>cities<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，一行 capitals 从其父级 cities 继承所有列（name、population 和 elevation）。</p><p>列名的类型是 text，这是用于可变长度字符串的原生 PostgreSQL 类型。capitals 表还有一个附加列 state，它显示其 state 缩写。在 PostgreSQL 中，一个表可以从零个或多个其他表继承。</p><p>例如，以下查询查找位于海拔超过 500 英尺的所有城市（包括州首府）的名称：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> elevation
  <span class="token keyword">FROM</span> cities
  <span class="token keyword">WHERE</span> elevation <span class="token operator">&gt;</span> <span class="token number">500</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下查询查找所有不是州首府且海拔超过 500 英尺的城市：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> elevation
    <span class="token keyword">FROM</span> ONLY cities
    <span class="token keyword">WHERE</span> elevation <span class="token operator">&gt;</span> <span class="token number">500</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处的 ONLY cities 表示查询应仅对 cities 表运行，而不是对继承层次结构中 cities 下面的表运行。</p><p><strong>SELECT、UPDATE 和 DELETE — 都支持这种 ONLY 语法。</strong></p>`,16),i=[t];function l(o,c){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","3.6 Inheritance.html.vue"]]);export{r as default};
