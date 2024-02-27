import { useContext } from 'react'

import './ProductList.scss'
import Loading from '@/ui/Loading/Loading.jsx'
import Button from '@/ui/Button/Button.jsx'
import { AppContext } from '@/context/AppContext'
import ProductList from './ProductList.jsx'

const Products = () => {
  const { productsList } = useContext(AppContext)

  if (!productsList || productsList.length === 0) {
    return <Loading />
  }

  return (
    <section className='products'>
      <header className='products__header'>
        <h1>Продукти</h1>
        <h2>Кількість: {productsList.length}</h2>
      </header>

      <ProductList products={productsList} />

      <Button className='btn-see-more' disabled={productsList.length}>
        Дивитись інші товари
      </Button>
    </section>
  )
}

export default Products
