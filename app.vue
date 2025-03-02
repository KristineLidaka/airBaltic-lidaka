<template>
  <div>
    <PageHeader />
    <!--flex items-start-->
    <div class="md:flex md:items-start">
      <SidebarNavigation
        v-if="!isMobile"
        class="h-auto"
        :navigationSidebar="navigationSidebar"
      />
      <PageBody class="flex-none md:flex-1" />
    </div>
    <PageFooterMobile v-if="isMobile" />
    <PageFooter v-else/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageHeader from "./components/pageHeader.vue";
import SidebarNavigation from "./components/sidebarNavigation.vue";
import PageBody from "./components/pageBody.vue";
import PageFooter from "./components/pageFooter.vue";
import PageFooterMobile from "./components/pageFooterMobile.vue";

interface NavigationSidebar {
  name: string;
  link?: string;
}
const navigationSidebar = ref<NavigationSidebar[]>([
  { name: "Contact us", link: "contact-us" },
  {
    name: "International offices and representatives",
    link: "international-offices-and-representatives",
  },
  { name: "Items left on board", link: "items-left-on-board" },
  { name: "Submit a claim", link: "submit-a-claim" },
  { name: "Compliment us", link: "compliment-us" },
  { name: "Ask a question", link: "ask-a-question" },
  { name: "Request assistance from us" },
  { name: "Other inquiries", link: "other-inquiries" },
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
</script>
