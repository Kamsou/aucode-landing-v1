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
import IconLinkedin from "@/assets/icons/IconLinkedin.vue";
import IconX from "@/assets/icons/IconX.vue";

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

const prices = [
  {
    title: "Starter",
    number: "0 €",
    features: ["16 Quiz", "Corrections", "Resultats"],
  },
  {
    title: "Premium",
    number: "9,99 €",
    features: ["+30 Quiz", "Corrections", "Resultats"],
  },
];
</script>

<template>
  <section class="max-w-[1440px] mx-auto font-regular tracking-tighter">
    <Header class="pt-10 mx-24" />

    <div ref="hero" class="flex py-28 px-24">
      <div class="w-[54%]">
        <h1
          class="text-[4.625rem] max-w-[583px] tracking-tighter font-bold text-green-dark leading-[4.255rem] z-10 relative"
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

          <div ref="topics" class="my-52">
            <h2 class="mb-20 text-7xl tracking-tighter">
              <span class="text-green-light">4</span> thématiques
            </h2>

            <div
              v-for="(topic, index) in topics"
              :key="topic.name"
              class="flex items-center gap-8 w-full py-7 border-t border-green-light border-opacity-10 justify-between"
            >
              <div class="flex gap-8 w-[39%]">
                <span
                  class="bg-green-light rounded-full text-green-dark py-2 px-[0.94rem] text-xl h-full"
                >
                  {{ index + 1 }}
                </span>
                <span class="text-[1.625rem]">{{ topic.name }}</span>
              </div>

              <p class="text-sm w-[35%]">
                {{ topic.description }}
              </p>
              <div class="flex justify-end w-[18%]">
                <component :is="topic.icon" class="text-green-light" />
              </div>
            </div>
          </div>

          <div ref="syndrom">
            <span class="text-gray-light text-[2.8125rem]">
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

            <div class="flex gap-6 text-green-dark justify-center mt-20 pb-96">
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

      <div
        ref="quiz"
        class="bg-white text-green-dark flex flex-col justify-center items-center py-16 mx-24 rounded-[2.5rem] transform -translate-y-40"
      >
        <img
          class="w-24"
          src="https://res.cloudinary.com/augalo/image/upload/v1693753451/Aucode/duck-icon-face_jfzsmb.png"
          alt=""
        />
        <h4 class="text-7xl tracking-tighter font-bold mt-7 mb-20">
          <span class="text-green-light">16</span> Quiz gratuits
        </h4>

        <div class="flex">
          <img
            class="w-[33%]"
            src="https://res.cloudinary.com/augalo/image/upload/v1699292055/Aucode/quiz1_psky8i.png"
            alt=""
          />
          <img
            class="w-[33%]"
            src="https://res.cloudinary.com/augalo/image/upload/v1699292055/Aucode/quiz1_psky8i.png"
            alt=""
          />
          <img
            class="w-[33%]"
            src="https://res.cloudinary.com/augalo/image/upload/v1699292055/Aucode/quiz1_psky8i.png"
            alt=""
          />
        </div>
      </div>

      <div ref="pricing" class="text-green-dark -mt-20">
        <h4 class="text-[5rem] font-bold text-center tracking-tighter mb-20">
          Pricing
        </h4>

        <div class="flex gap-8 justify-center">
          <div
            v-for="price in prices"
            :key="price.title"
            class="bg-white flex flex-col items-center justify-center rounded-3xl p-14"
          >
            <span class="text-5xl tracking-tighter">{{ price.title }}</span>
            <span class="text-8xl mt-8">{{ price.number }}</span>

            <ul class="text-2xl text-gray-light leading-7 mt-8">
              <li v-for="feature in price.features" :key="feature">
                {{ feature }}
              </li>
            </ul>

            <div class="flex gap-6 text-green-dark justify-center mt-8">
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

      <div ref="about" class="mt-28 bg-bg-linear-1 text-white">
        <div class="px-24">
          <h5 class="font-bold text-7xl text-center">
            Qui est derrière <span class="text-green-light">Aucode</span> ?
          </h5>

          <div class="mt-32 flex gap-24 items-center">
            <div class="w-1/2">
              <img
                src="https://res.cloudinary.com/augalo/image/upload/v1699292991/Aucode/about_zdp6tn.png"
                alt="Portrait de Camille, la fondatrice de Aucode"
              />
              <div class="flex gap-6 mt-6">
                <component
                  :is="IconLinkedin"
                  class="w-8 h-8 text-green-light"
                />
                <component :is="IconX" class="w-8 h-8 text-green-light" />
              </div>
            </div>

            <div class="w-1/2 text-xl">
              <p class="mb-8">
                Il y a 6 ans, quand j'ai débuté dans le monde du dev, j'ai
                travaillé étroitement avec des agences et startups innovantes,
                laissant ma marque à chaque étape.
              </p>
              <p class="mb-8">
                Il y a 6 ans, quand j'ai débuté dans le monde du dev, j'ai
                travaillé étroitement avec des agences et startups innovantes,
                laissant ma marque à chaque étape.
              </p>
              <p class="mb-8">
                Il y a 6 ans, quand j'ai débuté dans le monde du dev, j'ai
                travaillé étroitement avec des agences et startups innovantes,
                laissant ma marque à chaque étape.
              </p>
            </div>
          </div>

          <div class="mt-28">
            <p class="text-[1.75rem] w-[90%] mx-auto">
              C'est avec cette idée en tête que
              <span class="text-green-light">"Aucode"</span> a vu le jour : un
              projet pour aider les développeuses à valoriser leur unique
              contribution au monde de la technologie.
            </p>
          </div>

          <div class="flex gap-6 text-green-dark justify-center mt-20 pb-28">
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

        <Footer />
      </div>
    </div>
  </section>
</template>
