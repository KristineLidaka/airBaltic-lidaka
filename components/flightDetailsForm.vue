<template>
  <div class="grid grid-cols-2 pt-8 pl-6 gap-4 pr-form-right-padding">
    <div>
      <h3 class="text-brand-blue font-medium mb-form-text">Select flight</h3>
      <p class="text-xs text-form-subtext/[.64]">
        Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl
        diam. In vel felis in metus vulputate imperdiet vestibulum at dolor.
      </p>
    </div>
    <div class="mb-9">
      <div>
        <p class="text-xs mb-2">Flight number</p>
        <input
          v-model="flightNumber"
          class="bg-white border h-12 mb-4 border-form-border w-full"
        />
      </div>
      <p class="text-xs mb-2">Flight date</p>
      <div class="flex space-x-2 mb-2">
        <input
          v-model="day"
          placeholder="DD"
          class="bg-white border h-12 border-form-border w-1/3 text-center"
        />
        <input
          v-model="month"
          placeholder="MM"
          class="bg-white border h-12 border-form-border w-1/3 text-center"
        />
        <div class="custom-select-wrapper w-1/3">
          <select
            v-model="year"
            class="bg-white border h-12 border-form-border w-full custom-select"
            aria-label="Year"
          >
            <option value="" disabled selected hidden>YYYY</option>
            <option
              v-for="yearOption in yearOptions"
              :key="yearOption"
              :value="yearOption"
            >
              {{ yearOption }}
            </option>
          </select>
        </div>
      </div>
      <p class="text-form-subtext/[.64] text-xs mb-7">For example: 30 8 1972</p>
      <button
        class="border border-brand-blue-ui rounded-md text-brand-blue-ui text-sm w-button-width h-button-height mr-5 font-bold"
      >
        Add flight
      </button>
      <button
        class="text-sm w-button-width h-button-height font-bold"
        :class="{
          'text-form-subtext/[.64]': disabled,
          'text-brand-blue-ui': !disabled,
        }"
      >
        Delete flight
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const flightNumber = ref<string>("");
const day = ref<string>("");
const month = ref<string>("");
const year = ref<string>("");
const disabled = ref<boolean>(true);

const currentYear = new Date().getFullYear();
const yearOptions = computed(() => {
  const years = [];
  for (let i = currentYear; i >= currentYear - 10; i--) {
    years.push(i);
  }
  return years;
});
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
