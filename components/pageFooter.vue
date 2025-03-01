<template>
  <div class="bg-custom-gray-10">
    <div class="flex">
      <div>
        <LinksFooter />
        <LogosFooter />
      </div>
      <SocialsFooter />
    </div>

    <CopyrightFooter />
  </div>
</template>

<script setup lang="ts">
import CopyrightFooter from "./copyrightFooter.vue";
import LinksFooter from "./linksFooter.vue";
import LogosFooter from "./logosFooter.vue";
import SocialsFooter from "./socialsFooter.vue";
</script>
