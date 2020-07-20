<template>
  <div class="mobile">
    <h1>{{ msg }}</h1>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/mobile/tabbar'
export default {
  name: 'friends',
  components: {
    tabbar
  },
  data () {
    return {
      msg: '花语-花友'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
