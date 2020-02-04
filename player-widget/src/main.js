import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRandom, faRedoAlt, faExchangeAlt, faBars, faVolumeUp, faShareAlt, faHeart, faPlay, faStepBackward, faStepForward, faPause, faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export const bus = new Vue();

library.add(faRandom, faRedoAlt, faExchangeAlt, faBars, faVolumeUp, faShareAlt, faHeart, faPlay, faStepBackward, faStepForward, faPause, faReply)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
