<script setup lang="ts">
import IconAppleStore from "@/assets/icons/IconAppleStore.vue";
import IconGooglePlay from "@/assets/icons/IconGooglePlay.vue";

const contactButton = ref("Contactez-nous");

const title = ref("Aucode — L'entrainement en ligne pour les développeurs");
const description = ref(
  "Devenir codeur confiant. Plonge dans un univers d'apprentissage interactif du développement web ! Aucode t'offre des quiz adaptés et un feedback en temps réel pour te transformer en un développeur sûr de ses compétences."
);

function setContactButtonText(text: string, duration = 2000) {
  contactButton.value = text;

  if (duration) {
    setTimeout(() => {
      contactButton.value = "Contactez-nous";
    }, duration);
  }
}

async function copyEmailToClipboard() {
  try {
    await navigator.clipboard.writeText("contact@aucode.tech");
    setContactButtonText("Email copié !");
  } catch (err) {
    console.error("Failed to copy: ", err);
    setContactButtonText("Erreur !");
  }
}

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
  <section class="bg-[#F2F2F2] sm:h-screen relative font-regular">
    <div class="absolute top-5 left-4 sm:left-10">
      <div class="max-w-[100px] sm:max-w-[147px] mx-auto">
        <img
          src="https://res.cloudinary.com/augalo/image/upload/v1689702123/Aucode/logo_genenk.png"
        />
      </div>
    </div>

    <div class="w-[150px] absolute top-5 sm:top-7 right-5 sm:right-10">
      <div
        class="border-solid border-2 border-black border-b-4 rounded-xl text-black transform transition duration-300 ease-in-out py-[10px] px-4 hover:scale-105 text-sm cursor-pointer text-center"
        @click="copyEmailToClipboard"
      >
        {{ contactButton }}
      </div>
    </div>

    <div class="sm:h-full flex justify-center items-center">
      <div class="sm:max-w-[800px] mx-auto">
        <img
          src="https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png"
          class="w-full h-auto"
        />
      </div>
    </div>

    <div class="sm:absolute flex sm:bottom-10 sm:left-10 px-5 sm:px-0">
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

        <div
          class="mt-11 flex flex-col sm:flex-row gap-3 justify-evenly sm:justify-start"
        >
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
      class="footer:absolute footer:bottom-10 footer:right-10 text-center text-xs sm:text-base sm:text-center sm:pt-0 flex gap-4 items-center footer:justify-end flex-col sm:flex-row p-10 footer:p-0 xs:pb-0 bg-[#F2F2F2]"
    >
      <NuxtLink to="/legal" class="hover:underline cursor-pointer">
        Mentions Légales
      </NuxtLink>
      <NuxtLink to="/privacy" class="hover:underline cursor-pointer">
        Politique de confidentalité
      </NuxtLink>
      <NuxtLink to="/cgv" class="hover:underline cursor-pointer">
        Conditions Générales de Vente
      </NuxtLink>
      <p class="text-xs">Augalo 2023</p>
    </div>
  </section>
</template>
