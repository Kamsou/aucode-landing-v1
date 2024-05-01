<script setup lang="ts">
useSeoMeta({
  title: "Aucode — Réinitialiser le mot de passe",
});

const supabase = useSupabaseClient();
const router = useRouter();

const errorMessage = ref<string>("");
const successMessage = ref<string>("");
const password = ref("");
const isLoading = ref(false);
const isReady = ref(false);
const accessToken = ref("");
const refresh_token = ref("");

const hasButtonDisabled = computed(
  () => password.value === "" || password.value.length < 6 || isLoading.value
);

async function modifyUser() {
  isLoading.value = true;

  await supabase.auth.refreshSession({ refresh_token: refresh_token.value });

  const { error } = await supabase.auth.updateUser({
    password: password.value,
  });

  if (error) {
    errorMessage.value = "Une erreur est survenue. Veuillez réessayer.";
    isLoading.value = false;
    return;
  }

  isLoading.value = false;
  successMessage.value = "Votre mot de passe a été réinitialisé avec succès.";
}

function redirectToApp() {
  if (process.client) {
    const isAndroid = navigator.userAgent.match(/Android/i);
    const isIos = navigator.userAgent.match(/iPhone|iPad|iPod/i);

    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.aucode.tech&hl=fr&pli=1";
      return;
    }

    if (isIos) {
      window.location.href =
        "https://apps.apple.com/fr/app/aucode/id6463032739";
      return;
    }

    router.push("/");
  }
}

watch(
  () => router.currentRoute.value,
  (value) => {
    const hash = value.hash.substring(1);
    const params = new URLSearchParams(hash);
    const errorDescription = params.get("error_description");

    accessToken.value = params.get("access_token") as string;
    refresh_token.value = params.get("refresh_token") as string;

    if (params.size === 0) {
      router.push("/");
      return;
    }

    if (errorDescription) {
      errorMessage.value =
        "Le lien de réinitialisation de mot de passe a expiré. Veuillez refaire une demande.";
      isReady.value = true;
      return;
    }

    isReady.value = true;
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <section class="h-screen">
    <NuxtImg
      provider="cloudinary"
      src="/v1689702123/Aucode/logo_genenk.png"
      alt="Aucode Logo"
      class="max-w-[100px] px-6 py-4 absolute top-0 left-0"
      width="97"
      height="34"
    />

    <div
      class="flex flex-col justify-center px-6 sm:w-[600px] sm:mx-auto h-full"
    >
      <div v-if="successMessage === '' && errorMessage === '' && isReady">
        <h1
          class="font-extra-bold text-3xl sm:text-4xl tracking-tighter text-left sm:text-center"
        >
          Mot de passe oublié ?
        </h1>

        <Input
          v-model="password"
          type="password"
          label="Nouveau mot de passe"
          class="my-4 sm:my-12 text-lg"
        />

        <Button
          variant="primary"
          class="w-full"
          @click="modifyUser"
          :disabled="hasButtonDisabled"
        >
          <span v-if="isLoading">En cours...</span>
          <span v-else>Reinitaliser le mot de passe</span>
        </Button>
      </div>

      <div
        v-if="errorMessage"
        class="flex flex-col justify-center px-6 h-[80vh] sm:w-[600px] sm:mx-auto"
      >
        {{ errorMessage }}
      </div>

      <div
        v-if="successMessage !== ''"
        class="flex flex-col justify-center px-6 h-[80vh] sm:w-[600px] sm:mx-auto text-center"
      >
        <p class="font-bold tracking-tighter text-2xl">
          Votre mot de passe a été réinitialisé avec succès.
        </p>
        <span class="text-sm block">
          Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.
        </span>

        <Button variant="secondary" class="w-full mt-4" @click="redirectToApp">
          Retourner sur Aucode
        </Button>
      </div>
    </div>
  </section>
</template>
