let app = new Vue({
  el: '#app',
  data: {
    count: 0,
    message: ''
  },
  methods: {
    conutBtn: function($event , message) {
      this.count++
      this.message = message
      console.log($event)
    }
  }
})