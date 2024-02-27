import { useContext } from 'react'

import { AppContext } from '@/context/AppContext'
import './Favorites.scss'
import Alert from '@/ui/Alert/Alert.jsx'
import FavoritesList from './FavoritesList'

const Favorites = () => {
  const { favoritesList, removeAllFavorites } = useContext(AppContext)

  if (!favoritesList || favoritesList.length === 0) {
    return <Alert color='info'>Список пустий</Alert>
  }

  return (
    <section className='favorites'>
      <header className='favorites__header'>
        <h2 className='favorites__title'>Кількість: {favoritesList.length}</h2>
        <button onClick={removeAllFavorites} className='favorites__btn-remove-all'>
          Видалити всі
        </button>
      </header>

      <FavoritesList favoritesList={favoritesList} />
    </section>
  )
}

export default Favorites
