/*! xs build at 2018-12-18 20:44:51 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/CompletedTodos.vue?vue&type=style&index=0&lang=css&":function(e,t,s){},"./src/view/CompletedTodos.vue":function(e,t,s){"use strict";s.r(t);var o={methods:{edit:function(e){this.$store.dispatch("editTodo",e)},complete:function(e){this.$store.dispatch("completeTodo",e)},remove:function(e){this.$store.dispatch("removeTodo",e)}},computed:{completed:function(){return this.$store.getters.doneTodos}}},n=(s("./src/view/CompletedTodos.vue?vue&type=style&index=0&lang=css&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(n.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:"completed-todos"}},[s("h3",[e._v("Completed("+e._s(e.completed.length)+")")]),e._v(" "),s("ul",{staticClass:"list-group"},[s("div",{staticClass:"view"}),e._v(" "),e._l(e.completed,function(t){return s("li",{staticClass:"list-group-item",class:{finish:t.isCompleted}},[s("div",{staticClass:"view"},[s("span",{staticClass:"checkbox",class:{on:t.isCompleted}}),e._v(" "),s("div",{staticClass:"list-inner"},[e._v("\n          "+e._s(t.text)+"\n        ")]),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(s){e.edit(t)}}},[s("span",{staticClass:"iconfont icon-edit"}),e._v(" Edit ")]),e._v(" "),s("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(s){e.complete(t)}}},[s("span",{staticClass:"iconfont icon-wancheng"}),e._v(" Complete\n          ")]),e._v(" "),s("button",{staticClass:"btn btn-default btn-sm",attrs:{type:"button"},on:{click:function(s){e.remove(t)}}},[s("span",{staticClass:"iconfont icon-del"}),e._v(" Remove\n          ")])])])])})],2)])},[],!1,null,null,null);i.options.__file="CompletedTodos.vue";t.default=i.exports},"./src/view/CompletedTodos.vue?vue&type=style&index=0&lang=css&":function(e,t,s){"use strict";var o=s("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/CompletedTodos.vue?vue&type=style&index=0&lang=css&");s.n(o).a}}]);
//# sourceMappingURL=completed.9746f18506ae5636830f.js.map