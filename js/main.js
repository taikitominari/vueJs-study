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
    }
  }
})