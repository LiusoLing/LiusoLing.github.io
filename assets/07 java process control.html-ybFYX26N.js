import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as p,a as n,f as t}from"./app-c0qboIoH.js";const o={},i=n("p",null,"在Java编程中，流程控制通过条件语句来执行，条件语句是根据条件来执行特定分支的代码。",-1),c=n("p",null,"在Java语言中有两种条件语句，if语句和switch语句。",-1),l=t(`<h2 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h2><h3 id="_1-if格式" tabindex="-1"><a class="header-anchor" href="#_1-if格式" aria-hidden="true">#</a> 1.if格式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>布尔表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 如果布尔表达式的结果为 true，则执行这块代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年轻人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>年轻人
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>if 可以嵌套使用，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>外侧条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
     <span class="token comment">// 外侧条件为 true 时执行的代码 </span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>内侧条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">// 内侧条件为 true 时执行的代码</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_2-if-else格式" tabindex="-1"><a class="header-anchor" href="#_2-if-else格式" aria-hidden="true">#</a> 2.if-else格式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>布尔表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 如果布尔表达式的结果为 true 时执行的代码块</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 如果布尔表达式的结果为 false  时执行的代码块</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年轻人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中年人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>中年人
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果执行语句比较简单的话，可以使用三元运算符来代替 if-else 语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result <span class="token operator">=</span> age <span class="token operator">&lt;</span> <span class="token number">30</span> <span class="token operator">?</span> <span class="token string">&quot;年轻人&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;中年人&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_3-if-else-if格式" tabindex="-1"><a class="header-anchor" href="#_3-if-else-if格式" aria-hidden="true">#</a> 3.if-else-if格式</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 条件1 为 true 时执行的代码</span>
<span class="token punctuation">}</span>  <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 条件2 为 true 时执行的代码</span>
<span class="token punctuation">}</span>  <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 条件3 为 true 时执行的代码</span>
<span class="token punctuation">}</span>  
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  
<span class="token keyword">else</span><span class="token punctuation">{</span>  
    <span class="token comment">// 以上条件全为 false 时执行的代码</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">41</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年轻人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">30</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;</span> <span class="token number">40</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中年人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">40</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;</span> <span class="token number">50</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;退休的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;老年人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>退休的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句" aria-hidden="true">#</a> switch语句</h2><p>switch 语句用来判断变量与多个值之间的相等性。</p><p>变量的类型可以是 byte、short、int 或者 char，或者对应的包装器类型 Byte、Short、Integer、Character，外加 String 、Enum类型。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>变量<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token keyword">case</span> 可选值<span class="token number">1</span><span class="token operator">:</span>    
        xxx <span class="token comment">// 可选值1匹配后执行的代码;    </span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>  <span class="token comment">// 该关键字是可选项，用于中断执行</span>
    <span class="token keyword">case</span> 可选值<span class="token number">2</span><span class="token operator">:</span>    
        yyy <span class="token comment">// 可选值2匹配后执行的代码;    </span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>  <span class="token comment">// 该关键字是可选项</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token comment">// 该关键字是可选项     </span>
    <span class="token comment">// 所有可选值都不匹配后执行的代码 </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">18</span> <span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年轻人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">24</span> <span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成年人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">30</span> <span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中年人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不知道什么人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 可省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>成年人
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>break 是可选的，如果case 没有 break，它将往下一直执行下一个case，直到有break，然后跳出。</p><p>case 的判断值必须唯一。</p><p>用于判断的变量值 和 case 后的常量值 类型必须保持一致。</p></div><h2 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h2><h3 id="_1-普通for循环" tabindex="-1"><a class="header-anchor" href="#_1-普通for循环" aria-hidden="true">#</a> 1.普通for循环</h3><p>看下代码格式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>初始变量<span class="token punctuation">;</span> 条件<span class="token punctuation">;</span> 自增<span class="token operator">/</span>自减<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 循环体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个部分解释如下：</p><ul><li><strong>初始变量：</strong> 循环开始执行时的初始条件；</li><li><strong>条件：</strong> 循环每次执行时要判断的条件，为 true 执行循环体，为 false，就跳出循环。条件可选，当没有条件时，则会一直循环；</li><li><strong>自增/自减：</strong> 初始变量变化的方式；</li><li><strong>循环体：</strong> 循环每次要执行的代码块，直到条件变为 false。</li></ul><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;循环第&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>循环第<span class="token number">1</span>次
循环第<span class="token number">2</span>次
循环第<span class="token number">3</span>次
循环第<span class="token number">4</span>次
循环第<span class="token number">5</span>次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>for循环可嵌套，有一些约定俗成的规范需要遵循：</p><ol><li>命名： 使用有意义的变量名，尽量避免使用单个字母作为计数器，使用描述性的变量名可以提高代码的可读性。</li><li>避免过深嵌套： 避免过度嵌套，通常超过三层的嵌套可能会使代码难以理解。如果嵌套太深，考虑将内部循环的逻辑提取为一个独立的方法。</li><li>注释： 对于复杂的嵌套结构，添加适当的注释可以帮助理解代码的逻辑。</li><li>使用一次循环： 如果可能，尝试将多个嵌套的循环合并为一个循环，这样可以减少循环次数。</li><li>避免不必要的循环： 仔细检查循环的终止条件，确保不会执行不必要的循环。有时候可以通过更精确的条件来避免不必要的循环。</li><li>使用并行处理： 在一些情况下，可以考虑使用并行处理来加速循环。例如Java 8引入的Stream API和并行流。</li><li>注意循环顺序： 注意内外循环的顺序，一般将循环次数少的放外层。</li></ol></div><h3 id="_2-for-each循环" tabindex="-1"><a class="header-anchor" href="#_2-for-each循环" aria-hidden="true">#</a> 2.for-each循环</h3><p>for-each循环是语法糖，一般用于遍历数组和集合，代码格式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>元素类型 元素 <span class="token operator">:</span> 数组或集合<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 要执行的代码</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;法外狂徒&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> str <span class="token operator">:</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>法外狂徒
张三
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-无限for循环" tabindex="-1"><a class="header-anchor" href="#_3-无限for循环" aria-hidden="true">#</a> 3.无限for循环</h3><p>无限for循环也称死循环，如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;根本停不下来。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除非强制停止，一旦运行，停不下来。</p><h3 id="_4-continue跳过for循环" tabindex="-1"><a class="header-anchor" href="#_4-continue跳过for循环" aria-hidden="true">#</a> 4.continue跳过for循环</h3><p>当需要在 for 循环、while 循环或者 do-while 循环中，立即跳转到下一个循环时，可以使用 continue 关键字。</p><p>该关键字通常用于跳过指定条件下的循环体，如果循环是嵌套的，仅跳过当前层的循环。</p><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>   <span class="token comment">// 使用 continue 关键字，2 将会被跳过</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>while 和 do-while 循环不再举例，使用方法和 上面的例子一致。</p><h3 id="_5-break中断for循环" tabindex="-1"><a class="header-anchor" href="#_5-break中断for循环" aria-hidden="true">#</a> 5.break中断for循环</h3><p>break 关键字通常用于中断循环或 switch 语句，它可用于所有类型循环语句，如for、while、do-while、switch等。</p><p>如果是多层循环，则仅中断当前层循环。</p><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h2><h3 id="_1-普通while循环" tabindex="-1"><a class="header-anchor" href="#_1-普通while循环" aria-hidden="true">#</a> 1.普通while循环</h3><p>while循环的代码格式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">//循环体  </span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;while循环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span>循环
<span class="token keyword">while</span>循环
<span class="token keyword">while</span>循环
<span class="token keyword">while</span>循环
<span class="token keyword">while</span>循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>while 中的条件为true，且循环体中没有 break时，将导致死循环，程序一旦运行，就停不下来。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;根本停不下来。。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_2-do-while循环" tabindex="-1"><a class="header-anchor" href="#_2-do-while循环" aria-hidden="true">#</a> 2.do-while循环</h3><p>do-while的代码格式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 循环体</span>

<span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;do-while循环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">do</span><span class="token operator">-</span><span class="token keyword">while</span>循环
<span class="token keyword">do</span><span class="token operator">-</span><span class="token keyword">while</span>循环
<span class="token keyword">do</span><span class="token operator">-</span><span class="token keyword">while</span>循环
<span class="token keyword">do</span><span class="token operator">-</span><span class="token keyword">while</span>循环
<span class="token keyword">do</span><span class="token operator">-</span><span class="token keyword">while</span>循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>do-while 循环，由于将循环体放在判断条件前面，所以无论 while 中的判断条件 是 true 还是 false，都<mark>至少会执行一次循环体</mark>。</p><p>和普通的 while 循环一样，当 do-while 循环体中 没有 break，且 判断条件为 true 时，将导致死循环。</p>`,85);function u(d,r){return a(),e("div",null,[i,c,p(" more "),l])}const m=s(o,[["render",u],["__file","07 java process control.html.vue"]]);export{m as default};