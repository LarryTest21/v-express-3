import { defineStore } from "pinia";
import { ref } from "vue";

export const  isLoading = defineStore("isLoading", () => {
    
    const state = ref(false)



    return { state }
})