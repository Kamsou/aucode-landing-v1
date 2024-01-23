<script setup lang="ts">
const router = useRouter();

useSeoMeta({
  title: "Aucode — Politique de confidentalité",
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
      Politique de confidentalité
    </h1>

    <div class="w-full px-4 md:max-w-[800px] md:mx-auto pb-32">
      <p class="mt-3">
        L’application mobile Aucode ne collectent des données personnelles
        relatives à l’utilisateur que pour le besoin des services proposés par
        Aucode (création de compte, authentification, contacts, notifications
        emails, facturation).
      </p>
      <div>
        <p class="text-2xl font-bold mt-6">Introduction</p>
        <p class="description">
          Devant le développement des nouveaux outils de communication, il est
          nécessaire de porter une attention particulière à la protection de la
          vie privée. C’est pourquoi, nous nous engageons à respecter la
          confidentialité des renseignements personnels que nous collectons.
          Avertissement : L'Application mobile développés par Aucode vous
          permettent uniquement de vous informer et de vous accompagner dans
          l’apprentissage des savoirs demandés lors des examens de galops en
          centre équestre.
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">Collecte des données personnelles</p>
        <p class="description">
          Nous collectons les renseignements suivants : Nom/ Prénom Adresse
          électronique Ces données personnelles sont recueillies uniquement
          après que vous nous ayez donné votre consentement, notamment lors de
          votre première connexion. Les renseignements personnels que nous
          collectons sont recueillis au travers de formulaires et grâce à
          l’interactivité établie entre vous et notre site Web/Application
          mobile. Vos données ne sont en aucun cas transmisses à des partenaires
          de Aucode. Enfin, nous n’utilisons pas de cookies pour réunir des
          informations vous concernant.
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">Formulaires et interactivités</p>
        <p class="description">
          Vos renseignements personnels sont collectés par le biais de
          formulaire, à savoir : Formulaire d’inscription au site
          Web/Application mobile Nous utilisons les renseignements ainsi
          collectés pour les finalités suivantes : Contact Aucune publicité ou
          incitation commerciale n’est présente sur notre Site Web/Application
          mobile.
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">Droit d'opposition et de retrait</p>
        <p class="description">
          Nous nous engageons à vous offrir un droit d’opposition et de retrait
          quant à vos renseignements personnels. Le droit d’opposition s’entend
          comme étant la possibilité offerte aux internautes de refuser que
          leurs renseignements personnels soient utilisés à certaines fins
          mentionnées lors de la collecte. Le droit de retrait s’entend comme
          étant la possibilité offerte aux internautes de demander à ce que
          leurs renseignements personnels ne figurent plus, par exemple, dans
          une liste de diffusion. Pour pouvoir exercer ces droits, vous pouvez
          nous contacter par email : contact@aucode.tech
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">
          Divulgation d'informations personnelles
        </p>
        <p class="description">
          Il peut nous arriver de transmettre vos informations personnelles à
          nos employés ou équipes techniques afin de gérer les comptes
          utilisateur, le site web/application mobile et les Services qui vous
          sont proposés. . Toute divulgation de données personnelles sera
          strictement contrôlée et réalisée en accord avec les législations
          européennes et américaines, mais aussi des pays depuis lesquels notre
          site web/application mobile est disponible. Nous ne divulguons pas vos
          données personnelles à une tierce partie sans votre consentement et
          conformément à la loi en vigueur. Nous vous encourageons à consulter
          nos termes et conditions d’utilisations.
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">Sécurité</p>
        <p class="description">
          Les renseignements personnels que nous collectons sont conservés dans
          un environnement sécurisé. Les personnes travaillant pour nous sont
          tenues de respecter la confidentialité de vos informations. Nous nous
          engageons à maintenir un haut degré de confidentialité en intégrant
          les dernières innovations technologiques permettant d’assurer la
          confidentialité de vos données. Toutefois, comme aucun mécanisme
          n’offre une sécurité maximale, une part de risque est toujours
          présente lorsque l’on utilise Internet pour transmettre des
          renseignements personnels.
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">Législations</p>
        <p class="description">
          Nous nous engageons à respecter les dispositions législatives énoncées
          dans : Loi 78-17 Informatique et Libertés.
        </p>
      </div>
      <div>
        <p class="text-2xl font-bold mt-6">Mises à jour</p>
        <p class="description">
          Les présentes Règles de confidentialité peuvent être amenées à
          changer, nous publierons toute modification des règles de
          confidentialité sur cette page et une notification vous sera envoyée
          afin de vous inciter à consulter les nouvelles règles en vigueur.
        </p>
      </div>
    </div>
  </section>
</template>
