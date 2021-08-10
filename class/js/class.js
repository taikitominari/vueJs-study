let app = new Vue({
  el: '#app',
  data: {
    isLarge: false,
    hasError: false
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
