<script setup lang="ts">
import IconAppleStore from "@/assets/icons/IconAppleStore.vue";
import IconGooglePlay from "@/assets/icons/IconGooglePlay.vue";

const stores = [
  {
    name: "App Store",
    icon: IconAppleStore,
    url: "https://apps.apple.com/fr/app/aucode/id6463032739",
  },
  {
    name: "Google Play",
    icon: IconGooglePlay,
    url: "https://play.google.com/store/apps/details?id=com.aucode.tech&hl=fr",
  },
];

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
  <section
    class="bg-[#F2F2F2] sm:h-screen relative font-regular footer:overflow-hidden overflow-auto"
  >
    <div class="absolute w-full">
      <div class="flex justify-between items-start sm:items-center mt-7 mx-7">
        <div class="">
          <div class="max-w-[100px] sm:max-w-[147px] mx-auto">
            <img
              src="https://res.cloudinary.com/augalo/image/upload/v1689702123/Aucode/logo_genenk.png"
            />
          </div>
        </div>

        <div
          class="flex flex-col-reverse sm:flex-row items-end gap-5 w-[350px]"
        >
          <div class="flex gap-5 justify-end w-1/2">
            <NuxtLink to="https://twitter.com/aucode_app">
              <span class="i-simple-icons-x text-xl cursor-pointer" />
            </NuxtLink>

            <NuxtLink
              to="https://www.linkedin.com/company/aucode-tech/"
              target="_blank"
            >
              <span class="i-simple-icons-linkedin text-xl cursor-pointer" />
            </NuxtLink>
          </div>

          <div class="w-[150px]">
            <div
              class="border-solid border-2 border-black border-b-4 rounded-xl text-black transform transition duration-300 ease-in-out py-[10px] px-4 hover:scale-105 text-sm cursor-pointer text-center"
              @click="copyEmailToClipboard"
            >
              {{ contactButton }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:h-full flex justify-center items-center pt-14 sm:pt-0">
      <div class="sm:max-w-[800px] mx-auto">
        <img
          src="https://res.cloudinary.com/augalo/image/upload/v1694598584/Aucode/mockup_zn1itr.png"
          class="w-full h-auto"
        />
      </div>
    </div>

    <div
      class="sm:absolute flex justify-center sm:bottom-10 sm:left-10 px-5 sm:px-0"
    >
      <div class="max-w-[600px]">
        <div
          class="text-[20px] leading-9 sm:text-[28px] sm:leading-[60px] tracking-tight font-extra-bold mb-4"
        >
          Codeur débutant ?
          <p
            class="text-[30px] sm:text-[48px] sm:leading-[43px] font-extra-bold tracking-tight"
          >
            Teste tes connaissances tech avant de postuler
          </p>
        </div>
        <p class="text-sm font-sans mt-11">
          C'est parti, inscris-toi dès maintenant !
        </p>

        <div
          class="mt-4 flex flex-col sm:flex-row gap-3 justify-evenly sm:justify-start"
        >
          <NuxtLink
            v-for="store in stores"
            :key="store.name"
            :to="store.url"
            target="_blank"
          >
            <button
              class="bg-[#FFFFFF] text-black px-5 sm:px-10 py-4 rounded-xl flex justify-center items-center gap-2 w-full"
            >
              <component :is="store.icon" class="w-5" />
              <p class="text-center">
                <span>{{ store.name }}</span>
              </p>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="footer:absolute footer:bottom-10 footer:right-10 text-center text-xs sm:text-center sm:pt-0 flex gap-4 items-center footer:justify-end flex-col sm:flex-row p-10 footer:p-0 xs:pb-0 bg-[#F2F2F2] bg-transparent"
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
      <p class="text-xs">Aucode 2023</p>
    </div>
  </section>
</template>
