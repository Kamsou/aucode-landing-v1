<template>
  <div
    class="text-green-dark bg-white flex flex-col md:flex-row md:justify-between px-0 pt-9 md:py-9 rounded-t-[3rem] md:px-10 lg:px-24 md:flex uppercase md:normal-case"
  >
    <div class="flex flex-col md:flex-row items-center text-center md:w-[30%]">
      <NuxtImg
        format="webp"
        provider="cloudinary"
        src="/v1689702123/Aucode/logo_genenk.png"
        alt="Aucode Logo"
        class="w-24 mb-16 md:mb-0"
        width="97"
        height="34"
      />
      <div class="flex flex-col md:flex-row md:gap-11 w-full px-6">
        <NuxtLink
          to="https://www.linkedin.com/company/aucode-tech"
          target="_blank"
        >
          <div
            class="py-5 md:py-0 border-t border-gray-light border-opacity-40 md:border-none hover:cursor-pointer group"
          >
            <span>
              Linkedin
              <span
                class="block h-0.5 w-0 bg-green-dark md:group-hover:w-full transition-all"
              />
            </span>
          </div>
        </NuxtLink>
        <NuxtLink to="https://twitter.com/aucode_app" target="_blank">
          <div
            class="py-5 md:py-0 border-t border-gray-light border-opacity-40 w-full md:border-none hover:cursor-pointer group"
          >
            <span>
              X
              <span
                class="block h-0.5 w-0 bg-green-dark md:group-hover:w-full transition-all"
              />
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-center w-full text-center px-6 md:px-0 md:w-[50%] lg:w-[60%] md:gap-8"
    >
      <div
        class="flex flex-col md:flex-row items-center md:gap-4 lg:gap-9 w-full text-center"
      >
        <NuxtLink to="/legal" class="w-full md:w-auto">
          <div
            class="py-5 md:py-0 border-t border-gray-light border-opacity-40 text-center md:border-none hover:cursor-pointer group w-full md:w-[130px]"
          >
            <span>
              Mentions légales
              <span
                class="block h-0.5 w-0 bg-green-dark md:group-hover:w-full transition-all"
              />
            </span>
          </div>
        </NuxtLink>

        <NuxtLink to="/privacy" class="w-full md:w-auto">
          <div
            class="py-5 md:py-0 border-t border-gray-light border-opacity-40 text-center md:border-none hover:cursor-pointer group"
          >
            <span>
              Confidentalité
              <span
                class="block h-0.5 w-0 bg-green-dark md:group-hover:w-full transition-all"
              />
            </span>
          </div>
        </NuxtLink>

        <NuxtLink to="/cgv" class="w-full md:w-auto">
          <div
            class="py-5 md:py-0 border-t border-gray-light border-opacity-40 text-center md:border-none leading-5 hover:cursor-pointer group"
          >
            <span>
              CGV
              <span
                class="block h-0.5 w-0 bg-green-dark md:group-hover:w-full transition-all"
              />
            </span>
          </div>
        </NuxtLink>
      </div>
      <span
        class="text-xs py-5 md:py-0 border-t border-gray-light border-opacity-40 text-center md:border-none pt-16 md:pt-0 w-full md:w-[140px]"
      >
        Aucode 2023
      </span>
    </div>
  </div>
</template>
