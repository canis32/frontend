<template>
  <header :style="{ backgroundColor: bgColor }" class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav">
          <ul class="list-reset header__nav-list">
            <li
              v-for="(item, index) in navItems"
              :key="index"
              class="header__nav-item"
            >
              <NuxtLink :to="item.link" class="header__nav-item-link"
                >{{ item.title }}
                <img
                  v-if="item.image"
                  :src="item.image"
                  alt="logo"
                  :class="item.isLogo ? 'header__logo' : 'header__icon'"
                />
                <span
                  v-if="item.isCart && cartStore.getTotalItems > 0"
                  class="cart-badge"
                >
                  {{ cartStore.getTotalItems }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <!-- <NuxtLink to="/">
            <img src="/img/logo.png" alt="logo" class="header__logo" />
          </NuxtLink> -->
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useCartStore } from '../../stores/cart'

const props = defineProps({
  bgColor: {
    type: String,
    default: '#292929',
  },
})

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 0 128px 0;
  background-color: #fff;
  &__logo {
    margin: 0 50px 0 50px;
    width: 100%;
    height: 100%;
    max-width: 333px;
    object-fit: cover;
  }
  &__icon {
    width: 25px;
    height: 25px;
  }
  &__nav {
    width: 100%;
    height: 100%;
    &-item {
      position: relative;

      &-link {
        color: #fff;
        font-family: 'Montserrat Alternates';
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1.6px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        position: relative;
      }
    }
  }
  &__nav-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27px;
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
