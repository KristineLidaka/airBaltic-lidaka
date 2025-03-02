<template>
  <div class="md:pt-9 mx-5 md:mx-custom">
    <div class="md:ml-8 md:mb-10">
      <div class="h-12 md:h-auto flex justify-between items-center">
        <p class="mb-2 uppercase font-medium text-sm text-footer-text">
          Subscribe to newsletter
        </p>
      </div>

      <div class="relative">
        <label for="email" class="sr-only">Email address</label>
        <input
          v-model="email"
          id="email"
          class="bg-white border h-12 mb-7 md:mb-4 border-form-border w-full pl-4"
          type="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
        />
        <button
          @click="handleSubmit"
          class="input-arrow absolute right-0 top-0 h-12 w-10"
          aria-label="Submit email"
        ></button>
        <p v-if="error" class="text-red-500 text-xs mt-2">{{ error }}</p>
      </div>
    </div>
    <div class="relative mb-9 md:mb-14">
      <img
        :src="RedirectIcon"
        alt="RedirectIcon"
        class="absolute top-0 left-0"
      />
      <p class="text-custom-gray-50 text-xs ml-8">
        This indicates a link to an external site that may not follow the same
        accessibility policies.
      </p>
    </div>
    <div class="flex justify-start md:justify-end pt-2 md:ml-7 space-x-2.5">
      <div
        v-for="social in socials"
        :key="social.name"
        class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
      >
        <a :href="social.link">
          <img :src="social.icon" :alt="social.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";
import RedirectIcon from "@/assets/RedirectIcon.svg";
import FaceBookIcon from "@/assets/fb.png";
import TwitterLogo from "@/assets/twiter.png";
import InstagramLogo from "@/assets/instagram.png";
import YouTubeLogo from "@/assets/yt.png";

const email = ref<string>("");
const error = ref<string | null>(null);

const emailSchema = z.string().email("Invalid email address");

const handleSubmit = () => {
  try {
    emailSchema.parse(email.value);
    error.value = null;
    console.warn("email.value", email.value);
    // Save form data to store
    // store.dispatch('saveEmail', email.value);
  } catch (e) {
    if (e instanceof z.ZodError) {
      error.value = e.errors[0].message;
    }
  }
};

const socials = [
  {
    name: "Facebook",
    icon: FaceBookIcon,
    link: "https://www.facebook.com/airBaltic",
  },
  { name: "Twitter", icon: TwitterLogo, link: "https://twitter.com/airBaltic" },
  {
    name: "Instagram",
    icon: InstagramLogo,
    link: "https://www.instagram.com/airbaltic_official/",
  },
  {
    name: "YouTube",
    icon: YouTubeLogo,
    link: "https://www.youtube.com/user/airbaltic",
  },
];
</script>

<style scoped>
.input-arrow {
  background: url("@/assets/RightArrow.svg") no-repeat right 10px center;
}
</style>
