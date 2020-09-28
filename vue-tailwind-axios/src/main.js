import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/index.css";
import VueToast from "vue-toast-notification";
Vue.config.productionTip = false;

Vue.use(VueToast, {
	// One of the options
	position: "top-right",
	duration: 5000,
});
Vue.$toast.open("Selamat Datang...");

Vue.use(Vuex);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
