import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as o,e as c,a,f as i}from"./app-uhPRCtus.js";const n={},t=a("p",null,"假设你是一名在 Windows 操作系统下工作、编程的程序员，那么以下的一些基本的 Windows 知识是你必须了解掌握的。",-1),p=i('<h2 id="一、windows-文件系统" tabindex="-1"><a class="header-anchor" href="#一、windows-文件系统" aria-hidden="true">#</a> 一、Windows 文件系统</h2><p>在 <code>Windows</code> 系统中，文件被组织在目录（又叫文件夹）中。</p><p>这些目录以分层树形结构组织，从硬盘驱动器每个根目录的所谓根目录开始（如下图 p-1 所示）。</p><p>一个目录可能包含子目录和文件，子目录可能包含子子目录和文件，依此类推。</p><p><code>Windows</code> 的文件系统被组织在驱动器中，由驱动器号后面跟冒号进行标识，例如，<code>C:</code> 、<code>D:</code>和 <code>E:</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>每个驱动器都有自己的根目录，例如，<code>C:\\</code>、<code>D:\\</code> 和 <code>E:\\</code> ，其中 <code>\\</code>（反斜杠）表示每个驱动器的根目录。</p><p>Windows系统不区分大小写，SKY 和 sky 是一样的。</p></div><h3 id="_1-1-文件名和文件类型" tabindex="-1"><a class="header-anchor" href="#_1-1-文件名和文件类型" aria-hidden="true">#</a> 1.1 文件名和文件类型</h3><p>Windows 的文件名由两部分组成：文件名和文件类型（又叫文件扩展名），用符号点分隔。</p><p>例如，<code>Hello.java</code>、<code>Hello.txt</code>、<code>Hello.ppt</code> 等。</p><p>对于程序员而言，在 “文件资源管理器” 中看到文件类型很重要。</p><p>默认情况下文件类型是隐藏的，例如，Hello.java 显示为 Hello，要查看文件类型，勾选 “文件资源管理器” 的 “查看” 下的 “显示” 下的 “文件扩展名”。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Windows 可以将程序和每种文件类型进行关联。</p><p>例如，双击 .txt 调用记事本程序；双击 .jpg 调用照片程序，Windows 中用 “文件资源管理器” 查看文件类型。</p></div><h3 id="_1-2-驱动器号、路径名和文件名" tabindex="-1"><a class="header-anchor" href="#_1-2-驱动器号、路径名和文件名" aria-hidden="true">#</a> 1.2 驱动器号、路径名和文件名</h3><p>要引用文件，就必须提供驱动器号、名录名称（路径名）和文件名。</p><p>例如，<code>C:\\Program Files\\java\\jdk1.7.0_07\\bin\\javac.exe</code>。</p><p>驱动器号是 <code>C:</code>，路径名是 <code>\\Program Files\\java\\jdk1.7.0_07\\bin\\</code>，文件名是 <code>javac.exe</code>，前导 <code>\\</code>（反斜杠）表示该驱动器的根目录，子目录由 <code>\\</code>（反斜杠）分隔。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>路径名可以通过两种方式指定：</p><ul><li><p>绝对路径名：绝对路径名从驱动器的根目录开始。它以 <code>X:\\</code> 开头（其中 <code>X</code> 表示驱动器号，前导 <code>\\</code> 表示根），并包含所有指向由 <code>\\</code> 分隔的文件的子目录。例如，<code>C:\\Program Files\\java\\jdk1.7.0_07\\bin\\</code>。</p></li><li><p>相对路径名：相对路径名相对于所谓的当前驱动器和当前工作目录。例如，如果当前驱动器和工作目录是 <code>C:\\Program Files\\java\\</code>，则相对路径 <code>jdk1.7.0_07\\bin\\</code> 解析为 <code>C:\\Program Files\\java\\jdk1.7.0_07\\bin\\</code>。相对路径名不以前导 <code>\\</code>（反斜杠）开头。</p></li></ul></div><h2 id="二、命令行界面-cmd" tabindex="-1"><a class="header-anchor" href="#二、命令行界面-cmd" aria-hidden="true">#</a> 二、命令行界面“CMD”</h2><p>程序员使用命令行界面（CLI）向操作系统（OS）发送文本命令，而不是单击图形用户界面（GUI）。</p><p>命令行界面比图形用户交互界面更加强大、更加灵活。</p><p><code>CMD</code>（命令解释器或命令提示符）是一个命令行界面（或者<code>Shell</code>）。它支持一组命令和实用程序，有自己的编程语言用于编写批处理文件（或Shell脚本）。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以通过以下方式启动 <code>CMD</code>：</p><ul><li>点击 <code>开始</code> 按钮，弹框中输入 <code>CMD</code>，回车；</li><li>同时按下 <code>win + R</code>，弹框中输入 <code>CMD</code>，回车；</li></ul></div><p><code>CMD</code>显示一个以 <code>&gt;</code> 结尾的提示符，形式为 <code>驱动器号:\\路径名&gt;</code> ，例如，<code>C:\\Windosws\\System&gt;</code>。此时，可以在提示符后输入命令。</p><h3 id="_2-1-当前驱动器和当前目录" tabindex="-1"><a class="header-anchor" href="#_2-1-当前驱动器和当前目录" aria-hidden="true">#</a> 2.1 当前驱动器和当前目录</h3><p>每个CMD会话维护一个所谓的当前驱动器和当前工作目录。</p><p>在提示中以 <code>drive:\\path\\to\\current-directory&gt;</code> 的形式显示，所有相对路径名都是相对于这个当前驱动器和当前工作目录的。</p><h3 id="_2-2-切换驱动器命令" tabindex="-1"><a class="header-anchor" href="#_2-2-切换驱动器命令" aria-hidden="true">#</a> 2.2 切换驱动器命令</h3><p>要设置或更改当前驱动器，请输入驱动器号+冒号（:），例如：</p>',28);function r(s,l){return d(),o("div",null,[t,c(" more "),p])}const v=e(n,[["render",r],["__file","windows.html.vue"]]);export{v as default};
