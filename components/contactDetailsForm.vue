<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-8 pl-5 md:pl-6 gap-4 pr-5 md:pr-form-right-padding"
  >
    <div>
      <h3 class="text-brand-blue font-medium mb-form-text">Contact details</h3>
      <p class="text-xs text-form-subtext/[.64]">
        Something also goes here, so it doesn't look that lonely down here
      </p>
    </div>
    <div class="mb-8">
      <label for="name" class="text-xs mb-2 inline-block">Name, surname</label>
      <input
        id="name"
        v-model="name"
        @blur="updateFormData"
        class="bg-white border h-12 mb-4 border-form-border w-full"
      />
      <label for="email" class="text-xs mb-2 inline-block">E-mail</label>
      <input
        id="email"
        v-model="email"
        @blur="updateFormData"
        class="bg-white border h-12 mb-4 border-form-border w-full"
      />
      <div class="flex space-x-2">
        <div class="w-1/3">
          <label for="countryCode" class="text-xs mb-2 inline-block"
            >Country code</label
          >
          <div class="custom-select-wrapper">
            <select
              id="countryCode"
              v-model="countryCode"
              @blur="updateFormData"
              class="bg-white border h-12 border-form-border w-full custom-select"
              aria-label="Phone country code"
            >
              <option v-for="code in countryCodes" :key="code" :value="code">
                {{ code }}
              </option>
            </select>
          </div>
        </div>
        <div class="w-2/3">
          <label for="phoneNumber" class="text-xs mb-2 inline-block"
            >Phone number</label
          >
          <input
            id="phoneNumber"
            v-model="phoneNumber"
            @blur="updateFormData"
            class="bg-white border h-12 border-form-border w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  formData: Object,
});

const emit = defineEmits(["update:formData"]);

const countryCodes = ref<string[]>(["+371", "+372", "+373", "+374"]);

const name = ref<string>("");
const email = ref<string>("");
const countryCode = ref<string>("+371"); // Set the initial value to '+371'
const phoneNumber = ref<string>();

const updateFormData = () => {
  emit("update:formData", {
    name: name.value,
    email: email.value,
    countryCode: countryCode.value,
    phoneNumber: phoneNumber.value,
  });
};
</script>

<style scoped>
.custom-select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: white url("@/assets/dropdownArrow.svg") no-repeat right 10px
    center;
  text-align: center;
  padding: 0 30px 0 10px;
}
</style>
