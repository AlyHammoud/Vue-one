import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      auth: {},
      isLoginOpen: false,
    };
  },
  mutations: {
    setIsLoggedIn(state, payload = true){
      state.isLoggedIn = payload;
    },

    setAuthUser(state, payload){
      state.auth = payload;
    },

    setLoginModal(state, payload){
      state.isLoginOpen = payload;
    }

  },
});

// Install the store instance as a plugin
export default store;