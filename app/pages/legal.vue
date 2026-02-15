<script setup lang="ts">
useSeoMeta({
  title: "Aucode | Mentions Légales",
});
</script>

<template>
  <div class="bg-background min-h-screen">
    <Header />

    <main class="max-w-[800px] mx-auto px-6 md:px-12 pt-16 pb-32">
      <h1
        class="font-extra-bold text-3xl md:text-4xl text-green-dark tracking-tight"
      >
        Mentions Légales
      </h1>

      <div class="mt-12 space-y-10 text-green-dark">
        <section>
          <h2 class="font-extra-bold text-xl">Site et Application</h2>
          <ul class="mt-3 text-base leading-relaxed text-green-dark/80 space-y-2">
            <li>
              <strong>Site internet</strong> (ci-après « le Site ») : désigne le site accessible à
              l'adresse https://aucode.tech/
            </li>
            <li>
              <strong>Application mobile</strong> (ci-après « l'Application ») : fait référence à
              l'application mobile "Aucode", disponible pour les smartphones sur iOS
              (App Store) et Android (Google Play).
            </li>
          </ul>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Éditeur</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Dendea Production, Entrepreneur Individuel, dont le siège social
            est situé au 229 rue Saint-Honoré, 75001 Paris, France.
          </p>
          <ul class="mt-3 text-base leading-relaxed text-green-dark/80 space-y-1">
            <li><strong>SIREN :</strong> 839 497 062</li>
            <li><strong>SIRET :</strong> 839 497 062 00043</li>
            <li><strong>N° TVA :</strong> FR76839497062</li>
            <li><strong>Activité (NAF/APE) :</strong> Programmation informatique — 6201Z</li>
          </ul>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Courriel de contact :
            <a href="mailto:contact@aucode.tech" class="underline hover:text-green-dark transition-colors">contact@aucode.tech</a>
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Hébergeur</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Le Site est hébergé par o2Switch, dont le siège est situé au 222-224
            Boulevard Gustave Flaubert, 63000 Clermont-Ferrand. Les données
            relatives à l'Application sont stockées dans une base de données
            hébergée sur la plateforme Supabase.
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Délégué à la protection des données (DPO)</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Les détails relatifs à la collecte et au traitement des données
            personnelles sont disponibles dans la
            <NuxtLink to="/privacy" class="underline hover:text-green-dark transition-colors">Politique de Confidentialité</NuxtLink>.
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Propriété Intellectuelle</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            L'ensemble des éléments présents sur le Site et dans l'Application,
            incluant mais sans s'y limiter, les logos, images, textes,
            animations, sont la propriété exclusive de Dendea Production. Toute
            reproduction, diffusion ou utilisation sans autorisation expresse
            est interdite.
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Limitation de responsabilité</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Dendea Production ne saurait être tenue responsable des dommages
            directs ou indirects résultant de l'utilisation du Site ou de
            l'Application, ou de l'impossibilité d'y accéder.
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Liens Externes</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Le Site et l'Application peuvent contenir des liens vers d'autres
            sites web. Dendea Production n'est pas responsable du contenu et des
            pratiques de ces sites tiers. Il est recommandé aux utilisateurs de
            consulter les mentions légales et politiques de confidentialité de
            ces sites avant toute navigation.
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Modification des mentions légales</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Dendea Production se réserve le droit de modifier à tout moment les
            présentes mentions légales. Les utilisateurs sont donc invités à les
            consulter régulièrement.
          </p>
        </section>

        <section>
          <h2 class="font-extra-bold text-xl">Loi applicable et juridiction</h2>
          <p class="mt-3 text-base leading-relaxed text-green-dark/80">
            Les présentes mentions légales sont régies par la loi française.
            Tout litige relatif à l'interprétation ou à l'exécution de ces
            mentions légales sera de la compétence exclusive des tribunaux
            français.
          </p>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>
