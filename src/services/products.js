export const fetchGetAllProducts = async () => {
  try {
    const response = await fetch('/products.json')

    return await response.json()
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
}
