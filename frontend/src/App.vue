<script setup lang="ts">
import FieldVue from './components/Field.vue';

const id = "232"
const field = 5;

const fieldData: boolean[] = new Array(9).fill(false);
fieldData[field] = true;

</script>

<template>
  <div class="flex flex-col items-center text-center w-screen bg-primary h-screen p-8">
    <h1 class="text-4xl font-bold text-white top-0 p-4">ID: {{ id }}</h1>
    <div class="flex flex-col h-5/6">
      <div class="flex flex-row h-1/4 p-8 w-screen">
        <FieldVue :active="fieldData[0]" />
        <div class="h-full w-1 bg-white" />
        <FieldVue :active="fieldData[1]" />
      </div>
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue :active="fieldData[2]" />
        <div class="h-full w-1 bg-white" />
        <FieldVue :active="fieldData[3]" />
      </div>
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue :active="fieldData[4]" />
        <div class="h-full w-1 bg-white" />
        <FieldVue :active="fieldData[5]" />
      </div>
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue :active="fieldData[6]" />
        <div class="h-full w-1 bg-white" />
        <FieldVue :active="fieldData[7]" />
      </div>
    </div>
    <p class="text-white font-bold underline"><a href="https://github.com/angelsflyinhell/clash">GitHub</a></p>
  </div>
</template>
