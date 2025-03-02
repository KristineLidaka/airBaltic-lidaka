import { defineStore } from 'pinia';

export const useRequestedAssistanceStore = defineStore('requestedAssistance', {
    state: () => ({
      assistanceRequests: [] as Array<{ name: string; email: string; phone: string; flightNumber: string; date: string }>,
    }),
    actions: {
        saveAssistanceRequest(request: { name: string; email: string; phone: string; flightNumber: string; date: string }) {
          this.assistanceRequests.push(request);
        },
      },
  });