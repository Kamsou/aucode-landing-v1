<script setup lang="ts">
import IconAppleStore from "@/components/icons/IconAppleStore.vue";
import IconGooglePlay from "@/components/icons/IconGooglePlay.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import IconVector from "@/components/icons/IconVector.vue";
import IconBook from "@/components/icons/IconBook.vue";
import IconMagnifier from "@/components/icons/IconMagnifier.vue";
import IconDialog from "@/components/icons/IconDialog.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconX from "@/components/icons/IconX.vue";
import IconHuman from "@/components/icons/IconHuman.vue";
import IconEye from "@/components/icons/IconEye.vue";
const Swiper = defineAsyncComponent(() =>
  import("swiper/vue").then((m) => m.Swiper)
);
const SwiperSlide = defineAsyncComponent(() =>
  import("swiper/vue").then((m) => m.SwiperSlide)
);
const { EffectCoverflow, Pagination } = await import("swiper/modules");
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

useSeoMeta({
  title: "Aucode | Prepare tes entretiens dev en confiance",
  description:
    "Les entretiens te stressent ? Prepare-toi a ton rythme avec des quiz tech et soft skills conçus pour les devs juniors. +32 quiz gratuits, front-end, back-end et culture tech.",
  ogTitle: "Aucode | Prepare tes entretiens dev en confiance",
  ogDescription:
    "Quiz tech et soft skills pour les devs qui veulent gagner en confiance. +32 quiz gratuits pour preparer tes entretiens.",
  ogImage:
    "https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png",
  ogUrl: "https://aucode.tech",
  twitterCard: "summary_large_image",
  twitterTitle: "Aucode | Prepare tes entretiens dev en confiance",
  twitterDescription:
    "Quiz tech et soft skills pour les devs qui veulent gagner en confiance. +32 quiz gratuits pour preparer tes entretiens.",
  twitterImage:
    "https://res.cloudinary.com/augalo/image/upload/v1691340575/Aucode/mockup_mwxo0t.png",
});

useScrollReveal();

const cards = [
  {
    icon: IconGooglePlay,
    review:
      "Très pratique pour se mettre au défi vite fait avant un entretien ! Merci",
    user: "Laurent L",
    date: "11/10/2023",
  },
  {
    icon: IconAppleStore,
    review:
      "J'aime bien l'expérience utilisateur qui est très fluide et le contenu gratuit est bien pour commencer à se préparer aux entretiens",
    user: "Aliiik",
    date: "26/09/2023",
  },
  {
    icon: IconGooglePlay,
    review:
      "Simple et efficace, c'est une bonne façon de revoir les bases et d'apprendre des choses. En plus j'adore le design",
    user: "keilocruz",
    date: "22/09/2023",
  },
];

const categories = [
  {
    icon: IconDialog,
    title: "Communication",
    description:
      "Apprends à expliquer simplement des concepts techniques, sans te sentir illégitime.",
  },
  {
    icon: IconHeart,
    title: "Émotion",
    description:
      "Gère le stress des entretiens et des échanges techniques avec plus de sérénité.",
  },
  {
    icon: IconHuman,
    title: "Confiance",
    description:
      "Reconnais la valeur de tes compétences, même si tu débutes.",
  },
  {
    icon: IconEye,
    title: "Perception",
    description:
      "Tu as ta place dans la tech, peu importe ton parcours ou ta formation.",
  },
];

const screenshots = [
  {
    url: "/v1699567323/Aucode/mockup-quiz-1_akja37.png",
    alt: "Screenshot exemple d'une question d'un quiz",
  },
  {
    url: "/v1699567323/Aucode/mockup-quiz-2_ff9jlf.png",
    alt: "Screenshot exemple d'une question d'un quiz",
  },
  {
    url: "/v1699567323/Aucode/mockup-quiz-3_tzqtqv.png",
    alt: "Screenshot exemple d'une question d'un quiz",
  },
];

const topics = [
  {
    name: "Front-end",
    description: "Teste tes connaissances sur les frameworks et outils qui font tourner les interfaces web.",
    examples: ["Vue", "React", "Angular", "Svelte"],
    icon: IconPencil,
  },
  {
    name: "Back-end",
    description: "API, bases de données, serveurs : vérifie que tu maîtrises les fondamentaux côté serveur.",
    examples: ["Adonis", "Django", ".NET", "Rails", "Symfony"],
    icon: IconVector,
  },
  {
    name: "Culture générale",
    description: "Élargis ta culture tech : histoire de l'info, réseaux, IA et tendances actuelles.",
    examples: [
      "Histoire de l'informatique",
      "Systèmes d'exploitation",
      "Réseaux et internet",
      "Intelligence artificielle",
    ],
    icon: IconBook,
  },
  {
    name: "Prospection",
    description: "Personal branding, réseautage, tarification : apprends à te positionner.",
    examples: [
      "Branding personnel",
      "Réseautage",
      "Prospection plateformes",
      "Tarification",
    ],
    icon: IconMagnifier,
  },
];
</script>

<template>
  <main class="font-regular tracking-tighter overflow-x-hidden">
    <Header />

    <div
      class="pt-28 md:pt-36 pb-32 md:pb-44 px-6 md:px-24 max-w-[1440px] mx-auto"
    >
      <div class="md:flex md:items-center md:justify-between md:gap-16">
        <div class="w-full md:max-w-[55%] animate-fade-in-up">
          <h1
            class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-extra-bold text-green-dark leading-[1.05] tracking-tighter"
          >
            Les entretiens te stressent ? C'est normal.
          </h1>
          <p
            class="mt-6 md:mt-8 text-lg md:text-xl text-green-dark/75 leading-relaxed tracking-normal"
          >
            Prépare-toi à ton rythme avec des quiz tech et soft skills conçus pour les devs qui veulent gagner en confiance.
          </p>
          <div
            class="flex flex-col md:flex-row gap-4 md:gap-6 mt-10 md:mt-12"
          >
            <Buttons />
          </div>
        </div>

        <div
          class="relative w-full md:max-w-[400px] lg:max-w-[500px] mt-16 md:mt-0 opacity-0 animate-fade-in"
          style="animation-delay: 0.3s"
        >
          <Parallax :factor="0.05">
            <div
              class="hidden sm:flex bg-white/90 backdrop-blur-md shadow-lg border border-white/50 rounded-2xl absolute -top-2 -left-2 md:-left-6 py-2 px-3 text-xs font-bold items-center gap-2 z-10"
            >
              <NuxtImg
                format="webp"
                class="w-9 h-9 md:w-11 md:h-11"
                provider="cloudinary"
                src="/v1699195810/Aucode/duck-icon-face_cxs9qh.png"
                alt="Icone du canard Aucode"
                width="53"
                height="53"
              />
              <span class="uppercase tracking-wide text-green-dark">Rejoins-nous !</span>
            </div>
          </Parallax>

          <NuxtImg
            format="webp"
            provider="cloudinary"
            src="/v1710886384/Aucode/solo_1_kvfkki_nphhxj.png"
            alt="Mockup d'un smartphone avec l'application Aucode"
            width="500"
            height="446"
          />

          <Parallax :factor="0.05">
            <div
              class="hidden sm:flex bg-green-light shadow-lg rounded-2xl absolute bottom-8 md:bottom-16 -right-2 md:-right-6 py-2 px-3 text-xs font-bold items-center gap-2 z-10"
            >
              <NuxtImg
                format="webp"
                class="w-8 md:w-10"
                provider="cloudinary"
                src="/v1689610705/Aucode/duck_yosxyk.png"
                alt="Illustration du canard Aucode"
                width="53"
                height="66"
              />
              <span class="uppercase tracking-wide text-green-dark">C'est gratuit !</span>
            </div>
          </Parallax>
        </div>
      </div>
    </div>

    <div class="w-full text-white">
      <div
        class="bg-gradient-to-r from-bg-linear-1 to-bg-linear-2 relative"
      >
        <div
          class="bg-radial-custom from-radial-start via-radial-end to-radial-start absolute inset-0 opacity-5"
        />
        <div
          class="md:px-24 rounded-t-[3rem] relative w-full max-w-[1440px] mx-auto"
        >
          <div class="reveal">
            <div class="md:hidden transform -translate-y-16">
              <Swiper
                class="w-full swiper-reviews-wrapper"
                :modules="[EffectCoverflow, Pagination]"
                :slides-per-view="'auto'"
                :grabCursor="true"
                :space-between="20"
                :centeredSlides="true"
                :pagination="{ clickable: false }"
                :coverflow-effect="{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }"
              >
                <SwiperSlide
                  class="bg-white/95 backdrop-blur-sm p-7 rounded-3xl w-[16rem] flex flex-col shadow-lg"
                  v-for="card in cards"
                  :key="card.user"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex gap-0.5">
                      <div v-for="n in 5" :key="n">
                        <IconStar class="w-[14px] text-green-light" />
                      </div>
                    </div>
                    <component :is="card.icon" class="w-4 text-gray-light/60" />
                  </div>

                  <p class="text-green-dark text-base leading-relaxed mt-6 mb-8">
                    "{{ card.review }}"
                  </p>

                  <p
                    class="text-green-dark/70 uppercase text-sm tracking-wider font-bold mt-auto"
                  >
                    {{ card.user }}
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>

            <div
              class="w-full hidden md:flex gap-6 transform -translate-y-16 justify-center"
            >
              <div
                v-for="(card, index) in cards"
                :key="card.user"
                class="bg-white/95 backdrop-blur-sm p-8 rounded-3xl w-[22rem] flex flex-col shadow-lg"
              >
                <div class="flex items-center justify-between">
                  <div class="flex gap-0.5">
                    <div v-for="n in 5" :key="n">
                      <IconStar class="w-[14px] text-green-light" />
                    </div>
                  </div>
                  <component :is="card.icon" class="w-4 text-gray-light/60" />
                </div>

                <p class="text-green-dark text-base leading-relaxed mt-6 mb-8">
                  "{{ card.review }}"
                </p>

                <p
                  class="text-green-dark/70 uppercase text-sm tracking-wider font-bold mt-auto"
                >
                  {{ card.user }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-16 md:mt-20 mb-32 md:mb-0 md:my-32 mx-6 md:mx-0 border-b border-white/10">
            <h2
              class="reveal mb-8 md:mb-12 font-display text-3xl md:text-5xl tracking-tighter leading-none"
            >
              <span class="text-green-light">4</span> thématiques pour te préparer
            </h2>

            <div
              v-for="(topic, index) in topics"
              :key="topic.name"
              class="reveal flex items-center gap-0 md:gap-8 w-full py-5 md:py-6 border-t border-white/10 justify-between"
              :class="`reveal-delay-${index + 1}`"
            >
              <div class="flex gap-4 md:gap-6 w-full md:w-[39%] items-center">
                <span
                  class="bg-green-light rounded-full text-green-dark font-bold py-1.5 px-3 text-sm flex-shrink-0"
                >
                  {{ index + 1 }}
                </span>
                <div class="flex flex-col">
                  <span class="text-xl md:text-2xl">{{ topic.name }}</span>
                  <p class="text-sm text-white/50 leading-relaxed mt-1 md:hidden">
                    {{ topic.description }}
                  </p>
                </div>
              </div>

              <p class="text-sm w-[45%] lg:w-[35%] hidden md:block text-white/60 leading-relaxed">
                <span>{{ topic.description }}</span>
                <span class="flex gap-1 mt-1.5 text-green-light/80 flex-wrap">
                  Ex :
                  <span v-for="example in topic.examples" :key="example"
                    >{{ example }},</span
                  >
                  etc.
                </span>
              </p>

              <div class="flex justify-end w-[10%] md:w-[18%]">
                <component :is="topic.icon" class="text-green-light w-6 md:w-8" />
              </div>
            </div>
          </div>

          <div
            class="reveal bg-white text-green-dark flex flex-col justify-center items-center py-10 md:py-14 mx-6 rounded-[2.5rem] md:mx-auto md:mt-24"
          >
            <NuxtImg
              class="w-12 md:w-16"
              provider="cloudinary"
              src="/v1713366012/Aucode/code-2024_ex6wvx.png"
              alt="Icone du canard Aucode"
              width="96"
              height="96"
            />
            <div
              class="text-3xl md:text-5xl tracking-tighter font-extra-bold mt-4 mb-8 md:mb-12 text-center"
            >
              Entraîne-toi avec <span class="text-green-light">+32</span>&nbsp;quiz
            </div>

            <div class="hidden md:flex justify-center gap-2">
              <NuxtImg
                v-for="(screenshot, index) in screenshots"
                provider="cloudinary"
                :key="screenshot.url"
                class="w-[28%] transition-transform duration-500 hover:scale-105"
                :class="index === 1 ? 'scale-105' : 'opacity-90'"
                :src="screenshot.url"
                :alt="screenshot.alt"
                format="webp"
                width="374"
                height="597"
              />
            </div>

            <div class="md:hidden w-full">
              <Swiper
                class="w-full swiper-screenshots-wrapper"
                :modules="[EffectCoverflow, Pagination]"
                :slides-per-view="'auto'"
                :grabCursor="true"
                :space-between="24"
                :centeredSlides="true"
                :pagination="{ clickable: false }"
                :coverflow-effect="{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }"
              >
                <SwiperSlide
                  class="bg-white rounded-2xl w-[15rem] flex flex-col justify-between"
                  v-for="screenshot in screenshots"
                  :key="screenshot.url"
                >
                  <NuxtImg
                    format="webp"
                    provider="cloudinary"
                    :src="screenshot.url"
                    :alt="screenshot.alt"
                    width="453"
                    height="722"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div class="mt-28 md:mt-48">
            <div class="mx-6 md:mx-0 reveal">
              <span class="text-white/40 text-lg md:text-xl"> En finir avec </span>

              <h3
                class="mb-14 md:mb-20 font-display text-3xl md:text-5xl tracking-tighter leading-none mt-2"
              >
                Le syndrome de
                <span class="text-green-light">l'imposteur</span>
              </h3>
            </div>

            <div class="md:hidden">
              <Swiper
                class="swiper-cards-wrapper w-full"
                :modules="[EffectCoverflow, Pagination]"
                :slides-per-view="'auto'"
                :grabCursor="true"
                :space-between="24"
                :centeredSlides="true"
                :pagination="{ clickable: false }"
                :coverflow-effect="{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }"
              >
                <SwiperSlide
                  v-for="(category, index) in categories"
                  :key="index"
                  class="swiper-cards md:hidden group flex flex-col rounded-3xl border border-green-light/30 justify-end w-[25%] relative hover:bg-green-light transition-all duration-700"
                >
                  <component
                    :is="category.icon"
                    class="text-green-light absolute top-7 right-7 group-hover:text-green-dark transition-all duration-700"
                  />

                  <div
                    class="flex flex-col pt-28 px-7 pb-9"
                  >
                    <span
                      class="text-[2rem] tracking-tighter text-green-light group-hover:text-green-dark transition-all duration-700"
                    >
                      {{ category.title }}
                    </span>
                    <p
                      class="text-white/50 text-base leading-relaxed group-hover:text-green-dark/70 transition-all duration-700 mt-2"
                    >
                      {{ category.description }}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="hidden md:flex md:flex-wrap w-full gap-5">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="reveal group flex flex-col rounded-3xl border border-green-light/20 justify-between md:w-[48%] xl:w-[23.5%] relative hover:bg-green-light hover:border-green-light transition-all duration-500"
                :class="`reveal-delay-${index + 1}`"
              >
                <component
                  :is="category.icon"
                  class="text-green-light absolute top-7 right-7 group-hover:text-green-dark transition-all duration-500"
                />

                <div class="pt-28 lg:pt-36 xl:pt-48 px-8 pb-12">
                  <span
                    class="text-[2rem] tracking-tighter text-green-light group-hover:text-green-dark transition-all duration-500 block"
                  >
                    {{ category.title }}
                  </span>
                  <p
                    class="text-white/50 text-base leading-relaxed group-hover:text-green-dark/70 transition-all duration-500 mt-2"
                  >
                    {{ category.description }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="flex flex-col md:flex-row gap-6 text-green-dark justify-center mt-16 md:mt-28 pb-28 md:pb-48 mx-6 md:mx-0 reveal"
            >
              <Buttons />
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative w-full bg-gradient-to-r from-bg-linear-1 to-bg-linear-2 -mt-px"
      >
        <div class="px-6 md:px-24 relative h-full">
          <div class="max-w-[1440px] mx-auto">
            <div
              class="bg-radial-custom from-radial-start via-radial-end to-radial-start absolute inset-0 opacity-5"
            />

            <div class="relative z-10">
              <h4
                class="reveal font-display font-extra-bold text-3xl md:text-5xl text-center tracking-tighter leading-none"
              >
                Qui est derrière <span class="text-green-light">Aucode</span>&nbsp;?
              </h4>

              <div
                class="reveal mt-12 md:mt-16 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center max-w-[900px] mx-auto"
              >
                <NuxtImg
                  format="webp"
                  class="w-full max-w-[280px] lg:max-w-[300px] rounded-xl object-contain"
                  provider="cloudinary"
                  src="/v1737224499/Aucode/cam_ddizm7.jpg"
                  alt="Portrait de Camille, fondatrice de Aucode"
                  width="300"
                  height="400"
                />

                <div class="flex-1">
                  <p class="text-base lg:text-lg leading-relaxed text-white/60">
                    Moi c'est Camille. Je crée des apps depuis des années
                    et j'ai connu le stress des entretiens, le syndrome de
                    l'imposteur, le doute permanent.
                  </p>
                  <p class="mt-4 text-base lg:text-lg leading-relaxed text-white/60">
                    J'ai créé Aucode pour que personne n'ait à galérer
                    seul·e avec ça. Parce que le plus dur, c'est pas le
                    code | c'est d'oser y croire.
                  </p>

                  <div class="flex gap-5 mt-6">
                    <NuxtLink
                      to="https://www.linkedin.com/in/camille-coutens-9a0960a5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer hover:opacity-70 transition-opacity"
                      aria-label="Lien vers le profil Linkedin de Camille"
                    >
                      <component
                        :is="IconLinkedin"
                        class="w-5 h-5 text-green-light"
                      />
                    </NuxtLink>
                    <NuxtLink
                      to="https://twitter.com/camillecoutens"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer hover:opacity-70 transition-opacity"
                      aria-label="Lien vers le profil Twitter de Camille"
                    >
                      <component
                        :is="IconX"
                        class="w-5 h-5 text-green-light"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div class="reveal mt-14 md:mt-20 text-center px-6 md:px-0">
                <p
                  class="font-display text-base md:text-xl lg:text-2xl leading-snug max-w-[650px] mx-auto tracking-tight"
                >
                  <span class="text-green-light">Aucode</span> est né d'une
                  conviction : chaque dev mérite d'avoir confiance en ses
                  compétences. Pas besoin d'être senior pour être légitime.
                </p>
              </div>

              <div
                class="flex flex-col md:flex-row gap-6 text-green-dark justify-center mt-14 md:mt-20 pb-24 reveal"
              >
                <Buttons />
              </div>
            </div>
          </div>
        </div>

        <Footer class="relative z-10" />
      </div>
    </div>
  </main>
</template>

<style>
.swiper-pagination {
  position: relative;
  bottom: -0.313rem;
  text-align: center;
  margin-top: 35px;
  width: auto;

  &-bullet {
    border-radius: 100%;
    width: 0.5rem;
    height: 0.5rem;
    background: #fff;

    &-active {
      background: #bff92b;
      width: 1.69rem;
      border-radius: 2rem;
      transition: all 0.3s ease-in-out;
    }
  }
}

.swiper-cards-wrapper .swiper-slide {
  width: 18.7rem;
  min-height: 20rem;
  background: transparent;

  &-active {
    background: #bff92b;
    transition: all 0.3s ease-in-out;

    svg,
    div span,
    p {
      color: #43473a;
      transition: all 0.3s ease-in-out;
    }
  }
}

.swiper-reviews-wrapper .swiper-slide {
  width: 256px;
  min-height: 280px;
}

.swiper-screenshots-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-screenshots-wrapper .swiper-pagination {
  margin-top: 0;
}

.swiper-screenshots-wrapper .swiper-pagination .swiper-pagination-bullet {
  background-color: #b6b6b6;

  &-active {
    background: #bff92b;
    width: 1.69rem;
    border-radius: 2rem;
    transition: all 0.3s ease-in-out;
  }
}
</style>
