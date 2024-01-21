import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS
} from './ActionType'
import { api, API_BASE_URL } from '../../config/ApiConfig'
import axios from 'axios'

export const findProducts = (requestData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST })
  const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = requestData
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
        &minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

    console.log('product data', data)
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
  }
}

export const findProductsById = (requestData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
  const { productId } = requestData
  console.log('----', productId)
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/products/id/${productId}`)
    console.log(data)

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
  }
}

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST })
    const { data } =  api.post(`api/admin/products/`, product)
    console.log("created product", data)
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })
  }
}

export const deleteProduct = (productId) => async (dispatch) => {
  console.log(productId)

  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST })
    const { data } = await api.delete(`api/admin/products/${productId}/delete`)
    console.log('delete product' + data)
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId })
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message })
  }
}