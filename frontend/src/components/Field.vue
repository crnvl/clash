<script setup lang="ts">
    defineProps<{
        active: boolean;
    }>();
</script>

<template>
    <div class="flex justify-center items-center w-2/4 bg-secondary rounded-md shadow-md">
        <div v-if="active" class="h-12 w-6 rounded-full bg-error shadow-md"/>
    </div>
</template>