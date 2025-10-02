<template>
  <div>
    <section class="collections">
      <div class="container">
        <p class="collections__description">
          Широкий ассортимент стильной и функциональной одежды для собак,
          разработанной с учетом комфорта и анатомических особенностей питомцев.
        </p>
        <CollectionsItems :collectionsList="getData || []" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const collectionsData = await useLoadData(apiCatalog, {
  query: {
    populate: '*',
    sort: 'createdAt:desc',
  },
})

const getData = computed(() => {
  return collectionsData.value?.data
})
console.log(getData.value)
</script>

<style lang="scss" scoped>
.collections {
  padding: 0 0 86px 0;
  background: #1f1515;
  &__description {
    margin-bottom: 67px;
    max-width: 1000px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
