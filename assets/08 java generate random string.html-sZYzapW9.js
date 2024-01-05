import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t,a as p,f as e}from"./app-c0qboIoH.js";const o={},c=p("p",null,"在本文章中，学习如何在Java中生成随机字符串，首先使用标准Java库，然后使用Java 8变体，最后使用Apache Commons Lang库。",-1),i=e(`<h2 id="java标准库生成随机字符串" tabindex="-1"><a class="header-anchor" href="#java标准库生成随机字符串" aria-hidden="true">#</a> Java标准库生成随机字符串</h2><p>使用简单方法，生成一个以7个字符为界的随机字符串</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingPlainJava_whenGeneratingRandomStringUnbounded_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// length is bounded by 7</span>
    <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextBytes</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用小写字母和设置长度生成一个随机字符：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingPlainJava_whenGeneratingRandomStringBounded_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">int</span> leftLimit <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span> <span class="token comment">// letter &#39;a&#39;</span>
    <span class="token keyword">int</span> rightLimit <span class="token operator">=</span> <span class="token number">122</span><span class="token punctuation">;</span> <span class="token comment">// letter &#39;z&#39;</span>
    <span class="token keyword">int</span> targetStringLength <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">StringBuilder</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>targetStringLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> targetStringLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> randomLimitedInt <span class="token operator">=</span> leftLimit <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> 
          <span class="token punctuation">(</span>random<span class="token punctuation">.</span><span class="token function">nextFloat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>rightLimit <span class="token operator">-</span> leftLimit <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        buffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> randomLimitedInt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-8生成随机字符串" tabindex="-1"><a class="header-anchor" href="#java-8生成随机字符串" aria-hidden="true">#</a> Java 8生成随机字符串</h2><p>使用 <code>JDK 8</code> 中添加的 <code>Random.ints</code> 来生成<mark>字母字符串</mark>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingJava8_whenGeneratingRandomAlphabeticString_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> leftLimit <span class="token operator">=</span> <span class="token number">97</span><span class="token punctuation">;</span> <span class="token comment">// letter &#39;a&#39;</span>
    <span class="token keyword">int</span> rightLimit <span class="token operator">=</span> <span class="token number">122</span><span class="token punctuation">;</span> <span class="token comment">// letter &#39;z&#39;</span>
    <span class="token keyword">int</span> targetStringLength <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">ints</span><span class="token punctuation">(</span>leftLimit<span class="token punctuation">,</span> rightLimit <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>targetStringLength<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token function">appendCodePoint</span><span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token function">append</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>JDK 8</code> 中添加的 <code>Random.ints</code> 来生成<mark>字母数字字符串</mark>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingJava8_whenGeneratingRandomAlphanumericString_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> leftLimit <span class="token operator">=</span> <span class="token number">48</span><span class="token punctuation">;</span> <span class="token comment">// numeral &#39;0&#39;</span>
    <span class="token keyword">int</span> rightLimit <span class="token operator">=</span> <span class="token number">122</span><span class="token punctuation">;</span> <span class="token comment">// letter &#39;z&#39;</span>
    <span class="token keyword">int</span> targetStringLength <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">ints</span><span class="token punctuation">(</span>leftLimit<span class="token punctuation">,</span> rightLimit <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">57</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">90</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> <span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>targetStringLength<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token function">appendCodePoint</span><span class="token punctuation">,</span> <span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token function">append</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用上面的过滤器方法省略了65到90之间的Unicode字符，以避免超出范围的字符。</p><h2 id="apache-commons-lang生成随机字符串" tabindex="-1"><a class="header-anchor" href="#apache-commons-lang生成随机字符串" aria-hidden="true">#</a> Apache Commons Lang生成随机字符串</h2><p>使用Apache的Commons Lang库生成<mark>字母字符串</mark>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingApache_whenGeneratingRandomStringBounded_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> useLetters <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> useNumbers <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> <span class="token class-name">RandomStringUtils</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span>length<span class="token punctuation">,</span> useLetters<span class="token punctuation">,</span> useNumbers<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简化版：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingApache_whenGeneratingRandomAlphabeticString_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> <span class="token class-name">RandomStringUtils</span><span class="token punctuation">.</span><span class="token function">randomAlphabetic</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Apache的Commons Lang库生成<mark>字母数字字符串</mark>:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenUsingApache_whenGeneratingRandomAlphanumericString_thenCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> generatedString <span class="token operator">=</span> <span class="token class-name">RandomStringUtils</span><span class="token punctuation">.</span><span class="token function">randomAlphanumeric</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>generatedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题外话" tabindex="-1"><a class="header-anchor" href="#题外话" aria-hidden="true">#</a> 题外话</h2><p>上述程序示例中，<code>java.util.Random</code>，在加密上不安全。推荐使用 <code>java.security.SecureRandom</code> 用于安全敏感的应用程序。</p>`,20);function l(u,r){return s(),a("div",null,[c,t(" more "),i])}const m=n(o,[["render",l],["__file","08 java generate random string.html.vue"]]);export{m as default};