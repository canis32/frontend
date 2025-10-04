<template>
  <section class="collection">
    <div class="container">
      <div class="collection__wrapper">
        <div class="collection__content">
          <h2 class="collection__title">Наши коллекции</h2>
          <p class="collection__description">
            Каждая коллекция — это отражение стиля, времени и уникального
            подхода к дизайну. Мы собрали для вас два мира, в которых
            переплетаются актуальные тенденции и мода для собак.
          </p>
          <p class="collection__description">
            Актуальные коллекции — это свежие идеи, современные формы и
            материалы, вдохновленные последними трендами. Здесь можно купить
            образы, которые задают стиль сегодня, пока коллекция не отправиась в
            “архив”.
          </p>
          <p class="collection__description">
            Архивные коллекции — это возможность заглянуть в историю бренда и
            посмотреть, какие коллекции производились ранее.
          </p>
          <NuxtLink to="/collections" class="collection__link"
            >Перейти в каталог</NuxtLink
          >
        </div>
        <img
          src="/svg/collection.svg"
          alt="collection"
          class="collection__image"
        />
        <NuxtLink to="/collections" class="collection__link-2"
          >Перейти в каталог</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.collection {
  background: #292929;
  padding: 86px 0;
  @media screen and (max-width: 1200px) {
    padding: 0 0 86px 0;
  }
  @media screen and (max-width: 813px) {
    padding: 0 0 60px 0;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 84px;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
  }
  &__content {
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 50px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
      font-size: 32px;
      margin-bottom: 14px;
    }
    @media screen and (max-width: 813px) {
      font-size: 24px;
    }
  }
  &__description {
    margin-bottom: 34px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;

    &:last-child {
      margin-bottom: 80px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 18px;
      margin-bottom: 14px;
    }
    @media screen and (max-width: 813px) {
      font-size: 16px;
    }
  }
  &__link {
    display: inline-block;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;

    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    text-decoration: none;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &__image {
    width: 100%;
    max-width: 515px;
    height: auto;
  }
  &__link-2 {
    display: none;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;

    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    text-decoration: none;
    @media screen and (max-width: 1200px) {
      display: inline-block;
      padding: 10px 40px;
      font-size: 18px;
    }
    @media screen and (max-width: 813px) {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
}
</style>
