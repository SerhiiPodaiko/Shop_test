import { Link } from 'react-router-dom'
import './NotFound.scss'
import { PAGES_SLUGS } from '@/constants/pages'
import NotFoundImage from '@/assets/images/404/404.avif'

const NotFound = () => {
  return (
    <section className='not-found'>
      <div className='not-found__wrapper'>
        <img
          src={NotFoundImage}
          alt='404'
        />
        <Link to={PAGES_SLUGS.home} className='not-found__link'>
          На головну
        </Link>
      </div>
    </section>
  )
}

export default NotFound
