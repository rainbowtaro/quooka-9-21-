import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import "./assets/css/tailwind.css"

import VueSwal from 'vue-swal'
import VModal from 'vue-js-modal'
Vue.use(VueSwal)
Vue.use(VModal)

Vue.config.productionTip = false



var firebaseConfig = {
  apiKey: "AIzaSyDRoRxqWRbvZBwBQD88V_Y0xzanyDeQNNQ",
  authDomain: "quokka-1c5c8.firebaseapp.com",
  databaseURL: "https://quokka-1c5c8-default-rtdb.firebaseio.com",
  projectId: "quokka-1c5c8",
  storageBucket: "quokka-1c5c8.appspot.com",
  messagingSenderId: "1013298843915",
  appId: "1:1013298843915:web:5da5a5c39c0b5bd209120e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
