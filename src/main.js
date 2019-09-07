// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'typeface-montserrat'
import '~/styles/main.css'
import App from '~/components/App'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.render = h => h(App)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.prototype.$shared = new Vue({data: {
    layout: 'default'
  }});
}
