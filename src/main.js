// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'typeface-montserrat'
import '~/styles/main.scss'
import Fluid from 'vue-fluid'
import App from '~/components/App'
import DefaultLayout from '~/layouts/Default.vue'


export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.render = h => h(App)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  router.options.scrollBehavior = (to, from, savedPosition) => {
    let pos = { x: 0, y: 0 };
    /* route transition duration */
    const delay = from.path === '/' ? 0 : 500;

    if (savedPosition) {
      pos = savedPosition;
    } else if (to.hash) {
      pos = {
        selector: to.hash
      };
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(pos);

      }, delay);
    });
  };

  Vue.use(Fluid, {
    componentName: 'fl',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5.625rem'
    }
  });

  Vue.prototype.$shared = (new Vue({
    data: {
      layout: 'default',
      scrollPos: 0
    }
  })).$data;
}
