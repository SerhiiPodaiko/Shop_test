import { productsData } from './productsData'

export const fetchGetAllProducts = async () => {
  try {
    const response = productsData

    return response
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
}
