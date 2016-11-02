webpackJsonp([1,0],[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var s=o(26),r=n(s),i=o(21),l=n(i),a=o(22),u=n(a),p=o(3),c=n(p),d=o(24),f=n(d),v=o(4),h=n(v),m=o(23),b=n(m),x=o(14),g=(n(x),o(25));r["default"].use(g);var _=new g;_.map({"/log":{component:c["default"]},"/reg":{component:h["default"]},"/home":{component:u["default"]},"/post":{component:f["default"]},my:{component:b["default"]}}),_.redirect({"*":"/home"}),_.start(l["default"],"#app")},,,function(e,t,o){var n,s;n=o(7),s=o(16),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;n=o(10),s=o(19),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),r=n(s);t["default"]={created:function(){var e=localStorage.getItem("token"),t=this,o=(0,r["default"])({access_token:e});e?fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":o.length.toString()},body:o}).then(function(e){e.ok?e.json().then(function(e){console.log(e.user.name),t.user=e.user}):t.user=void 0}):this.user=void 0},data:function(){return{user:void 0}},methods:{logOut:function(e){e.preventDefault(),localStorage.removeItem("token"),this.$router.go("/"),window.location.reload()}},events:{log:function(e){this.user=e},logOut:function(){this.user=void 0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){var e=this;fetch("http://localhost:3000/post",{method:"GET",cache:"no-cache"}).then(function(t){t.ok?t.json().then(function(t){e.posts=t.posts}):e.posts=void 0})},data:function(){return{posts:[]}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),r=n(s),i=o(2);n(i);t["default"]={data:function(){return{name:"",password:"",user:this.existUser}},props:["existUser"],methods:{handleLog:function(){var e=this,t=(0,r["default"])({name:e.name,password:e.password});fetch("http://localhost:3000/log",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":t.length.toString()},body:t}).then(function(t){t.ok?t.json().then(function(t){localStorage.setItem("token",t.token),e.user=t.user,e.$dispatch("log",t.user),e.$router.go("/")}):e.user=void 0})}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(3),r=n(s),i=o(4),l=n(i);t["default"]={data:function(){return{user:this.existUser}},components:{Log:r["default"],Reg:l["default"]},props:["existUser"],methods:{logOut:function(e){e.preventDefault(),localStorage.removeItem("token"),this.$dispatch("logOut"),this.$router.go("/")}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),r=n(s),i=o(2);n(i);t["default"]={data:function(){return{title:"",content:"",user:this.existUser}},props:["existUser"],methods:{handlePost:function(){var e=this,t=(0,r["default"])({access_token:localStorage.getItem("token"),title:e.title,content:e.content});fetch("http://localhost:3000/post",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":t.length.toString()},body:t}).then(function(t){t.ok?(e.$router.go("/"),window.location.reload()):console.log("发表文章失败")})}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),r=n(s);t["default"]={data:function(){return{name:"",password:"",user:this.existUser}},props:["existUser"],methods:{handleReg:function(){var e=this,t=(0,r["default"])({name:e.name,password:e.password});fetch("http://localhost:3000/reg",{method:"POST",headers:{"Content-Type":"application/json","Content-Length":t.length.toString()},body:t}).then(function(t){t.ok?t.json().then(function(t){localStorage.setItem("token",t.token),e.$dispatch("log",{name:e.name}),e.$router.go("/")}):e.user=void 0})}}}},,,function(e,t){},function(e,t){},function(e,t){e.exports=' <div> <div class=list-group> <div class=list-group-item v-for="post in posts"> <h3>标题:{{post.title}}</h3> <span>作者:{{post.name}}</span> <p>内容:{{post.content}}</p> </div> </div> </div> '},function(e,t){e.exports=' <div> <form v-if=!user> <div class=form-group> <label for=name>用户名 <input type=text id=name class=form-control v-model=name /> </label> <label for=key>密码 <input type=password class=form-control id=key v-model=password /> </label> <input type=button class="btn btn-block" value=登录 @click=handleLog /> </div> </form> <p v-else>您已经登录</p> </div> '},function(e,t){e.exports=" <div> <ul class=nav> <li><a v-link=\"'/home'\">首页</a></li> <li v-if=user><a v-link=\"'/post'\">发表文章</a></li> <li v-if=!user><a v-link=\"'/reg'\">注册</a></li> <li v-if=!user><a v-link=\"'/log'\">登录</a></li> <li v-if=user><a href=/logout @click=logOut>退出登录</a></li> </ul> </div> "},function(e,t){e.exports=' <div> <p v-if=!user> 请先登录 </p> <form v-if=user role=form> <div class=form-group> <label for=title>标题</label> <input type=text id=title class=form-control v-model=title /> <label for=content>内容 <textarea rols=40 cols=40 id=content class=form-control v-model=content></textarea> </label> <input type=button value=发表 class="btn btn-block" @click=handlePost /> </div> </form> </div> '},function(e,t){e.exports=' <div> <form v-if=!user> <div class=form-group> <label for=name>用户名 <input type=text id=name v-model=name class=form-control /> </label> <label for=key>密码 <input type=password id=key v-model=password class=form-control /> </label> <input type=button value=注册 class="btn btn-block" @click=handleReg /> </div> </form> <p v-else>您已经登录</p> </div> '},function(e,t){e.exports=' <div _v-b672e334=""> <header _v-b672e334=""> <h1 _v-b672e334="">多人自由论坛</h1> <p class=user v-if=user _v-b672e334="">用户:<span style=color:white _v-b672e334="">{{user.name}}</span></p> </header> <div id=content _v-b672e334=""> <router-view :exist-user=user _v-b672e334=""></router-view> </div> <div class=btn-wrap id=footer _v-b672e334=""> <div class="btn-group btn-group-justified" _v-b672e334=""> <a class="btn btn-default" v-link="\'/home\'" _v-b672e334=""><i class="glyphicon glyphicon-home" _v-b672e334=""></i><br _v-b672e334="">首页</a> <a class="btn btn-default show-btn" v-link="\'/post\'" _v-b672e334=""><i class="glyphicon glyphicon-plus" _v-b672e334=""></i><br _v-b672e334=""><span v-if=hasNew class="badge new-icon" _v-b672e334="">new</span>发表文章</a> <a class="btn btn-default" v-link="\'/my\'" _v-b672e334=""><i class="glyphicon glyphicon-tag" _v-b672e334=""></i><br _v-b672e334="">我的</a> </div> </div> </div> '},function(e,t,o){var n,s;o(13),n=o(5),s=o(20),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;n=o(6),s=o(15),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;n=o(8),s=o(17),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;n=o(9),s=o(18),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}]);
//# sourceMappingURL=app.42dad19ac1b7052586c8.js.map