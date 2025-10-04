<template>
  <div class="cart-list">
    <div v-if="cartStore.cartList.length === 0" class="cart-empty">
      <h3>Корзина пуста</h3>
      <p>Добавьте товары из каталога</p>
    </div>

    <div v-else>
      <div
        v-for="item in cartStore.cartList"
        :key="`${item.id}-${item.size}`"
        class="cart-item"
      >
        <div class="cart-item__image">
          <img :src="item.image" :alt="item.title" />
        </div>

        <div class="cart-item__info">
          <h3 class="cart-item__title">{{ item.title }}</h3>

          <div class="cart-item__options">
            <div class="cart-item__color">
              <span>Цвета:</span>
              <div class="colors-list">
                <div
                  v-for="color in item.colors"
                  :key="color.name"
                  class="color-item"
                >
                  <img
                    v-if="color.image"
                    :src="color.image"
                    :alt="color.name"
                    class="color-image"
                  />
                </div>
              </div>
            </div>

            <div class="cart-item__size">
              <span>Размер:</span>
              <span class="size-badge">{{ item.size }}</span>
            </div>
          </div>

          <div class="cart-item__price">{{ formatPrice(item.price) }} ₽</div>
        </div>

        <div class="cart-item__controls">
          <div class="quantity-controls">
            <button @click="updateQuantity(item, -1)" class="quantity-btn">
              -
            </button>
            <span class="quantity">{{ item.count }}</span>
            <button @click="updateQuantity(item, 1)" class="quantity-btn">
              +
            </button>
          </div>

          <button @click="removeItem(item)" class="btn-reset remove-btn">
            Удалить товар
          </button>
        </div>
      </div>

      <div class="cart-actions">
        <button @click="cartStore.removeAll()" class="clear-cart-btn">
          ОЧИСТИТЬ КОРЗИНУ
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()

const updateQuantity = (item: any, change: number) => {
  cartStore.updateCart(item, change)
}

const removeItem = (item: any) => {
  cartStore.removeItem(item.id, item.size)
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}
</script>

<style lang="scss" scoped>
.cart-list {
  .cart-empty {
    text-align: center;
    padding: 40px 20px;
    color: #fff;

    h3 {
      font-family: 'Montserrat Alternates';
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-family: 'Montserrat Alternates';
      font-size: 16px;
      color: #ccc;
    }
  }
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #fff;

  border-radius: 10px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);

  &__image {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid #fff;
      padding: 5px;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__color,
  &__size {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Montserrat Alternates';
    font-size: 14px;
    color: #fff;
  }

  .colors-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .color-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .color-image {
    width: 20px;
    height: 20px;
  }

  .color-name {
    font-family: 'Montserrat Alternates';
    font-size: 12px;
    color: #fff;
    font-weight: 400;
  }

  .size-badge {
    background: #fff;
    color: #000;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
  }

  &__price {
    font-family: 'Montserrat Alternates';
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }

  &__controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 768px) {
      align-items: flex-start;
    }
  }
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;

  .quantity-btn {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .quantity {
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    min-width: 30px;
    text-align: center;
  }
}

.remove-btn {
  font-family: 'Montserrat Alternates';
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
}

.cart-actions {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #fff;

  .clear-cart-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: #ccc;
    }
  }
}

@media screen and (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
