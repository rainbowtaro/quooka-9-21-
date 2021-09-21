<template>
  <div class="flex flex-col min-h-screen bg-orange-400">
    <header class="container mx-auto"> <!-- containerとmx-autoにより中央寄りになる -->
      <div class="m-0"> <!-- 余白0 -->
          <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">
            <router-link to="/">進行中のプロジェクト</router-link>
          </button>
          <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">
            <router-link to="/watch">完成した作品</router-link>
          </button>
      </div>
    </header>
    <main class="flex-grow">
      <h1>Quokka</h1>
      <p>ログイン中</p>
      <Plus/>
    </main>
    
    <footer class="bg-gray-200">
      <div class="m-0"> <!-- 余白0 -->
          <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition "
          @click="signOut">
            サインアウト
          </button>
          <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">
            <router-link to="/user">ユーザ設定</router-link>
          </button>
      </div>
    </footer>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";


import Plus from "../components/icons/Plus";

export default {
  components: {
    Plus
  },
  methods: {
      signOut() {
        firebase.auth().signOut(); //サインインしているユーザをサインアウトするFirbaseのメソッド
        this.$router.push("/signin"); //this.$router.push(‘home’)はRouterの機能で指定したパスにリダイレクトすることができます。
      }
  }
}
/*
ポイント

ログインユーザの取得

ユーザの認証時にFirebaseのonAuthStateChangedメソッドを利用して
ユーザ情報を取得しましたがここではfirebase.auth().currentUserを使用してユーザ情報を取得します。
どっちでもOK
*/
</script>
