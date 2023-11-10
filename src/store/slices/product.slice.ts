import {createSlice} from '@reduxjs/toolkit'
import {Product} from '../../types'

const initialState = {
    products: [] as Product[],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProduct(state, action) {
            state.products = action.payload
        }
    },
})

export const getProduct = productSlice.actions.getProduct

const ProductSlice = productSlice.reducer
export default ProductSlice

