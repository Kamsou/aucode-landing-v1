<script setup lang="ts">
import IconAppleStore from "@/assets/icons/IconAppleStore.vue";
import IconGooglePlay from "@/assets/icons/IconGooglePlay.vue";

const title = ref("Aucode — L'entrainement en ligne pour les développeurs");
const description = ref(
  "Devenir codeur confiant. Plonge dans un univers d'apprentissage interactif du développement web ! Aucode t'offre des quiz adaptés et un feedback en temps réel pour te transformer en un développeur sûr de ses compétences."
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<template>
  <section class="bg-[#F2F2F2] h-screen relative font-regular">
    <div class="absolute top-5 left-4 sm:left-10">
      <div class="max-w-[100px] sm:max-w-[147px] mx-auto">
        <img
          src="https://res.cloudinary.com/augalo/image/upload/v1689702123/Aucode/logo_genenk.png"
        />
      </div>
    </div>

    <p
      class="absolute top-5 sm:top-7 right-5 sm:right-10 border-solid border-2 border-black border-b-4 rounded-xl text-black transform transition duration-300 ease-in-out py-[10px] px-4 hover:scale-105 text-sm cursor-pointer"
    >
      Contactez-nous
    </p>

    <div class="sm:h-full flex justify-center items-center">
      <div class="sm:max-w-[800px] mx-auto">
        <img
          src="https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png"
          class="w-full h-auto"
        />
      </div>
    </div>

    <div class="sm:absolute flex sm:bottom-10 sm:left-10 p-5 sm:p-0">
      <div class="max-w-[544px]">
        <p
          class="text-[30px] leading-9 sm:text-[42px] sm:leading-[48px] tracking-tighter font-extra-bold mb-4"
        >
          L'entrainement en ligne pour les développeurs
        </p>
        <p class="text-base sm:text-xl">
          Préparez-vous à réussir vos entretiens dans la tech, Inscrivez-vous
          dès maintenant !
        </p>

        <div class="mt-11 flex gap-3 justify-evenly sm:justify-start">
          <button
            class="bg-[#FFFFFF] text-black px-5 sm:px-10 py-3 rounded-xl flex justify-center items-center gap-2"
          >
            <IconAppleStore class="w-5" />
            <p>App Store</p>
          </button>
          <button
            class="bg-[#FFFFFF] text-black px-5 sm:px-10 py-3 rounded-xl flex justify-center items-center gap-2"
          >
            <IconGooglePlay class="w-5" />
            <p>Google Play</p>
          </button>
        </div>
      </div>
    </div>

    <div
      class="sm:absolute sm:bottom-10 sm:right-10 text-center text-xs sm:text-base sm:text-center sm:mt-5 flex gap-4 items-center"
    >
      <p class="hover:underline cursor-pointer">Mentions Légales</p>
      <p class="hover:underline cursor-pointer">Politique de confidentalité</p>
      <p class="text-xs">Augalo 2023</p>
    </div>
  </section>
</template>
