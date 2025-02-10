const e=JSON.parse('{"key":"v-f5ccd9c4","path":"/javaer/base/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/7.Java%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E6%B5%81/08%20java%20serialization.html","title":"08. 序列化","lang":"zh-CN","frontmatter":{"title":"08. 序列化","icon":"pen-to-square","order":8,"author":"LiuSongLing","date":"2025-01-05T00:00:00.000Z","category":["java"],"tag":["java","i/o"],"sticky":false,"star":false,"description":"序列化是 Java 中一种将对象转换为字节流的机制，以便可以将其存储到文件、通过网络传输或在内存中保存。 反序列化则是将字节流重新转换为对象的过程。Java 提供了内置的序列化机制，使得开发者可以轻松地实现对象的持久化和传输。 本文将详细介绍 Java 序列化的基本概念、使用方法以及一些需要注意的事项。 1. 基本概念 1.1 什么是序列化? 序列化是将对象的状态转换为字节流的过程，以便可以将其保存到文件、数据库或通过网络传输。反序列化则是将字节流重新转换为对象的过程。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/javaer/base/%E4%B8%80%E3%80%81Java%E5%9F%BA%E7%A1%80/7.Java%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E6%B5%81/08%20java%20serialization.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"08. 序列化"}],["meta",{"property":"og:description","content":"序列化是 Java 中一种将对象转换为字节流的机制，以便可以将其存储到文件、通过网络传输或在内存中保存。 反序列化则是将字节流重新转换为对象的过程。Java 提供了内置的序列化机制，使得开发者可以轻松地实现对象的持久化和传输。 本文将详细介绍 Java 序列化的基本概念、使用方法以及一些需要注意的事项。 1. 基本概念 1.1 什么是序列化? 序列化是将对象的状态转换为字节流的过程，以便可以将其保存到文件、数据库或通过网络传输。反序列化则是将字节流重新转换为对象的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-10T03:15:44.000Z"}],["meta",{"property":"article:author","content":"LiuSongLing"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"i/o"}],["meta",{"property":"article:published_time","content":"2025-01-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-10T03:15:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"08. 序列化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-01-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-10T03:15:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LiuSongLing\\"}]}"]]},"headers":[{"level":2,"title":"1. 基本概念","slug":"_1-基本概念","link":"#_1-基本概念","children":[{"level":3,"title":"1.1 什么是序列化?","slug":"_1-1-什么是序列化","link":"#_1-1-什么是序列化","children":[]},{"level":3,"title":"1.2 为什么需要序列化?","slug":"_1-2-为什么需要序列化","link":"#_1-2-为什么需要序列化","children":[]}]},{"level":2,"title":"2. 实现序列化","slug":"_2-实现序列化","link":"#_2-实现序列化","children":[{"level":3,"title":"2.1 Serializable 接口","slug":"_2-1-serializable-接口","link":"#_2-1-serializable-接口","children":[]},{"level":3,"title":"2.2 序列化对象","slug":"_2-2-序列化对象","link":"#_2-2-序列化对象","children":[]},{"level":3,"title":"2.3 反序列化对象","slug":"_2-3-反序列化对象","link":"#_2-3-反序列化对象","children":[]}]},{"level":2,"title":"3. 序列化的注意事项","slug":"_3-序列化的注意事项","link":"#_3-序列化的注意事项","children":[{"level":3,"title":"3.1 serialVersionUID","slug":"_3-1-serialversionuid","link":"#_3-1-serialversionuid","children":[]},{"level":3,"title":"3.2 序列化继承","slug":"_3-2-序列化继承","link":"#_3-2-序列化继承","children":[]},{"level":3,"title":"3.3 transient 关键字","slug":"_3-3-transient-关键字","link":"#_3-3-transient-关键字","children":[]},{"level":3,"title":"3.4 自定义序列化","slug":"_3-4-自定义序列化","link":"#_3-4-自定义序列化","children":[]}]},{"level":2,"title":"4. 序列化的局限性","slug":"_4-序列化的局限性","link":"#_4-序列化的局限性","children":[{"level":3,"title":"4.1 性能问题","slug":"_4-1-性能问题","link":"#_4-1-性能问题","children":[]},{"level":3,"title":"4.2 兼容性问题","slug":"_4-2-兼容性问题","link":"#_4-2-兼容性问题","children":[]},{"level":3,"title":"4.3 安全性问题","slug":"_4-3-安全性问题","link":"#_4-3-安全性问题","children":[]}]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]}],"git":{"createdTime":1739157344000,"updatedTime":1739157344000,"contributors":[{"name":"liusongling","email":"15879144378@163.com","commits":1}]},"readingTime":{"minutes":5.35,"words":1606},"filePathRelative":"javaer/base/一、Java基础/7.Java输入输出流/08 java serialization.md","localizedDate":"2025年1月5日","excerpt":"<p><strong>序列化</strong>是 Java 中一种将对象转换为字节流的机制，以便可以将其存储到文件、通过网络传输或在内存中保存。</p>\\n<p>反序列化则是将字节流重新转换为对象的过程。Java 提供了内置的序列化机制，使得开发者可以轻松地实现对象的持久化和传输。</p>\\n<p>本文将详细介绍 Java 序列化的基本概念、使用方法以及一些需要注意的事项。</p>\\n<h2> 1. 基本概念</h2>\\n<h3> 1.1 什么是序列化?</h3>\\n<p><strong>序列化</strong>是将对象的状态转换为字节流的过程，以便可以将其保存到文件、数据库或通过网络传输。反序列化则是将字节流重新转换为对象的过程。</p>","autoDesc":true}');export{e as data};
