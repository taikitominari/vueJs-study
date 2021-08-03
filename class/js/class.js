let app = new Vue({
  el: '#app',
  data: {
    isLarge: false
  },
  methods: {
    switchBtn: function() {
      this.isLarge = !this.isLarge
    }
  }
})
