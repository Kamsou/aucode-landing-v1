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
      const user = await supabase.auth.getUser();

      if (user) {
        const { error: insertError } = await supabase
          .from("users")
          .insert({
            id: user.data.user?.id,
            email: user.data.user?.email,
            name: user.data.user?.user_metadata.name,
            preferred_username: user.data.user?.user_metadata.preferred_username,
            birth_date: user.data.user?.user_metadata.birth_date,
            professional_status: user.data.user?.user_metadata.professional_status,
            is_actively_looking:  user.data.user?.user_metadata.is_actively_looking,
            referral_source: user.data.user?.user_metadata.referral_source,
            has_cgv_accepted: user.data.user?.user_metadata.has_cgv_accepted,
            has_marketing_accepted: user.data.user?.user_metadata.has_marketing_accepted,
          } as never);

        errorMessage.value = null;

        if (insertError) {
          errorMessage.value =
            "Une erreur s'est produite lors de la confirmation. Veuillez nous contacter si le problème persiste.";
          return;
        }
      }
    }

    if (error) {
      if (error.status === 404) {
        router.push("/");
        return;
      }
      errorMessage.value =
        "Une erreur s'est produite lors de la confirmation. Veuillez nous contacter si le problème persiste.";
      return;
    }

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
      class="flex flex-col justify-center items-start md:items-center px-6 h-screen"
    >
      <h1 v-if="!errorMessage" class="font-extra-bold text-3xl sm:text-4xl tracking-tighter">
        Confirmation de l'Email
      </h1>

      <div class="mt-4 text-xs sm:text-base sm:text-center">
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

    <div
      v-else
      class="flex flex-col justify-center items-start md:items-center px-6 h-screen"
    >
      <div class="mt-4 text-xs sm:text-base sm:text-center">
        Patience, on confirme ton adresse email...
      </div>
    </div>
  </section>
</template>
