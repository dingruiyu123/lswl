 1.es6有哪些新特性？

Let和const关键字;
变量的解构赋值;
字符串，数值的扩展;
数组，对象的扩展;
函数的扩展;

2.清除浮动的几种方法？(至少写3种)

父元素设置高度;
父元素设置overflow:hidden;
隔墙法：在浮动元素的下方添加一个空盒子，设置clear:both;
使用after伪对象清除浮动;

3.CSS3有哪些新特性？(至少写出3种)

渐变效果 linear-gradient(线性渐变) / radial-gradient(径向渐变)
圆角 border-radius
阴影 shadow

 4.vue-router有哪几种导航钩子？

全局导航钩子;
单独路由独享钩子;
组件内的钩子;

5.Javascript字符串操作函数有哪些？(至少写出3种)

字符串转换 toString / String;
字符串分割 split;
字符串替换 replace;

6.什么是跨域，如何实现跨域访问？(至少写出3种)

当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域
jsonp / postMessage / websocket / Node中间件代理(两次跨域)

7.请简述Vue的双向数据绑定原理是什么？

通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

8.闭包的3特性？

函数嵌套函数；
内部函数使用外部函数的参数和变量；
参数和变量不会被垃圾回收机制回收。

 9.var numbers = [1,2,3,4];将numbers转换成“-”连接起来的字符串

var numbers = [1,2,3,4];
var s = numbers.join("-");
console.log(s);

10.请详细说下你对vue生命周期的理解？

生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑

11.请说下vue组件间的传值？

父级到子级 props
子级到父级 $emit
兄弟之间 bus

12.浏览器本地存储有哪几种，区别是什么？

cookie / localStorage / sessionStorage
cookie：大小受限，指定作用域不可以跨域调用，需要前端开发者自己封装，与服务器进行交互
localStorage：用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的
sessionStorage：用于本地存储一个会话中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁