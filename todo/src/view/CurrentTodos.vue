<template>
  <div id="current-todos" class="container">
    <h3>Active({{ todos.length }})</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in todos">
        <div class="view">
          <span class="checkbox"></span>
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
      todos() {
        return this.$store.getters.activeTodos;
      }
    }
  }
</script>
<style>

</style>
