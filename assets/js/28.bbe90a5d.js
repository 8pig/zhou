(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{194:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"servlet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servlet","aria-hidden":"true"}},[t._v("#")]),t._v(" Servlet")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),a("pre",[a("code",[t._v("1. 创建web项目  在src下创建class 在web目录下 重写方法\n2. service 方法  提供服务的方法\n")])]),t._v(" "),a("h2",{attrs:{id:"配置servlet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置servlet","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置servlet")]),t._v(" "),a("pre",[a("code",[t._v("`web.xml`\n")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zzweb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Servlet_Demo1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"运行原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行原理")]),t._v(" "),a("pre",[a("code",[t._v("**http://localhost:8080/day13_tomcat/demo1**\n")])]),t._v(" "),a("p",[a("code",[t._v("通过ip地址端口号可以找到主机, 通过day13_tomcat 找到项目, 然后再找到资源名称demo1, 在找到xml中urlpattern 有没有demo1,找到之后再找到servlet-name, 对应到servlet 标签下的demo1名称, 之后匹配servlet-calss cn.zzweb.servlet.Servlet_Demo1, 这是一个全类名, 反射, tomcat将全类名对应的字节码文件加载进内存, 创建它的对象class.forName(); clas.newInstace 调用service方法,因为我们复写了service 方法,所以一定会调用执行")])]),t._v(" "),a("hr"),t._v(" "),a("pre",[a("code",[t._v("1. 当服务器接收到客户端浏览器的请求后 会解析请求URL路径, 获取访问Servlet的资源路径\n2. 查找web.xml文件  查找是否有对应的 url-parttern 标签体内容\n3. 如果有 则找到对应的 Servlet-class 标签里全类名\n4. tomcat 会将对应的字节码文件 加载进内存 并且创建对象\n5. 调用其方法")])])])}],!1,null,null,null);s.default=r.exports}}]);