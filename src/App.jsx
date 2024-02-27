import { Route, Routes } from 'react-router-dom'

import Home from '@/components/Home/Home'
import Cart from '@/components/Cart/Cart'
import Favorites from '@/components/Favorites/Favorites.jsx'
import Layout from '@/components/Layout/Layout'
import NotFound from '@/components/404/NotFound'
import { PAGES_SLUGS } from '@/constants/pages'

const App = () => {
  return (
    <Routes>
      <Route path={PAGES_SLUGS.home} element={<Layout />}>
        <Route path={PAGES_SLUGS.home} element={<Home />} />
        <Route path={PAGES_SLUGS.cart} element={<Cart />} />
        <Route path={PAGES_SLUGS.favorites} element={<Favorites />} />
        <Route path={PAGES_SLUGS.notFound} element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
