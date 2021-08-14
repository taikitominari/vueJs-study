let app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    deleteBtn: function() {
      this.message = ""
    }
  }
})