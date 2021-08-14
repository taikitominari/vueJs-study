let app = new Vue({
  el: '#app',
  data: {
    now: "00:00:00"
  },
  methods: {
    nowBtn: function(message) {
      let date = new Date();
      this.now = date.toLocaleTimeString();
    }
  }
})