/*! xs build at 2018-12-14 14:53:59 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&":function(t,e,s){},"./src/view/CurrentTodos.vue":function(t,e,s){"use strict";s.r(e);var o={methods:{edit:function(t){this.$store.dispatch("editTodo",t)},complete:function(t){this.$store.dispatch("completeTodo",t)},remove:function(t){this.$store.dispatch("removeTodo",t)}},computed:{todos:function(){return this.$store.getters.todos}}},n=(s("./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(n.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"current-todos"}},[s("h3",[t._v("Active("+t._s(t.todos.length)+")")]),t._v(" "),s("ul",{staticClass:"list-group"},t._l(t.todos,function(e,o){return s("li",{staticClass:"list-group-item"},[t._v(t._s(e.text)+"\n      "),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(s){t.edit(e)}}},[s("span",{staticClass:"iconfont icon-edit"}),t._v(" Edit ")]),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(s){t.complete(e)}}},[s("span",{staticClass:"iconfont icon-wancheng"}),t._v(" Complete\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(s){t.remove(e)}}},[s("span",{staticClass:"iconfont icon-del"}),t._v(" Remove\n        ")])])])}))])},[],!1,null,null,null);i.options.__file="CurrentTodos.vue";e.default=i.exports},"./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&":function(t,e,s){"use strict";var o=s("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&");s.n(o).a}}]);
//# sourceMappingURL=active.6a6cd877b08103db6a16.js.map