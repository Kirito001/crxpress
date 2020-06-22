---
title: '概述'
---

# 概述

扩展程序是 HTML，CSS，JavaScript，图像和网络平台中使用的其他文件的压缩包，可自定义Google Chrome浏览器体验。扩展程序是使用网络技术构建的，可以使用浏览器为开放式网络提供的相同API。

扩展具有广泛的功能可能性。它们可以修改用户看到并与之交互的web内容，或者扩展和更改浏览器本身的行为。

考虑扩展网关，使Chrome浏览器成为最个性化的浏览器。

## 扩展文件

扩展名的文件类型和目录数量各不相同，但都必须具有 [manifest.json](#)。一些基本但有用的扩展可能仅由 `manifest.json` 及其工具栏图标组成。

`manifest.json` 为浏览器提供了有关扩展的信息，例如最重要的文件和扩展可能使用的功能。

``` json
{
    "name": "My Extension",
    "version": "2.1",
    "description": "Gets information from Google.",
    "icons": {
        "128": "icon_16.png",
        "128": "icon_32.png",
        "128": "icon_48.png",
        "128": "icon_128.png"
    },
    "background": {
        "persistent": false,
        "scripts": ["background_script.js"]
    },
    "permissions": ["https://*.google.com/", "activeTab"],
    "browser_action": {
        "default_icon": "icon_16.png",
        "default_popup": "popup.html"
    }
}
```

扩展程序必须在浏览器工具栏中具有一个图标。使用工具栏图标可以轻松访问并让用户知道安装了哪些扩展。大多数用户将通过单击图标与使用[弹出窗口](#)的扩展程序进行交互 。

| ![browser_arrow](/browser_arrow.png) | ![mappy](/mappy.png) |
| ------------- | ------------- |
| 此[Google Mail Checker](#)扩展程序 使用浏览器操作。 | 该Mappy扩展 使用页面操作和[内容脚本](#)。 |

### 引用文件

扩展文件可以通过使用相对URL来引用，就像普通HTML页面中的文件一样。

``` html
<img src="images/my_image.png" /> 
```

此外，还可以使用绝对URL访问每个文件。

`chrome-extension://<extensionID>/<pathToFile>`

在绝对URL中，`<extensionID>`是扩展系统为每个扩展生成的唯一标识符。可以访问URL chrome://extensions 来查看所有已加载扩展名的ID 。所述`<pathToFile>`是扩展的顶部文件夹下的文件的位置; 它匹配相对URL。

在拆包扩展程序时，扩展程序ID可能会更改。具体来说，如果从其他目录加载扩展，则解压缩扩展的ID会发生变化；扩展名打包后，ID将再次更改。如果扩展程序的代码依赖于绝对URL，则可以使用该方法来避免在开发过程中对ID进行硬编码。`chrome.runtime.getURL()`

## 体系结构

一个扩展的架构将取决于它的功能，但许多健壮的扩展将包括多个组件:

- [清单](#)
- [后台脚本](#后台脚本)
- [UI元素](#UI元素)
- [内容脚本](#内容脚本)
- [选项页面](#选项页面)

### 后台脚本

[后台脚本](#)是扩展的事件处理程序；它包含对扩展很重要的浏览器事件的侦听器。它处于休眠状态，直到触发一个事件，然后执行指示的逻辑。一个有效的后台脚本只在需要时加载，空闲时卸载。

### UI元素

一个[扩展的用户界面](#)应该是有目的的和最小的。UI应该在不分散用户注意力的情况下自定义或增强浏览体验。大多数扩展都有[浏览器操作](#)或[页面操作](#)，但也可以包含其他形式的UI，例如[上下文菜单](#)、使用[地址栏](#)或创建[键盘快捷方式](#)。

扩展UI页面（比如[弹出窗口](#)）可以包含带有 JavaScript 逻辑的普通HTML页面。扩展也可以调用 [tabs.create](#) 或 `window.open()` 以显示扩展中出现的其他HTML文件。

使用页面操作和弹出窗口的扩展程序可以使用[声明性内容](#) API在后台脚本中为用户可用弹出窗口设置规则。当满足条件时，后台脚本与弹出窗口进行通信，以使用户可以单击其图标。

<div align="center"><img src="/popuparc.png" /></div>

### 内容脚本

读取或写入网页的扩展使用[内容脚本](#)。内容脚本包含JavaScript，该JavaScript在已加载到浏览器的页面的上下文中执行。内容脚本读取和修改浏览器访问的网页的DOM。

<div align="center"><img src="/contentscriptarc.png" /></div>

内容脚本可以通过交换[消息](#)并使用 [storage](#) API存储值来 与其父扩展进行通信。

<div align="center"><img src="/messagingarc.png" /></div>

### 选项页面

就像扩展程序允许用户自定义Chrome浏览器一样，[选项页面](#)也可以自定义扩展程序。选项可用于启用功能，并允许用户选择与他们的需求相关的功能。

## 使用 Chrome API

扩展程序除了可以访问与网页相同的API外，还可以使用[特定于扩展程序的API](#)，这些API可以与浏览器紧密集成。扩展程序和网页都可以访问 `window.open()` 打开URL的标准方法，但是扩展程序可以通过使用Chrome API [tabs.create](#) 方法来指定显示URL的窗口。

### 异步与同步方法

大多数Chrome API方法都是异步的：它们立即返回而无需等待操作完成。如果扩展需要知道异步操作的结果，则可以将回调函数传递给方法。该方法返回后，回调可能会在以后执行，可能要晚得多。

如果扩展名需要将用户当前选择的选项卡导航到新的URL，则它需要获取当前选项卡的ID，然后将该选项卡的地址更新为新的URL。

如果 [tabs.query](#) 方法是同步的，则可能如下所示。

``` js
// 代码无效
var tab = chrome.tabs.query({ 'active': true }); // 错误!!!
chrome.tabs.update(tab.id, { url:newUrl });
someOtherFunction();
```

这种方法将失败，因为 `query()` 是异步的。它没有等待工作完成就返回，也不返回值。当回调参数在签名中可用时，该方法是异步的。

``` js
// 异步方法
chrome.tabs.query(object queryInfo, function callback)
```

要正确查询选项卡并更新其URL，扩展名必须使用callback参数。

``` js
// 正确代码
chrome.tabs.query({ 'active': true }, function(tabs) {
    chrome.tabs.update(tabs[0].id, { url: newUrl });
});
someOtherFunction();
```

在上面的代码中，这些行按以下顺序执行：1、4、2。指定给的回调函数将 `query()` 被调用，然后执行第2行，但前提是必须提供有关当前所选选项卡的信息。这种情况在 `query()` 退货后的某个时间发生。尽管 `update()` 是异步的，但是代码不使用回调参数，因为扩展名对更新结果没有任何作用。

``` js
// 同步方法没有回调选项，并返回一个字符串类型
string chrome.runtime.getURL()
```

此方法以a的形式同步返回URL，string 并且不执行其他任何异步工作。

### 更多细节

有关更多信息，请浏览 [Chrome API](#) 参考文档 并观看以下视频。

<iframe title="YouTube video player" frameborder="no" src="https://www.youtube.com/embed/bmxr75CV36A?rel=0" width="100%" height="418" allowfullscreen></iframe>

## 页面之间的交流

扩展中的不同组件通常需要相互通信。不同的HTML页面可以通过使用发现对方 [chrome.extension](#) 的方法，如 `getViews()` 和 `getBackgroundPage()`。一旦页面引用了其他扩展页面，第一个页面就可以调用其他页面上的函数并操作其DOM。此外，扩展的所有组件都可以访问使用 [storage](#) API存储的值，并通过[消息传递](#)进行通信。

## 保存数据和隐身模式

扩展可以使用 [storage](#) API，HTML5 [Web storage](#) API 或通过发出导致保存数据的服务器请求来保存数据。当扩展程序需要保存某些内容时，请首先考虑它是否来自隐身窗口。默认情况下，扩展程序不会在隐身窗口中运行。

隐身模式保证该窗口不会留下任何痕迹。在使用隐身窗口处理数据时，扩展程序应遵守这一承诺。如果扩展程序通常可以保存浏览历史记录，请不要保存隐身窗口中的历史记录。但是，扩展程序可以从任何窗口（不管是否隐身）存储设置首选项。

要检测窗口是否处于隐身模式，请检查 `incognito` 相关的 [tabs.Tab](#) 或 [windows.Window](#) 对象的属性。

``` js
function saveTabData(tab) {
    if (tab.incognito) {
        return;
    } else {
        chrome.storage.local.set({ data: tab.url });
    }
}
```

## 采取下一步

阅读概述并完成[入门教程](/introduce/gettingStarted.html)之后，开发人员应该准备开始编写自己的扩展！使用以下资源深入了解自定义Chrome的世界。

- 在[调试教程](#)中了解可用于调试扩展的选项 。

- Chrome扩展程序可以访问功能强大的API，这些API超越了开放web上的可用API。该 [chrome.* API](#) 的API文档，将遍历每个API。

- 该[开发者指南](#)有几十个额外的链接，相关的高级扩展创建文档碎片。