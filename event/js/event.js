let app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    conutBtn: function(event) {
      this.count++
      console.log(event)
      console.log(event.target.tagName)
      console.log(event.target.innerHTML)
      console.log(event.target.type)
    }
  }
})