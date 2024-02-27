import { useContext, useState } from 'react'
import { SlClose } from 'react-icons/sl'

import './Cart.scss'
import { AppContext } from '@/context/AppContext'
import Modal from '@/ui/Modal/Modal'

const CartListItem = ({ cart }) => {
  const [toggleModal, setToggleModal] = useState(false)
  const { removeFromCart } = useContext(AppContext)

  // Функція для видалення товару з корзини
  const removeProductFromCart = () => {
    removeFromCart(cart.id)
    setToggleModal(false)
  }

  return (
    <div key={cart.id} className='list__item'>
      { cart.img ?
        <img src={cart.img} className="list__item-image" alt={cart.name} /> :
        <div className='list__item-image'>Not found</div>
      }
      <div className="list__item-wrapper">
        <h2 className='list__item-name'>{cart.name}</h2>
        <span className='list__item-art'><strong>Код:</strong> {cart.art}</span>
        <span className='list__item-quentity'><strong>Кількість обраного товару:</strong> {cart.quantity}</span>
        <p className='list__item-price'><strong>Ціна:</strong> {cart.price}</p>
        <p className='list__item-color'><strong>Колір:</strong> {cart.color}</p>
      </div>
      <SlClose
        onClick={() => setToggleModal(true)}
        size={30}
        color='#F70003'
        className='list__item-btn-close'
      />
      <Modal modalClose={() => setToggleModal(false)} isModal={toggleModal}>
        <header className='modal__header'>
          <h2>Повідомлення</h2>
        </header>
        <div className='modal__content'>Ви дійсно хочете видалити товар?</div>
        <footer className='modal__footer'>
          <button className='modal__btn-success' onClick={() => removeProductFromCart(cart.id)}>
            Видалити
          </button>
          <button className='modal__btn-cancel' onClick={() => setToggleModal(false)}>
            Відмінити
          </button>
        </footer>
      </Modal>
    </div>
  )
}

export default CartListItem
