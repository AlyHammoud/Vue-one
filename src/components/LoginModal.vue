<template>
  <section
    @click="$emit('close-login')"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border-2">
          <h1 class="text-2xl text-center">Login</h1>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label>Email or Username</label>
              <input
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="Email or user"
                v-model="email"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                type="password"
                class="rounded shadow p-2 w-full"
                placeholder="password"
                v-model="password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full rounded shadow bg-gradient-to-r from-red-800 to-pink-500 p-2 text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
        const auth = getAuth(firebase);
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {console.log(res)})
        .catch((e) => {
            console.log(e)
        });
    },
  },
};
</script>

<style></style>
