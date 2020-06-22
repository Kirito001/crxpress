---
title: 什么是拓展程序
---

# 什么是扩展程序？

扩展程序是可定制浏览体验的小型软件程序。它们使用户可以根据个人需要或偏好来定制Chrome功能和行为。它们基于Web技术（例如 `HTML`，`JavaScript` 和 `CSS`）构建。

扩展程序必须满足狭义定义且易于理解的单一目的。一个扩展可以包含多个组件和一系列功能，只要所有内容都有助于实现共同的目标。

用户界面应尽量少且有意图。它们的范围从简单的图标（如下图显示的 [Google Mail Checker](#) 扩展程序）到[覆盖](#)整个页面。

<div style="text-align:center"><img src="/icon001.png" /></div>

扩展文件被压缩到用户下载和安装的单个 `.crx` 包中。这意味着与普通的web应用程序不同，扩展不依赖于来自web的内容。

扩展程序通过 [Chrome开发人员信息中心](https://chrome.google.com/webstore/devconsole/dashboard) 分发， 并发布到 [Chrome网上应用店](https://chrome.google.com/webstore)。有关更多信息，请参阅[商店开发人员文档](#)。

## 你好扩展

通过这个快速 Hello扩展 示例，向扩展迈出一小步。首先创建一个新目录来存储扩展的文件，或者从[示例](#)页面下载它们。

接下来，添加一个名为 `manifest.json` 的文件并包含以下代码：

``` json
{
    "name": "Hello Extensions",
    "description" : "Base Level Extension",
    "version": "1.0",
    "manifest_version": 2
}
```

每个扩展名都需要一个清单，尽管大多数扩展都不会仅对清单执行很多操作。为了快速入门，扩展程序在该[browser_action](#)字段下声明了一个弹出文件和图标 ：

``` json {6,7,8,9}
{
    "name": "Hello Extensions",
    "description" : "Base Level Extension",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
        "default_popup": "hello.html",
        "default_icon": "hello_extensions.png"
    }
}
```

在[此处](#)下载 ，然后创建一个名为 `hello.html` 的文件： [hello_extensions.png](#)

``` html
<html>
    <body>
        <h1>Hello Extensions</h1>
    </body>
</html>
```

现在 `hello.html`，单击该图标时将显示扩展名。下一步是在中包含 `manifest.json` 启用键盘快捷键的命令。此步骤很有趣，但不是必需的：

``` json {10,11,12,13,14,15,16,17,18}
{
    "name": "Hello Extensions",
    "description" : "Base Level Extension",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
        "default_popup": "hello.html",
        "default_icon": "hello_extensions.png"
    },
    "commands": {
        "_execute_browser_action": {
        "suggested_key": {
            "default": "Ctrl+Shift+F",
            "mac": "MacCtrl+Shift+F"
        },
            "description": "Opens hello.html"
        }
    }
}
```

最后一步是在您的本地计算机上安装扩展。

1. `chrome://extensions` 在浏览器中导航到。您还可以通过点击多功能框右上角的Chrome菜单，将鼠标悬停在**更多工具**上，然后选择**扩展程序**来访问此页面。
2. 选中**开发人员模式**旁边的框。
3. 单击**加载解压缩的扩展名**，然后为“Hello扩展名”扩展名选择目录。

:tada: 恭喜你！现在，您可以通过单击 `hello_world.png` 图标或按 `Ctrl+Shift+F` 键盘来使用基于弹出窗口的扩展名。