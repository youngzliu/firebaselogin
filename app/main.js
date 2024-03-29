import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import LoginPage from './components/LoginPage'


Vue.use(VueDevtools)
Vue.config.silent = false;

var firebase = require("nativescript-plugin-firebase");
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function(instance) {
      console.log("firebase.init done");
    },
    function(error) {
      console.log("firebase.init error: " + error);
    }
  );

new Vue({
  render: h => h('frame', [h(LoginPage)])
}).$start()