<script setup lang="ts">
import FieldVue from './components/Field.vue';

const id = "232"
</script>

<template>
  <div class="flex flex-col text-center w-screen bg-primary h-screen p-8">
    <h1 class="text-4xl font-bold text-white top-0 p-4">ID: {{ id }}</h1>
    <div class="flex flex-col h-5/6 max-w-md">
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue id=0 :active="false" />
        <div class="h-full w-1 bg-white" />
        <FieldVue id=1 :active="false" />
      </div>
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue id=2 :active="true" />
        <div class="h-full w-1 bg-white" />
        <FieldVue id=3 :active="false" />
      </div>
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue id=4 :active="false" />
        <div class="h-full w-1 bg-white" />
        <FieldVue id=5 :active="false" />
      </div>
      <div class="flex flex-row h-1/4 p-8">
        <FieldVue id=6 :active="false" />
        <div class="h-full w-1 bg-white" />
        <FieldVue id=7 :active="false" />
      </div>
    </div>
    <p class="text-white font-bold underline"><a href="https://github.com/angelsflyinhell/clash">GitHub</a></p>
  </div>
</template>
