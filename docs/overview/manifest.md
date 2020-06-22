---
title: 'manifest 配置'
sidebar: auto
sidebarDepth: 2
---

# manifest 配置

每个扩展都有一个[JSON](#)格式的清单文件，名为 `manifest.json`，提供重要信息。

下面的代码显示了支持的扩展清单字段，以及到讨论每个字段的页面的链接。

## manifest_version <badge text="必填" />
- 类型： `Number`
- 默认值： `2`

指定软件包所需的清单文件格式的版本。

从Chrome 18开始，开发人员应指定2（不带引号）以使用本文档所述的格式：

考虑从Chrome 18开始不推荐使用的清单版本1 ，但仍不需要版本2 ，但是在不久的将来，我们会在某个时候停止支持不推荐使用清单版本的软件包。尚未准备好跳入Chrome 18中新清单版本的扩展程序，应用程序和主题可以显式指定version 1，也可以完全不使用密钥。

::: warning 注意
`manifest_version` 不建议在Chrome 17或更低版​​本中设置2。如果您的扩展程序需要在旧版的Chrome中运行，请暂时使用版本1。在版本1停止工作之前，我们会给您足够的警告。
:::

## name <badge text="必填" />
- 类型： `String`
- 默认值： `My Extension`

是扩展的主要标识符。它显示在以下位置：

- 安装对话框
- 扩展管理界面
- [Chrome网上应用店](https://chrome.google.com/webstore)

## version <badge text="必填" />
- 类型： `String`
- 默认值： `versionString`

1-4个点分隔的整数，用于标识此扩展程序的版本。有两个规则适用于整数：它们必须介于0和65535之间（包括0和65535），并且非零整数不能以0开头。例如，99999和032都无效。

``` json
// 一些有效示范
"version": "1"
"version": "1.0"
"version": "2.10.2"
"version": "3.1.2.4567"
```

自动更新系统会比较版本，以确定是否需要更新已安装的扩展。如果发布的扩展名具有比已安装扩展名新的版本字符串，则该扩展名将自动更新。

比较从最左边的整数开始。如果这些整数相等，则比较右边的整数，依此类推。例如 `1.2.0` 是比 `1.1.9.9999` 更新的版本。

丢失的整数等于零。例如 `1.1.9.9999` 比 `1.1` 更新。

## default_locale <badge text="推荐" />
- 类型： `String`
- 默认值： `en`

指定包含此扩展的默认字符串的 `_locales` 子目录。在具有 `_locales` 目录的扩展中此字段**必填**；在没有 `_locales` 目录的扩展中此字段**不填**。有关详细信息，请参见[国际化](#)。

## description <badge text="推荐" />
- 类型： `String`
- 默认值： `undefined`

描述扩展名的纯文本字符串（无HTML或其他格式；最多132个字符）。该描述应适用于浏览器的扩展管理界面和 [Chrome Web Store](#)。您可以为此字段指定特定于语言环境的字符串。有关详细信息，请参见[国际化](#)。

## icons <badge text="推荐" />
- 类型： `Object`
- 默认值： `{}`

应用程序或主题的一个或多个图标。您应该始终提供一个128x128的图标；在安装过程中和Chrome网上应用店都使用它。扩展程序还应提供48x48的图标，该图标在扩展程序管理页面（chrome：// extensions）中使用。您还可以指定一个16x16的图标用作扩展程序页面的图标。

图标通常应采用 `png` 格式，因为 `png` 对透明度的最佳支持。但是，它们可以是WebKit支持的任何格式，包括 `bmp`，`gif`，`ico` 和 `jpeg`。这是指定图标的示例：

``` json
// manifest.json
"icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
}
```

::: tip 提示
您可以提供所需的任何其他尺寸的图标，Chrome会在适当的情况下尝试使用最佳尺寸。例如，Windows通常需要32像素的图标，如果应用程序包含32像素的图标，Chrome会选择该图标，而不是缩小48像素的图标。但是，您应该确保所有图标都是正方形的，否则可能会导致意外行为。
:::

如果您使用[Chrome开发人员信息中心](#)上传扩展程序，应用或主题 ，则需要上传其他图像，包括至少一个扩展程序的屏幕截图。有关更多信息，请参阅[Chrome Web Store开发人员文档](#)。

## browser_action
- 类型： `Object`
- 默认值： `{}`
- 可用性： `> Chrome 35`

使用浏览器操作将图标放置在地址栏右侧的Google Chrome浏览器主工具栏中。除了其[图标](#)之外，浏览器操作还可以具有[工具提示](#)，[徽章](#)和[弹出窗口](#)。

在下图中，地址栏右侧的彩色正方形是浏览器操作的图标。图标下方将弹出一个窗口。

<div align="center"><img class="zoom-custom-imgs" src="/browser-action.png" /></div>

像这样在扩展 `manifest.json` 文件中使用：

``` json {4,5,6,7,8,9,10,11,12}
{
    "name": "My extension",
    ...
    "browser_action": {
        "default_icon": {                    // 可选
            "16": "images/icon16.png",       // 可选
            "24": "images/icon24.png",       // 可选
            "32": "images/icon32.png"        // 可选
        },
        "default_title": "Google Mail",      // 可选; 显示在工具提示上
        "default_popup": "popup.html"        // 可选
    },
    ...
}
```

如果要创建并不总是可见的图标，请使用[页面操作](#)而不是浏览器操作。

## page_action
- 类型： `Object`
- 默认值： `{}`
- 可用性： `> Chrome 35`

像这样在扩展 `manifest.json` 文件中使用：

``` json {4,5,6,7,8,9,10,11,12}
 {
    "name": "My extension",
    ...
    "page_action": {
        "default_icon": {                    // 可选
            "16": "images/icon16.png",           // 可选
            "24": "images/icon24.png",           // 可选
            "32": "images/icon32.png"            // 可选
        },
        "default_title": "Google Mail",      // 可选; 显示在工具提示上
        "default_popup": "popup.html"        // 可选
    },
    ...
}
```

## author
- 类型： `String`
- 默认值： `undefined`

插件作者

## automation
- 类型： `Boolean`
- 默认值： `true`

开启自动化

## background
- 类型： `Object`
- 默认值： `{}`

可常驻浏览器后台的脚本，它们列在 `scripts` 键之后的数组中，`persistent` 应该指定为false。

``` json {4,5,6,7}
{
    "name": "Awesome Test Extension",
    ...
    "background": {
        "scripts": ["background.js"],
        "persistent": false     // 推荐
    },
    ...
}
```

可以注册多个后台脚本以获取模块化代码。

``` json
{
    "name": "Awesome Test Extension",
    ...
    "background": {
        "scripts": [
            "backgroundContextMenus.js",
            "backgroundOmniBox.js",
            "backgroundOauth.js"
        ],
        "persistent": false
    },
    ...
}
```

::: danger 警告
唯一保持后台脚本持续活动的情况是扩展使用 [chrome.webRequest](#) API 阻止或修改网络请求。webRequest API与非持久性后台页面不兼容。
:::

如果扩展当前使用持久性后台页面，请参阅[后台迁移指南](#)以获取有关如何切换到非持久性模型的说明。

## chrome_settings_overrides
- 类型： `Object`
- 默认值： `{}`

设置替代功能是扩展程序替代所选Chrome设置的一种方法。该API在Windows的所有当前版本中均适用于Windows，而在Mac的Chrome 56及更高版本中均可用。

## chrome_ui_overrides
- 类型： `Object`
- 默认值： `{}`

覆盖当前的chrome界面配置

``` json {4,5,6,7,8,9}
{
    "name": "My extension",
    ...
    "chrome_ui_overrides": {
        "bookmarks_ui": {
            "remove_bookmark_shortcut": true,
            "remove_button": true
        }
    },
    ...
}
```

## chrome_url_overrides
- 类型： `Object`
- 默认值： `{}`

替代页面是一种将扩展程序中的HTML文件替换为Google Chrome通常提供的页面的方法。除HTML外，替代页面通常还包含CSS和JavaScript代码。

扩展程序可以替换以下任何页面：

- **书签管理器**<br/>
用户从Chrome菜单中选择“书签管理器”菜单项，或者在Mac上，从“书签”菜单中选择“书签管理器”项时显示的页面。您也可以通过输入URL `chrome://bookmarks` 进入此页面。

- **历史记录**<br/>
用户从Chrome菜单中选择“历史记录”菜单项，或者在Mac上，从“历史记录”菜单中选择“显示完整历史记录”项时显示的页面。您还可以通过输入URL `chrome://history` 进入此页面 。

- **新建选项卡**<br/>
用户创建新选项卡或窗口时显示的页面。您还可以通过输入URL `chrome://newtab` 进入此页面。

::: warning 注意
单个扩展名只能覆盖一页。例如，扩展不能同时覆盖“书签管理器”和“历史记录”页面。
:::

隐身窗口是经过特殊处理的。在隐身窗口中无法覆盖新标签页。只要[隐身](#)清单属性设置为“ spanning”（这是默认值），其他替代页面就可以在隐身窗口中工作 。有关如何处理隐身窗口的详细信息，请参见概述中的[保存数据和隐身模式](#)。

``` json {4,5,6}
{
    "name": "My extension",
    ...
    "chrome_url_overrides" : {
        "pageToOverride": "myPage.html"
    },
    ...
}
```

对于pageToOverride，请替换以下内容之一：

- `bookmarks`
- `history`
- `newtab`

对于有效的替代页面，请遵循以下准则：

- **使您的页面又快又小**<br/>
用户希望内置的浏览器页面能够立即打开。避免做可能花费很长时间的事情。例如，避免同步获取网络或数据库资源。

- **在页面中添加标题**<br/>
否则，人们可能会看到页面的URL，这可能会造成混淆。这是指定标题的示例： <title>New Tab</title>

- **不要依赖具有键盘焦点的页面**<br/>
用户创建新选项卡时，地址栏始终首先获得焦点。

- **不要尝试模拟默认的“新建选项卡”页面**<br/>
尚不存在创建默认的“新选项卡”页面（带有首页，最近关闭的页面，提示，主题背景图片等）的略微修改版本所需的API。除非这样做，否则您最好尝试做一些完全不同的事情。

## commands
- 类型： `Object`
- 默认值： `{}`
- 可用性： `> Chrome 35`

使用命令API来添加键盘快捷键，这些快捷键会触发扩展程序中的操作，例如，打开浏览器操作或向扩展程序发送命令的操作。

要使用此API，您的 `manifest_version` 必须至少为2。

命令API允许您定义特定的命令，并将其绑定到默认的组合键。您的扩展接受的每个命令必须在清单中作为“命令”清单密钥的属性列出。一个扩展可以有许多命令，但是只能指定4个建议的键。用户可以从 `chrome://extensions/configureCommands` 对话框中手动添加更多快捷方式。

支持的键：`A-Z`，`0-9`，`逗号`，`句号`，`Home`，`End`，`PageUp`，`PageDown`，`空格`，`插入`，`删除`，方向键（`上`，`下`，`左`，`右`）和媒体键（`MediaNextTrack`，`MediaPlayPause`，`MediaPrevTrack`，`MediaStop`）。

::: warning 注意
所有的组合键必须包含Ctrl*或Alt。为了避免与AltGr键冲突，不允许使用包含Ctrl+Alt的组合键。除了Alt或Ctrl之外，还可以使用Shift，但不是必需的。修饰符（如Ctrl）不能与媒体键组合使用。Tab键被从Chrome版本33及以上支持的键列表中删除，原因是可访问性。
:::

::: warning 注意
在Mac上“Ctrl”会自动转换为“Command”。如果你想用Ctrl代替，请在“mac”下面指定“MacCtrl”。在“default”下指定“MacCtrl”将导致无法安装扩展。
:::

另外，在Chrome OS上，你可以指定'Search'作为一个修饰词。

某些Chrome快捷方式（例如，窗口管理）始终优先于Extension Command快捷方式，并且不能被覆盖。

``` json {4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27}
{
    "name": "My extension",
    ...
    "commands": {
        "toggle-feature-foo": {
            "suggested_key": {
                "default": "Ctrl+Shift+Y",
                "mac": "Command+Shift+Y"
            },
            "description": "Toggle feature foo"
        },
        "_execute_browser_action": {
            "suggested_key": {
                "windows": "Ctrl+Shift+Y",
                "mac": "Command+Shift+Y",
                "chromeos": "Ctrl+Shift+U",
                "linux": "Ctrl+Shift+J"
            }
        },
        "_execute_page_action": {
            "suggested_key": {
                "default": "Ctrl+Shift+E",
                "windows": "Alt+Shift+P",
                "mac": "Alt+Shift+P"
            }
        }
    },
    ...
}
```

在后台页面中，您可以通过 `onCommand.addListener` 将处理程序绑定到清单中定义的每个命令（`_execute_browser_action` 和 ` _execute_page_action` 除外）。例如：

``` js
// 使用键盘快捷键激活注册的命令时触发
chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
});
```

`_execute_browser_action` 和 `_execute_page_action` 命令保留用于打开扩展程序的弹出窗口。它们通常不会生成您可以处理的事件。如果您需要根据弹出窗口的打开位置采取措施，请考虑在弹出窗口的代码中侦听 `onDomReady` 事件。

**使用范围**

默认情况下，命令的作用域是Chrome浏览器，这意味着虽然浏览器没有焦点，但该快捷方式将处于非活动状态。在台式机Chrome上，Command可以从35版开始具有全局作用域，并且在Chrome没有重点关注时也可以使用。注意：这里是Chrome操作系统的例外，目前不允许使用全局命令。

用户可以使用 `chrome://extensions \ Keyboard Shortcuts` 中的UI自由地将任何快捷方式指定为全局快捷方式，但扩展程序开发人员仅限于仅将Ctrl + Shift + [0..9]指定为全局快捷方式。这是为了最小化在其他应用程序中覆盖快捷方式的风险，因为例如，如果允许将Alt + P设置为全局方式，则打印快捷方式可能在其他应用程序中不起作用。

``` json {10}
{
    "name": "My extension",
    ...
    "commands": {
        "toggle-feature-foo": {
            "suggested_key": {
                "default": "Ctrl+Shift+5"
            },
            "description": "Toggle feature foo",
            "global": true
        }
    },
    ...
}
```

## content_scripts
- 类型： `Array`
- 默认值： `[{...}]`

可以操作页面元素，不能使用chrome的api

**参考：**
- [概述 > 内容脚本](#)

## content_security_policy
- 类型： `Object`
- 默认值： `policyString`

安全策略，默认情况下禁止使用eval或者Function构造函数，以及内联js，禁止载入外部脚本

**参考：**
- [开发指南 > 内容安全政策](#)

## converted_from_user_script
- 类型： `Boolean`
- 默认值： `true`

将用户脚本转化为content script，允许使用 `GM_* (greasemonkey)` 方法

## devtools_page
- 类型： `String`
- 默认值： `undefined`

在开发中工具中的页面

**参考：**
- [DevTools](#)

## event_rules
- 类型： `Array`
- 默认值： `[{...}]`

该属性提供了一种机制，用于添加使用 `declarativeWebRequest` 在运行中拦截、阻塞或修改web请求的规则，或者根据页面内容采取操作，而不需要使用 `declarativeContent` 读取页面内容的许可。

**将规则从 javascript 转换为 manifest**

以下内容定义了一个规则，如果当前页面在javascript中具有视频css标签，则显示页面操作的规则：

``` js
chrome.declarativeContent.onPageChanged.addRules([{
    actions: [
        new chrome.declarativeContent.ShowPageAction()
    ],
    conditions: [
        new chrome.declarativeContent.PageStateMatcher(
            {css: ["video"]}
        )
    ]
}]);
```

manifest 中的定义与此相同：

``` json
{
    "name": "Sample extension",
    "event_rules": [{
        "event": "declarativeContent.onPageChanged",
        "actions": [{
            "type": "declarativeContent.ShowPageAction"
        }],
        "conditions": [{
            "type": "declarativeContent.PageStateMatcher",
            "css": ["video"]
        }]
    }],
    ...
}
```

## external_connectable
- 类型： `Object`
- 默认值： `{}`

应用和网页可以连接到通过您的推广 [runtime.connect](#) 和 [runtime.sendMessage](#)。

有关消息传递的教程，请参阅[交叉扩展和应用消息传递](#)以及[从网页发送消息](#)。

::: warning 注意
如果 `externally_connectable` 您的扩展程序清单中未声明，则所有扩展程序和应用程序都可以连接，但没有网页可以连接。因此，在将清单更新为use时 `externally_connectable`，如果 `"ids": ["*"]` 未指定，则其他扩展名和应用程序将失去连接到您的扩展名的能力。这可能是意外的结果，因此请记住这一点。
:::

``` json
{
    "name": "My externally connectable extension",
    "externally_connectable": {
        // 哪些外部扩展、应用或网页能连接此插件
        "ids": [
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            ...
            // 允许所有可使用 "*"
            "*"
        ],
        // 为web页面匹配模式。不会影响content_scripts。
        // 如果未指定此字段，则任何网页都不能连接。
        "matches": [
            "https://*.google.com/*",
            "*://*.chromium.org/*",
            ...
        ],
        // 指示扩展希望使用连接到它的web页面的TLS通道ID。
        // web页面还必须选择在运行时通过将includeTlsChannelId
        // 设置为true将TLS通道ID发送到扩展。
        // 连接的connectInfo或运行时。sendMessage的选择。
        "accepts_tls_channel_id": false
    },
    ...
}
```

**externally_connectable 具有以下属性：**
- **ids** `String` <badge text="可选" /><br/>
允许连接的扩展程序或应用程序的ID。如果留空或未指定，则没有扩展程序或应用程序可以连接。通配符"*"将允许所有扩展程序和应用程序连接。

- **matches** `String` <badge text="可选" /><br/>
允许连接的网页的URL模式。这不会影响内容脚本。如果留空或未指定，则无法连接任何网页。<br/>
模式不能包含通配符域，也不能包含（有效）顶级域的子域；`*://google.com/*` 并且 `http://*.chromium.org/*` 是有效的，同时 `<all_urls>`，`http://*/*`，`*://*.com/*`，甚至 `http://*.appspot.com/*` 都没有。

- **accepts_tls_channel_id** `Boolean` <badge text="可选" /><br/>
如果为true，则如果这些方法要求将通过 `runtime.connect` 或 `runtime.sendMessage` 发送的消息设置为 `runtime.MessageSender.tlsChannelId`。<br/>如果为false，则在任何情况下都不会设置 `runtime.MessageSender.tlsChannelId`。

## file_browser_handlers
- 类型： `Array`
- 默认值： `[{...}]`

使用 `chrome.fileBrowserHandler` 扩展Chrome操作系统文件浏览器。使用户能够将文件上传到您的网站。

::: warning 注意
仅在Chrome OS上有效。
:::

当用户按 `Alt + Shift + M` 或连接外部存储设备（例如SD卡，USB密钥，外部驱动器或数码相机）时，Chrome OS文件浏览器就会启动。除了在外部设备上显示文件之外，文件浏览器还可以显示用户以前保存到系统的文件。

当用户选择一个或多个文件时，文件浏览器将添加表示这些文件的有效处理程序的按钮。例如，在下面的屏幕快照中，选择带有 `.jpg` 后缀的文件将导致用户可以单击 `上传到Picasa` 按钮。

<div align="center"><img class="zoom-custom-imgs" src="/filebrowserhandler.png" /></div>

您必须在扩展清单中声明 `fileBrowserHandler` 许可权，并且必须使用 `file_browser_handlers` 字段将扩展注册为至少一种文件类型的处理程序。您还应该提供一个16x16的图标，以显示在按钮上。例如：

``` json
 {
    "name": "My extension",
    ...
    "file_browser_handlers": [{
        "id": "upload",
        "default_title": "Save to Gallery", // 按钮将显示什么
        "file_filters": [
            "filesystem:*.jpg", // 要匹配所有文件，请使用filesystem:*.*
            "filesystem:*.jpeg",
            "filesystem:*.png"
        ]}
    ],
    "permissions" : [
        "fileBrowserHandler"
    ],
    "icons": {
        "16": "icon16.png",
        "48": "icon48.png",
        "128": "icon128.png"
    },
    ...
}
```

## file_system_provider_capabilities
- 类型： `Object`
- 默认值： `{}`
- 可用性： `> Chrome 40`

可以从Chrome操作系统上的文件管理器访问该文件系统。

::: warning 注意
仅在Chrome OS上有效。
:::

``` json
{
    "name": "My extension",
    ...
    "permissions": [
        "fileSystemProvider"
    ],
    ...
    "file_system_provider_capabilities": {
        // 可选；是否onConfigureRequested支持通过配置。默认情况下：false。
        "configurable": true,
        // 可选；是否支持设置观察者并通知更改。默认情况下：false。
        "watchable": false,
        // 可选；是否支持多个（多个）已安装的文件系统。默认情况下：false。
        "multiple_mounts": true,
        // 必须；挂载文件系统的数据源。
        "source": "network"
    },
    ...
}
```

Files app使用上述信息来适当地呈现相关的UI元素。例如，如果configure设置为true，那么将呈现用于配置卷的菜单项。类似地，如果multiple_mount设置为true，那么Files app将允许从UI添加多个挂载点。如果watchable为false，则将呈现刷新按钮。注意，如果可能的话，应该添加对监视器的支持，这样文件系统上的更改就可以立即自动地反映出来。

## homepage_url
- 类型： `String`
- 默认值： `undefined`

此扩展的主页的URL。扩展管理页面(`chrome://extensions`)将包含一个到此URL的链接。如果您将扩展驻留在自己的站点上，则此字段特别有用。如果你使用Chrome网络商店发布你的扩展，主页URL默认是扩展自己的页面。

## import
- 类型： `Array`
- 默认值： `[{...}]`

可以在其他扩展程序和应用程序之间共享的无权限资源集合。共享模块的常见用途是：
- 作为API。您可以分发可以提供HTML，JS和其他源代码的共享模块，以提供可以独立于依赖于其的扩展进行更新的API。这对于运行时和游戏引擎很有用，其中应用程序通常是在共享模块的代码上运行的较小数据有效载荷。
- 作为下载优化。共享模块包含许多扩展使用的公共资源。它是一次下载的，这是第一次安装从属扩展程序。

共享模块通过两个清单字段使用：`export` 和 `import`。<br/>
`export` 字段表示扩展是导出其资源的共享模块:

``` json
{
    "name": "My Shared Module",
    ...
    "export": {
        // 可选的扩展id列表显式允许导入这个共享模块的资源。
        // 如果没有allowlist，则所有扩展都允许导入它。
        "allowlist": [
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
        ]
    }
    // 注意：共享模块中不允许有权限
}
```

扩展和应用程序使用 `import` 字段来声明它们依赖于来自特定共享模块的资源：

``` json
{
    "name": "My Importing Extension",
    ...
    "import": [
        { "id": "cccccccccccccccccccccccccccccccc" },
        {
            "id": "dddddddddddddddddddddddddddddddd",
            "minimum_version": "0.5"    // 可选
        },
    ]
}
```

通过导入扩展根目录中的保留路径 `_modules/<shared_module_id>` 访问共享模块资源。例如，要包含脚本 `foo.js`。从一个ID为 `cccccccccccccccccccccccccccccccc` 的共享模块中，使用此扩展的根路径：

``` js
<script src="_modules/cccccccccccccccccccccccccccccccc/foo.js">
```

如果导入扩展的ID为 `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`，则共享模块中资源的完整URL为：

> chrome-extension://aaaaaaaaaaaaaaaaaa/_modules/ccccccccccccccccccc/

::: warning 注意
由于来自共享模块的资源被覆盖到导入扩展的源中，因此授予导入扩展的所有特权都可用于共享模块中的代码。此外，共享模块能够通过使用绝对路径访问导入扩展中的资源。
:::

**安装/卸载**

共享模块是自动安装从Chrome网络商店时，需要依赖的扩展，自动卸载时，引用它的最后一个扩展是卸载。为了上传一个使用共享模块的扩展，共享模块必须在Chrome网络商店发布，并且扩展不能被它的allowlist限制使用共享模块。

在开发期间，您将需要手动安装扩展使用的任何共享模块。对于侧面加载的扩展或作为未打包扩展加载的扩展，不会发生自动安装。对于本地安装的、解压缩的共享模块，必须使用 `key` 字段来确保共享模块使用正确的id。

## incognito
- 类型： `String`
- 默认值： `spanning`

隐身模式下使用

**参数**
- **spanning** <br/>
扩展程序和Chrome应用程序的默认值为 `spanning`，这意味着它将在单个共享进程中运行。隐身标签中的所有事件或消息都将发送至共享进程，并带有隐身 标志来指示其来源。由于隐身标签页无法使用此共享过程，因此使用 `spanning` 隐身模式的扩展程序将无法将页面从其扩展包加载到隐身标签页的主框架中。

- **split** <br/>
可安装的Web应用程序和旧版打包应用程序的默认值为 `split`，这意味着隐身窗口中的所有应用程序页面都将以自己的隐身进程运行。如果应用或扩展程序包含背景页面，则该页面也将在隐身过程中运行。该隐身进程与常规进程同时运行，但是具有单独的仅内存cookie存储。每个进程仅从其自己的上下文中看到事件和消息（例如，隐身进程将仅看到隐身选项卡更新）。进程无法相互通信。

- **not_allowed**<br/>
无法在隐身模式下启用该扩展。可从Chrome 47获得。

::: tip 如何选择
根据经验，如果您的扩展程序或应用程序需要在隐身浏览器中加载标签页，请使用拆分隐身行为。如果您的扩展程序或应用程序需要登录到远程服务器，请使用跨隐身行为。
:::

## input_components
- 类型： `Array`
- 默认值： `[{...}]`

输入管理，键盘事件等

``` json
{
    "name": "My Importing Extension",
    ...
    "input_components": [               // 输入管理，键盘事件等
        {
            "id": "test",
            "type": "ime",
            "name": "Test IME",
            "description": "Test IME", // 用户可见描述
            "language": "en-US",       // 此输入法用于的主要语言
            "layouts": ["us::eng"]     // 这个输入法支持的键盘布局
        }
    ],
    ...
}
```

## key
- 类型： `String`
- 默认值： `publicKey`

当在开发过程中加载扩展，应用或主题时，此值可用于控制其唯一ID

::: tip 提示
通常不需要使用此值。相反，通过使用[相对路径](#)和[extension.getURL](#)编写代码，使键值不再重要。
:::

要获取合适的键值，请先从 `.crx` 文件安装扩展程序（您可能需要[上传扩展程序](#)或手动对其[打包](#)）。然后，在您的用户数据目录中，查找文件`Default/Extensions/<extensionId>/<versionString>/manifest.json` 您将在其中看到键值。

## minimum_chrome_version
- 类型： `String`
- 默认值： `versionString`

要求支持的chrome的最低版本，该字符串的格式与[版本](#)字段的格式相同。

## nacl_modules
- 类型： `Array`
- 默认值： `[{...}]`

从MIME类型到处理每种类型的Native Client模块的一个或多个映射。例如，以下代码段中的粗体代码将Native Client模块注册为OpenOffice电子表格MIME类型的内容处理程序。

``` json {4,5,6,7}
{
    "name": "Native Client OpenOffice Spreadsheet Viewer",
    ...
    "nacl_modules": [{
        "path": "OpenOfficeViewer.nmf", // 本机客户端清单（.nmf文件）在扩展目录中的位置
        "mime_type": "application/vnd.oasis.opendocument.spreadsheet"
    }]
}
```

每种MIME类型只能与一个.nmf文件关联，但是一个.nmf文件可以处理多种MIME类型。以下示例显示了具有两个.nmf文件的扩展名，这些文件处理三种MIME类型。

``` json
{
    "name": "Spreadsheet Viewer",
    ...
    "nacl_modules": [
        {
            "path": "OpenOfficeViewer.nmf",
            "mime_type": "application/vnd.oasis.opendocument.spreadsheet"
        }, {
            "path": "OpenOfficeViewer.nmf",
            "mime_type": "application/vnd.oasis.opendocument.spreadsheet-template"
        }, {
            "path": "ExcelViewer.nmf",
            "mime_type": "application/excel"
        }
    ]
}
```

::: tip 提示
可以在扩展中使用Native Client模块，而无需指定 `nacl_modules`。仅当您希望浏览器使用本机客户端模块显示特定类型的内容时，才使用 ` nacl_modules`。
:::

## oauth2
- 类型： `不详`
- 默认值： `不详`

谷歌账户相关信息

## offline_enabled
- 类型： `Boolean`
- 默认值： `true`

当Chrome浏览器检测到它离线时，此字段设置为true的应用程序将在**新标签页**上突出显示。

自Chrome 35版，应用程序被假定为离线启用，默认值 `offline_enabled: true`，除非 `webview` 权限被请求。在这种情况下，假定需要网络连接，并且 `offline_enabled: false`。

该 `offline_enabled` 值还用于确定在[Chrome OS信息亭模式](#)下启动应用程序时是否将执行网络连接检查。当应用程序未启用离线功能时，将执行网络连接检查，并且应用程序启动将暂停，直到设备获得与Internet的连接。

## omnibox
- 类型： `Object`
- 默认值： `{}`
- 可用性： `> Chrome 35`

多功能框API允许您在Google Chrome浏览器的地址栏中注册关键字，也称为多功能框。

<div align="center"><img class="zoom-custom-imgs" src="/omnibox.png" /></div>

当用户输入您的扩展程序的关键字时，该用户将开始仅与您的扩展程序进行交互。每次击键都会发送到您的分机，您可以提供建议作为回应。
可以通过多种方式丰富建议的格式。当用户接受建议时，您的扩展程序将收到通知并可以采取措施。

要使用omnibox API，必须在manifest中包含一个 `omnibox关键字` 字段。您还应该指定一个16x16像素的图标，当建议用户输入关键字模式时，该图标将显示在地址栏中。

``` json {4,5,6,7}
{
    "name": "Aaron's omnibox extension",
    ...
    "omnibox": { "keyword" : "aaron" },
    "icons": {
        "16": "16-full-color.png"
    },
    "background": {
        "persistent": false,
        "scripts": ["background.js"]
    }
}
```

::: tip 提示
Chrome会自动为您的16x16像素图标创建灰度版本。您应该提供全色版本，以便也可以在其他需要颜色的情况下使用。例如，上下文菜单API也使用16x16像素的图标，但是以彩色显示。
:::

## optional_permissions
- 类型： `Array`
- 默认值： `[]`
- 可用性： `> Chrome 35`

使用 `chrome.permissions` 在运行时而不是安装时请求声明的可选权限，因此用户可以理解为什么需要这些权限，并仅授予必要的权限。

> **实施可选权限**

**1. 确定哪些权限是必需的，哪些是可选的**

扩展可以声明必需和可选权限。通常，您应该：

- 扩展程序的基本功能需要它们时，请使用必需的权限。
- 扩展程序中的可选功能需要它们时，请使用可选权限。

必选权限的优点：
- **更少的提示：** 扩展程序可以一次提示用户接受所有权限。
- **更简单的开发：** 保证存在必需的权限。

可选权限的优点：
- **更高的安全性：** 由于用户仅启用所需的权限，因此扩展以较少的权限运行。
- **为用户提供更好的信息：** 扩展可以解释为什么当用户启用相关功能时需要特殊的权限。
- **升级更容易：** 升级扩展程序时，如果升级程序添加了可选权限而非必需权限，Chrome将不会为您的用户禁用该扩展程序。

> **2. 在清单中声明可选权限**

使用与权限字段相同的格式， 在manifest中用 `optional_permissions` 密钥声明可选权限：

``` json {4}
{
    "name": "My extension",
    ...
    "optional_permissions": [ "tabs", "http://www.google.com/" ],
    ...
}
```

如果要请求仅在运行时发现的主机，请包含 `http://*/` 和 /或 `https://*/` 作为 `optional_permission`。只要具有匹配方案，就可以在[Permissions.origins](#)中指定任何来源。

**不能指定为可选的权限**

可以将大多数Chrome扩展程序权限指定为可选，但以下情况除外。

| 允许 | 描述 |
|------|-----|
| debugger | 所述[chrome.debugger](#)用作Chrome的替换传输[远程调试协议](#) |
| declarativeNetRequest | 授予扩展访问 [chrome.declarativeNetRequest](#) 的权限 |
| devtools | 允许扩展以扩展 [Chrome DevTools](#) 功能 |
| experimental | 仅 [Canary](#) 和 [Dev频道](#)。 授予扩展程序对 [chrome.experimental](#) 的访问权限 |
| geolocation | 允许扩展程序使用HTML5 地理位置 API |
| mdns | 授予扩展访问[chrome.mdns](#)的权限 |
| proxy | 授予扩展程序对[chrome.proxy](#)的访问权限， 以管理Chrome的代理设置 |
| tts |该[chrome.tts](#)起着合成的文本到语音转换（TTS） |
| ttsEngine | 所述[chrome.ttsEngine](#)工具使用扩展名的文本到语音（TTS）引擎 |
| wallpaper | **仅适用于ChromeOS**。使用[chrome.wallpaper](#)更改ChromeOS墙纸 |
查看[声明权限和警告用户](#) 以获取有关可用权限及其警告的更多信息。

> **3. 请求可选权限**

使用 `permissions. Request()` 从用户手势中请求权限:

``` js
document.querySelector('#my-button').addEventListener('click', function(event) {
    // 权限必须从用户手势中请求，比如按钮的单击处理程序。
    chrome.permissions.request({
        permissions: ['tabs'],
        origins: ['http://www.google.com/']
    }, function(granted) {
        // 如果用户授予了权限，回调参数将为true
        if (granted) {
            doSomething();
        } else {
            doSomethingElse();
        }
    });
});
```

如果添加权限导致用户收到的警告消息与用户已经看到并接受的消息不同，Chrome会提示用户 。例如，先前的代码可能会导致如下提示：