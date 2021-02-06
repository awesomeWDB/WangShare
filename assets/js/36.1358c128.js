(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{562:function(s,t,a){"use strict";a.r(t);var _=a(15),v=Object(_.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第8章-确认访问用户身份的认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第8章-确认访问用户身份的认证"}},[s._v("#")]),s._v(" 第8章 确认访问用户身份的认证")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-何为认证"}},[s._v("1. 何为认证")])]),a("li",[a("a",{attrs:{href:"#_2-basic认证"}},[s._v("2. BASIC认证")])]),a("li",[a("a",{attrs:{href:"#_3-digest认证"}},[s._v("3. DIGEST认证")])]),a("li",[a("a",{attrs:{href:"#_4-ssl客户端认证"}},[s._v("4. SSL客户端认证")]),a("ul",[a("li",[a("a",{attrs:{href:"#ssl客户端认证采用双因素认证"}},[s._v("SSL客户端认证采用双因素认证")])]),a("li",[a("a",{attrs:{href:"#ssl客户端认证必要的费用"}},[s._v("SSL客户端认证必要的费用")])])])]),a("li",[a("a",{attrs:{href:"#_5-基于表单认证"}},[s._v("5. 基于表单认证")]),a("ul",[a("li",[a("a",{attrs:{href:"#认证多半为基于表单认证"}},[s._v("认证多半为基于表单认证")])]),a("li",[a("a",{attrs:{href:"#session管理及cookie应用"}},[s._v("Session管理及Cookie应用")])])])])])]),a("p"),s._v(" "),a("p",[s._v("某些页面只想让特定的人浏览，或者只有本人可见。为达到这个目标，必不可少的就是认证功能。")]),s._v(" "),a("h2",{attrs:{id:"_1-何为认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-何为认证"}},[s._v("#")]),s._v(" 1. 何为认证")]),s._v(" "),a("p",[s._v("计算机本身无法判断使用者的身份。为了知道是谁就得让客户端自报身份。为了确认客户端的身份，就得核对“登录者本人才知道的信息”。一般信息有以下几种：")]),s._v(" "),a("ul",[a("li",[s._v("密码：本人才知道的字符串信息")]),s._v(" "),a("li",[s._v("动态令牌：本人设备中显示的一次性密码")]),s._v(" "),a("li",[s._v("数字证书： 本人终端持有的信息")]),s._v(" "),a("li",[s._v("生物认证：指纹和虹膜等本人生理信息")]),s._v(" "),a("li",[s._v("IC卡：本人持有的信息")])]),s._v(" "),a("h4",{attrs:{id:"http-1-1使用的认证方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1使用的认证方式"}},[s._v("#")]),s._v(" HTTP/1.1使用的认证方式")]),s._v(" "),a("ul",[a("li",[s._v("BASIC认证（基本认证）")]),s._v(" "),a("li",[s._v("DIGEST认证（摘要认证）")]),s._v(" "),a("li",[s._v("SSL客户端认证")]),s._v(" "),a("li",[s._v("FormBase认证（基于表单认证）")])]),s._v(" "),a("h2",{attrs:{id:"_2-basic认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-basic认证"}},[s._v("#")]),s._v(" 2. BASIC认证")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/8BASIC%E8%AE%A4%E8%AF%81%E6%AD%A5%E9%AA%A4.png",alt:"BASIC认证步骤"}}),a("br"),s._v("\n接收到状态码401的客户端为了通过BASIC认证，需要将用户ID及密码发送给服务器。发送的字符串内容是由用户ID和密码构成，两者中间以冒号连接后，再进过Base64编码处理。再把这段字符串写入Authorization字段后，发送请求。之后浏览器会自动完成到Base64编码的转换工作。")]),s._v(" "),a("p",[s._v("BASIC认证，一般的浏览器无法实现认证注销操作，且达不到多数Web网站期望的安全性等级，因此它不常用。")]),s._v(" "),a("h2",{attrs:{id:"_3-digest认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-digest认证"}},[s._v("#")]),s._v(" 3. DIGEST认证")]),s._v(" "),a("p",[s._v("为弥补BASIC认证存在的弱点就有了DIGEST认证。它同样使用质询/响应的方式，但不会像BASIC那样直接发送明文密码。")]),s._v(" "),a("p",[s._v("因为发送给客户端的只是响应摘要及由质询码产生的计算结果，所以比起BASIC认证，密码泄露的可能性就降低了。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/8DIGEST%E8%AE%A4%E8%AF%81.png",alt:"DIGEST认证"}})]),s._v(" "),a("p",[s._v("DIGEST认证提供了高于BASIC认证的安全等级，但和HTTPS的客户端相比仍然很弱。DIGEST认证提供防止密码被窃听的保护机制，但并不存在防止用户伪装的保护机制。和BASIC一样，使用上不便捷，且仍达不到多数Web网站对高度安全等级的追求标准。")]),s._v(" "),a("h2",{attrs:{id:"_4-ssl客户端认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ssl客户端认证"}},[s._v("#")]),s._v(" 4. SSL客户端认证")]),s._v(" "),a("p",[s._v("为达到SSL客户端认证的目的，需要事先将客户端证书分发给客户端，且客户端必须安装此证书。")]),s._v(" "),a("ol",[a("li",[s._v("接收到需要认证资源的请求，服务器会发送Certificate Request报文，要求客户端提供客户端证书。")]),s._v(" "),a("li",[s._v("用户选择将发送的客户端证书后，客户端会把客户端证书信息以Client Certificate报文方式发送给服务器。")]),s._v(" "),a("li",[s._v("服务器验证客户端证书验证通过后方可领取证书内客户端的公开密钥，然后开始HTTPS加密通信")])]),s._v(" "),a("h3",{attrs:{id:"ssl客户端认证采用双因素认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl客户端认证采用双因素认证"}},[s._v("#")]),s._v(" SSL客户端认证采用双因素认证")]),s._v(" "),a("p",[s._v("SSL客户端不会依靠证书完成认证，一般会和基于表单认证组合形成一种双因素认证来使用。"),a("strong",[s._v("双因素认证是指，认证过程中不仅需要密码这一个因素，还需要申请认证者提供其他持有信息，从而作为另一个因素，与其组合使用的认证方式")]),s._v("。")]),s._v(" "),a("p",[s._v("换言之，第一个认证因素的SSL客户端证书用来认证客户端计算机，另一个认证因素的密码则用来确定这是用户本人的行为。")]),s._v(" "),a("p",[s._v("通过双因素认证后，就可以确认这是用户本人正在使用匹配正确的计算机访问服务器。")]),s._v(" "),a("h3",{attrs:{id:"ssl客户端认证必要的费用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl客户端认证必要的费用"}},[s._v("#")]),s._v(" SSL客户端认证必要的费用")]),s._v(" "),a("p",[s._v("这里的费用是指，从认证机构购买客户端证书的费用")]),s._v(" "),a("h2",{attrs:{id:"_5-基于表单认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-基于表单认证"}},[s._v("#")]),s._v(" 5. 基于表单认证")]),s._v(" "),a("p",[s._v("基于表单的认证方法并不是在HTTP协议中定义的。客户端会向服务器上的Web应用程序发送登录信息，按登录信息的验证结果认证。")]),s._v(" "),a("h3",{attrs:{id:"认证多半为基于表单认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证多半为基于表单认证"}},[s._v("#")]),s._v(" 认证多半为基于表单认证")]),s._v(" "),a("p",[s._v("HTTP协议标准提供的BASIC认证和DIGEST认证由于便利性和安全性问题，几乎不怎么使用。SSL客户端认证虽然具有高度的安全等级，但因为导入及维持费用等问题，尚未普及。")]),s._v(" "),a("h3",{attrs:{id:"session管理及cookie应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session管理及cookie应用"}},[s._v("#")]),s._v(" Session管理及Cookie应用")]),s._v(" "),a("p",[s._v("基于表单认证的标准规范尚未有定论，一般会使用Cookie来管理Session。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/8Session%E7%AE%A1%E7%90%86.png",alt:"Session管理"}})]),s._v(" "),a("h4",{attrs:{id:"服务器应该如何保存用户提交的密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器应该如何保存用户提交的密码"}},[s._v("#")]),s._v(" 服务器应该如何保存用户提交的密码？")]),s._v(" "),a("p",[s._v("通常，先利用给密码加盐（salt）的方式增加额外信息，再使用散列（hash）函数计算出散列值后保存。salt其实就是服务器生成的一个随机字符串，然后它和密码相连接生成散列值。当两个用户使用了同一个密码时，由于随机生成的salt值不同，对应散列值也不同。很大程度上减少了密码特征，攻击者也就很难利用手中的密码特征库进行破解。")])])}),[],!1,null,null,null);t.default=v.exports}}]);