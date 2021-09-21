import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateVideo from '../views/CreateVideo.vue'
import Watch from '../views/Watch.vue'
import User from '../views/User.vue'

import Register from '../views/Register.vue'
import Signin from '../views/Signin.vue'


import firebase from "firebase/app";
import "firebase/auth";

import JoinProject from "../views/JoinProject.vue"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log(user);
          next()
        } else {
          next("/signin");
        }
      });
    }

  },
  {
    path: '/joinproject',
    name: 'JoinProject',
    component: JoinProject,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          next()
        } else {
          next("/signin");
        }
      });
    }
  },
  {
    path: '/createvideo',
    name: 'CreateVideo',
    component: CreateVideo,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log(user);
          next()
        } else {
          next("/signin");
        }
      });
    }

  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log(user);
          next()
        } else {
          next("/signin");
        }
      });
    }

  },
  {
    path: '/user',
    name: 'User',
    component: User,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log(user);
          next()
        } else {
          next("/signin");
        }
      });
    }

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          next("/");
        } else {
          next();
        }
      });
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          next("/");
        } else {
          next();
        }
      });
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
