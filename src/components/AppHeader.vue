<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      class="mx-2"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">Login</button>
    <button v-else class="mx-2" @click="logout">Log out</button>
  </nav>
</template>

<script>
import {firebase} from "../utilities/firebase"
import { getAuth, signOut } from "firebase/auth";

export default {

  props: {
    // isLoggedIn: {Boolean, default: true}
    isLoggedIn: {type: Boolean, required: true}
  },

  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
      ],
    };
  },

  methods: {
    logout() {
      const auth = getAuth(firebase);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log('logged out');
        })
        .catch((error) => {
          console.log(error)
          // An error happened.
        });
    },
  },
};
</script>
