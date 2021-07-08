let app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [

    ]
  },
  methods: {
    addItem: function(event) {
      if (this.newItem !== ""){
        let todo = {
          item: this.newItem,
          isDone: false
        };

        this.todos.push(todo);
        this.newItem = "";
      }
    },
    deleteItem: function(index) {
      let confirm = window.confirm('削除しますか？')

      if( confirm ) {
        this.todos.splice(index, 1);
      } else {
        alert('キャンセルされました')
      }
    }
  }
})