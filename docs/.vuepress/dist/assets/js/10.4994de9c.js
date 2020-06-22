(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(s,t,a){"use strict";a.r(t);var n=a(25),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"入门教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门教程"}},[s._v("#")]),s._v(" 入门教程")]),s._v(" "),a("p",[s._v("扩展由不同但具有内聚性的组件组成。组件可以包括"),a("a",{attrs:{href:"#"}},[s._v("后台脚本")]),s._v("、"),a("a",{attrs:{href:"#"}},[s._v("内容脚本")]),s._v("、"),a("a",{attrs:{href:"#"}},[s._v("选项页面")]),s._v("、"),a("a",{attrs:{href:"#"}},[s._v("UI元素")]),s._v("和各种逻辑文件。扩展组件是使用web开发技术创建的：HTML、CSS和JavaScript。扩展的组件依赖于它的功能，可能不需要每个选项。")]),s._v(" "),a("p",[s._v("本教程将构建一个扩展，允许用户更改 "),a("a",{attrs:{href:"#"}},[s._v("developer.chrome.com")]),s._v(" 上任何页面的背景颜色。它将使用许多核心组件来介绍它们之间的关系。")]),s._v(" "),a("p",[s._v("首先，创建一个保存扩展文件的新目录。")]),s._v(" "),a("p",[s._v("完整的扩展程序可以在"),a("a",{attrs:{href:"#"}},[s._v("这里下载")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"创建一个-manifest-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-manifest-文件"}},[s._v("#")]),s._v(" 创建一个 manifest 文件")]),s._v(" "),a("p",[s._v("扩展从它们的 "),a("a",{attrs:{href:"#"}},[s._v("manifest")]),s._v(" 开始。创建一个名为 "),a("code",[s._v("manifest.json")]),s._v(" 的文件。包含以下代码，或从"),a("a",{attrs:{href:"#"}},[s._v("这里下载")]),s._v("该文件。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Getting Started Example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Build an Extension!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"manifest_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在开发人员模式下，保存清单文件的目录可以在其当前状态下作为扩展添加。")]),s._v(" "),a("ol",[a("li",[s._v("通过导航到 "),a("a",{attrs:{href:"chrome://extensions"}},[s._v("chrome://extensions")]),s._v(" 打开扩展管理页面。\n"),a("ul",[a("li",[s._v("扩展管理页面也可以通过点击右上角的 Chrome菜单 打开，将鼠标悬停在更多的工具上，然后选择扩展程序。")])])]),s._v(" "),a("li",[s._v("通过单击开发人员模式旁边的切换开关来启用开发人员模式。")]),s._v(" "),a("li",[s._v("单击已解压的扩展程序按钮并选择扩展目录。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/icon002.png",alt:"加载已解压的拓展程序"}}),s._v("\n😀 扩展已成功安装。因为清单中没有包含图标，所以将为扩展创建一个通用工具栏图标。")]),s._v(" "),a("h2",{attrs:{id:"添加指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加指令"}},[s._v("#")]),s._v(" 添加指令")]),s._v(" "),a("p",[s._v("虽然已经安装了扩展，但它没有任何指示。通过创建一个名为 "),a("code",[s._v("background.js")]),s._v(" 的文件来引入一个背景脚本。或者在这里下载，并将其放在扩展目录中。")]),s._v(" "),a("p",[s._v("后台脚本和许多其他重要组件必须在清单中注册。在清单中注册一个后台脚本告诉扩展要引用哪个文件，以及该文件应该如何表现。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Getting Started Example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Build an Extension!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"background"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"background.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"persistent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"manifest_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("该扩展现在意识到它包含了一个非持久的"),a("a",{attrs:{href:"#"}},[s._v("后台脚本")]),s._v("，并将扫描已注册的文件，查找需要监听的重要事件。")]),s._v(" "),a("p",[s._v("该扩展在安装后将需要来自持久变量的信息。首先包含一个运行时监听事件。在后台脚本中安装。在onInstalled侦听器内部，扩展将使用存储API设置一个值。这将允许多个扩展组件访问该值并更新它。")])])}),[],!1,null,null,null);t.default=r.exports}}]);