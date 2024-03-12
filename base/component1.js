<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="./componentDemo.js"></script>

<div id="app">
  {{ message }}
  <componentDemo></componentDemo>
</div>

<script lang="javascript">
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    components: {
      componentDemo
    }
  })
</script>