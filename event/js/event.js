let app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    conutBtn: function() {
      this.count++
    }
  }
})