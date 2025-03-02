<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 pt-8 pl-5 md:pl-6 gap-4 pr-5 md:pr-form-right-padding"
  >
    <p class="text-xs text-form-subtext/[.64]">
      By submitting this form you agree to airBaltic's
      <a
        href="https://www.airbaltic.com/en/privacy-policy"
        target="_blank"
        class="underline"
        aria-label="Read airBaltic's Privacy Policy"
      >
        Privacy Policy
      </a>
    </p>
    <div class="flex justify-center md:justify-start">
      <button
        class="rounded-md bg-brand-blue-ui font-bold text-white mb-11 md:mb-9 w-full md:w-confirmation-button-width h-confirmation-button-height"
        @click="submitForm"
        aria-label="Confirm your submission"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  contactDetails: Object,
  flightDetails: Object,
});

const emit = defineEmits(["submit"]);

const submitForm = () => {
  emit("submit");
};
</script>
