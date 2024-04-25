import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,e as p,a as n,b as s,f as c}from"./app-5cCCUltF.js";const o={},l=n("p",null,[s("在本教程中，我们将看看 "),n("code",null,"this"),s(" Java关键字。")],-1),i=n("p",null,[s("在Java中，this关键字是"),n("strong",null,"对正在调用其方法的当前对象的引用。")],-1),u=n("p",null,"让我们探索如何以及何时使用该关键字。",-1),d=c(`<h2 id="_1-消除歧义" tabindex="-1"><a class="header-anchor" href="#_1-消除歧义" aria-hidden="true">#</a> 1.消除歧义</h2><p><strong>该关键字对于消除本地参数的实例变量的歧义非常有用。</strong> 最常见的原因是，当我们有与实例字段同名的构造函数参数时：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KeywordTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">KeywordTest</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br><br><br><br><br></p><p>正如我们在这里看到的，我们正在将其与名称和年龄实例字段一起使用——以将它们与参数区分开来。</p><p>另一种用法是将其与本地范围内的参数隐藏一起使用。</p><h2 id="_2-引用同一类的构造函数" tabindex="-1"><a class="header-anchor" href="#_2-引用同一类的构造函数" aria-hidden="true">#</a> 2.引用同一类的构造函数</h2><p><strong>从构造函数中，我们可以使用this()调用同一类的不同构造函数。</strong></p><p>在这里，我们使用this()进行构造函数链，以减少代码使用。</p><p>最常见的用例是从参数化构造函数调用默认构造函数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">KeywordTest</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// the rest of the code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，我们可以从无参数构造函数调用参数化构造函数，并传递一些参数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">KeywordTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，this()应该是构造函数中的第一个语句，否则将发生编译错误。</p><h2 id="_3-作为参数传递" tabindex="-1"><a class="header-anchor" href="#_3-作为参数传递" aria-hidden="true">#</a> 3.作为参数传递</h2><p>在这里，我们有printInstance()方法，其中定义了此关键字参数：</p><p><br><br><br><br><br><br></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">KeywordTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printInstance</span><span class="token punctuation">(</span><span class="token class-name">KeywordTest</span> thisKeyword<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>thisKeyword<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在构造函数中，我们调用printInstance()方法。有了这一点，我们传递了对当前实例的引用。</p><h2 id="_4-作为返回值" tabindex="-1"><a class="header-anchor" href="#_4-作为返回值" aria-hidden="true">#</a> 4.作为返回值</h2><p><strong>我们还可以使用此关键字从方法返回当前类实例。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankAccount</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> accountNumber<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> newsletter<span class="token punctuation">;</span>

    <span class="token comment">// constructors/getters</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">BankAccountBuilder</span> <span class="token punctuation">{</span>
    
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> accountNumber<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">boolean</span> newsletter<span class="token punctuation">;</span>
        
        <span class="token keyword">public</span> <span class="token class-name">BankAccountBuilder</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> accountNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>accountNumber <span class="token operator">=</span> accountNumber<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">BankAccountBuilder</span> <span class="token function">withEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">BankAccountBuilder</span> <span class="token function">wantNewsletter</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> newsletter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>newsletter <span class="token operator">=</span> newsletter<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">public</span> <span class="token class-name">BankAccount</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BankAccount</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造器模式可以如下使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BankAccount</span> newAccount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BankAccount
  <span class="token punctuation">.</span>BankAccountBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;Jon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;22738022275&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">withEmail</span><span class="token punctuation">(</span><span class="token string">&quot;jon@example.com&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">wantNewsletter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-内部类使用" tabindex="-1"><a class="header-anchor" href="#_5-内部类使用" aria-hidden="true">#</a> 5.内部类使用</h2><p>我们还用它来从内部类中访问外部类实例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KeywordTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">ThisInnerClass</span> <span class="token punctuation">{</span>

        <span class="token keyword">boolean</span> isInnerClass <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">ThisInnerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">KeywordTest</span> thisKeyword <span class="token operator">=</span> <span class="token class-name">KeywordTest</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> outerString <span class="token operator">=</span> <span class="token class-name">KeywordTest</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，在构造函数中，我们可以使用KeywordTest.this调用获取对KeywordTest实例的引用。我们可以更深入地访问实例变量，如KeywordTest.this.name字段。</p>`,28);function r(k,v){return e(),t("div",null,[l,i,u,p(" more "),d])}const w=a(o,[["render",r],["__file","12 java this keyword.html.vue"]]);export{w as default};
