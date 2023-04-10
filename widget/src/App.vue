<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <div class="relative w-100vw h-100vh bg-gray-700">
    <div
      class="absolute flex items-center justify-center bottom-10 right-10 rounded-full cursor-pointer"
    >
      <img
        width="60"
        height="60"
        class="group-hover:flex hover:(scale-110 transform transition !flex)"
        src="https://img.icons8.com/fluency-systems-filled/180/0ea5e9/chat-message.png"
        @click="show = !show"
      />
      <iframe
        v-show="show"
        src="https://imkit-vue-sdk.web.app/"
        class="absolute bottom-70px right-0 rounded-xl shadow-lg h-600px w-350px bg-white p-1"
      ></iframe>
    </div>
  </div>
</template>

<style scoped></style>
