<template>
  <div>
    <div v-for="(i, index) in users" :key="i.score">
      <div class="flex flex-row justify-between w-screen px-16 py-4 bg-secondary text-error my-2">
        <p class="font-bold text-xl">#{{( index + 1 )}}</p>
        <p class="font-bold text-xl">{{ i.userId }}</p>
        <p class="font-bold text-xl">{{ i.score }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAllUsers } from '@/utils/api';

export default {
  data: () => ({
    users: []
  }),
  methods: {
    async getData() {
      this.users = await getAllUsers();
    }
  },
  created() {
    this.getData();
  }
}

</script>
