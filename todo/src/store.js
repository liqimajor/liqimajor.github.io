import Vue from 'vue';
import Vuex from 'vuex';
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const persistStore = store => {
  if (localStorage.store) {
    store.replaceState(JSON.parse(localStorage.store))
  }
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.setItem('store', JSON.stringify(state))
  })
}

const store = new Vuex.Store({
  state: {
    newTodo: '',
    todos: []
  },
  getters: {
    newTodo: state => state.newTodo,
    activeTodos: state => {
      return state.todos.filter(todo => !todo.isCompleted)
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.isCompleted)
    },
    doneTodosLength: (state, getters) => {
      return getters.doneTodos.length;
    },
    allCheck: (state, getters) => {
      if(state.todos.length > 0) {
        return state.todos.every(todo => todo.isCompleted)
      }
      return false;
    }
  },
  mutations: {
    GET_TODO(state, todo) {
      state.newTodo = todo;
    },
    ADD_TODO(state) {
      state.todos.push({
        text: state.newTodo,
        isCompleted: false
      })
    },
    EDIT_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
      state.todos = todos;
      state.newTodo = todo.text;
    },
    REMOVE_TODO(state, todo) {
      var todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
      state.todos = todos;
    },
    COMPLETE_TODO(state, todo) {
      todo.isCompleted = !todo.isCompleted;
    },
    CLEAR_TODO(state) {
      state.newTodo = '';
    },
    COMPLETE_ALL(state) {
      var b = state.todos.every(todo => todo.isCompleted);
      state.todos.forEach(todo => todo.isCompleted = !b);
    },
    CLEAR_COMPLETE(state) {
      var todos = state.todos;
      state.todos = todos.filter(todo =>{
        if(!todo.isCompleted) {
          return todo
        }
      });
    },
    EDIT_TODO_ITEM(state, todo) {
      // state.todos.splice(state.todos.indexOf(todo), 1, todo);//只要触发commit，在页面中更改的store就能生效
    }
  },
  actions: {
    getTodo({ commit }, todo) {
      commit('GET_TODO', todo);
    },
    addTodo({ commit }) {
      commit('ADD_TODO');
    },
    editTodo({ commit }, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo);
    },
    completeTodo({ commit }, todo) {
      commit('COMPLETE_TODO', todo);
    },
    clearTodo({ commit }) {
      commit('CLEAR_TODO');
    },
    completeAll({commit}) {
      commit('COMPLETE_ALL');
    },
    clearComplete({commit}) {
      commit('CLEAR_COMPLETE')
    },
    editTodoItem({commit}, todo) {
      commit('EDIT_TODO_ITEM', todo)
    }
  },
  plugins: [persistStore]
});

export default store;
