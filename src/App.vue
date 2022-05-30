<template>
  <AppHeader />
  <div class="w-full">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import { firebase } from "./utilities/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: { AppHeader, LoginModal },

  mounted() {
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn');
        this.$store.commit('setAuthUser', user);
      } else {
        this.$store.commit('setIsLoggedIn', false);
        this.$store.commit('setAuthUser', {});
      }
    });
  },
};
</script>
