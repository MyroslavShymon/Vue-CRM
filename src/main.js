import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(messagePlugin);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyDdVqAuIwLBlqz32fwEAO2QoJby5igjy8k",
  authDomain: "vue-crm-shymon.firebaseapp.com",
  projectId: "vue-crm-shymon",
  storageBucket: "vue-crm-shymon.appspot.com",
  messagingSenderId: "849912772139",
  appId: "1: 849912772139: web: 078e672947ae696ca59c6e",
  measurementId: "G-SM092MLE3B",
});
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
