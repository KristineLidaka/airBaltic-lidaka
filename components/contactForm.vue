<template>
  <div
    class="bg-custom-gray-10 divide-y divide-custom-gray-20 mt-8 rounded-md"
  >
    <ContactDetailsForm />
    <FlightDetailsForm />
    <ConfirmationForm />
  </div>
</template>

<script setup lang="ts">
import ConfirmationForm from "./confirmationForm.vue";
import ContactDetailsForm from "./contactDetailsForm.vue";
import FlightDetailsForm from "./flightDetailsForm.vue";
</script>
