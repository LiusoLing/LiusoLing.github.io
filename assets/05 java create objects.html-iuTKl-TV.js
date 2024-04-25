import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as p,a as n,f as t}from"./app-5cCCUltF.js";const c={},o=n("p",null,"简单地说，我们在使用JVM上的对象之前，必须先初始化它。",-1),i=n("p",null,"本节，我们研究初始化原始类型和对象的各种方法。",-1),l=t(`<h2 id="_1-声明和初始化" tabindex="-1"><a class="header-anchor" href="#_1-声明和初始化" aria-hidden="true">#</a> 1.声明和初始化</h2><p>首先</p><p><strong>声明</strong>：是定义变量及其类型和名称的过程。</p><p>看一个声明id变量的示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>初始化</strong>：就是要分配一个值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里声明一个稍微复杂的用户类，方便后续演示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    
    <span class="token comment">// standard constructor, getters, setters,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-原始类型和引用类型" tabindex="-1"><a class="header-anchor" href="#_2-原始类型和引用类型" aria-hidden="true">#</a> 2.原始类型和引用类型</h2><p>Java提供了两种类型的数据表示：原始类型和引用类型。在本节中，我们将讨论两者在初始化方面的差异。</p><p>Java有八种内置数据类型，称为Java原始类型；这种类型的变量直接保存其值。</p><p><br><br><br><br><br><br></p><p>引用类型保存对对象（类实例）的引用。<strong>与在分配变量的内存中保存其值的原始类型不同，引用不保存它们所引用的对象的值。</strong></p><p>相反，<strong>引用通过存储对象所在的内存地址来指向对象。</strong></p><p>请注意，Java不允许我们发现物理内存地址是什么。因此，我们只能使用引用来引用对象。</p><p>让我们看看一个从我们的用户类中声明和初始化引用类型的示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenIntializedWithNew_thenInstanceIsNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token function">assertThat</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如我们所看到的，可以使用关键字 <code>new</code> 将引用分配给新对象，该关键字负责创建新用户对象。</p><h2 id="_3-创建对象" tabindex="-1"><a class="header-anchor" href="#_3-创建对象" aria-hidden="true">#</a> 3.创建对象</h2><p>与原始类型不同，引用类型对象的创建更复杂一些。</p><p><code>new</code> 关键字负责通过构造函数为新对象分配内存。</p><p>构造函数通常用于初始化表示所创建对象主要属性的实例变量。</p><p>如果我们不明确提供构造函数，编译器将创建一个没有参数的默认构造函数，并且只是为对象分配内存。</p><p>一个类可以有许多构造函数，只要它们的参数列表不同（过载）。每个不调用同一类中另一个构造函数的构造函数都有对其父构造函数的调用，无论是显式编写的还是由编译器通过super()插入的。</p><p>让我们在用户类中添加一个构造函数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用我们的构造函数创建一个具有其属性初始值的用户对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><br><br><br><br><br><br></p><h2 id="_4-可变范围" tabindex="-1"><a class="header-anchor" href="#_4-可变范围" aria-hidden="true">#</a> 4.可变范围</h2><h3 id="_4-1实例和类变量" tabindex="-1"><a class="header-anchor" href="#_4-1实例和类变量" aria-hidden="true">#</a> 4.1实例和类变量</h3><p>实例和类变量不需要我们初始化它们。一旦我们声明这些变量，它们就会被赋予一个默认值：</p><p>现在，让我们尝试定义一些实例和类相关变量，并测试它们是否有默认值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenValuesAreNotInitialized_thenUserNameAndIdReturnDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token function">assertThat</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2局部变量" tabindex="-1"><a class="header-anchor" href="#_4-2局部变量" aria-hidden="true">#</a> 4.2局部变量</h3><p>局部变量在使用前必须初始化，因为它们没有默认值，编译器不会让我们使用未初始化的值。</p><p>例如，以下代码生成编译器错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-final关键字" tabindex="-1"><a class="header-anchor" href="#_5-final关键字" aria-hidden="true">#</a> 5.final关键字</h2><p><code>final</code> 关键字意味着该字段的值在初始化后无法再更改。通过这种方式，我们可以在Java中定义常量。</p><p><br><br><br><br><br><br></p><p>让我们在用户类中添加一个常量：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">YEAR</span> <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常量必须在声明时或在构造函数中初始化。</p><h2 id="_6-java中的初始化器" tabindex="-1"><a class="header-anchor" href="#_6-java中的初始化器" aria-hidden="true">#</a> 6.Java中的初始化器</h2><p>在Java中，<strong>初始化器是一个代码块，它没有关联的名称或数据类型</strong>，并被放置在任何方法、构造函数或其他代码块之外。</p><p>Java提供两种类型的初始化器，静态初始化器和实例初始化器。让我们看看如何使用它们中的每一个。</p><h3 id="_6-1实例初始化器" tabindex="-1"><a class="header-anchor" href="#_6-1实例初始化器" aria-hidden="true">#</a> 6.1实例初始化器</h3><p>我们可以使用这些来初始化实例变量。</p><p>为了演示，我们将使用用户类中的实例初始化器为用户ID提供一个值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">{</span>
    id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2静态初始化块" tabindex="-1"><a class="header-anchor" href="#_6-2静态初始化块" aria-hidden="true">#</a> 6.2静态初始化块</h3><p>静态初始化器或静态块是用于初始化静态字段的代码块。换句话说，这是一个标有 <code>static</code> 关键字静态的简单初始化器：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> forum<span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token punctuation">{</span>
    forum <span class="token operator">=</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-初始化顺序" tabindex="-1"><a class="header-anchor" href="#_7-初始化顺序" aria-hidden="true">#</a> 7.初始化顺序</h2><p>在编写初始化不同类型字段的代码时，我们必须注意初始化的顺序。</p><p>在Java中，初始化语句的顺序如下：</p><p><br><br><br><br></p><ul><li><p>静态变量和静态初始化器按顺序排列</p></li><li><p>实例变量和实例初始化器按顺序排列</p></li><li><p>构造器</p></li></ul><h2 id="_8-对象声明周期" tabindex="-1"><a class="header-anchor" href="#_8-对象声明周期" aria-hidden="true">#</a> 8.对象声明周期</h2><p>现在我们已经学会了如何声明和初始化对象，让我们来了解当对象不使用时会发生什么。</p><p>与其他我们必须担心对象销毁的语言不同，Java通过其垃圾收集器处理过时的对象。</p><p><strong>Java中的所有对象都存储在我们程序的堆内存中</strong>。事实上，该堆代表分配给我们的Java应用程序的大量未使用的内存池。</p><p>另一方面，<strong>垃圾收集器是一个Java程序</strong>，通过删除无法再访问的对象来<strong>管理自动内存</strong>。</p><p>要使Java对象变得无法到达，它必须遇到以下情况之一：</p><ul><li><p>该对象不再有任何指向它的引用。</p></li><li><p>所有指向对象的引用都超出范围。</p></li></ul><p>总之，对象首先从类中创建，通常使用关键字new。然后，该物体过着它的生活，并为我们提供了访问其方法和领域的机会。</p><p>最后，当不再需要它时，垃圾收集器会销毁它。</p><h2 id="_9-创建对象的其他方法" tabindex="-1"><a class="header-anchor" href="#_9-创建对象的其他方法" aria-hidden="true">#</a> 9.创建对象的其他方法</h2><p>在本节中，我们将<strong>简要了解创建对象的新关键字以外的方法，并学习如何应用它们，特别是反射、克隆和序列化。</strong></p><p><br><br><br><br></p><p><strong>反射是一种机制，我们可以用它来在运行时检查类、字段和方法</strong>。以下是使用反射创建用户对象的示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenInitializedWithReflection_thenInstanceIsNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token function">assertThat</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isNotNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，我们使用反射来查找并调用用户类的构造函数。</p><p>下一个方法，<strong>克隆，是创建对象的精确副本的一种方法</strong>。为此，我们的用户类必须实现可克隆接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span> <span class="token punctuation">{</span> <span class="token comment">//... }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，我们可以使用clone()方法创建一个新的clonedUser对象，该对象的属性值与用户对象相同：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenCopiedWithClone_thenExactMatchIsCreated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> clonedUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> user<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token function">assertThat</span><span class="token punctuation">(</span>clonedUser<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们也可以使用sun.misc.Unsafe类为对象分配内存，而无需调用构造函数</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> unsafeInstance<span class="token punctuation">.</span><span class="token function">allocateInstance</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,81);function u(r,d){return s(),e("div",null,[o,i,p(" more "),l])}const m=a(c,[["render",u],["__file","05 java create objects.html.vue"]]);export{m as default};
