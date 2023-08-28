<script setup lang="ts">
const router = useRouter();

useSeoMeta({
  title: "Aucode — Mentions Légales",
});
</script>

<template>
  <section>
    <p
      class="fixed top-0 left-0 border-solid border-2 border-black border-b-4 rounded-xl text-black transform transition duration-300 ease-in-out py-[10px] px-4 hover:scale-105 text-sm cursor-pointer w-20 m-3 sm:m-7 bg-white"
      @click="router.back()"
    >
      Retour
    </p>
    <h1
      class="font-extra-bold text-4xl py-24 sm:py-14 md:py-32 px-4 md:text-center"
    >
      Mentions Légales
    </h1>
    <div class="w-full px-4 md:max-w-[800px] md:mx-auto mb-32">
      <span class="text-2xl font-bold">Site et Application</span>
      <p class="description">
        - Site internet (ci-après « le Site ») : Désigne le site accessible à
        l'adresse https://aucode.tech/ <br />
        - Application mobile (ci-après « l'Application ») : Fait référence à
        l'application mobile "Aucode", disponible pour les smartphones sur iOS
        (Apple Store) et Android (Play Store).
      </p>

      <div class="px-1 mt-6">
        <p class="text-2xl mt-3 font-bold">Éditeur</p>
        <p class="description">
          Camille Coutens, Entreprise Individuelle (EI), dont le siège social
          est situé au 12 rue Céline Robert, 94300 Vincennes, France. Elle est
          représentée par Camille Coutens <br /><br />

          Courriel de contact : contact@aucode.tech <br />
        </p>
        <div class="mt-6">
          <span class="text-2xl font-bold">Hébergeur</span>
          <p class="description">
            Le Site est hébergé par o2Switch, dont le siège est situé au 222-224
            Boulevard Gustave Flaubert, 63000 Clermont-Ferrand. - Données de
            l'Application : Les données relatives à l'Application sont stockées
            dans une base de données hébergée sur la plateforme Heroku. Elles
            sont également consultables par les développeurs sur Mongo DB Atlas.
          </p>
        </div>
        <p class="text-2xl mt-6 font-bold">
          Délégué à la protection des données (DPO)
        </p>
        <p class="description">
          Les détails relatifs à la collecte et au traitement des données
          personnelles sont disponibles dans la Politique de confidentialité.
          <br /><br />
          Ces corrections visent à améliorer la lisibilité et la précision.
          Vérifiez toutefois qu'elles correspondent à vos besoins et aux
          informations que vous souhaitez transmettre.
        </p>

        <div class="mt-6">
          <span class="text-2xl font-bold">Propriété Intellectuelle</span>
          <p class="description">
            L'ensemble des éléments présents sur le Site et dans l'Application,
            incluant mais sans s'y limiter, les logos, images, textes,
            animations, sont la propriété exclusive de Camille Coutens. Toute
            reproduction, diffusion ou utilisation sans autorisation expresse
            est interdite.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">Limitation de responsabilité</span>
          <p class="description">
            Camille Coutens ne saurait être tenue responsable des dommages
            directs ou indirects résultant de l'utilisation du Site ou de
            l'Application, ou de l'impossibilité d'y accéder.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">Liens Externes</span>
          <p class="description">
            Le Site et l'Application peuvent contenir des liens vers d'autres
            sites web. Camille Coutens n'est pas responsable du contenu et des
            pratiques de ces sites tiers. Il est recommandé aux utilisateurs de
            consulter les mentions légales et politiques de confidentialité de
            ces sites avant toute navigation.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold"
            >Modification des mentions légales</span
          >
          <p class="description">
            Camille Coutens se réserve le droit de modifier à tout moment les
            présentes mentions légales. Les utilisateurs sont donc invités à les
            consulter régulièrement.
          </p>
        </div>

        <div class="mt-6">
          <span class="text-2xl font-bold">Loi applicable et juridiction</span>
          <p class="description">
            Les présentes mentions légales sont régies par la loi française.
            Tout litige relatif à l'interprétation ou à l'exécution de ces
            mentions légales sera de la compétence exclusive des tribunaux
            français.
            <br /><br />
            Ces éléments sont couramment inclus dans les mentions légales, mais
            il est crucial de s'assurer qu'ils correspondent à la réalité de
            votre activité et de votre site/application. Si nécessaire, vous
            devriez envisager de consulter un professionnel du droit pour
            garantir la conformité de vos mentions légales avec les
            réglementations en vigueur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
