<template>
  <div class="flex flex-col h-screen">
    <header class="flex justify-between p-4 border-b items-center">
      <h1 class="font-semibold text-xl leading-tight">
        <router-link to="/about">Quokka</router-link>
      </h1>
      <button class="py-1 px-4 border-2 border-orange-800 rounded">
        <router-link to="/register">Quokkaを始める</router-link>
      </button>
    </header>
    <div class="bg-orange-400 flex-auto">
      <div class="flex justify-center mt-16">
        <div class="w-4/5 border bg-white">
          <div class="my-12 text-center">
            <h2 class="text-4xl font-bold">サインイン</h2>
            <p class="my-4">
              <span class="font-semibold">メールアドレス</span>と
              <span class="font-semibold">パスワード</span>を<br>入力してください。
            </p>
            <form @submit.prevent="signIn">
              <div class="mb-2">
                <input
                  type="email"
                  v-model="email"
                  placeholder="you@example.com"
                  class="text-xl w-3/5 p-3 border rounded"
                />
              </div>
              <div class="mb-2">
                <input
                  type="password"
                  v-model="password"
                  class="text-xl w-3/5 p-3 border rounded"
                  placeholder="パスワード"
                />
              </div>
              <button type="submit" class="text-xl w-3/5 bg-blue-400 text-white py-2 rounded">サインイン</button>
            </form>
          </div>
        <!--
          <div>
                <p @click="googleLogin" class="my-4 border-orange-800">
                    <span class="font-semibold ">Google</span>アカウントでサインイン
                </p>
          </div>
        -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        signIn() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password) 
                .then(response => {
                    console.log(response);
                    this.$router.push("/");
                })
                .catch(e => {
                    console.log(e);
                })
        },
        /*
        googleLogin() {
            firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        }
        */
    }
};
</script>