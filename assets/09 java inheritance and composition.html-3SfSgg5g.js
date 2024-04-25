import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as p,a as n,f as t}from"./app-5cCCUltF.js";const c={},o=n("p",null,"继承和组合——以及抽象、封装和多态——是面向对象编程（OOP）的基石。",-1),i=n("p",null,"在本教程中，我们将介绍继承和组合的基础知识，我们将重点关注发现这两种关系之间的差异。",-1),l=t(`<h2 id="_1-继承的基础知识" tabindex="-1"><a class="header-anchor" href="#_1-继承的基础知识" aria-hidden="true">#</a> 1.继承的基础知识</h2><p><strong>继承是一种强大但过度使用和滥用的机制。</strong></p><p>简单地说，通过继承，基类（又称基类型）定义了给定类型常见的状态和行为，并允许子类（又称子类型）提供该状态和行为的专门版本。</p><p>为了清楚地了解如何处理继承，让我们创建一个例子：</p><p>一个基类 <code>Person</code>，它为一个人定义了公共字段和方法，而子类 <code>Waitress</code> 和 <code>Actress</code> 则提供额外的、细粒度的方法实现。</p><p><br><br><br><br><br><br></p><p>这是Person类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token comment">// other fields, standard constructors, getters</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些是子类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Waitress</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serveStarter</span><span class="token punctuation">(</span><span class="token class-name">String</span> starter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Serving a &quot;</span> <span class="token operator">+</span> starter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// additional methods/constructors</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Actress</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">readScript</span><span class="token punctuation">(</span><span class="token class-name">String</span> movie<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Reading the script of &quot;</span> <span class="token operator">+</span> movie<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    
    <span class="token comment">// additional methods/constructors</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，让我们创建一个单元测试，以验证女服务员和女演员类的实例也是Person的实例，从而表明“is-a”条件在类型级别上得到满足：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenWaitressInstance_whenCheckedType_thenIsInstanceOfPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Waitress</span><span class="token punctuation">(</span><span class="token string">&quot;Mary&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mary@domain.com&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInstanceOf</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">givenActressInstance_whenCheckedType_thenIsInstanceOfPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Actress</span><span class="token punctuation">(</span><span class="token string">&quot;Susan&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;susan@domain.com&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInstanceOf</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在这里强调继承的语义方面很重要</strong>。除了重用 Person 类的实现外，</p><p>我们还在基本类型 <code>Person</code> 和子类型 <code>Waitress</code> 和 <code>Actress</code> 之间建立了定义明确的“is-a”关系。</p><p>女服务员和女演员实际上是人。</p><p>这可能会让我们产生疑问：在哪些用例中继承是正确的方法？</p><p><br><br><br><br><br><br></p><p><strong>如果子类型满足“is-a”条件，并主要在类层次结构下提供加法功能，那么继承就是你要的。</strong></p><p>当然，只要重写的方法保留了Liskov替换原则所推动的基本类型/子类型可替代性，就可以重写方法。</p><p>此外，我们应该记住，<strong>子类型继承了基类型的API</strong>，在某些情况下，这可能会过度或只是不可取。</p><p>否则，我们应该使用构图来代替。</p><h2 id="_2-设计模式中的继承" tabindex="-1"><a class="header-anchor" href="#_2-设计模式中的继承" aria-hidden="true">#</a> 2.设计模式中的继承</h2><p>虽然共识是，我们应该尽可能地支持组合而不是继承，但有一些典型的用例表明继承占有一席之地。</p><h3 id="_2-1图层超类型模式" tabindex="-1"><a class="header-anchor" href="#_2-1图层超类型模式" aria-hidden="true">#</a> 2.1图层超类型模式</h3><p>在这种情况下，<strong>我们使用继承在每层的基础上将公共代码移动到基类（超类型）。</strong></p><p>以下是此模式在域层中的基本实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Entity</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    
    <span class="token comment">// setters</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Entity</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// additional fields and methods   </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将相同的方法应用于系统中的其他层，例如服务和持久性层。</p><h3 id="_2-2模板方法模式" tabindex="-1"><a class="header-anchor" href="#_2-2模板方法模式" aria-hidden="true">#</a> 2.2模板方法模式</h3><p>在模板方法模式中，<strong>我们可以使用基类来定义算法的不变部分，然后在子类中实现变体部分：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ComputerBuilder</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Computer</span> <span class="token function">buildComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">addProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">addMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StandardComputerBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">ComputerBuilder</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// method implementation</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// method implementation</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-组合的基础知识" tabindex="-1"><a class="header-anchor" href="#_3-组合的基础知识" aria-hidden="true">#</a> 3.组合的基础知识</h2><p>组合是OOP为重用实现提供的另一种机制。</p><p>简而言之，<strong>组合允许我们对由其他对象组成的对象进行建模，</strong> 从而定义它们之间的“has-a”关系。</p><p>此外，<strong>组合是最强的关联形式</strong>，这意味着<strong>当一个对象被破坏时，组成或包含一个对象的对象也会被销毁</strong>。</p><p>为了更好地了解构图的工作原理，让我们假设我们需要处理代表计算机的对象。</p><p><br><br><br><br><br><br></p><p>计算机由不同的部分组成，包括微处理器、内存、声卡等，因此我们可以将计算机及其每个部分建模为单独的类。</p><p>以下是计算机类的简单实现情况：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Processor</span> processor<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Memory</span> memory<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">SoundCard</span> soundCard<span class="token punctuation">;</span>

    <span class="token comment">// standard getters/setters/constructors</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SoundCard</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSoundCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>soundCard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下类模拟了微处理器、内存和声卡（为了简洁起见，省略了接口）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StandardProcessor</span> <span class="token keyword">implements</span> <span class="token class-name">Processor</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> model<span class="token punctuation">;</span>
    
    <span class="token comment">// standard getters/setters</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StandardMemory</span> <span class="token keyword">implements</span> <span class="token class-name">Memory</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> size<span class="token punctuation">;</span>
    
    <span class="token comment">// standard constructors, getters, toString</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StandardSoundCard</span> <span class="token keyword">implements</span> <span class="token class-name">SoundCard</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> brand<span class="token punctuation">;</span>

    <span class="token comment">// standard constructors, getters, toString</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在每个有可能在给定类和其他类之间建立语义正确的“has-a”关系的场景中，组合是正确的选择。</strong></p><p>在上述示例中，计算机通过对其部件建模的类满足“has-a”条件。</p><p>还值得注意的是，在这种情况下，<strong>包含的计算机对象拥有所包含对象的所有权，当且仅当这些对象无法在另一个计算机对象中重复使用。</strong></p><p>如果可以的话，我们将使用聚合，而不是合成，其中不隐含所有权。</p><h2 id="_4-没有抽象的构图" tabindex="-1"><a class="header-anchor" href="#_4-没有抽象的构图" aria-hidden="true">#</a> 4.没有抽象的构图</h2><p>我们可以通过硬编码计算机类的依赖项来定义合成关系，而不是在构造函数中声明它们：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">StandardProcessor</span> processor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StandardProcessor</span><span class="token punctuation">(</span><span class="token string">&quot;Intel I3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">StandardMemory</span> memory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StandardMemory</span><span class="token punctuation">(</span><span class="token string">&quot;Kingston&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1TB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// additional fields / methods</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显而易见，<strong>这将是一个刚性、紧密耦合的设计，因为我们将使计算机强烈依赖处理器和内存的特定实现。</strong></p><p>我们不会利用接口和依赖注入提供的抽象水平。</p><p>通过基于接口的初始设计，我们得到了一个松散耦合的设计，这也更容易测试。</p>`,57);function d(r,u){return a(),e("div",null,[o,i,p(" more "),l])}const m=s(c,[["render",d],["__file","09 java inheritance and composition.html.vue"]]);export{m as default};
