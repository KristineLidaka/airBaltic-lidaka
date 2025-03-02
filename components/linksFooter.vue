<template>
  <div class="px-5 md:pl-custom md:pt-9">
    <div class="mt-1 md:mt-0 md:flex md:justify-between">
      <div
        class="w-full md:w-1/4"
        v-for="(footerLink, index) in FooterLinks"
        :key="index"
        role="region"
        :aria-labelledby="'footer-link-' + index"
      >
        <div
          class="flex justify-between items-center h-12 md:h-auto border-b border-b-form-border md:border-none"
        >
          <h3
            class="md:mb-2 uppercase font-medium text-sm text-footer-text"
            :id="'footer-link-' + index"
          >
            {{ footerLink.header }}
          </h3>
          <Icon name="ic:baseline-plus" class="visible md:invisible md:flex" />
        </div>
        <ul class="hidden md:block">
          <li
            v-for="(link, linkIndex) in footerLink.links"
            :key="linkIndex"
            class="mb-1"
          >
            <a
              :href="link.link"
              class="flex items-center text-sm h-9 text-footer-text"
              role="link"
            >
              {{ link.name }}
              <img
                v-if="link.icon"
                :src="link.icon.src"
                :alt="link.icon.alt"
                class="ml-2 inline-block"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RedirectIcon from "@/assets/RedirectIcon.svg";

interface FooterLink {
  header: string;
  links: { name: string; link: string; icon?: { src: string; alt: string } }[];
}
const FooterLinks = ref<FooterLink[]>([
  {
    header: "Helpful links",
    links: [
      { name: "Book a flight", link: "book-a-flight" },
      { name: "Check in online", link: "check-in-online" },
      { name: "All about baggage", link: "all-about-baggage" },
      { name: "Destinations", link: "destinations" },
    ],
  },
  {
    header: "About airbaltic",
    links: [
      { name: "Careers", link: "careers" },
      { name: "About us", link: "about-us" },
      { name: "airBaltic souveniers", link: "airBaltic-souveniers" },
    ],
  },
  {
    header: "airbaltic partners",
    links: [
      { name: "Pilots Academy", link: "pilots-academy" },
      { name: "airBaltic Training", link: "airBaltic-training" },
      {
        name: "PINS",
        link: "PINS",
        icon: { src: RedirectIcon, alt: "PINS icon" },
      },
    ],
  },
  {
    header: "Customer support",
    links: [
      { name: "Contact us", link: "contact-us" },
      { name: "FAQs", link: "FAQs" },
      { name: "Request assistance", link: "request-assistance" },
    ],
  },
]);
</script>
