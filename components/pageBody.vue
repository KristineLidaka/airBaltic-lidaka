<template>
  <div class="mt-12 mb-16 mr-custom">
    <h1 class="text-header text-brand-blue font-light mb-7">
      Request assistance from us
    </h1>
    <p class="text-xl text-brand-blue mb-7">
      Providing assistance to passengers with reduced mobility is part of our
      service at airBaltic.
    </p>
    <h2 class="font-medium text-brand-blue">We can help you:</h2>
    <ul
      class="list-disc list-inside marker:text-brand-green grid grid-cols-2 row-span-3"
    >
      <li v-for="service of services" class="text-brand-blue mt-4">
        {{ service }}
      </li>
    </ul>
    <div class="grid grid-cols-2 gap-5 mt-6">
        <AlertInfo :text="infoText" />
        <AlertWarning :text="warningText" />
    </div>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AlertWarning from "./alertWarning.vue";
import AlertInfo from "./alertInfo.vue";
import ContactForm from "./contactForm.vue";

const services = ref<string[]>([
  "Get to the aircraft",
  "Board the aircraft",
  "Move around the aircraft cabin if required",
  "Disembark the aircraft",
  "Transfer between flights",
]);
const warningText = ref<string>('Please note, we are unable to provide eating assistance and medical services.');
const infoText = ref<string>('Personal mobility equipment and guide dogs are carried free of charge.');
</script>
