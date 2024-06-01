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

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    if (data.user?.aud === "authenticated") {
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ to: data.user?.email }),
        });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }

    if (error) {
      if (error.status === 403) {
        errorMessage.value =
          "Le lien de confirmation a expiré. Veuillez nous contacter sur contact@aucode.tech";
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
      class="flex flex-col justify-center items-start px-6 h-screen"
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
          <p class="max-w-xl">
            Votre adresse email <b> {{ route.query.email }}</b> a été confirmée
            avec succès ! Vous pouvez maintenant vous connecter avec votre
            adresse email.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
