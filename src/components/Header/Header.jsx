import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiStar } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { FaBagShopping } from 'react-icons/fa6'

import Search from './Search/Search'
import './Header.scss'
import { PAGES_SLUGS } from '@/constants/pages'
import { AppContext } from '@/context/AppContext'
const Header = () => {
  const { favoritesList, cartList } = useContext(AppContext)

  // Стан для зберігання кількості обраних товарів та товарів у корзині
  const [favoriteCount, setFavoriteCount] = useState(favoritesList.length)
  const [cartCount, setCartCount] = useState(cartList.length)

  // Відслідковуємо зміни у списку обраних товарів та корзині
  useEffect(() => {
    setFavoriteCount(favoritesList.length)
  }, [favoritesList])

  useEffect(() => {
    setCartCount(cartList.length)
  }, [cartList])

  // Відслідковуємо зміни у контексті та оновлюємо стан
  useEffect(() => {
    setFavoriteCount(favoritesList.length)
    setCartCount(cartList.length)
  }, [favoritesList, cartList])

  return (
    <header className='header'>
      <Link to={PAGES_SLUGS.home}>
        <FaBagShopping className='header__logo' size={40} color='white' title='Logo' />
      </Link>

      <Search placeholder='Пошук товару..' />

      <nav className='header__links'>
        <Link to={PAGES_SLUGS.favorites} className='header__link'>
          <CiStar
            to={PAGES_SLUGS.favorites}
            size={30}
            color={favoriteCount > 0 ? 'orange' : 'white'}
          />
          <span>{favoriteCount}</span>
        </Link>
        <Link to={PAGES_SLUGS.cart} className='header__link'>
          <IoCartOutline
            to={PAGES_SLUGS.favorites}
            size={30}
            color={cartCount > 0 ? 'orange' : 'white'}
          />
          <span>{cartCount}</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
