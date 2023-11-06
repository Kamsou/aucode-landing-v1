<script setup lang="ts">
import IconAppleStore from "@/assets/icons/IconAppleStore.vue";
import IconGooglePlay from "@/assets/icons/IconGooglePlay.vue";
import IconStar from "@/assets/icons/IconStar.vue";
import IconPencil from "@/assets/icons/IconPencil.vue";
import IconVector from "@/assets/icons/IconVector.vue";
import IconBook from "@/assets/icons/IconBook.vue";
import IconMagnifier from "@/assets/icons/IconMagnifier.vue";
import IconDialog from "@/assets/icons/IconDialog.vue";
import IconHeart from "@/assets/icons/IconHeart.vue";

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

const cards = [
  {
    icon: IconGooglePlay,
    review:
      "Très pratique pour se mettre au défi vite fait avant un entretien! Merci",
    user: "Laurent L",
    date: "11/10/2023",
  },
  {
    icon: IconAppleStore,
    review:
      "J’aime bien l’expérience utilisateur qui est très fluide et le contenu gratuit est bien pour commencer à se préparer aux entretiens",
    user: "Aliiik",
    date: "26/09/2023",
  },
  {
    icon: IconGooglePlay,
    review:
      "Simple et efficace, c’est une bonne façon de revoir les bases et d’apprendre des choses. En plus j’adore le design",
    user: "keilocruz",
    date: "22/09/2023",
  },
];

const topics = [
  {
    name: "Front-end",
    description: `Le "front-end" fait référence à la partie visible d'une application ou d'un site web, celle avec laquelle l'utilisateur interagit directement.`,
    icon: IconPencil,
  },
  {
    name: "Back-end",
    description: `Le "back-end" est tout ce qui se passe en coulisse pour faire fonctionner une application ou un site web. Cela comprend les serveurs,
les bases de données, les applications, les API (interfaces de programmation d'applications) et toute autre infrastructure nécessaire.`,
    icon: IconVector,
  },
  {
    name: "Culture générale",
    description: `La culture générale dans la tech est une compréhension de base des tendances, innovations et enjeux du monde technologique.
Elle englobe la connaissance des principaux acteurs, des débats actuels et des impacts de la technologie sur la société.`,
    icon: IconBook,
  },
  {
    name: "Prospection",
    description: `La prospection est l'acte de rechercher activement de nouveaux clients ou opportunités pour une entreprise ou un service, souvent
à travers des démarches directes comme les appels, les emails ou les rencontres.`,
    icon: IconMagnifier,
  },
];

const categories = [
  {
    icon: IconDialog,
    title: "Communication",
    description:
      "Démystifiez le jargon technique et communiquez-le clairement, facilitant ainsi les échanges.",
  },
  {
    icon: IconHeart,
    title: "Émotion",
    description:
      "Apprenez à gérer la pression inhérente aux présentations et discussions techniques.",
  },
  {
    icon: IconVector,
    title: "Confiance",
    description:
      "Cultivez et valorisez votre estime de soi ainsi que vos compétences, quel que soit votre parcours.",
  },
  {
    icon: IconVector,
    title: "Perception",
    description:
      "Se sentir à sa place et valorisé, indépendamment de son parcours ou de sa formation.",
  },
];
</script>

<template>
  <section class="max-w-[1440px] mx-auto font-regular tracking-tighter">
    <Header class="pt-10 mx-24" />

    <div ref="hero" class="flex py-28 px-24">
      <div class="w-[54%]">
        <h1
          class="text-[4.625rem] tracking-tighter font-bold text-green-dark leading-[4.255rem] z-10 relative"
        >
          Teste tes acquis de
          <span class="underline"> développeuse </span> avant de postuler
        </h1>
        <p class="my-7">Inscris-toi gratuitement maintenant !</p>
        <div class="flex gap-6">
          <NuxtLink
            v-for="(store, index) in stores"
            :key="index"
            :to="store.url"
            target="_blank"
          >
            <button
              class="bg-white max-w-[15.43rem] py-[0.63rem] px-6 text-lg rounded-md flex justify-center items-center gap-1 shadow-button"
            >
              <component :is="store.icon" class="w-5" />
              <div>
                <span class="text-[0.68rem] block leading-3">
                  Télécharger sur
                </span>
                <span class="block leading-5">{{ store.name }}</span>
              </div>
            </button>
          </NuxtLink>
        </div>
      </div>

      <div class="relative w-[46%]">
        <div
          class="bg-green-light rounded-xl absolute top-0 left-24 py-2 px-3 text-xs font-bold flex items-center gap-[0.38rem]"
        >
          <img
            class="w-[3.3125rem]"
            src="https://res.cloudinary.com/augalo/image/upload/v1699195810/Aucode/duck-icon-face_cxs9qh.png"
            alt=""
          />
          <span class="uppercase">Rejoins-nous!</span>
        </div>
        <img
          src="https://res.cloudinary.com/augalo/image/upload/v1699275034/Aucode/mockup-landing_ky5psm.png"
          alt=""
        />
        <div
          class="bg-green-light rounded-xl absolute bottom-12 right-32 py-2 px-3 text-xs font-bold flex items-center gap-[0.38rem]"
        >
          <img
            class="w-[2.6rem]"
            src="https://res.cloudinary.com/augalo/image/upload/v1689610705/Aucode/duck_yosxyk.png"
            alt=""
          />
          <span class="uppercase">c’est gratuit !</span>
        </div>
      </div>
    </div>

    <div class="w-full text-white">
      <div
        class="bg-gradient-to-r from-bg-linear-1 to-bg-linear-2 h-full w-full relative"
      >
        <div
          class="bg-radial-custom from-radial-start via-radial-end to-radial-start absolute inset-0 opacity-5"
        />
        <div class="px-24 rounded-t-[2.5rem] relative h-full">
          <div ref="reviews">
            <div class="w-full flex gap-5 transform -translate-y-20">
              <div
                v-for="card in cards"
                :key="card.user"
                class="bg-white p-6 rounded-2xl w-[15rem] flex flex-col justify-between"
              >
                <div class="flex items-center justify-between">
                  <div class="flex">
                    <div v-for="n in 5" :key="n">
                      <IconStar class="w-[14px] text-green-light" />
                    </div>
                  </div>
                  <component :is="card.icon" class="w-4 text-gray-light" />
                </div>

                <div class="flex flex-col justify-between">
                  <div class="py-11 h-[200px]">
                    <p class="text-green-dark text-sm">
                      {{ card.review }}
                    </p>
                  </div>

                  <div class="flex items-center justify-between">
                    <p class="text-green-light uppercase text-xs">
                      {{ card.user }}
                    </p>
                    <p class="text-gray-light text-[0.625rem]">
                      {{ card.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref="topics" class="my-56">
            <h2 class="mb-20 text-7xl tracking-tighter">
              <span class="text-green-light">4</span> thématiques
            </h2>

            <div
              v-for="(topic, index) in topics"
              :key="topic.name"
              class="flex items-center gap-8 w-full py-7 border-t border-green-light border-opacity-10"
            >
              <div class="w-[10%]">
                <span
                  class="bg-green-light rounded-full text-green-dark py-2 px-[0.94rem] text-xl h-full"
                >
                  {{ index + 1 }}
                </span>
              </div>
              <span class="w-[27%] text-[1.625rem]">{{ topic.name }}</span>
              <p class="max-w-[26rem] text-sm">
                {{ topic.description }}
              </p>
              <component :is="topic.icon" class="w-8 text-green-light" />
            </div>
          </div>

          <div ref="syndrom">
            <span class="text-gray-light text-[2.8125rem] leading-3">
              En finir avec
            </span>
            <h3 class="mb-20 text-7xl tracking-tighter">
              Le syndrome de <span class="text-green-light">l’imposteur</span>
            </h3>

            <div class="flex gap-4">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="group flex flex-col rounded-3xl border border-green-light justify-between w-[25%] relative hover:bg-green-light transition-all duration-500"
              >
                <component
                  :is="category.icon"
                  class="text-green-light absolute top-6 right-6 group-hover:text-green-dark transition-all duration-500"
                />

                <div class="pt-44 px-7 pb-14">
                  <span
                    class="text-[2rem] tracking-tighter text-green-light group-hover:text-green-dark transition-all duration-500"
                  >
                    {{ category.title }}
                  </span>
                  <p
                    class="text-gray-light text-sm group-hover:text-green-dark transition-all duration-500"
                  >
                    {{ category.description }}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex gap-6 text-green-dark justify-center mt-20 pb-32">
              <NuxtLink
                v-for="store in stores"
                :key="store.name"
                :to="store.url"
                target="_blank"
              >
                <button
                  class="bg-white max-w-[15.43rem] py-[0.63rem] px-6 text-lg rounded-md flex justify-center items-center gap-1 shadow-button"
                >
                  <component :is="store.icon" class="w-5" />
                  <div>
                    <span class="text-[0.68rem] block leading-3">
                      Télécharger sur
                    </span>
                    <span class="block leading-5">{{ store.name }}</span>
                  </div>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
