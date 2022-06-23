require('./bootstrap');

import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { Link } from "@inertiajs/inertia-vue";
import { InertiaProgress } from '@inertiajs/progress'


Vue.use(Vuetify);

createInertiaApp({
  resolve: async name => {
    let page = (await import(`./Pages/${name}`)).default;

    return page;

  },



  setup({ el, App, props, plugin }) {
    Vue.use(plugin)
      .component('Link', Link)

    new Vue({
      vuetify: new Vuetify({
        theme: {
          themes: {
            light: {
              main: '#f5f5f5',
              drawer: '#2a3042',
              verify: '#f6f8fc',
            },
          },
        },
        icons: {
          iconfont: 'mdi', // default - only for display purposes
        },
      }),
      render: h => h(App, props),
    }).$mount(el)
  },
});
InertiaProgress.init({


  // The color of the progress bar.
  color: 'red',

  delay: 800,

  // Whether to include the default NProgress styles.
  includeCSS: true,


  // Whether the NProgress spinner will be shown.
  showSpinner: true,

})
  ;