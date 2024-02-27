import { Outlet } from 'react-router-dom'
import Header from '@/components/Header/Header.jsx'

const Layout = () => (
  <>
    <Header />
    <main className='content'>
      <Outlet />
    </main>
  </>
)

export default Layout
