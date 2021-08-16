let helloComponent = {
  template: '<p>Hello</p>'
}

let app = new Vue({
  el: '#app',
  components: {
    'helloComponent' : helloComponent
  }
})