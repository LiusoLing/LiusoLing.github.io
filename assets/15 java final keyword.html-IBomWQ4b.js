import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as p,e as l,a,b as n,f as t}from"./app-5cCCUltF.js";const i={},c=a("p",null,[n("虽然继承使我们能够重用现有代码，但有时出于各种原因，"),a("strong",null,"我们确实需要设置可扩展性限制"),n("；"),a("code",null,"final"),n(" 关键字允许我们做到这一点。")],-1),o=a("p",null,"在本教程中，我们将看看最终关键字对类、方法和变量意味着什么。",-1),d=t(`<h2 id="_1-final类" tabindex="-1"><a class="header-anchor" href="#_1-final类" aria-hidden="true">#</a> 1.final类</h2><p>***标记为最终的class类无法扩展。**如果我们查看Java核心库的代码，我们会在那里找到许多最终类。一个例子是String类。</p><p>考虑一下，如果我们可以扩展String类，覆盖其任何方法，并用我们特定String子类的实例替换所有String实例。</p><p>然后，对字符串对象的操作结果将变得不可预测。鉴于String类到处都在使用，这是不可接受的。这就是为什么String类被标记为final。</p><p>任何从最终类继承的尝试都会导致编译器错误。为了证明这一点，让我们创建最终类Cat：</p><p><br><br><br><br><br><br></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> weight<span class="token punctuation">;</span>

    <span class="token comment">// standard getter and setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们试着扩展它：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlackCat</span> <span class="token keyword">extends</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将看到编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">The</span> type <span class="token class-name">BlackCat</span> cannot subclass the <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，<strong>类声明中的最终关键字并不意味着该类的对象是不可变的</strong>。我们可以自由地更改Cat对象的字段：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">setWeight</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> cat<span class="token punctuation">.</span><span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就是不能扩展它。</p><p>如果我们严格遵守良好设计的规则，出于安全原因，我们应该仔细创建和记录一个类，或宣布其最终。然而，在创建最终课程时，我们应该谨慎行事。</p><p>请注意，制作一个类最终意味着没有其他程序员可以改进它。想象一下，我们正在使用一个类，而没有它的源代码，而且一种方法存在问题。</p><p>如果该类是最终的，我们无法将其扩展到覆盖该方法并解决问题。换句话说，我们失去了可扩展性，这是面向对象编程的好处之一。</p><p><br><br><br><br><br><br></p><h2 id="_2-final方法" tabindex="-1"><a class="header-anchor" href="#_2-final方法" aria-hidden="true">#</a> 2.final方法</h2><p><strong>标记为final的方法不能被覆盖</strong>。当我们设计一个类并认为一个方法不应该被覆盖时，我们可以使这个方法是最终的。我们也可以在Java核心库中找到许多最终方法。</p><p>有时，我们不需要完全禁止类扩展，而只需要防止覆盖某些方法。一个很好的例子是Thread类。扩展它并从而创建自定义线程类是合法的。但它的isAlive()方法是最终的。</p><p>此方法检查线程是否活着。由于多种原因，不可能正确覆盖isAlive()方法。其中之一是这种方法是原生的。原生代码以另一种编程语言实现，通常特定于其运行的操作系统和硬件。</p><p>让我们创建一个Dog类，并使其sound()方法最终：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们扩展Dog类，并尝试覆盖其sound()方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlackDog</span> <span class="token keyword">extends</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将看到编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span> overrides
<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>baeldung<span class="token punctuation">.</span>finalkeyword<span class="token punctuation">.</span></span>Dog</span><span class="token punctuation">.</span>sound
<span class="token operator">-</span> <span class="token class-name">Cannot</span> override the <span class="token keyword">final</span> method from <span class="token class-name">Dog</span>
<span class="token function">sound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> method is <span class="token keyword">final</span> and can’t be overridden
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们类的某些方法被其他方法调用，我们应该考虑使被调用的方法成为最终方法。否则，覆盖它们可能会影响呼叫者的工作，并导致令人惊讶的结果。</p><p>如果我们的构造函数调用其他方法，出于上述原因，我们通常应该声明这些方法为最终。</p><p>使班级的所有方法成为最终方法和将班级本身标记为最终之间有什么区别？在第一种情况下，我们可以扩展类并向其添加新方法。</p><p>在第二种情况下，我们不能这样做。</p><h2 id="_3-final变量" tabindex="-1"><a class="header-anchor" href="#_3-final变量" aria-hidden="true">#</a> 3.final变量</h2><p><strong>标记为最终的变量无法重新分配</strong>。一旦最终变量被初始化，它就无法被更改。</p><h3 id="_3-1final原始变量" tabindex="-1"><a class="header-anchor" href="#_3-1final原始变量" aria-hidden="true">#</a> 3.1final原始变量</h3><p>让我们声明一个原始的最终变量i，然后为它分配1。</p><p>让我们试着给它分配一个2的值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenFinalVariableAssign_thenOnlyOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">//...</span>
    i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将看到编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">The</span> <span class="token keyword">final</span> local variable i may already have been assigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2final参考变量" tabindex="-1"><a class="header-anchor" href="#_3-2final参考变量" aria-hidden="true">#</a> 3.2final参考变量</h3><p>如果我们有一个最终的参考变量，我们也不能重新分配它。**但这并不意味着它所指的对象是不可变的。**我们可以自由地更改这个对象的属性。</p><p>为了证明这一点，让我们声明最终的引用变量cat并初始化它：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Cat</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们尝试重新分配它，我们会看到一个编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">The</span> <span class="token keyword">final</span> local variable cat cannot be <span class="token class-name"><span class="token namespace">assigned<span class="token punctuation">.</span></span> It</span> must be blank and not using a compound assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但我们可以更改Cat实例的属性：</p><p><br><br><br><br><br><br></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cat<span class="token punctuation">.</span><span class="token function">setWeight</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> cat<span class="token punctuation">.</span><span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3final领域" tabindex="-1"><a class="header-anchor" href="#_3-3final领域" aria-hidden="true">#</a> 3.3final领域</h3><p>**<code>final</code> 字段可以是常量或写一次字段。**为了区分它们，我们应该问一个问题——如果我们要序列化对象，我们会包括这个字段吗？如果不是，那么它不是对象的一部分，而是一个常数。</p><p>请注意，根据命名惯例，类常量应大写，组件由下划线（“_”）字符分隔：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MAX_WIDTH</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，<strong>在构造函数完成之前，必须初始化final字段。</strong></p><p>对于静态final字段，这意味着我们可以初始化它们：</p><ul><li><p>如上例所示，在声明后</p></li><li><p>在静态初始化器块中</p></li></ul><p>例如，final字段，这意味着我们可以初始化它们：</p><ul><li><p>声明后</p></li><li><p>在实例初始化器块中</p></li><li><p>在构造函数中</p></li></ul><p>否则，编译器会给我们一个错误。</p><h3 id="_3-4final参数" tabindex="-1"><a class="header-anchor" href="#_3-4final参数" aria-hidden="true">#</a> 3.4final参数</h3><p>final 关键字也是合法的，可以放在方法参数之前。<strong>final参数无法在方法内更改：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodWithFinalArguments</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述分配导致编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">The</span> <span class="token keyword">final</span> local variable x cannot be <span class="token class-name"><span class="token namespace">assigned<span class="token punctuation">.</span></span> It</span> must be blank and not using a compound assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,64);function u(r,v){return e(),p("div",null,[c,o,l(" more "),d])}const b=s(i,[["render",u],["__file","15 java final keyword.html.vue"]]);export{b as default};