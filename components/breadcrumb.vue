<template>
  <div
    class="border-b border-custom-gray-20"
    role="navigation"
    aria-label="Breadcrumb"
  >
    <ul class="flex ml-custom">
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        @click="navigate(index)"
        class="inline-flex items-center"
      >
        <a
          class="text-custom-gray-50 text-[13px]"
          :class="{
            'underline underline-offset-4 decoration-brand-green':
              !!breadcrumb.link,
          }"
          :href="breadcrumb.link"
          :aria-label="breadcrumb.name"
        >
          {{ breadcrumb.name }}
        </a>
        <img
          v-if="breadcrumb.link"
          class="p-4"
          :src="Chevron"
          :alt="`Navigate to ${breadcrumb.name}`"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Chevron from "@/assets/BreadcrumbChevro.svg";
const props = defineProps<{
  breadcrumbList: { name: string; link?: string }[];
}>();

function navigate(index: number): void {
  //Navigate to page
}
</script>
