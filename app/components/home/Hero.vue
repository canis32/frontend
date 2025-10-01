<template>
  <section class="hero">
    <Header :bgColor="'#1F1515'" class="hero__header" />
    <HeaderMobile :bgColor="'#1F1515'" class="hero__header-mobile" />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  background: #1f1515;
  height: 100vh;
  &__header {
    @media screen and (max-width: 1200px) {
      display: none;
    }
    &-mobile {
      display: none;
      @media screen and (max-width: 1200px) {
        display: block;
      }
    }
  }
}
</style>
