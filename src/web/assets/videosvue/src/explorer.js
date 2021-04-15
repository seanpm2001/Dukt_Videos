import Vue from 'vue'
import Explorer from './Explorer.vue'
import store from './js/store'

Vue.config.productionTip = false

window.VideoExplorerConstructor = Vue.extend({
    render: h => h(Explorer),
    store,
})
