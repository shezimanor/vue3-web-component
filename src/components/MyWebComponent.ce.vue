<script setup>
import { ref } from 'vue';

defineProps({
  msg: {
    type: String,
    default: ''
  }
});

const count = ref(0);
console.log('test');
</script>

<template>
  <h1>My Web Component</h1>
  <p>這是用 Vue3+Vite 寫出來的 Web Component: {{ msg }}</p>
  <slot name="something" />
  <button type="button" @click="count++">{{ count }}</button>
</template>

<style lang="scss">
@import '@/assets/scss/reset';
button {
  appearance: none;
  width: auto;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  padding: 7px 15px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  color: rgb(231, 231, 231);
  border-color: rgb(31, 144, 196);
  background-color: rgb(31, 144, 196);
  cursor: pointer;
}
</style>
