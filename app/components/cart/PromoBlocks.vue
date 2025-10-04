<template>
  <div class="promo-blocks">
    <div class="promo-block">
      <div class="promo-block__header">
        <h4>Скидка 1000₽ на первый заказ</h4>
      </div>
      <div class="promo-block__content">
        <p>
          Совершите первую покупку в нашем магазине и получите скидку 1000
          рублей. Выбирайте стильную и удобную одежду для вашего питомца,
          добавляйте товары в корзину и скидка автоматически применяется при
          оформлении заказа.
        </p>
      </div>
    </div>

    <div class="promo-block">
      <div class="promo-block__header">
        <h4>Доставка бесплатная</h4>
      </div>
      <div class="promo-block__content">
        <p>
          Выбирайте всё, что нужно вашему питомцу, без лишних затрат. Мы
          позаботимся о быстрой и надёжной отправке, чтобы ваш заказ дошёл в
          целости и сохранности.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Компонент промо-блоков не требует логики
</script>

<style lang="scss" scoped>
.promo-blocks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.promo-block {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 20px;

  &__header {
    margin-bottom: 15px;

    h4 {
      font-family: 'Montserrat Alternates';
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin: 0;
      text-transform: uppercase;
    }
  }

  &__content {
    p {
      font-family: 'Montserrat Alternates';
      font-size: 14px;
      color: #ccc;
      line-height: 1.5;
      margin: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .promo-blocks {
    gap: 15px;
  }

  .promo-block {
    padding: 15px;

    &__header h4 {
      font-size: 14px;
    }

    &__content p {
      font-size: 13px;
    }
  }
}
</style>
