<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-8 pl-5 md:pl-6 gap-4 pr-5 md:pr-form-right-padding"
  >
    <div>
      <h3 class="text-brand-blue font-medium mb-form-text">Select flight</h3>
      <p class="text-xs text-form-subtext/[.64]">
        Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl
        diam. In vel felis in metus vulputate imperdiet vestibulum at dolor.
      </p>
    </div>
    <div class="mb-9">
      <div>
        <p class="text-xs mb-2">
          <label for="flightNumber">Flight number</label>
        </p>
        <input
          id="flightNumber"
          v-model="flightNumber"
          @blur="updateFormData"
          class="bg-white border h-12 mb-4 border-form-border w-full"
        />
        <p v-if="flightErrors?.flightNumber" class="text-red-500 text-xs mt-1">
          {{ flightErrors.flightNumber }}
        </p>
      </div>
      <p class="text-xs mb-2"><label for="day">Flight date</label></p>
      <div class="flex space-x-2 mb-2">
        <div class="w-1/3">
          <input
            id="day"
            v-model="day"
            @blur="updateFormData"
            placeholder="DD"
            class="bg-white border h-12 border-form-border w-full text-center"
          />
          <p v-if="flightErrors?.day" class="text-red-500 text-xs mt-1">
            {{ flightErrors.day }}
          </p>
        </div>
        <div class="w-1/3">
          <input
            id="month"
            v-model="month"
            @blur="updateFormData"
            placeholder="MM"
            class="bg-white border h-12 border-form-border w-full text-center"
          />
          <p v-if="flightErrors?.month" class="text-red-500 text-xs mt-1">
            {{ flightErrors.month }}
          </p>
        </div>
        <div class="w-1/3">
          <div class="custom-select-wrapper">
            <select
              id="year"
              v-model="year"
              @blur="updateFormData"
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
          <p v-if="flightErrors?.year" class="text-red-500 text-xs mt-1">
            {{ flightErrors.year }}
          </p>
        </div>
      </div>
      <p class="text-form-subtext/[.64] text-xs mb-7">For example: 30 8 1972</p>
      <div class="flex justify-center md:justify-start items-center">
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps<{
  formData: {
    flightNumber: string;
    day: number;
    month: number;
    year: number;
  };
  flightErrors: {
    flightNumber?: string;
    day?: string;
    month?: string;
    year?: string;
  };
}>();

const emit = defineEmits(["update:formData"]);

const flightNumber = ref<string>("");
const day = ref<string>("");
const month = ref<string>("");
const year = ref<string>("");
const disabled = ref<boolean>(true);

const currentYear = new Date().getFullYear();
const yearOptions = computed(() => {
  const years: number[] = [];
  for (let i = currentYear; i >= currentYear - 10; i--) {
    years.push(i);
  }
  return years;
});

const updateFormData = () => {
  emit("update:formData", {
    flightNumber: flightNumber.value,
    day: Number(day.value),
    month: Number(month.value),
    year: year.value,
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
