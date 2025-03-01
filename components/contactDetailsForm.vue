<template>
  <div class="grid grid-cols-2 pt-8 pl-6 gap-4 pr-form-right-padding">
    <div>
      <h3 class="text-brand-blue font-medium mb-form-text">Contact details</h3>
      <p class="text-xs text-form-subtext/[.64]">
        Something also goes here, so it doesn't look that lonely down here
      </p>
    </div>
    <div class="mb-8">
      <p class="text-xs mb-2">Name, surname</p>
      <input
        v-model="name"
        class="bg-white border h-12 mb-4 border-form-border w-full"
      />
      <p class="text-xs mb-2">E-mail</p>
      <input
        v-model="email"
        class="bg-white border h-12 mb-4 border-form-border w-full"
      />
      <div class="flex space-x-2">
        <div class="w-1/3">
          <p class="text-xs mb-2">Country code</p>
          <div class="custom-select-wrapper">
            <select
              v-model="countryCode"
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
          <p class="text-xs mb-2">Phone number</p>
          <input
            v-model="phoneNumber"
            class="bg-white border h-12 border-form-border w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const countryCodes = ref<string[]>(["+371", "+372", "+373", "+374"]);

const name = ref<string>("");
const email = ref<string>("");
const countryCode = ref<string>("+371"); // Set the initial value to '+371'
const phoneNumber = ref<number>();
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
