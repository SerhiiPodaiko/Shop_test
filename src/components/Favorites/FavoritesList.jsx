import FavoritesListItem from './FavoritesListItem'

const FavoritesList = ({ favoritesList }) => {
  return (
    <div className='list'>
      {favoritesList.map(favorite =>
        <FavoritesListItem key={favorite.id} favorite={favorite} />)}
    </div>
  )
}

export default FavoritesList
