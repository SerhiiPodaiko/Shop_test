import { useContext } from 'react'

import './Cart.scss'
import { AppContext } from '@/context/AppContext'
import CartItem from './CartListItem'

const CartList = () => {
  const { cartList } = useContext(AppContext)

  return (
    <div className='list'>
      {cartList.map(cart => <CartItem key={cart.id} cart={cart} />)}
    </div>
  )
}

export default CartList
