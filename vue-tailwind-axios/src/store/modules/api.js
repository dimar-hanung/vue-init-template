import axios from "axios";
import NProgress from "nprogress";
import Vue from "vue";


const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {

    // console.log("storee", store);
    NProgress.start();
    console.log({ request: config });
    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  function(response) {
    NProgress.done();
    // console.log(store.state.Settings.toastActive);
      Vue.$toast.open("response.message");
    console.log({ response });
    return response;
  },
  function(error) {
    NProgress.done();
      Vue.$toast.error(error.message);
      Vue.$toast.error(error.response.message);

    return Promise.reject(error.response.data.message);
  }
);

export default instance;