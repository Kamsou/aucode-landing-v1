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
      v-if="errorMessage !== ''"
      class="flex flex-col justify-center items-center px-6 h-full"
    >
      <h1 class="font-extra-bold text-3xl sm:text-4xl tracking-tighter">
        Confirmation de l'Email
      </h1>

      <div class="mt-4 text-xs sm:text-base sm:text-center">
        <p v-if="errorMessage === ''">
          Veuillez patienter, nous confirmons votre adresse email...
        </p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <div v-else>
          <p>
            Votre adresse email <b> {{ route.query.email }}</b> a été confirmée
            avec succès ! Vous pouvez maintenant vous connecter avec votre
            adresse email.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Aucode — Confirmation de l'adresse e-mail",
});

const errorMessage = ref("" as string | null);
const route = useRoute();
const router = useRouter();
const supabase = useSupabaseClient();

onMounted(async () => {
  try {
    const token = route.query.token as string;
    const email = route.query.email as string;

    if (!token && !email) {
      router.push("/");
      return;
    }

    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "signup",
    });

    if (error) {
      if (error.status === 401) {
        errorMessage.value =
          "Le lien de confirmation a expiré. Veuillez vous inscrire à nouveau.";
        return;
      }

      if (error.status === 404) {
        router.push("/");
        return;
      }

      errorMessage.value =
        "Une erreur s'est produite lors de la confirmation. Veuillez nous contacter si le problème persiste.";
      return;
    }

    errorMessage.value = null;
  } catch (e) {
    errorMessage.value = "Une erreur s'est produite lors de la confirmation.";
  }
});
</script>
