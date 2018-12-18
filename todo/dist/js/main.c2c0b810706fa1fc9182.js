/*! xs build at 2018-12-18 21:32:34 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=style&index=0&lang=css&":function(e,o,t){},"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/GetTodo.vue?vue&type=style&index=0&lang=css&":function(e,o,t){},"./src/components/app.vue?vue&type=style&index=0&lang=css&":function(e,o,t){"use strict";var s=t("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/app.vue?vue&type=style&index=0&lang=css&");t.n(s).a},"./src/main.js":function(e,o,t){"use strict";t.r(o);var s=t("./node_modules/vue/dist/vue.runtime.esm.js"),n=t("./node_modules/vue-router/dist/vue-router.esm.js");s.a.use(n.a);var d=function(){return t.e(1).then(t.bind(null,"./src/view/AllTodos.vue"))},i=new n.a({routes:[{path:"/list/:type",component:d,props:!0},{path:"/all",component:d},{path:"/active",component:function(){return t.e(0).then(t.bind(null,"./src/view/CurrentTodos.vue"))}},{path:"/completed",component:function(){return t.e(2).then(t.bind(null,"./src/view/CompletedTodos.vue"))}},{path:"/",redirect:"/list/0"}]}),r=t("./node_modules/vuex/dist/vuex.esm.js");s.a.use(r.a);var l=new r.a.Store({state:{newTodo:"",todos:[]},getters:{newTodo:function(e){return e.newTodo},activeTodos:function(e){return e.todos.filter(function(e){return!e.isCompleted})},doneTodos:function(e){return e.todos.filter(function(e){return e.isCompleted})},doneTodosLength:function(e,o){return o.doneTodos.length},allCheck:function(e,o){return e.todos.length>0&&e.todos.every(function(e){return e.isCompleted})}},mutations:{GET_TODO:function(e,o){e.newTodo=o},ADD_TODO:function(e){e.todos.push({text:e.newTodo,isCompleted:!1})},EDIT_TODO:function(e,o){var t=e.todos;t.splice(t.indexOf(o),1),e.todos=t,e.newTodo=o.text},REMOVE_TODO:function(e,o){var t=e.todos;t.splice(t.indexOf(o),1),e.todos=t},COMPLETE_TODO:function(e,o){o.isCompleted=!o.isCompleted},CLEAR_TODO:function(e){e.newTodo=""},COMPLETE_ALL:function(e){var o=e.todos.every(function(e){return e.isCompleted});e.todos.forEach(function(e){return e.isCompleted=!o})},CLEAR_COMPLETE:function(e){var o=e.todos;e.todos=o.filter(function(e){if(!e.isCompleted)return e})},EDIT_TODO_ITEM:function(e,o){}},actions:{getTodo:function(e,o){(0,e.commit)("GET_TODO",o)},addTodo:function(e){(0,e.commit)("ADD_TODO")},editTodo:function(e,o){(0,e.commit)("EDIT_TODO",o)},removeTodo:function(e,o){(0,e.commit)("REMOVE_TODO",o)},completeTodo:function(e,o){(0,e.commit)("COMPLETE_TODO",o)},clearTodo:function(e){(0,e.commit)("CLEAR_TODO")},completeAll:function(e){(0,e.commit)("COMPLETE_ALL")},clearComplete:function(e){(0,e.commit)("CLEAR_COMPLETE")},editTodoItem:function(e,o){(0,e.commit)("EDIT_TODO_ITEM",o)}},plugins:[function(e){localStorage.store&&e.replaceState(JSON.parse(localStorage.store)),e.subscribe(function(e,o){localStorage.setItem("store",JSON.stringify(o))})}]}),u={methods:{getTodo:function(e){var o=e.target.value.trim();this.$store.dispatch("getTodo",o)},addTodo:function(){this.$store.state.newTodo&&(this.$store.dispatch("addTodo"),this.$store.dispatch("clearTodo"))}},computed:{newTodo:function(){return this.$store.getters.newTodo},msg:{get:function(){return this.$store.getters.newTodo},set:function(e){this.$store.dispatch("getTodo",e.trim())}}}},c=(t("./src/view/GetTodo.vue?vue&type=style&index=0&lang=css&"),t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),a=Object(c.a)(u,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"fillArea",attrs:{id:"get-todo"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],staticClass:"textInput",attrs:{placeholder:"I need to ..."},domProps:{value:e.msg},on:{keyup:function(o){return"button"in o||!e._k(o.keyCode,"enter",13,o.key,"Enter")?e.addTodo(o):null},input:function(o){o.target.composing||(e.msg=o.target.value)}}}),e._v(" "),t("button",{staticClass:"btn btn-primary btn-add",on:{click:e.addTodo}},[t("i",{staticClass:"iconfont icon-add"}),e._v(" ADD\n  ")])])},[],!1,null,null,null);a.options.__file="GetTodo.vue";var m={methods:{clear:function(){this.$store.dispatch("clearComplete")}},components:{GetTodo:a.exports}},p=(t("./src/components/app.vue?vue&type=style&index=0&lang=css&"),Object(c.a)(m,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("todos")]),e._v(" "),t("GetTodo"),e._v(" "),t("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft",mode:"out-in"}},[t("router-view")],1),e._v(" "),t("footer",{staticClass:"footer"},[t("span",{staticClass:"todo-count fl"},[t("strong",[e._v(e._s(e.$store.getters.activeTodos.length))]),e._v(" items left\n    ")]),e._v(" "),t("span",{staticClass:"clear-completed fr",on:{click:e.clear}},[e._v("\n    Clear completed\n    ")]),e._v(" "),t("div",{staticClass:"tc"},[t("router-link",{attrs:{to:"/list/0"}},[e._v("All")]),e._v(" "),t("router-link",{attrs:{to:"/list/1"}},[e._v("Active")]),e._v(" "),t("router-link",{attrs:{to:"/list/2"}},[e._v("Completed")])],1)])],1)},[],!1,null,null,null));p.options.__file="app.vue";var v=p.exports;new s.a({router:i,store:l,render:function(e){return e(v)}}).$mount("#root")},"./src/view/GetTodo.vue?vue&type=style&index=0&lang=css&":function(e,o,t){"use strict";var s=t("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/vue-loader/lib/index.js?!./src/view/GetTodo.vue?vue&type=style&index=0&lang=css&");t.n(s).a}},[["./src/main.js",4,6,5]]]);
//# sourceMappingURL=main.c2c0b810706fa1fc9182.js.map