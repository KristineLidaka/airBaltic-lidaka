<template>
  <div
    class="h-alert text-brand-blue text-sm text-center font-Roboto bg-warning flex items-center px-6 py-4 rounded-md"
  >
    <p class="mx-auto">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>
