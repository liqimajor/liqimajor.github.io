<template>
  <div id="completed-todos" class="container">
    <h3>Completed({{ completed.length }})</h3>
    <ul class="list-group">
      <div class="view"></div>
      <li class="list-group-item" v-for="todo in completed" :class="{finish: todo.isCompleted}">
        <div class="view">
          <span class="checkbox" :class="{on: todo.isCompleted}"></span>
          <div class="list-inner">
            {{ todo.text }}
          </div>
          <div class="btn-group">
            <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
              <span class="iconfont icon-edit"></span> Edit </button>
            <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
              <span class="iconfont icon-wancheng"></span> Complete
            </button>
            <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
              <span class="iconfont icon-del"></span> Remove
            </button>
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      edit(todo) {
        this.$store.dispatch('editTodo', todo);
      },
      complete(todo) {
        this.$store.dispatch('completeTodo', todo);
      },
      remove(todo) {
        this.$store.dispatch('removeTodo', todo);
      }
    },
    computed: {
      completed() {
        return this.$store.getters.doneTodos
      }
    }
  }
</script>
<style>
</style>
