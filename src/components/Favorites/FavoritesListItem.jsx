import { useContext } from 'react'
import { SlClose } from 'react-icons/sl'
import { AppContext } from '@/context/AppContext'

const FavoritesListItem = ({ favorite }) => {
  const { removeFromFavorites } = useContext(AppContext)

  return (
    <div key={favorite.id} className='list__item'>
      <img src={favorite.img} className='list__item-image' alt={favorite.name} />
      <div className='list__item-wrapper'>
        <h2 className='list__item-name'>{favorite.name}</h2>
        <span className='list__item-art'><strong>Код:</strong> {favorite.art}</span>
        <p className='list__item-price'><strong>Ціна:</strong> {favorite.price}</p>
        <p className='list__item-color'><strong>Колір:</strong> {favorite.color}</p>
      </div>
      <SlClose
        onClick={() => removeFromFavorites(favorite.id)}
        size={30}
        color='#F70003'
        className='list__item-btn-close'
      />
    </div>
  )
}

export default FavoritesListItem
