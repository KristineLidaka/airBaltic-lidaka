<template>
  <div>
    <div class="block md:flex border-b border-custom-gray-20">
      <div class="flex md:block justify-between items-center">
        <button class="ml-6 visible md:invisible">
          <img :src="Hamburger" alt="dropdown icon" />
        </button>
        <div
          class="ml-0 md:ml-custom h-14 md:h-28 w-24 md:w-44 flex items-center justify-center bg-brand-green"
        >
          <img
            class="h-4 md:h-8 w-auto"
            :src="AirBalticLogo"
            alt="airBaltic logo"
          />
        </div>
      </div>
      <div v-if="!isMobile" class="flex flex-col items-end flex-1 mr-custom">
        <div class="my-auto">
          <button
            class="text-custom-gray-70 text-xs pl-6 inline-flex items-center"
            :key="index"
            v-for="(button, index) in headerButtons"
          >
            <img class="pr-2" :src="button.src" :alt="button.alt" />{{
              button.name
            }}
          </button>
        </div>
        <div class="my-auto">
          <button
            class="text-custom-gray-70 text-xl pl-[30px]"
            :key="index"
            @click="navigate(index)"
            v-for="(button, index) of navigationButtons"
          >
            {{ button.name }}
          </button>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="flex justify-start items-center pl-5 pt-5">
      <Icon class="text-brand-blue-ui mr-3" name="mingcute:left-line" />
      <p class="text-brand-blue-ui text-xs font-medium">Back to Contact us</p>
    </div>
    <Breadcrumb v-else :breadcrumbList="breadcrumb" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LanguageShape from "@/assets/LanguageShape.svg";
import LoginShape from "@/assets/LoginShape.svg";
import SearchShape from "@/assets/SearchShape.svg";
import Breadcrumb from "./breadcrumb.vue";
import AirBalticLogo from "@/assets/airBaltic.svg";
import Hamburger from "@/assets/hamburger.svg";

interface Buttons {
  name: string;
}
const navigationButtons = ref<Buttons[]>([
  { name: "Plan and book" },
  { name: "Prepare for your trip" },
  { name: "Information" },
  { name: "PINS" },
  { name: "Special offers" },
]);
interface ButtonsWithImage extends Buttons {
  src: string;
  alt: string;
}
const headerButtons = ref<ButtonsWithImage[]>([
  { name: "Latvia - Latvian", src: LanguageShape, alt: "language icon" },
  { name: "Login", src: LoginShape, alt: "login icon" },
  { name: "Search", src: SearchShape, alt: "search icon" },
]);
interface Breadcrumb {
  name: string;
  link?: string;
}
const breadcrumb = ref<Breadcrumb[]>([
  { name: "Home", link: "home" },
  { name: "Contact us", link: "contact-us" },
  { name: "Submit a claim", link: "submit-a-claim" },
  { name: "Damaged baggage" },
]);

const isMobile = ref(false);

const checkIsMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};

onMounted(() => {
  checkIsMobile();
  window.addEventListener("resize", checkIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkIsMobile);
});

function navigate(index: number): void {
  //Navigate to page
}
</script>
