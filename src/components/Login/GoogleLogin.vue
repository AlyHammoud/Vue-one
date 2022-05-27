<template>
  <section class="mt-2 text-center">
    <button class="px-2 rounded border" @click="logginWithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  methods: {
    logginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider)
      .then(() => this.$emit('close-login-from-google'));
    },
  },
};
</script>

<style></style>
