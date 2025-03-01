<template>
  <div
    class="mx-custom border-t border-t-form-border flex justify-between items-center"
  >
    <div class="flex space-x-14">
      <a
        v-for="link in copyrightLinks"
        :key="link.name"
        :href="link.link"
        class="h-9 mt-3 mb-8 flex items-center text-[13px] text-footer-text"
      >
        {{ link.name }}
      </a>
    </div>
    <div class="h-9 mt-3 mb-8 flex justify-center items-center">
      <p class="text-custom-gray-50 text-[13px]">© 2017 airBaltic</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Link {
  name: string;
  link: string;
}

const copyrightLinks = ref<Link[]>([
  { name: "Legal information", link: "legal-information" },
  { name: "Site index", link: "site-index" },
  { name: "Technical requirements", link: "technical-requirements" },
]);
</script>
