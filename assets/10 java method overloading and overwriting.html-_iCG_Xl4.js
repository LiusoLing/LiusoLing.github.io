import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as p,a as t,f as e}from"./app-5cCCUltF.js";const c={},o=t("p",null,"重写和重载是Java编程语言的关键概念。让我们一探究竟",-1),i=e(`<h2 id="_1-方法重载" tabindex="-1"><a class="header-anchor" href="#_1-方法重载" aria-hidden="true">#</a> 1.方法重载</h2><p><strong>方法重载是一种强大的机制，允许我们定义有凝聚力的类API。</strong></p><p>为了更好地理解为什么方法重载是一个如此有价值的功能，让我们看看一个简单的例子。</p><p>假设我们编写了一个天真的效用类，实现了两个数字、三个数字相乘的不同方法。</p><p>如果我们给方法提供了误导性或模棱两可的名称，如乘法2（），乘法3（），乘法4（），那么这将是一个设计糟糕的类API。这就是方法重载发挥作用的地方。</p><p><br><br><br><br><br><br></p><p><strong>简而言之，我们可以以两种不同的方式实现方法重载：</strong></p><ul><li><p>实现两个或多个具有相同名称但参数数量不同的方法</p></li><li><p>实现两个或多个具有相同名称但接受不同类型参数的方法</p></li></ul><h3 id="_1-1不同数量的重载" tabindex="-1"><a class="header-anchor" href="#_1-1不同数量的重载" aria-hidden="true">#</a> 1.1不同数量的重载</h3><p>简而言之，乘数类展示了如何通过简单地定义两个接受不同数量参数的实现来重载乘法（）方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Multiplier</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2不同类型的重载" tabindex="-1"><a class="header-anchor" href="#_1-2不同类型的重载" aria-hidden="true">#</a> 1.2不同类型的重载</h3><p>同样，我们可以通过让乘法（）接受不同类型的参数来重载乘法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Multiplier</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，用两种方法重载定义乘数类是合法的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Multiplier</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，值得注意的是，<strong>不可能有两个只在返回类型上不同的方法实现。</strong></p><p>为了了解原因-让我们考虑以下示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，<strong>代码根本无法编译，因为方法调用模棱两可</strong> ——编译器不知道要调用哪个实现的multi()。</p><h3 id="_1-3类型提升" tabindex="-1"><a class="header-anchor" href="#_1-3类型提升" aria-hidden="true">#</a> 1.3类型提升</h3><p>方法重载提供的一个整洁的功能是所谓的 <code>类型提升</code> ，又称 <code>拓宽原始转换</code>。</p><p>简单地说，当传递给重载方法的参数类型与特定方法实现之间不匹配时，一个给定类型被隐式提升为另一个类型。</p><p>为了更清楚地了解类型推广的工作原理，请考虑以下multiplet()方法的实现：</p><p><br><br><br><br><br><br></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">*</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，调用具有两个int参数的方法将导致第二个参数被提升到long，因为在这种情况下，没有具有两个int参数的方法的匹配实现。</p><p>让我们看看一个快速单元测试来演示类型推广：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledMultiplyAndNoMatching_thenTypePromotion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>multiplier<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相反，如果我们用匹配的实现调用该方法，则不会进行类型提升：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledMultiplyAndMatching_thenNoTypePromotion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>multiplier<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只能向上提升。</p><h3 id="_1-4静态绑定" tabindex="-1"><a class="header-anchor" href="#_1-4静态绑定" aria-hidden="true">#</a> 1.4静态绑定</h3><p>将特定方法调用与方法主体相关联的能力被称为绑定。</p><p>在方法重载的情况下，绑定在编译时静态执行，因此称为静态绑定。</p><p>编译器只需检查方法的签名，就可以在编译时有效地设置绑定。</p><h2 id="_2-方法重写" tabindex="-1"><a class="header-anchor" href="#_2-方法重写" aria-hidden="true">#</a> 2.方法重写</h2><p><strong>方法重写允许我们在子类中为基类中定义的方法提供细粒度的实现。</strong></p><p><br><br><br><br><br><br></p><p>虽然方法重写是一个强大的功能——考虑到这是使用继承的逻辑结果，这是OOP的最大支柱之一——但应在每个用例的基础上仔细分析何时何地使用它。</p><p>现在让我们看看如何通过创建简单的、基于继承的（“is-a”）关系来使用方法覆盖。</p><p>这是基类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token keyword">long</span> mph<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;The vehicle accelerates at : &quot;</span> <span class="token operator">+</span> mph <span class="token operator">+</span> <span class="token string">&quot; MPH.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;The vehicle has stopped.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;The vehicle is running.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有一个人为的子类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">extends</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token keyword">long</span> mph<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;The car accelerates at : &quot;</span> <span class="token operator">+</span> mph <span class="token operator">+</span> <span class="token string">&quot; MPH.&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的层次结构中，我们只是覆盖了accelerate()方法，以便为子类型Car提供更精细的实现。</p><p>在这里，很明显，<strong>如果应用程序使用Hicle类的实例，那么它也可以与Car的实例一起工作</strong>，因为加速（）方法的两个实现具有相同的签名和相同的返回类型。</p><p>让我们写几个单元测试来检查车辆和汽车类别：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledAccelerate_thenOneAssertion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;The vehicle accelerates at : 100 MPH.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledRun_thenOneAssertion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;The vehicle is running.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledStop_thenOneAssertion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;The vehicle has stopped.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledAccelerate_thenOneAssertion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;The car accelerates at : 80 MPH.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledRun_thenOneAssertion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;The vehicle is running.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledStop_thenOneAssertion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;The vehicle has stopped.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，让我们看看一些单元测试，这些测试显示了未被覆盖的run()和stop()方法如何为汽车和车辆返回等值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenVehicleCarInstances_whenCalledRun_thenEqual</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenVehicleCarInstances_whenCalledStop_thenEqual</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">assertThat</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我们的案例中，我们可以访问两个类的源代码，因此我们可以清楚地看到，在基本车辆实例上调用 accelerate()方法，并在汽车实例上调用 accelerate()，将为同一参数返回不同的值。</p><p><br><br><br><br><br><br></p><p>因此，以下测试表明，对于Car的实例，调用了重写方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCalledAccelerateWithSameArgument_thenNotEqual</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isNotEqualTo</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">accelerate</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1类型可替代性" tabindex="-1"><a class="header-anchor" href="#_2-1类型可替代性" aria-hidden="true">#</a> 2.1类型可替代性</h3><p>OOP的一个核心原则是类型可替代性，这与利斯科夫替代原则（LSP）密切相关。</p><p>简单地说，LSP指出，<strong>如果一个应用程序使用给定的基类型，那么它也应该使用其任何子类型</strong>。这样，类型可替代性就得到了妥善保留。</p><p><strong>方法重写的最大问题是，派生类中的一些特定方法实现可能不完全符合LSP，因此无法保留类型可替代性。</strong></p><p>当然，制作一个重写的方法来接受不同类型的参数并返回不同的类型是有效的，但要完全遵守这些规则：</p><ul><li><p>如果基类中的方法采用给定类型的参数，则重写方法应采用相同的类型或超类型（又称逆变量方法参数）</p></li><li><p>如果基类中的方法返回void，重写的方法应返回void</p></li><li><p>如果基类中的方法返回一个原语，则重写方法应返回相同的原语</p></li><li><p>如果基类中的方法返回特定类型，重写方法应返回相同的类型或子类型（又叫协变返回类型）</p></li><li><p>如果基类中的方法抛出异常，重写方法必须抛出相同的异常或基类异常的子类型</p></li></ul><h3 id="_2-2动态绑定" tabindex="-1"><a class="header-anchor" href="#_2-2动态绑定" aria-hidden="true">#</a> 2.2动态绑定</h3><p>考虑到方法重写只能通过继承来实现，其中存在基类型和子类型的层次结构，编译器无法在编译时确定要调用什么方法，因为基类和子类都定义了相同的方法。</p><p>因此，编译器需要检查对象的类型，以了解应该调用什么方法。</p><p>由于这种检查发生在运行时，方法重写是动态绑定的典型例子。</p>`,65);function l(u,k){return s(),a("div",null,[o,p(" more "),i])}const v=n(c,[["render",l],["__file","10 java method overloading and overwriting.html.vue"]]);export{v as default};
