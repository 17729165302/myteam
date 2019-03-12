import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Fenlei from '../pages/Fenlei'
import Leka from '../pages/Leka'

import Goodslist from '../pages/Goodslist'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/Fenlei',
            name: 'Fenlei',
            component: Fenlei
        },
        {
            path: '/Leka',
            name: 'Leka',
            component: Leka
        },
        {
            path: '/Goodslist/:id',
            name: 'Goodslist',
            component: Goodslist
        },
    ]
})
