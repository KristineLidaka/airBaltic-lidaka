<template>
  <div
    class="flex items-center space-x-4 pl-custom mt-9 divide-x divide-form-border h-14 mb-8"
  >
    <div class="pr-10 h-full flex items-center">
      <img :src="GeoTrust" alt="GeoTrust" />
    </div>
    <div class="flex items-center space-x-4 mb-4 px-10 h-full gap-2">
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
    <div class="flex items-center space-x-4 pl-10 h-full gap-5">
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
