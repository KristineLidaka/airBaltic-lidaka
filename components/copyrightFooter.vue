<template>
  <div
    class="mx-5 md:mx-custom md:border-t border-t-form-border flex md:flex-row flex-col-reverse md:justify-between"
  >
    <div class="flex md:space-x-14 space-x-0 md:flex-row flex-col">
      <a
        v-for="link in copyrightLinks"
        :key="link.name"
        :href="link.link"
        class="h-9 md:mt-3 md:mb-8 flex items-center text-[13px] text-footer-text"
      >
        {{ link.name }}
      </a>
    </div>
    <div class="h-9 mt-8 md:mt-3 md:mb-8 flex items-center md:justify-center">
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
