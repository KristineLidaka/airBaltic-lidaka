<template>
  <div class="bg-custom-gray-10 divide-y divide-custom-gray-20 mt-8 rounded-md">
    <ContactDetailsForm
      :formData="contactDetails"
      :contactErrors="contactErrors"
      @update:formData="updateContactDetails"
    />
    <FlightDetailsForm
      :formData="flightDetails"
      :flightErrors="flightErrors"
      @update:formData="updateFlightDetails"
    />
    <ConfirmationForm
      :contactDetails="contactDetails"
      :flightDetails="flightDetails"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z, ZodError } from "zod";
import { useRequestedAssistanceStore } from "../stores/requestedAssistancePinia";
import ConfirmationForm from "./confirmationForm.vue";
import ContactDetailsForm from "./contactDetailsForm.vue";
import FlightDetailsForm from "./flightDetailsForm.vue";

const contactDetails = ref<{
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
}>({
  name: "",
  email: "",
  countryCode: "",
  phoneNumber: "",
});
const flightDetails = ref<{
  flightNumber: string;
  day: number;
  month: number;
  year: number;
}>({
  flightNumber: "",
  day: 0,
  month: 0,
  year: 0,
});

const contactErrors = ref<{
  name?: string;
  email?: string;
  countryCode?: string;
  phoneNumber?: string;
}>({});

const flightErrors = ref<{
  flightNumber?: string;
  day?: string;
  month?: string;
  year?: string;
}>({});

const updateContactDetails = (data: {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
}) => {
  contactDetails.value = data;
};

const updateFlightDetails = (data: {
  flightNumber: string;
  day: number;
  month: number;
  year: number;
}) => {
  flightDetails.value = data;
};

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  flightNumber: string;
  day: number;
  month: number;
  year: number;
}

const handleSubmit = () => {
  const schema = z.object({
    name: z
      .string()
      .regex(
        /^[a-zA-Z]+ [a-zA-Z]+$/,
        "Name must contain a first name and a surname"
      ),
    email: z.string().email(),
    countryCode: z
      .string()
      .regex(
        /^\+\d{1,3}$/,
        "Country code must contain a + sign followed by one to three numbers"
      ),
    phoneNumber: z
      .string()
      .regex(/^\d{8}$/, "Phone number must contain exactly 8 digits"),
    flightNumber: z.string().nonempty("Flight number cannot be empty"),
    day: z
      .number()
      .min(1, { message: "Day must be between 1 and 31" })
      .max(31, { message: "Day must be between 1 and 31" }),
    month: z
      .number()
      .min(1, { message: "Month must be between 1 and 12" })
      .max(12, { message: "Month must be between 1 and 12" }),
    year: z.number().min(1900).max(new Date().getFullYear()),
  });

  const formData: FormData = {
    ...contactDetails.value,
    ...flightDetails.value,
  };

  try {
    schema.parse(formData);
    const store = useRequestedAssistanceStore();
    store.saveAssistanceRequest({
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode}${formData.phoneNumber}`,
      flightNumber: formData.flightNumber,
      date: new Date(
        formData.year,
        formData.month - 1,
        formData.day
      ).toLocaleDateString(),
    });
    contactErrors.value = {};
    flightErrors.value = {};
  } catch (e: ZodError | any) {
    contactErrors.value = {};
    flightErrors.value = {};
    e.errors.forEach((error: { path: (keyof FormData)[], message: string }) => {
      if (
        error.path.includes("name") ||
        error.path.includes("email") ||
        error.path.includes("countryCode") ||
        error.path.includes("phoneNumber")
      ) {
        contactErrors.value[error.path[0] as keyof typeof contactErrors.value] = error.message;
      } else {
        flightErrors.value[error.path[0] as keyof typeof flightErrors.value] = error.message;
      }
    });
  }
};
</script>
