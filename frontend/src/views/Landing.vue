<template>
  <div class="w-screen flex justify-center flex-col h-screen gap-16 px-8">
    <router-link
      class=" bg-secondary text-error rounded-md px-2 py-8 active:scale-95 transition ease-in-out flex font-bold flex-row items-center"
      to="/spectate">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
        class="w-24 h-12">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
      <p class="text-2xl">Zuschauer</p>
    </router-link>
    <button
      class="bg-secondary text-error rounded-md px-2 py-8 active:scale-95 transition ease-in-out font-bold flex flex-row items-center"
      @click="createPlayer()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
        class="w-24 h-12">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
      <p class="text-2xl">Team</p>
    </button>
  </div>
</template>

<script lang="ts">
import { createUser } from '@/utils/api';

export default {
  methods: {
    async createPlayer() {
      const id = (await createUser()).id;
      this.$router.push(`/${id}`);
    }
  }
}
</script>
