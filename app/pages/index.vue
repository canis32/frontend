<template>
  <div>
    <HomeHero />
    <HomeBrends />
    <HomeWhyUs />
    <HomeCollection />
    <Footer :color="'#15151F'" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home',
})

useHead({
  title: 'Canis - модная одежда для собак',
  meta: [
    {
      name: 'description',
      content:
        'Наш бренд - специализируется на создании стильной и функциональной одежды для собак, объединяя моду, комфорт и высокое качество. Мы разрабатываем уникальные коллекции, учитывая анатомические особенности питомцев, потребности в защите от погодных условий и современные тренды.',
    },
    {
      property: 'og:title',
      content: 'Canis - модная одежда для собак',
    },
    {
      property: 'og:description',
      content:
        'Наш бренд - специализируется на создании стильной и функциональной одежды для собак, объединяя моду, комфорт и высокое качество. Мы разрабатываем уникальные коллекции, учитывая анатомические особенности питомцев, потребности в защите от погодных условий и современные тренды.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://canis-atelier.store/' },
    // { property: 'og:image', content: 'https://primedev.pro/images/website-development.jpg' },
    { property: 'og:site_name', content: 'Canis-atelier.store' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style></style>
