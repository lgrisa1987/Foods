import Vue from 'vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faEgg,
  faStroopwafel,
  faCheese,
  faHotdog,
  faDrumstickBite,
  faAppleAlt,
  faIceCream,
  faFish,
  faCookie,
  faSeedling,
  faArrowRight,
  faHome,
  faUtensils,
  faHamburger,
  faPizzaSlice,
  faBlenderPhone
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faEgg, faStroopwafel, faCheese, faHotdog, faDrumstickBite, faAppleAlt, faIceCream, faFish, faCookie, faSeedling, faArrowRight, faHome, faUtensils, faHamburger, faPizzaSlice, faBlenderPhone)

Vue.component('font-awesome-icon', FontAwesomeIcon)
