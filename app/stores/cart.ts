import { defineStore } from 'pinia'

type TCart = {
  id: string
  title: string
  price: number
  count: number
  size: string
  colors: Array<{
    name: string
    image: string
  }>
  image: string
  article?: string
}

export const useCartStore = defineStore('cart', () => {
  const cartList = ref<TCart[]>([])

  const updateCart = (product: TCart, count: number) => {
    if (!product) return
    
    const elIndex = cartList.value.findIndex(item => 
      item.id === product.id && 
      item.size === product.size
    )

    if (elIndex !== -1) {
      const item = cartList.value[elIndex]
      if (item) {
        item.count += count

        if (item.count <= 0) {
          cartList.value.splice(elIndex, 1)
        }
      }
    } else if (count > 0) {
      cartList.value.push({ ...product, count })
    }
  }

  const removeItem = (id: string, size: string) => {
    const elIndex = cartList.value.findIndex(item => 
      item.id === id && 
      item.size === size
    )
    
    if (elIndex !== -1) {
      cartList.value.splice(elIndex, 1)
    }
  }

  const removeAll = () => {
    cartList.value = []
  }

  const getTotalPrice = computed(() => {
    return cartList.value.reduce((total, item) => total + (item.price * item.count), 0)
  })

  const getTotalItems = computed(() => {
    return cartList.value.reduce((total, item) => total + item.count, 0)
  })

  return {
    cartList,
    updateCart,
    removeItem,
    removeAll,
    getTotalPrice,
    getTotalItems
  }
})