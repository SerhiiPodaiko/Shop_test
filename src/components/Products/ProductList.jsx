import ProductItem from './ProductItem'


const ProductList = ({ products }) => {
  return (
    <div className='products__list'>
      {products?.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
  )
}

export default ProductList
