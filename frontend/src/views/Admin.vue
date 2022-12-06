<template>
  <div>
    <div class="flex justify-center">
      <button class="bg-white text-black rounded-md px-16 py-4 active:scale-95 transition ease-in-out font-bold flex flex-row items-center">Recalculate Fields</button>
    </div>
    <div v-for="(i, index) in users" :key="i.score">
      <div class="flex flex-col justify-between w-screen px-16 py-2 bg-secondary text-error my-8">
        <p class="font-bold text-xl">{{ i.userId }}</p>
        <div class="flex justify-evenly gap-2 py-4">
          <button @click="submit(i.userId, 'win')" class="bg-white text-black rounded-md px-8 py-2 active:scale-95 transition ease-in-out font-bold flex flex-row items-center">Win</button>
          <button @click="submit(i.userId, 'draw')" class="bg-white text-black rounded-md px-8 py-2 active:scale-95 transition ease-in-out font-bold flex flex-row items-center">Draw</button>
          <button @click="submit(i.userId, 'loss')" class="bg-white text-black rounded-md px-8 py-2 active:scale-95 transition ease-in-out font-bold flex flex-row items-center">Loss</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAllUsers, submitScore } from '@/utils/api';

export default {
  data: () => ({
    users: []
  }),
  methods: {
    async getData() {
      this.users = await getAllUsers();
    },
    submit(id, type) {
      submitScore(id, type);
    },
  },
  created() {
    this.getData();
  }
}

</script>
