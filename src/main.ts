import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLinkedin, faGithub, faEnvelope, faSquareXTwitter, faArrowRight)

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')
