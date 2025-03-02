<template>
  <div class="mt-custom-22 md:mt-12 mr-0 md:mr-custom mb-5 md:mb-16">
    <h1
      class="text-mobile-header md:text-header text-brand-blue font-light mb-custom-22 md:mb-7 mr-8 md:mr-0 ml-5 md:ml-0"
    >
      Request assistance from us
    </h1>
    <p
      class="text-lg md:text-xl font-light md:font-normal text-brand-blue mb-6 md:mb-7 mr-8 md:mr-0 ml-5 md:ml-0"
    >
      Providing assistance to passengers with reduced mobility is part of our
      service at airBaltic.
    </p>
    <h2 class="font-medium text-brand-blue ml-5 md:ml-0">We can help you:</h2>
    <ul
      class="list-disc list-inside marker:text-brand-green grid grid-cols-1 md:grid-cols-2 row-span-3 ml-5 md:ml-0"
    >
      <li
        v-for="service of services"
        class="text-brand-blue mt-3 md:mt-4 text-sm md:text-base"
      >
        {{ service }}
      </li>
    </ul>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 mt-6">
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
const warningText = ref<string>(
  "Please note, we are unable to provide eating assistance and medical services."
);
const infoText = ref<string>(
  "Personal mobility equipment and guide dogs are carried free of charge."
);
</script>
