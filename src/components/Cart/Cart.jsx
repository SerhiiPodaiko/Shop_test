import { useContext, useState } from 'react'

import './Cart.scss'
import { AppContext } from '@/context/AppContext'
import Alert from '@/ui/Alert/Alert'
import CartList from './CartList'
import Modal from '@/ui/Modal/Modal'

const Cart = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const { cartList, removeAllFromCart } = useContext(AppContext)

  if (!cartList || cartList.length === 0) {
    return <Alert color='info'>Корзина пуста</Alert>
  }

  return (
    <>
      <div className='cart'>
        <header className='cart__header'>
          <h2 className="cart__title">Кільксть: {cartList?.length}</h2>
          <button onClick={() => setToggleModal(true)} className="cart__btn-remove">
            Видалити всі
          </button>
        </header>
        <div className="cart__wrapper">
          <CartList cartList={cartList} />
          <div className='payment'>
            <h2 className='payment__title'>Оплата</h2>
          </div>
        </div>
      </div>


      <Modal modalClose={() => setToggleModal(false)} isModal={toggleModal}>
        <header className='modal__header'>
          <h2>Повідомлення</h2>
        </header>
        <div className='modal__content'>Ви дійсно хочете видалити всі товари?</div>
        <footer className='modal__footer'>
          <button className='modal__btn-success' onClick={removeAllFromCart}>
            Видалити
          </button>
          <button className='modal__btn-cancel' onClick={() => setToggleModal(false)}>
            Відмінити
          </button>
        </footer>
      </Modal>
    </>
  )
}

export default Cart
