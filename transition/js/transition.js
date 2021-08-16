let app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    showBtn: function() {
      this.show = !this.show
    }
  }
})