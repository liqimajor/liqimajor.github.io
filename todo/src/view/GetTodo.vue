<template>
  <div id="get-todo" class="fillArea">
    <!-- <input class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to ..." @keyup.enter="addTodo" /> -->
    <input class="textInput" v-model="msg" placeholder="I need to ..." @keyup.enter="addTodo" />
    <button class="btn btn-primary btn-add" @click="addTodo">
      <i class="iconfont icon-add"></i> ADD
    </button>
  </div>
</template>
<script>
  export default {
    methods: {
      getTodo(e) {
        var str = e.target.value.trim();
        this.$store.dispatch('getTodo', str)
      },
      addTodo() {
        if (this.$store.state.newTodo) {
          this.$store.dispatch('addTodo');
          this.$store.dispatch('clearTodo');
        }
      }
    },
    computed: {
      newTodo() {
        return this.$store.getters.newTodo
      },
      msg: {
        get() {
          return this.$store.getters.newTodo
        },
        set(value) {
          this.$store.dispatch('getTodo', value.trim())
        }
      }
    }
  }
</script>
<style>
  .btn-primary {
    background: #66ccff;
    color: #fff;
    padding: 6px 12px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }


  .fillArea {
    padding: 10px 10px 10px 60px;
    border: solid 1px #f0f0f0;
    background: rgba(0, 0, 0, 0.003);
    position: relative;
    display: flex;
  }

  .textInput {
    border: none;
    flex: 1;
  }
</style>
