<script setup>
import IconAppleStore from "@/assets/icons/IconAppleStore.vue";
import IconGooglePlay from "@/assets/icons/IconGooglePlay.vue";

const stores = [
  {
    name: "l'App Store",
    icon: IconAppleStore,
    url: "https://apps.apple.com/fr/app/aucode/id6463032739",
  },
  {
    name: "Google Play",
    icon: IconGooglePlay,
    url: "https://play.google.com/store/apps/details?id=com.aucode.tech&hl=fr",
  },
];
</script>

<template>
  <NuxtLink
    v-for="(store, index) in stores"
    :key="index"
    :to="store.url"
    target="_blank"
  >
    <button
      class="bg-white w-full md:w-[11rem] lg:w-[13rem] py-[0.63rem] px-6 text-lg rounded-md flex justify-center items-center gap-1 shadow-button hover:translate-y-[0.125rem] transition-all duration-300 ease-in-out hover:shadow-button-hover"
    >
      <component :is="store.icon" class="w-5" />
      <div>
        <span class="text-[0.68rem] block leading-3"> Télécharger sur </span>
        <span class="block leading-5">{{ store.name }}</span>
      </div>
    </button>
  </NuxtLink>
</template>
