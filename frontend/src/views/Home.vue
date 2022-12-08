<script lang="ts">
import { getField } from '@/utils/api';
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  data() {
    return {
      fieldData: new Array(8).fill(false),
      id: ""
    }
  },
  methods: {
    async getData(fieldData: boolean[], id: any) {
      const field = (await getField(id)).position;
      fieldData[field] = true;
      this.fieldData = fieldData;
    }
  },
  created() {
    this.$data.id = router.currentRoute.value.params.id as string;
    this.getData(this.fieldData, this.$data.id);
  }
})
</script>

<template>
  <h1 class="text-4xl font-bold text-white top-0 p-4">{{ $data.id }}</h1>
  <div class="flex flex-col h-5/6">
    <div class="flex flex-row h-1/4 p-8 w-screen">
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[0]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
      <div class="h-full w-1 bg-white" />
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[1]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
    </div>
    <div class="flex flex-row h-1/4 p-8">
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[2]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
      <div class="h-full w-1 bg-white" />
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[3]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
    </div>
    <div class="flex flex-row h-1/4 p-8">
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[4]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
      <div class="h-full w-1 bg-white" />
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[5]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
    </div>
    <div class="flex flex-row h-1/4 p-8">
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[6]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
      <div class="h-full w-1 bg-white" />
      <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="fieldData[7]" class="h-12 w-6 rounded-full bg-error shadow-md" />
      </div>
    </div>
  </div>
  <p class="text-white font-bold underline"><a href="https://github.com/angelsflyinhell/clash">GitHub</a></p>
</template>
