import { useContext, useEffect, useState } from 'react'
import { PiStarFill } from 'react-icons/pi'

import Button from '@/ui/Button/Button.jsx'
import Modal from '@/ui/Modal/Modal.jsx'
import { AppContext } from '@/context/AppContext.jsx'

const ProductItem = ({ product }) => {
  const [toggleModal, setToggleModal] = useState(false)
  const { toggleFavorite, removeFromCart, addToCart, favoritesList } = useContext(AppContext)

  const initialFavoriteStatus =   favoritesList.some(item => item.id === product.id)
  const [favoriteStatus, setFavoriteStatus] = useState(initialFavoriteStatus)

  const addToCartProduct = (product) => {
    addToCart(product)
    setToggleModal(false)
  }

  // Оновлюємо статус обраності товару при зміні списку обраних товарів
  useEffect(() => {
    const isFavorite = favoritesList.some(item => item.id === product.id)
    setFavoriteStatus(isFavorite)
  }, [favoritesList, product.id])

  const addFavorite = (product) => {
    const newFavoriteStatus = !favoriteStatus
    toggleFavorite(product) // Викликаємо функцію toggleFavorite з контексту
    setFavoriteStatus(newFavoriteStatus)
  }

  return (
    <div className='product'>
      <img src={product.img} className='product__image' alt={product.name} />
      <h2 className='product__name'>{product.name}</h2>
      <span className='product__art'><strong>Код:</strong> {product.art}</span>
      <p className='product__price'><strong>Ціна:</strong> {product.price}</p>
      <p className='product__color'><strong>Колір:</strong> {product.color}</p>
      <div className='product__btns'>
        <Button className='product__btn-add' handlerClick={() => setToggleModal(true)}>
          Додати
        </Button>
        <Button className='product__btn-remove' handlerClick={() => removeFromCart(product.id)} disabled={true}>
          Видалити
        </Button>
      </div>
      <Button className='product__btn-favorite' handlerClick={() => addFavorite(product)}>
        <PiStarFill size={30} color={favoriteStatus ? 'yellow' : ''} />
      </Button>
      {toggleModal && (
        <Modal
          modalClose={() => setToggleModal(false)}
          isModal={toggleModal}
        >
          <header className='modal__header'>
            <h2>Замовлення</h2>
          </header>
          <div className='modal__content'>
            <p>Ваш товар</p>
          </div>
          <footer className='modal__footer'>
            <button onClick={() => addToCartProduct(product)} className='modal__btn-success'>
              Додати
            </button>
            <button onClick={() => setToggleModal(false)} className='modal__btn-cancel'>
              Відмінити
            </button>
          </footer>
        </Modal>
      )}
    </div>
  )
}

export default ProductItem
