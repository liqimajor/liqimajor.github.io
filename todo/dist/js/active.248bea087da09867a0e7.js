/*! xs build at 2018-12-18 21:28:58 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&":function(t,s,e){},"./src/view/CurrentTodos.vue":function(t,s,e){"use strict";e.r(s);var o={methods:{edit:function(t){this.$store.dispatch("editTodo",t)},complete:function(t){this.$store.dispatch("completeTodo",t)},remove:function(t){this.$store.dispatch("removeTodo",t)}},computed:{todos:function(){return this.$store.getters.activeTodos}}},n=(e("./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&"),e("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(n.a)(o,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container",attrs:{id:"current-todos"}},[e("h3",[t._v("Active("+t._s(t.todos.length)+")")]),t._v(" "),e("ul",{staticClass:"list-group"},t._l(t.todos,function(s,o){return e("li",{staticClass:"list-group-item"},[e("div",{staticClass:"view"},[e("span",{staticClass:"checkbox"}),t._v(" "),e("div",{staticClass:"list-inner"},[t._v("\n          "+t._s(s.text)+"\n        ")]),t._v(" "),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(e){t.edit(s)}}},[e("span",{staticClass:"iconfont icon-edit"}),t._v(" Edit ")]),t._v(" "),e("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(e){t.complete(s)}}},[e("span",{staticClass:"iconfont icon-wancheng"}),t._v(" Complete\n          ")]),t._v(" "),e("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(e){t.remove(s)}}},[e("span",{staticClass:"iconfont icon-del"}),t._v(" Remove\n          ")])])])])}))])},[],!1,null,null,null);i.options.__file="CurrentTodos.vue";s.default=i.exports},"./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&":function(t,s,e){"use strict";var o=e("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/CurrentTodos.vue?vue&type=style&index=0&lang=css&");e.n(o).a}}]);
//# sourceMappingURL=active.248bea087da09867a0e7.js.map