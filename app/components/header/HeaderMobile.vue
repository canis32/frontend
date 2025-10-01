<template>
  <header :style="{ backgroundColor: bgColor }" class="header">
    <div class="container">
      <div class="header__wrapper">
        <Burger
          :is-open="isMobileMenuOpen"
          @toggle="toggleMobileMenu"
          @close="closeMobileMenu"
          @openPopup="openBurger"
        />
        <img src="/img/logo.png" alt="logo" class="header__logo" />
        <NuxtLink to="/"
          ><img src="/img/cart.png" alt="cart" class="header__icon"
        /></NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Burger from '../common/Burger.vue'
const props = defineProps({
  bgColor: {
    type: String,
    default: '#292929',
  },
})

const isMobileMenuOpen = ref(false)

const openBurger = () => {
  isMobileMenuOpen.value = false
}
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 0 128px 0;
  background-color: #fff;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  &__logo {
    margin: 0 50px 0 50px;
    width: 100%;
    height: 100%;
    max-width: 150px;
    object-fit: cover;
  }
  &__icon {
    width: 25px;
    height: 25px;
  }
}
</style>
