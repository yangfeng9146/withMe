import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/mobile/index'
import friends from '@/components/mobile/friends'
import market from '@/components/mobile/market'
import mine from '@/components/mobile/mine'

// import MobilePage from '@/components/mobile/mobilePage'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/friends',
      name: 'friends',
      component: friends
    }, {
      path: '/market',
      name: 'market',
      component: market
    }, {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router
