<template>
  <mt-tabbar>
    <mt-tab-item id="index" @click.native="go()">
      <img slot="icon" src="../../assets/img/logo.png">
      花语
    </mt-tab-item>
    <mt-tab-item id="friends" @click.native="go('friends')">
      <img slot="icon" src="../../assets/img/logo.png">
      花友
    </mt-tab-item>
    <mt-tab-item id="market" @click.native="go('market')">
      <img slot="icon" src="../../assets/img/logo.png">
      花市
    </mt-tab-item>
    <mt-tab-item id="mine" @click.native="go('mine')">
      <img slot="icon" src="../../assets/img/logo.png">
      花园
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
    }
  },
  methods: {
    go (url) {
      this.$router.push({ path: url })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
