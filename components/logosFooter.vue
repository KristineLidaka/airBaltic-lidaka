<template>
  <div
    class="flex flex-col md:flex-row md:items-center md:space-x-4 px-5 md:pl-custom mt-9 divide-x divide-form-border h-auto md:h-14 md:mb-8"
  >
    <div
      class="pr-10 mb-12 pt-4 md:pt-auto md:mb-0 h-full flex items-center order-3 md:order-1 border-t border-r-0 border-t-form-border md:border-t-0 md:border-r"
    >
      <img :src="GeoTrust" alt="GeoTrust" />
    </div>
    <div
      class="flex items-center space-x-4 pt-5 md:pt-auto mb-4 md:px-10 h-full gap-2 order-1 md:order-2 border-t border-r-0 border-t-form-border md:border-t-0 md:border-r"
    >
      <img :src="MasterCard" alt="MasterCard" />
      <img :src="Visa" alt="Visa" />
      <img :src="SmartObject" alt="SmartObject" />
      <img :src="PayPal" alt="PayPal" />
      <a href="linkToMore" alt="morePayments">
        <p class="text-xs text-footer-text underline decoration-brand-green">
          more
        </p>
      </a>
    </div>
    <div
      class="flex items-center space-x-4 py-5 md:py-auto md:pl-10 h-full gap-5 order-2 md:order-3 border-t border-t-form-border md:border-none"
    >
      <img :src="Capa" alt="Capa" />
      <img :src="CompanyLogo" alt="CompanyLogo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import GeoTrust from "@/assets/GeoTrust.svg";
import MasterCard from "@/assets/MasterCard.svg";
import Visa from "@/assets/Visa.svg";
import SmartObject from "@/assets/SmartObject.svg";
import PayPal from "@/assets/PayPal.svg";
import Capa from "@/assets/Capa.svg";
import CompanyLogo from "@/assets/PunctualCompany.svg";
import { ref } from "vue";
</script>
