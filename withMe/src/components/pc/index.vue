<template>
  <div class="pc">
    <h1>{{ msg }}</h1>
    <img src="../../assets/img/logo.png">
    <div>pcpcpcpcpc</div>
    <button @click="go">跳转到第二个页面</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '在见·花语-PC'
    }
  },
  methods: {
    go () {
      this.$router.push({ path: '/secondPage' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
