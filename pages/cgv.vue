<script setup lang="ts">
const router = useRouter();

useSeoMeta({
  title: "Aucode — Conditions Générales de Vente",
});
</script>

<template>
  <section>
    <p
      class="fixed top-0 left-0 border-solid border-2 border-black border-b-4 rounded-xl text-black transform transition duration-300 ease-in-out py-[10px] px-4 hover:scale-105 text-sm cursor-pointer w-20 m-3 sm:m-7 bg-white"
      @click="router.push('/')"
    >
      Retour
    </p>

    <h1
      class="font-extra-bold text-4xl py-24 sm:py-14 md:py-32 px-4 md:text-center"
    >
      Conditions Générales de Vente
    </h1>

    <div class="w-full px-4 md:max-w-[800px] md:mx-auto mb-32">
      <h2 class="text-sm text-right mb-5">
        Dernière mise à jour : 29 août 2022
      </h2>
      <span class="text-2xl font-bold">Article 1 : Objet</span>
      <p class="description">
        Les présentes Conditions Générales de Vente (ci-après les "CGV") ont
        pour objet de régir les relations contractuelles entre Camille Coutens,
        ci-après "l'Éditeur", et l'utilisateur de l'application mobile Aucode,
        ci-après "l'Utilisateur".
      </p>

      <div class="px-1 mt-6">
        <p class="text-2xl mt-3 font-bold">Article 2 : Acceptation des CGV</p>
        <p class="description">
          L'utilisation de l'application mobile implique l'acceptation pleine et
          entière des présentes CGV.
        </p>
        <div class="mt-6">
          <span class="text-2xl font-bold"
            >Article 3 : Modification des CGV</span
          >
          <p class="description">
            L'Éditeur se réserve le droit de modifier les présentes CGV à tout
            moment. Les CGV applicables sont celles en vigueur à la date de
            l'utilisation de l'application.
          </p>
        </div>
        <p class="text-2xl mt-6 font-bold">
          Article 4 : Description du service
        </p>
        <p class="description">
          L'application Aucode offre des quiz d'apprentissage, affiche le score
          obtenu pour chaque quiz, permet d'ajouter des détails à son profil et
          propose une option payante pour accéder à davantage de questions.
        </p>

        <div class="mt-6">
          <span class="text-2xl font-bold">Article 5 : Accès au service</span>
          <p class="description">
            L'accès au service est possible via le téléchargement de
            l'application mobile sur un appareil compatible. Certaines
            fonctionnalités peuvent nécessiter une connexion Internet.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">Article 6 : Prix et paiement</span>
          <p class="description">
            L'accès à l'application est gratuit. Un pack premium est disponible
            au prix de 19,99€. Valable jusqu'à la prochaine mise à jour du
            contenu de l'application.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">Article 7 : Responsabilité</span>
          <p class="description">
            L'Éditeur ne peut en aucun cas être tenu responsable de tout dommage
            de quelque nature qu'il soit résultant de l'utilisation ou de
            l'indisponibilité de l'application.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">
            Article 8 : Données personnelles
          </span>
          <p class="description">
            Les données personnelles recueillies via l'application sont traitées
            conformément à notre Politique de Confidentialité.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">
            Article 9 : Propriété intellectuelle
          </span>
          <p class="description">
            Tous les éléments de l'application, y compris le code source, les
            graphismes, les images, les textes, sont la propriété exclusive de
            l'Éditeur.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">Article 10 : Résiliation</span>
          <p class="description">
            L'Utilisateur peut résilier son compte à tout moment via les
            paramètres de l'application. L'Éditeur se réserve également le droit
            de suspendre ou de résilier un compte utilisateur en cas de
            violation des présentes CGV.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">
            Article 11 : Droit applicable et juridiction compétente
          </span>
          <p class="description">
            Les présentes CGV sont régies par le droit français. En cas de
            litige, les tribunaux français seront seuls compétents.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
