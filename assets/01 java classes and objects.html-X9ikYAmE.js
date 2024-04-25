import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as p,f as n}from"./app-5cCCUltF.js";const t={},c=n("<p>了解Java编程语言的两个基本构建块—— <code>类</code> 和 <code>对象</code>。它们是 <code>面向对象编程（OOP）</code> 的基本概念，我们用它来模拟现实生活中的实体。</p><ul><li>在OOP中，<strong>类是对象的蓝图或模板。我们用它们来描述实体的类型。</strong></li><li>另一方面，<strong>物体是从类中创造的活体。它们在其领域中包含某些状态，并用其方法呈现某些行为。</strong></li></ul>",2),o=n(`<h2 id="_1-classes" tabindex="-1"><a class="header-anchor" href="#_1-classes" aria-hidden="true">#</a> 1.Classes</h2><p>一个类表示一个定义或对象的类型。</p><p>在Java中，<strong>类可以包含字段、构造函数和方法。</strong></p><p>这是一个代表汽车的简单Java类的示例：</p><p><br><br><br><br><br><br></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>

    <span class="token comment">// fields</span>
    <span class="token class-name">String</span> type<span class="token punctuation">;</span>
    <span class="token class-name">String</span> model<span class="token punctuation">;</span>
    <span class="token class-name">String</span> color<span class="token punctuation">;</span>
    <span class="token keyword">int</span> speed<span class="token punctuation">;</span>

    <span class="token comment">// constructor</span>
    <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> model<span class="token punctuation">,</span> <span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// methods</span>
    <span class="token keyword">int</span> <span class="token function">increaseSpeed</span><span class="token punctuation">(</span><span class="token keyword">int</span> increment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>speed <span class="token operator">+</span> increment<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>speed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个Java类代指汽车。我们可以从这个类创造出任何类型的汽车。我们使用字段来保存状态，并使用构造函数从这个类创建对象。</p><p>默认情况下，每个Java类都有一个空的构造函数。如果我们不像上面那样提供特定的构造函数实现，程序将使用默认的构造函数。</p><p>以下是默认构造函数如何查找我们的汽车类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>默认构造函数只需使用其默认值初始化对象的所有字段。字符串初始化为空，整数初始化为零。</strong></p><p>现在，我们的类有一个特定的构造函数，因为我们希望在创建对象时初始化它们的内部属性字段：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总而言之，我们写了一个定义汽车的类。其属性由包含类对象状态的字段描述，并使用方法描述其行为。</p><p><br><br><br><br><br><br></p><h2 id="_2-objects" tabindex="-1"><a class="header-anchor" href="#_2-objects" aria-hidden="true">#</a> 2.Objects</h2><p>类在编译期间被编译创建，<strong>对象是在运行时从类中创建的。</strong></p><p>类的对象称为实例，我们使用构造函数创建和初始化它们：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Car</span> byd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;比亚迪&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;秦 PLUS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Car</span> tsl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;特斯拉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Model S&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Car</span> bm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;宝马&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;华晨&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们创建了不同的汽车对象，都来自一个汽车类。</p><p><strong>这就是类的作用，在一个地方定义蓝图、模板，然后在许多地方多次重复使用它。</strong></p><p>现在，我们创建了三辆不同品牌的汽车实体，它们都停着，因为它们的速度为零。我们可以通过调用我们的increaseSpeed方法来改变这一点：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>byd<span class="token punctuation">.</span><span class="token function">increaseSpeed</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tsl<span class="token punctuation">.</span><span class="token function">increaseSpeed</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bm<span class="token punctuation">.</span><span class="token function">increaseSpeed</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>汽车的状态已经发生了改变---- 它们正在以不同的速度在行驶。</p><p><br><br><br><br><br><br></p><h2 id="_3-访问修饰符" tabindex="-1"><a class="header-anchor" href="#_3-访问修饰符" aria-hidden="true">#</a> 3.访问修饰符</h2><p>在前面的示例中，我们省略了访问修饰符来简化代码。其实实际上使用了默认的软件包私有修饰符。该修饰符允许从同一软件包中的任何其他类访问该类。</p><p>通常，我们会为构造函数使用公共修饰符来允许从所有其他对象访问：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> model<span class="token punctuation">,</span> <span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们类中的每个 <code>字段</code> 和 <code>方法</code> 也应该通过特定的修饰符定义访问控制。<strong>类通常有公共修饰符，字段通常用私有修饰符。</strong></p><p>字段保存我们对象的状态，因此我们希望控制对该状态的访问。我们可以将其中一些保密，另一些公开。</p><p>我们通过称为 <code>getters</code> 和 <code>setters</code> 的特定方法来实现这一点。</p><p>具有完全指定访问控制的类如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">public</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> model<span class="token punctuation">,</span> <span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSpeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> speed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Car类被标记为公共，这意味着我们可以在任何软件包中使用它。</strong> 此外，构造函数是公共的，这意味着我们可以在任何其他对象中从该类创建一个对象。</p><p>**Car类的字段被标记为私有，这意味着它们无法直接从我们的对象访问，**但我们通过getter和setter提供对它们的访问。</p><p><br><br><br><br><br><br></p><p>类型和模型字段没有getter和setter，因为它们保存的是汽车对象的内部数据。我们只能在初始化期间通过构造函数来定义它们。</p><p>此外，颜色可以访问和更改，而速度只能访问，但不能更改。我们通过专门的公共方法 increaseSpeed() 和 decreaseSpeed() 实施速度调整。</p><p>换句话说，<strong>我们使用访问控制来封装对象的状态。</strong></p>`,40);function l(i,u){return a(),e("div",null,[c,p(" more "),o])}const k=s(t,[["render",l],["__file","01 java classes and objects.html.vue"]]);export{k as default};