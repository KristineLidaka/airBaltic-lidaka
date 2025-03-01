<template>
  <div class="ml-custom mt-12 mr-14 bg-custom-gray-10 rounded-md">
    <ul class="divide-y divide-custom-gray-20">
      <li
        v-for="(item, index) in navigationSidebar"
        :key="index"
        class="pr-6"
        :class="{
          'border-l-2 border-l-brand-green': !item.link,
        }"
        @click="navigate(index)"
      >
        <a
          class="text-brand-blue font-medium text-sm pl-6 my-2.5 inline-block"
          :class="{
            'text-brand-green': !item.link,
          }"
          :href="item.link"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  navigationSidebar: { name: string; link?: string }[];
}>();

function navigate(index: number): void {
  //Navigate to page
}
</script>
