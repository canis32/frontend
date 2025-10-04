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
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="logo" class="header__logo"
        /></NuxtLink>
        <NuxtLink to="/cart" class="header__cart-link">
          <img src="/img/cart.png" alt="cart" class="header__icon" />
          <span v-if="cartStore.getTotalItems > 0" class="cart-badge">
            {{ cartStore.getTotalItems }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Burger from '../common/Burger.vue'
import { useCartStore } from '../../stores/cart'

const props = defineProps({
  bgColor: {
    type: String,
    default: '#292929',
  },
})

const cartStore = useCartStore()

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
  @media screen and (max-width: 1200px) {
    padding: 24px 0 44px 0;
  }
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

  &__cart-link {
    position: relative;
    display: flex;
    align-items: center;
  }
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4444;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat Alternates';
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  min-width: 20px;
  padding: 2px;
}
</style>
