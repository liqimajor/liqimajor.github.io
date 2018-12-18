<template>
  <div id="app">
    <h1>todos</h1>
    <GetTodo></GetTodo>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer class="footer">
      <span class="todo-count fl"><strong>{{$store.getters.activeTodos.length}}</strong> items left
      </span>
      <span class="clear-completed fr" @click="clear">
      Clear completed
      </span>
      <div class="tc">
        <router-link to="/list/0">All</router-link>
        <router-link to="/list/1">Active</router-link>
        <router-link to="/list/2">Completed</router-link>
        <!--         <router-link to="/all">All</router-link>
        <router-link to="/active">Active</router-link>
        <router-link to="/completed">Completed</router-link> -->
      </div>
    </footer>
  </div>
</template>
<script>
  import GetTodo from '../view/GetTodo.vue';
  export default {
    methods: {
      clear() {
        this.$store.dispatch('clearComplete');
      }
    },
    components: {
      GetTodo
    }
  }
</script>
<style>
  @import '../assets/css/normal.css';
  @import '../assets/css/common.css';
  @import '../assets/css/animate.css';
  @import '../assets/fonts/iconfont.css';

  body {
    width: 100%;
    overflow-x: hidden;
  }

  h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 800px;
    margin: 0 auto;
  }

  :focus {
    outline: 0;
  }

  .btn-default {
    line-height: 28px;
    height: 30px;
    padding: 0 12px;
    cursor: pointer;
  }

  .router-link-active {
    color: #66ccff;
    border-color: rgba(175, 47, 47, 0.2);
  }

  .list-group li {
    line-height: 30px;
    position: relative;
    margin: 10px 0;
  }

  .view {
    display: flex;
    align-items: center;
  }

  .list-inner {
    flex: 1;
  }

  .btn-group {
    float: right;
    line-height: 0;
  }

  .checkbox {
    border: 1px solid #000;
    height: 20px;
    width: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
  }

  .checkbox::before {
    display: inline-block;
    content: "\2713";
    color: transparent;
    transition: color ease .3s;
  }

  .list-inner {
    transition: all 0.3s ease;
  }

  .finish .list-inner {
    text-decoration: line-through;
    color: #999;
  }

  .edit .view {
    display: none;
  }

  .editInput {
    display: none;
    position: relative;
    margin: 0;
    width: 100%;
    height: 30px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 0 15px;
  }

  .edit .editInput {
    display: block;
  }

  .checkbox.on::before {
    color: #3bba81;
  }

  a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    margin-top: 15px;
  }

  .clear-completed {
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }
</style>
