import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e,a as p,f as o}from"./app-hJ4_2O4c.js";const t={},l=p("p",null,"工作中遇到的用于特殊场景下的SQL，记录下来方便以后遇到相同的或类似的场景时使用。",-1),c=o(`<h2 id="特殊sql" tabindex="-1"><a class="header-anchor" href="#特殊sql" aria-hidden="true">#</a> 特殊SQL</h2><h3 id="_1-删除重复数据只保留一条" tabindex="-1"><a class="header-anchor" href="#_1-删除重复数据只保留一条" aria-hidden="true">#</a> 1. 删除重复数据只保留一条</h3><p><strong>删除重复数据，只保留ID最大的那条</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 已验证</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> users <span class="token keyword">where</span> is_delete <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">and</span> id <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span>
        <span class="token keyword">select</span> t<span class="token punctuation">.</span>max_id <span class="token keyword">from</span> <span class="token punctuation">(</span>
                <span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">as</span> max_id <span class="token keyword">from</span> users <span class="token keyword">group</span> <span class="token keyword">by</span> identity_id<span class="token punctuation">,</span>name
            <span class="token punctuation">)</span> <span class="token keyword">as</span> t
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 未验证</span>
<span class="token keyword">delete</span> p1 
<span class="token keyword">from</span>
 Person <span class="token keyword">as</span> p1<span class="token punctuation">,</span>Person <span class="token keyword">as</span> p2 
<span class="token keyword">where</span> p1<span class="token punctuation">.</span>is_delete <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">and</span> p1<span class="token punctuation">.</span>Email<span class="token operator">=</span>p2<span class="token punctuation">.</span>Email <span class="token operator">and</span> p1<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> p2<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-获取分组后某字段的最大值所在的那条记录" tabindex="-1"><a class="header-anchor" href="#_2-获取分组后某字段的最大值所在的那条记录" aria-hidden="true">#</a> 2. 获取分组后某字段的最大值所在的那条记录</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 实战验证（多次审核记录最新的一次结果）</span>
<span class="token keyword">select</span> a<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> audit_record <span class="token keyword">as</span> a
<span class="token keyword">where</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>id<span class="token punctuation">)</span> 
    <span class="token keyword">from</span> audit_record <span class="token keyword">as</span> b 
    <span class="token keyword">where</span> a<span class="token punctuation">.</span>pojo_id <span class="token operator">=</span> b<span class="token punctuation">.</span>pojo_id 
    <span class="token operator">and</span> b<span class="token punctuation">.</span>review_type <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">)</span>
<span class="token operator">and</span> a<span class="token punctuation">.</span>review_status <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">-- 未验证</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test <span class="token keyword">as</span> a
<span class="token keyword">where</span> typeindex <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>typeindex<span class="token punctuation">)</span> 
    <span class="token keyword">from</span> test <span class="token keyword">as</span> b 
    <span class="token keyword">where</span> a<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token keyword">type</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-group-by和order-by一起使用" tabindex="-1"><a class="header-anchor" href="#_3-group-by和order-by一起使用" aria-hidden="true">#</a> 3. group by和order by一起使用</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 1.group by 先于order by执行</span>
<span class="token comment">-- 2.group by 的时候 会首先对结果进行排序 然后再分组的</span>
<span class="token comment">-- 3.group by 的排序是升序的</span>
<span class="token comment">-- 4.如果你只是排分组字段的顺序为升序，那么你都可以不用order by 直接group by的结果就ok</span>
<span class="token comment">-- 5.如果是降序 或者其他字段 那么 可能你类似这样的写法</span>

<span class="token comment">-- 无效写法</span>
<span class="token keyword">select</span> <span class="token operator">*</span>  <span class="token keyword">from</span> <span class="token keyword">table</span> <span class="token keyword">group</span> <span class="token keyword">by</span> xxx <span class="token keyword">order</span> <span class="token keyword">by</span> xxx<span class="token punctuation">;</span>

<span class="token comment">-- 有效写法</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tableA 
    <span class="token keyword">where</span> column1<span class="token operator">=</span><span class="token string">&#39;xxx&#39;</span> 
    <span class="token keyword">order</span> <span class="token keyword">by</span>  xxx <span class="token keyword">desc</span>
<span class="token punctuation">)</span> <span class="token keyword">temp</span>  
<span class="token keyword">group</span> <span class="token keyword">by</span> xxx <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-数据库aes加解密" tabindex="-1"><a class="header-anchor" href="#_4-数据库aes加解密" aria-hidden="true">#</a> 4. 数据库AES加解密</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- HEX 十六进制</span>
<span class="token comment">-- aes 加密</span>
<span class="token keyword">select</span> <span class="token punctuation">(</span>HEX<span class="token punctuation">(</span>AES_ENCRYPT<span class="token punctuation">(</span>pass1<span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- aes 解密</span>
<span class="token keyword">select</span> AES_DECRYPT<span class="token punctuation">(</span>UNHEX<span class="token punctuation">(</span>pass1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-锁定行以处理并发" tabindex="-1"><a class="header-anchor" href="#_5-锁定行以处理并发" aria-hidden="true">#</a> 5. 锁定行以处理并发</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 票务系统中，当多个用户同时尝试购买最后几张票时，我们需要确保每个用户正确地锁定资源。</span>
<span class="token comment">-- 通过FOR UPDATE关键字锁定了一行记录，以便进行事务处理</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> tickets
<span class="token keyword">where</span> event_id <span class="token operator">=</span> <span class="token number">1</span> 
<span class="token operator">and</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token string">&#39;available&#39;</span>
<span class="token keyword">limit</span> <span class="token number">1</span>
<span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-数据库分区" tabindex="-1"><a class="header-anchor" href="#_6-数据库分区" aria-hidden="true">#</a> 6. 数据库分区</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 对于日志记录等大量写入操作的业务场景，数据库分区可以提高性能和管理的便捷性。</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> logs <span class="token punctuation">(</span>
    log_id <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    event_time <span class="token keyword">datetime</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span> <span class="token keyword">partition</span> <span class="token keyword">by</span> range <span class="token punctuation">(</span><span class="token keyword">YEAR</span><span class="token punctuation">(</span>event_time<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>
    <span class="token keyword">partition</span> p0 <span class="token keyword">values</span> LESS THAN <span class="token punctuation">(</span><span class="token number">1991</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">partition</span> p1 <span class="token keyword">values</span> LESS THAN <span class="token punctuation">(</span><span class="token number">1992</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">partition</span> p2 <span class="token keyword">values</span> LESS THAN <span class="token punctuation">(</span><span class="token number">1993</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function i(r,d){return n(),a("div",null,[l,e(" more "),c])}const v=s(t,[["render",i],["__file","3 special sql.html.vue"]]);export{v as default};
