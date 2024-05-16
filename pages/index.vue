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
import IconHuman from "@/assets/icons/IconHuman.vue";
import IconEye from "@/assets/icons/IconEye.vue";

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
    icon: IconHuman,
    title: "Confiance",
    description:
      "Cultivez et valorisez votre estime de soi ainsi que vos compétences, quel que soit votre parcours.",
  },
  {
    icon: IconEye,
    title: "Perception",
    description:
      "Se sentir à sa place et valorisé, indépendamment de son parcours ou de sa formation.",
  },
];

const prices = [
  {
    title: "Starter",
    number: "0 €",
    features: ["16 Quiz", "Corrections", "Résultats"],
  },
  {
    title: "Premium",
    number: "19,99 €",
    features: ["+30 Quiz", "Corrections", "Résultats"],
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

const topics = computed(() => {
  return [
    {
      name: "Front-end",
      description: `Le front-end fait référence à la partie visible d'une application ou d'un site web, celle avec laquelle l'utilisateur interagit directement.`,
      icon: IconPencil,
    },
    {
      name: "Back-end",
      description: `Le back-end est tout ce qui se passe en coulisse pour faire fonctionner une application ou un site web. Cela comprend les serveurs,
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
});
</script>

<template>
  <section class="mx-auto font-regular tracking-tighter">
    <div class="w-full md:max-w-[1440px] md:mx-auto">
      <Header class="pt-6 md:pt-10 mx-6 md:mx-24" />
    </div>

    <div
      ref="hero"
      class="md:flex md:justify-between pt-16 md:pt-20 pb-20 md:pb-40 px-6 md:px-24 md:overflow-x-hidden w-full md:max-w-[1440px] md:mx-auto"
    >
      <div class="w-full md:max-w-[50%] relative z-10">
        <h1
          class="text-[10vw] md:text-[3.4rem] lg:text-[4.625rem] w-full md:w-[460px] lg:w-[625px] md:tracking-[-0.25rem] font-extra-bold text-green-dark leading-[10vw] md:leading-[3.5rem] lg:leading-[4.5rem] z-10 tracking-tighter"
        >
          Teste tes acquis <br />de développeur·se avant de postuler
        </h1>
        <p class="my-7">Découvre nos Quiz dès maintenant gratuitement !</p>
        <div class="flex flex-col md:flex-row gap-4 md:gap-6">
          <Buttons />
        </div>
      </div>

      <div
        class="relative max-w-full md:max-w-[400px] lg:max-w-full mt-12 md:mt-0"
      >
        <Parallax :factor="0.05">
          <div
            class="bg-green-light rounded-xl absolute top-0 left-4 md:left-24 py-1 text-xs font-bold flex justify-center items-center gap-[0.38rem] w-[10rem] md:w-[11rem]"
          >
            <NuxtImg
              format="webp"
              class="w-10 h-10 md:w-[3.3rem] md:h-[3.3rem]"
              provider="cloudinary"
              src="/v1699195810/Aucode/duck-icon-face_cxs9qh.png"
              alt="Icone du canard Aucode"
              width="53"
              height="53"
            />
            <span class="uppercase">Rejoins-nous !</span>
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
            class="bg-green-light rounded-xl absolute bottom-5 md:bottom-12 right-5 md:right-12 lg:right-20 text-xs font-bold flex items-center justify-center gap-[0.38rem] w-[10rem] md:w-[11rem]"
          >
            <NuxtImg
              format="webp"
              class="w-[2.3rem] md:w-[3.3rem]"
              provider="cloudinary"
              src="/v1689610705/Aucode/duck_yosxyk.png"
              alt="Illustration du canard Aucode"
              width="53"
              height="66"
            />
            <span class="uppercase">c’est gratuit !</span>
          </div>
        </Parallax>
      </div>
    </div>

    <div class="w-full text-white mt-20 md:mt-0">
      <div
        class="bg-gradient-to-r from-bg-linear-1 to-bg-linear-2 h-full w-full relative"
      >
        <div
          class="bg-radial-custom from-radial-start via-radial-end to-radial-start absolute inset-0 opacity-5"
        />
        <div
          class="md:px-24 rounded-t-[2.5rem] relative h-full w-full md:max-w-[1440px] md:mx-auto"
        >
          <div ref="reviews">
            <div class="md:hidden transform -translate-y-20">
              <Swiper
                class="w-full swiper-reviews-wrapper"
                :modules="[SwiperEffectCoverflow, SwiperPagination]"
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
                  class="bg-white p-6 rounded-2xl w-[15rem] flex flex-col justify-between"
                  v-for="card in cards"
                  :key="card.user"
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
                    <div class="py-11 h-[180px]">
                      <p class="text-green-dark text-sm">
                        {{ card.review }}
                      </p>
                    </div>

                    <div class="flex items-center justify-between">
                      <p
                        class="text-[#b5e04a] uppercase text-xs tracking-wide font-bold"
                      >
                        {{ card.user }}
                      </p>
                      <p class="text-gray-light text-[0.625rem] tracking-wide">
                        {{ card.date }}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="w-full hidden md:flex gap-5 transform -translate-y-20">
              <div
                v-for="card in cards"
                :key="card.user"
                class="bg-white p-6 rounded-2xl w-[20rem] flex flex-col justify-between"
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
                  <div class="py-11 h-[200px] sm:h-[225px] lg:h-[180px]">
                    <p class="text-green-dark text-sm">
                      {{ card.review }}
                    </p>
                  </div>

                  <div class="flex items-center justify-between">
                    <p class="text-[#b5e04a] uppercase text-xs font-bold">
                      {{ card.user }}
                    </p>
                    <p class="text-gray-light text-[0.625rem] tracking-wide">
                      {{ card.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref="topics"
            class="md:mt-20 mb-32 md:mb-0 md:my-52 mx-6 md:mx-0 border-b border-green-light border-opacity-10"
          >
            <h2
              class="mb-12 md:mb-20 text-[3.25rem] leading-[3.25rem] md:leading-normal md:text-7xl tracking-tighter break-words"
            >
              <span class="text-green-light">4</span> thématiques
            </h2>

            <div
              v-for="(topic, index) in topics"
              :key="topic.name"
              class="flex items-center gap-0 md:gap-8 w-full py-7 border-t border-green-light border-opacity-10 justify-between"
            >
              <div class="flex gap-8 w-full md:w-[39%]">
                <span
                  class="bg-green-light rounded-full text-green-dark py-[0.4rem] md:py-2 px-[0.94rem] text-base md:text-xl h-full"
                >
                  {{ index + 1 }}
                </span>
                <span class="text-[1.625rem]">{{ topic.name }}</span>
              </div>

              <p class="text-sm w-[35%] md:w-[45%] lg:w-[35%] hidden md:block">
                {{ topic.description }}
              </p>
              <div class="flex justify-end w-[20%] md:w-[18%]">
                <component :is="topic.icon" class="text-green-light w-8" />
              </div>
            </div>
          </div>

          <div
            ref="quiz"
            class="bg-white text-green-dark flex flex-col justify-center items-center py-8 md:py-16 mx-6 rounded-[2.5rem] md:max-w-[1440px] md:mx-auto md:mt-40"
          >
            <NuxtImg
              class="w-14 md:w-24"
              provider="cloudinary"
              src="/v1713366012/Aucode/code-2024_ex6wvx.png"
              alt="Icone du canard Aucode"
              width="96"
              height="96"
            />
            <div
              class="text-5xl md:text-7xl tracking-tighter font-bold mt-7 mb-11 md:mb-20 text-center"
            >
              <span class="text-green-light">+32</span> Quiz
            </div>

            <div class="hidden md:flex justify-center">
              <NuxtImg
                v-for="screenshot in screenshots"
                provider="cloudinary"
                :key="screenshot.url"
                class="w-[30%]"
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
                :modules="[SwiperEffectCoverflow, SwiperPagination]"
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

          <div ref="syndrom" class="mt-32 md:mt-60">
            <div class="mx-6 md:mx-0">
              <span class="text-gray-light text-2xl pl-1"> En finir avec </span>

              <h3
                class="mb-[4.5rem] md:mb-20 text-5xl md:text-7xl tracking-tighter md:leading-[3.5rem]"
              >
                Le syndrome de <span class="text-green-light">l’imposteur</span>
              </h3>
            </div>

            <div class="md:hidden">
              <Swiper
                class="swiper-cards-wrapper w-full"
                :modules="[SwiperEffectCoverflow, SwiperPagination]"
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
                  class="swiper-cards md:hidden group flex flex-col rounded-3xl border border-green-light justify-between w-[25%] relative hover:bg-green-light transition-all duration-1000"
                >
                  <component
                    :is="category.icon"
                    class="text-green-light absolute top-6 right-6 group-hover:text-green-dark transition-all duration-1000"
                  />

                  <div
                    class="flex flex-col h-full justify-end md:block md:pt-44 px-6 md:px-7 pb-8 md:pb-14"
                  >
                    <span
                      class="text-[2rem] tracking-tighter text-green-light group-hover:text-green-dark transition-all duration-1000"
                    >
                      {{ category.title }}
                    </span>
                    <p
                      class="text-gray-light text-sm group-hover:text-green-dark transition-all duration-1000"
                    >
                      {{ category.description }}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="hidden md:flex md:flex-wrap w-full gap-4">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="group flex flex-col rounded-3xl border border-green-light justify-between md:w-[48%] lg:w-[23%] relative hover:bg-green-light transition-all duration-500"
              >
                <component
                  :is="category.icon"
                  class="text-green-light absolute top-6 right-6 group-hover:text-green-dark transition-all duration-500"
                />

                <div class="pt-44 px-7 pb-14">
                  <span
                    class="md:text-[2rem] lg:text-[2vw] xl:text-[1.9rem] tracking-tighter text-green-light group-hover:text-green-dark transition-all duration-500"
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

            <div
              class="flex flex-col md:flex-row gap-6 text-green-dark justify-center mt-14 md:mt-20 pb-32 md:pb-60 mx-6 md:mx-0"
            >
              <Buttons />
            </div>
          </div>
        </div>
      </div>

      <div class="relative text-white w-full">
        <div
          class="px-6 md:px-24 relative bg-gradient-to-r from-bg-linear-1 to-bg-linear-2 h-full"
        >
          <div class="md:max-w-[1440px] md:mx-auto">
            <!-- <div ref="pricing">
              <h4
                class="text-5xl md:text-[5rem] font-bold text-center tracking-tighter mb-16 md:mb-20 text-white"
              >
                Pricing
              </h4>

              <div
                class="flex flex-col md:flex-row gap-8 justify-center mx-6 md:mx-0 text-green-dark"
              >
                <div
                  v-for="price in prices"
                  :key="price.title"
                  class="bg-white flex flex-col items-center justify-center rounded-3xl p-0 lg:p-14 py-12 px-6 md:w-[20rem] lg:w-[29rem]"
                >
                  <span class="text-4xl md:text-5xl tracking-tighter">
                    {{ price.title }}
                  </span>
                  <span
                    class="text-[3.5rem] leading-[3.5rem] md:text-8xl mt-5 md:mt-8 tracking-tighter text-bg-linear-2"
                  >
                    {{ price.number }}
                  </span>

                  <ul
                    class="text-xl text-center md:text-2xl text-green-dark opacity-60 leading-8 mt-5 md:mt-8"
                  >
                    <li v-for="feature in price.features" :key="feature">
                      {{ feature }}
                    </li>
                  </ul>
                </div>
              </div>
            </div> -->
            <div
              class="bg-radial-custom from-radial-start via-radial-end to-radial-start absolute inset-0 opacity-5"
            />

            <div ref="about" class="relative z-10">
              <h4
                class="font-bold text-[2.8rem] leading-[2.8rem] sm:text-xl md:text-7xl text-center tracking-tighter"
              >
                Qui est derrière <span class="text-green-light">Aucode</span> ?
              </h4>

              <div
                class="mt-16 md:mt-32 flex flex-col lg:flex-row gap-16 md:gap-24 items-center"
              >
                <div
                  class="flex flex-col justify-center items-center w-full lg:w-1/2"
                >
                  <div>
                    <NuxtImg
                      format="webp"
                      class="bg-cover w-full h-full"
                      provider="cloudinary"
                      src="/v1711108118/Aucode/Sans_titre-2_rcghkk.png"
                      alt="Portrait de Camille, fondatrice de Aucode"
                    />

                    <div
                      class="flex justify-center items-center lg:justify-normal gap-6 mt-11 md:mt-6"
                    >
                      <NuxtLink
                        to="https://www.linkedin.com/in/camille-coutens-9a0960a5/"
                        target="_blank"
                        class="cursor-pointer"
                        aria-label="Lien vers le profil Linkedin de Camille"
                      >
                        <component
                          :is="IconLinkedin"
                          class="w-8 h-8 text-green-light"
                        />
                      </NuxtLink>
                      <NuxtLink
                        to="https://twitter.com/camillecoutens"
                        target="_blank"
                        class="cursor-pointer"
                        aria-label="Lien vers le profil Twitter de Camille"
                      >
                        <component
                          :is="IconX"
                          class="w-8 h-8 text-green-light"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <div class="w-full lg:w-1/2 text-sm md:text-xl px-6 md:px-0">
                  <p class="mb-8 leading-[1.6rem] md:leading-7 opacity-70">
                    Quand j'ai débuté dans le monde du dev, j'ai grandement
                    appris et travaillé auprès d'agences et de startups
                    innovantes en France. J'y ai rencontré de formidables
                    personnes qui m'ont appris et soutenu.
                  </p>
                  <p class="mb-8 leading-[1.6rem] md:leading-7 opacity-70">
                    Par la suite, j'ai voulu façonner quelque chose de
                    véritablement personnel en lançant mes propres projets.
                    C'est pour ça que j'ai lancé Augalo, une application pour
                    les cavalieres. Et aujourd'hui pour Aucode, une application
                    pour les codeur·se·s.
                  </p>
                  <p class="md:mb-8 leading-[1.6rem] md:leading-7 opacity-70">
                    J'ai toujours cru en la force de la collaboration et de
                    l'esprit d'équipe, mais j'ai également réalisé que la
                    confiance en soi est fondamentale pour toutes codeur·se·s ,
                    indépendamment de son expérience.
                  </p>
                </div>
              </div>

              <div class="mt-16 px-6 md:px-0 md:mt-28 md:text-center">
                <p
                  class="text-lg md:text-[1.75rem] md:leading-10 w-full md:w-[90%] mx-auto"
                >
                  C'est avec cette idée en tête que
                  <span class="text-green-light">"Aucode"</span> a vu le jour :
                  un projet pour aider les codeur·se·s à prendre confiance en
                  elles. Ainsi qu'à valoriser leur contribution dans le monde de
                  la tech.
                </p>
              </div>

              <div
                class="flex flex-col md:flex-row gap-6 text-green-dark justify-center mt-16 md:mt-20 pb-28"
              >
                <Buttons />
              </div>
            </div>
          </div>
        </div>

        <Footer class="relative z-10" />
      </div>
    </div>
  </section>
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
  height: 18.8rem;
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
  width: 240px;
  height: 264px;
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
