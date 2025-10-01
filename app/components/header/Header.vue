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
const props = defineProps({
  bgColor: {
    type: String,
    default: '#292929',
  },
})
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
      &-link {
        color: #fff;
        font-family: 'Montserrat Alternates';
        font-size: 20px;
        font-style: normal;
        font-weight: 700;

        letter-spacing: 1.6px;
        text-decoration: none;
        text-transform: uppercase;
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
</style>
