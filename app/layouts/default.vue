<template>
  <div>
    <Header :bgColor="'#292929'" class="hero__header" />
    <HeaderMobile :bgColor="'#292929'" class="hero__mobile" />
    <slot />
    <Footer :color="'#1F1515'" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero__header {
  @media screen and (max-width: 1200px) {
    display: none;
  }
}
.hero__mobile {
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
  }
}
</style>
