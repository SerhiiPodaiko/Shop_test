import { createContext, useEffect, useState } from 'react'
import { fetchGetAllProducts } from '@/services/products'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([])
  const [favoritesList, setFavoritesList] = useState([])
  const [cartList, setCartList] = useState([])

  // Ефект, що завантажує список продуктів при завантаженні сторінк =================================================
  useEffect(() => {
    fetchGetAllProducts().then(data => setProductsList(data))
  }, [])

  // Ефект, що завантажує список обраних продуктів з localStorage при завантаженні сторінки =========================
  useEffect(() => {
    const favoriteData = JSON.parse(localStorage.getItem('favorites')) || []
    setFavoritesList(favoriteData)
  }, [])

  // Функція для перемикання статусу обраного товару
  const toggleFavorite = (product) => {
    setFavoritesList(prevFavorite => {
      const isProductInFavorites = prevFavorite.some(item => item.id === product.id)
      const updatedFavorites = isProductInFavorites
        ? prevFavorite.filter(item => item.id !== product.id)
        : [...prevFavorite, product]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)) // Зберігаємо обрані товари у localStorage
      return updatedFavorites
    })
  }

  // Функція для видалення всіх товарів з списку обраних ============================================================
  const removeAllFavorites = () => {
    setFavoritesList([])
    localStorage.removeItem('favorites')
  }

  const removeFromFavorites = (productId) => {
    setFavoritesList(prevFavorites => {
      // Видаляємо продукт зі списку обраних за його ідентифікатором
      const updatedFavorites = prevFavorites.filter(item => item.id !== productId)

      // Зберігаємо оновлений список обраних товарів у localStorage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

      return updatedFavorites
    })
  }

  // Ефект для завантаження списку товарів у корзині з localStorage при завантаженні сторінки =======================
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || []
    setCartList(cartData)
  }, [])


  // Функція для додавання товару до корзини ========================================================================
  const addToCart = (product) => {
    // Перевіряємо, чи товар вже є у корзині
    const existingProduct = cartList.find(item => item.id === product.id)

    if (existingProduct) {
      // Якщо товар вже є у корзині, збільшуємо його кількість на 1
      const updatedCart = cartList.map(item => {
        // Збільшуємо кількість лише для потрібного товару
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
        // Повертаємо незмінений товар, якщо id не збігається
      })
      // Оновлюємо список товарів у корзині з оновленими кількостями
      setCartList(updatedCart)
      // Оновлюємо localStorage з оновленим списком товарів у корзині
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      // Якщо товару немає у корзині, додаємо його з кількістю 1
      const updatedCart = [...cartList, { ...product, quantity: 1 }]
      // Оновлюємо список товарів у корзині з доданим новим товаром
      setCartList(updatedCart)
      // Оновлюємо localStorage з оновленим списком товарів у корзині
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
  }

  // Функція для видалення одного товару з корзини ==================================================================
  const removeFromCart = (productId) => {
    setCartList(prevCart => {
      // Видалити товар зі списку за його ідентифікатором
      const updatedCart = prevCart.filter(item => item.id !== productId)

      // Оновити локальне сховище з оновленим списком товарів
      localStorage.setItem('cart', JSON.stringify(updatedCart))

      return updatedCart
    })
  }

  // Функція для видалення товару з корзини усіх товарів ============================================================
  const removeAllFromCart = () => {
    setCartList([])
    localStorage.removeItem('cart')
  }

  return (
    <AppContext.Provider value={{
      productsList, favoritesList, toggleFavorite, removeFromFavorites, removeAllFavorites, cartList, addToCart, removeFromCart, removeAllFromCart
    }}
    >
      {children}
    </AppContext.Provider>
  )
}

