<template>
  <div>
    <div class="flex border-b border-custom-gray-20">
      <div class="ml-custom flex bg-brand-green logo">
        <img class="logo-image" :src="AirBalticLogo" alt="airBaltic logo" />
      </div>
      <div class="flex flex-col items-end flex-1 mr-custom">
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
    <Breadcrumb :breadcrumbList="breadcrumb" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LanguageShape from "@/assets/LanguageShape.svg";
import LoginShape from "@/assets/LoginShape.svg";
import SearchShape from "@/assets/SearchShape.svg";
import Breadcrumb from "./breadcrumb.vue";
import AirBalticLogo from "@/assets/airBaltic.svg";

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

function navigate(index: number): void {
  //Navigate to page
}
</script>
<style>
.logo {
  height: 110px;
  width: 180px;
}
.logo-image {
  width: 120px;
  height: 30px;
  margin: auto;
}
</style>
