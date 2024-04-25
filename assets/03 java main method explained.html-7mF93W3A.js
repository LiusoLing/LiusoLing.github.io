import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e,a as p,f as t}from"./app-5cCCUltF.js";const c={},o=p("p",null,"每个程序都需要一个入口来执行。在Java中，main方法就是这个入口。",-1),i=t(`<h2 id="_1-通用签名" tabindex="-1"><a class="header-anchor" href="#_1-通用签名" aria-hidden="true">#</a> 1.通用签名</h2><p><code>main</code> 方法模板示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IDE 为我们自动生成了模板代码，这使得我们忽略了其他的一些变种。</p><p>让我们了解通用签名的每个关键字的含义：</p><ul><li><code>public</code>：访问修饰符，意味着全局可见性</li><li><code>static</code>：该方法可以直接从类访问，我们不必实例化对象即可具有引用并使用它</li><li><code>void</code> ：表示此方法不返回值</li><li><code>main</code> ：方法的名称，这是JVM在执行Java程序时查找的标识符</li><li><code>args</code> ：方法收到的值，第一次启动程序时将参数传递给程序的方式</li></ul><p>例如，示例中，我们正在检查args，以决定是加载测试参数还是生产参数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// load test parameters</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// load production parameters</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-main方法变种" tabindex="-1"><a class="header-anchor" href="#_2-main方法变种" aria-hidden="true">#</a> 2.main方法变种</h2><p>让我们学习编写 <code>main</code> 方法的一些不同方式。虽然它们不是很常见，但它们是有效的。</p><p>请注意，这些都不是特定于 <code>main方法</code> 的，它们可以与 <code>任何Java方法</code> 一起使用，但它们也是主方法的有效部分。</p><p>方括号可以放在String附近，就像在普通模板中一样，也可以放在两边的args附近：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数可以表示为varargs：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们甚至可以为main()方法添加strictfp，该方法用于处理浮点值时处理器之间的兼容性：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">strictfp</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>final可以应用于args，以防止数组被修改：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><br><br><br><br><br><br></p><p>所有上述的关键字也可以组合成下方示例，它也是有效的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">strictfp</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-多个main方法" tabindex="-1"><a class="header-anchor" href="#_3-多个main方法" aria-hidden="true">#</a> 3.多个main方法</h2><p>我们也可以在应用程序中<strong>定义多个main方法</strong>。</p><p>事实上，有些人把它作为一种原始测试技术来验证单个类（尽管像JUnit这样的测试框架更适用于此活动）。</p><p>为了指定JVM应该执行哪个 <code>main方法</code>作为 我们应用程序的入口点，我们使用 <code>MANIFEST.MF</code> 文件。</p><p>在 <code>MANIFEST.MF</code> 文件中，我们可以指示主类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Main</span><span class="token operator">-</span><span class="token class-name">Class</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">mypackage<span class="token punctuation">.</span></span>ClassWithMainMethod</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这主要在创建的 <code>可执行的.jar文件</code> 中使用。</p><p>我们通过位于 <code>META-INF/MANIFEST.MF</code>（在UTF-8中编码）的清单文件来指示哪个类开始执行main方法。</p>`,31);function l(u,d){return n(),s("div",null,[o,e(" more "),i])}const v=a(c,[["render",l],["__file","03 java main method explained.html.vue"]]);export{v as default};
