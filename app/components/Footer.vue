<template>
  <footer class="bg-white text-green-dark rounded-t-[3rem] px-6 md:px-24">
    <div
      class="max-w-[1440px] mx-auto py-12 md:py-16 flex flex-col items-center gap-10"
    >
      <!-- Logo -->
      <NuxtImg
        format="webp"
        provider="cloudinary"
        src="/v1689702123/Aucode/logo_genenk.png"
        alt="Aucode Logo"
        class="w-20"
        width="97"
        height="34"
      />

      <!-- Social links -->
      <div class="flex gap-8">
        <NuxtLink
          to="https://www.linkedin.com/company/aucode-tech"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-bold hover:text-green-light transition-colors duration-300"
        >
          Linkedin
        </NuxtLink>
        <NuxtLink
          to="https://twitter.com/aucode_app"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-bold hover:text-green-light transition-colors duration-300"
        >
          X
        </NuxtLink>
      </div>

      <!-- Separator -->
      <div class="w-12 h-px bg-gray-light/40" />

      <!-- Legal links -->
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <NuxtLink
          to="/legal"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-green-dark/50 hover:text-green-dark transition-colors duration-300"
        >
          Mentions légales
        </NuxtLink>
        <NuxtLink
          to="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-green-dark/50 hover:text-green-dark transition-colors duration-300"
        >
          Confidentialité
        </NuxtLink>
        <NuxtLink
          to="/cgv"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-green-dark/50 hover:text-green-dark transition-colors duration-300"
        >
          CGV
        </NuxtLink>
      </div>

      <!-- Copyright -->
      <span class="text-xs text-green-dark/30">
        Aucode {{ new Date().getFullYear() }}
      </span>
    </div>
  </footer>
</template>
