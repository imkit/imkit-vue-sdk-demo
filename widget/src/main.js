import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDp-XGeZdl7KGXoBzErNFgYcZa6MPKgsZc',
  authDomain: 'imkit-vue-sdk-widget.firebaseapp.com',
  projectId: 'imkit-vue-sdk-widget',
  storageBucket: 'imkit-vue-sdk-widget.appspot.com',
  messagingSenderId: '591213068925',
  appId: '1:591213068925:web:71b9be1b1b58eebae5a714',
  measurementId: 'G-P5HQ59T5JE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
createApp(App).mount('#app')
