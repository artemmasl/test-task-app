import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuelidate)


firebase.initializeApp({
  apiKey: "AIzaSyAHE1ulFrDBzd-afcAakaPixlTfWKBgFL4",
  authDomain: "vue-test-task-fb690.firebaseapp.com",
  projectId: "vue-test-task-fb690",
  storageBucket: "vue-test-task-fb690.appspot.com",
  messagingSenderId: "607710673596",
  appId: "1:607710673596:web:6f7e736310397489fe6eb9",
  measurementId: "G-B4P0Q5C363"
})

// onAuthStateChanged может сработать несколько раз и для того чтобы не инициализировать приложение тысячи раз стоит заглушка app.
let app; 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})

