### JavaScript 数据类型
* 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

* 引用数据类型：对象(Object)、数组(Array)、函数(Function。
### JavaScript 对象
JavaScript 对象是拥有属性和方法的数据
* 对象定义
可以使用字符来定义和创建 JavaScript 对象
* 对象属性
可以说 "JavaScript 对象是变量的容器"。但是，我们通常认为 "JavaScript 对象是键值对的容器"。键值对通常写法为 name : value (键与值以冒号分割)。键值对在 JavaScript 对象通常称为 对象属性
* 访问对象属性
可以通过两种方式访问对象属性：person.lastName;person["lastName"];
* 对象方法
对象的方法定义了一个函数，并作为对象的属性存储。对象方法通过添加 () 调用 (作为一个函数)。
### js事件
* HTML 事件是发生在 HTML 元素上的事情。当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。
* HTML 事件可以是浏览器行为，也可以是用户行为。
HTML 页面完成加载
HTML input 字段改变时
HTML 按钮被点击
* 通常，当事件发生时，你可以做些事情。在事件触发时 JavaScript 可以执行一些代码。HTML 元素中可以添加事件属性，使用 JavaScript 代码来添加 HTML 元素
* 常见html事件
onchange	HTML 元素改变
onclick	用户点击 HTML 元素
onmouseover	用户在一个HTML元素上移动鼠标
onmouseout	用户从一个HTML元素上移开鼠标
onkeydown	用户按下键盘按键
onload	浏览器已完成页面的加载

#### js计时事件
通过使用 JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件
setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
setTimeout() - 在指定的毫秒数后执行指定代码。
clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。
setTimeout() 方法会返回某个值。在上面的语句中，值被储存在名为 myVar 的变量中。假如取消这个 setTimeout()，可以使用这个变量名来指定它。
setTimeout() 的第一个参数是含有 JavaScript 语句的字符串。这个语句可能诸如 "alert('5 seconds!')"，或者对函数的调用，诸如 alertMsg。第二个参数指示从当前起多少毫秒后执行第一个参数。

### js函数
* 函数定义
   JavaScript 使用关键字 function 定义函数。
   函数可以通过声明定义，也可以是一个表达式。
* 函数声明
   函数声明后不会立即执行，会在我们需要的时候调用到。
   function functionName(parameters) {
  执行的代码
}
* 函数表达式
  JavaScript 函数可以通过一个表达式定义。
  var x = function (a, b) {return a * b};
* Function() 构造函数
  函数可以通过内置的 JavaScript 函数构造器（Function() ）定义。
* 函数提升
 提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去  的的行为。
 提升（Hoisting）应用在变量的声明与函数的声明。
 因此，函数可以在声明之前调用。使用表达式定义函数时无法提升。
* 自调用函数
函数表达式可以 "自调用"。
自调用表达式会自动调用。
如果表达式后面紧跟 () ，则会自动调用。
不能自调用声明的函数。
通过添加括号，来说明它是一个函数表达式

* 函数是对象
JavaScript 函数描述为一个对象更加准确。
JavaScript 函数有 属性 和 方法。
arguments.length 属性返回函数调用过程接收到的参数个数
* 箭头函数(es6)
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式(单一)
相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
当只有一个参数时：
(单一参数) => {函数声明}
单一参数 => {函数声明}
没有参数的函数应该写成一对圆括号:
() => {函数声明}
有的箭头函数都没有自己的 this。 不适合顶一个 对象的方法。
当我们使用箭头函数的时候，箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的。
箭头函数是不能提升的，所以需要在使用之前定义。
使用 const 比使用 var 更安全，因为函数表达式始终是一个常量。
如果函数部分只是一个语句，则可以省略 return 关键字和大括号 {}
* 函数参数
函数显式参数(Parameters)在函数定义时列出
隐式参数(Arguments)在函数调用时传递给函数真正的值
参数规则
JavaScript 函数定义显式参数时没有指定数据类型。
JavaScript 函数对隐式参数没有进行类型检测。
JavaScript 函数对隐式参数的个数没有进行检测。

通过值传递参数
在函数中调用的参数是函数的隐式参数。
JavaScript 隐式参数通过值来传递：函数仅仅只是获取值。
如果函数修改参数的值，不会修改显式参数的初始值（在函数外定义）。隐式参数的改变在函数外是不可见的。

通过对象传递参数
在JavaScript中，可以引用对象的值。
因此我们在函数内部修改对象的属性就会修改其初始的值。修改对象属性可作用于函数外部（全局变量）。修改对象属性在函数外是可见的。

* JavaScript 函数调用
this 关键字
一般而言，在Javascript中，this指向函数执行时的当前对象。
调用 JavaScript 函数
函数中的代码在函数被调用后执行。
全局对象
当函数没有被自身的对象调用时 this 的值就会变成全局对象。在 web 浏览器中全局对象是浏览器窗口（window 对象）。该实例返回 this 的值是 window 对象
函数作为方法调用
在 JavaScript 中你可以将函数定义为对象的方法
函数作为对象方法调用，会使得 this 的值成为对象本身。
使用构造函数调用函数
如果函数调用前使用了 new 关键字, 则是调用了构造函数。这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象
构造函数的调用会创建一个新的对象。新对象会继承构造函数的属性和方法

###JavaScript 闭包
JavaScript 变量可以是局部变量或全局变量。私有变量可以用到闭包闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。
* 全局变量
在web页面中全局变量属于 window 对象。全局变量可应用于页面上的所有脚本
* 局部变量
局部变量只能用于定义它函数内部。对于其他的函数或脚本代码是不可用的。全局和局部变量即便名称相同，它们也是两个不同的变量。修改其中一个，不会影响另一个的值
* 变量声明时如果不使用 var 关键字，那么它就是一个全局变量，即便它在函数内定义。
* 变量生命周期
全局变量的作用域是全局性的，即在整个JavaScript程序中，全局变量处处都在。而在函数内部声明的变量，只在函数内部起作用。这些变量是局部变量，作用域是局部性的；函数的参数也是局部性的，只在函数内部起作用。
### DOM
* HTML DOM (文档对象模型)
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。HTML DOM 模型被构造为对象的树
* 查找 HTML 元素
通过 id 找到 HTML 元素
通过标签名找到 HTML 元素
通过类名找到 HTML 元素
* HTML DOM 允许 JavaScript 改变 HTML 元素的内容
绝对不要在文档(DOM)加载完成之后使用 document.write()。这会覆盖该文档
修改 HTML 内容的最简单的方法是使用 innerHTML 属性。
* 改变 HTML 属性
document.getElementById(id).attribute=新属性值
例：<img id="image" src="smiley.gif">
<script>
document.getElementById("image").src="landscape.jpg";
</script>
* 改变 HTML 样式
document.getElementById(id).style
* HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。
* addEventListener() 方法
可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。
addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。
* 可以使用 removeEventListener() 方法来移除事件的监听。
* 事件传递有两种方式：冒泡与捕获
在冒泡中，内部元素的事件会先被触发，然后再触发外部元素
在捕获中，外部元素的事件会先被触发，然后才会触发内部元素的事件
* JavaScript HTML DOM 元素 (节点)
 创建元素 document.createElement()
 添加文本节点 document.createTextNode()
 把节点添加到元素中 元素.appendChild(节点)  （添加到尾部）
 查找已存在的元素document.getElementById(存在元素id)
 将新元素添加到开始位置insertBefore() 方法父.removeChild(子)
 替换 HTML 元素replaceChild()
* 集合Collection
HTMLCollection 对象
getElementsByTagName() 方法返回 HTMLCollection 对象。HTMLCollection 对象类似包含 HTML 元素的一个数组
HTMLCollection 对象 length 属性
HTMLCollection 对象的 length 属性定义了集合中元素的数量
HTMLCollection 不是一个数组！HTMLCollection 看起来可能是一个数组，但其实不是。可以像数组一样，使用索引来获取元素。HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join()
* 节点列表
NodeList 对象是一个从文档中获取的节点列表 (集合)
所有浏览器的 childNodes 属性返回的是 NodeList 对象。大部分浏览器的 querySelectorAll() 返回 NodeList 对象
节点列表不是一个数组！节点列表看起来可能是一个数组，但其实不是。你可以像数组一样，使用索引来获取元素。节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。

* HTMLCollection 与 NodeList 的区别
HTMLCollection 是 HTML 元素的集合。NodeList 是一个文档节点的集合。NodeList 与 HTMLCollection 有很多类似的地方。NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。NodeList 与 HTMLCollection 都有 length 属性。HTMLCollection 元素可以通过 name，id 或索引来获取。NodeList 只能通过索引来获取。只有 NodeList 对象有包含属性节点和文本节点。
### Bom
全局变量不能 通过delete操作符删除，而直接在window对象上的定义的的属性可以。
在全局作用域中声明的所有变量和函数，照样会变成window对象的成员
top对象始终指向最高最外层的框架，也就是浏览器窗口
parent有可能等于top，但没在框架的情况下parent一定等于top
* JavaScript Window浏览器对象模型
Window 对象
所有浏览器都支持 window 对象。它表示浏览器窗口。所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。全局变量是 window 对象的属性。全局函数是 window 对象的方法。甚至 HTML DOM 的 document 也是 window 对象的属性之一
Window 方法
window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口
window.resizeTo() - 调整当前窗口的尺寸
* Window Screen
window.screen 对象包含有关用户屏幕的信息。
window.screen对象在编写时可以不使用 window 这个前缀。
属性：screen.availWidth - 可用的屏幕宽度
screen.availHeight - 可用的屏幕高度
Window Screen 可用宽度
screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。
Window Screen 可用高度
screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。
* Window Location
window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面
location.hostname 返回 web 主机的域名
location.pathname 返回当前页面的路径和文件名
location.port 返回 web 主机的端口 （80 或 443）
location.protocol 返回所使用的 web 协议（http:// 或 https://）
location.href 属性返回当前页面的 URL。
location.pathname 属性返回 URL 的路径名。
location.assign() 方法加载新的文档。
* Window History
window.history 对象包含浏览器的历史。
history.back() - 与在浏览器点击后退按钮相同   方法加载历史列表中的前一个 URL
history.forward() - 与在浏览器中点击向前按钮相同  方法加载历史列表中的下一个 URL
* Window Navigator
window.navigator 对象包含有关访问者浏览器的信息
* Cookie
Cookie 用于存储 web 页面的用户信息
Cookie 是一些数据, 存储于你电脑上的文本文件中。当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。Cookie 的作用就是用于解决 "如何记录客户端的用户信息":当用户访问 web 页面时，他的名字可以记录在 cookie 中。
在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
 document.cookie 属性来创建 、读取、及删除 cookie
 
Cookie 字符串
document.cookie 属性看起来像一个普通的文本字符串，其实它不是。即使您在 document.cookie 中写入一个完整的 cookie 字符串, 当您重新读取该 cookie 信息时，cookie 信息是以名/值对的形式展示的。如果您设置了新的 cookie，旧的 cookie 不会被覆盖。 新 cookie 将添加到 document.cookie 中，所以如果您重新读取document.cookie

* JavaScript Cookie 实例
在以下实例中，我们将创建 cookie 来存储访问者名称。首先，访问者访问 web 页面, 他将被要求填写自己的名字。该名字会存储在 cookie 中。访问者下一次访问页面时，他会看到一个欢迎的消息。在这个实例中我们会创建 3 个 JavaScript 函数:
设置 cookie 值的函数 setCookie
获取 cookie 值的函数 getCookie
检测 cookie 值的函数 检测 cookie 是否创建的函数 checkCookie

### JavaScript this 关键字

在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
在方法中，this 表示该方法所属的对象。
如果单独使用，this 表示全局对象。
在函数中，this 表示全局对象。
在函数中，在严格模式下，this 是未定义的(undefined)。
在事件中，this 表示接收事件的元素。
类似 call() 和 apply() 方法可以将 this 引用到任何对象。
### 显式函数绑定
在 JavaScript 中函数也是对象，对象则有方法，apply 和 call 就是函数对象的方法。这两个方法异常强大，他们允许切换函数执行的上下文环境（context），即 this 绑定的对象。
### JavaScript let 和 const
let 声明的变量只在 let 命令所在的代码块内有效。const 声明一个只读的常量，一旦声明，常量的值就不能改变。在 ES6 之前，JavaScript 只有两种作用域： 全局变量 与 函数内的局部变量。

### JavaScript 块级作用域(Block Scope)
使用 var 关键字声明的变量不具备块级作用域的特性，它在 {} 外依然能被访问到

重新定义变量
使用 var 关键字重新声明变量可能会带来问题。在块中重新声明变量也会重新声明块外的变量
let 关键字就可以解决这个问题，因为它只在 let 命令所在的代码块 {} 内有效。

循环作用域
使用了 var 关键字，它声明的变量是全局的，包括循环体内与循环体外。
使用 let 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响。

局部变量
在函数体内使用 var 和 let 关键字声明的变量有点类似。它们的作用域都是 局部的

全局变量
在函数体外或代码块外使用 var 和 let 关键字声明的变量也有点类似。它们的作用域都是 全局的

HTML 代码中使用全局变量
在 JavaScript 中, 全局作用域是针对 JavaScript 环境。在 HTML 中, 全局作用域是针对 window 对象。使用 var 关键字声明的全局作用域变量属于 window 对象。使用 let 关键字声明的全局作用域变量不属于 window 对象

重置变量
使用 var 关键字声明的变量在任何地方都可以修改，在相同的作用域或块级作用域中，不能使用 let 关键字来重置 var 关键字声明的变量，在相同的作用域或块级作用域中，不能使用 let 关键字来重置 let 关键字声明的变量，在相同的作用域或块级作用域中，不能使用 var 关键字来重置 let 关键字声明的变量，let 关键字在不同作用域，或不同块级作用域中是可以重新声明赋值的

变量提升
JavaScript 中，var 关键字定义的变量可以在使用后声明，也就是变量可以先使用再声明（JavaScript 变量提升）。let 关键字定义的变量则不可以在使用后声明，也就是变量需要先声明再使用

const 关键字
const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改。

const定义常量与使用let 定义的变量相似：
二者都是块级作用域都不能和它所在作用域内的其他变量或函数拥有相同的名称
两者还有以下两点区别：
const声明的常量必须初始化，而let声明的变量不用
const 定义常量的值不能通过再赋值修改，也不能再次声明。而 let 定义的变量值可以修改。

并非真正的常量
const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用const 定义的对象或者数组，其实是可变的
不能对常量对象重新赋值