let app = new Vue({
  el: '#app',
  data: {
    isLarge: false,
    hasError: true
  },
  methods: {
    colorBtn: function() {
      this.isLarge = !this.isLarge
    },
    sizeBtn: function() {
      this.hasError = !this.hasError
    }
  }
})
