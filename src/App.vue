<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import { firebase } from "./utilities/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: { AppHeader, LoginModal },

  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
    };
  },

  mounted() {
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        const authUser = user;
        console.log(authUser);
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
};
</script>
