import {getProduct} from '../slices/product.slice.ts'
import {getRequest} from '../../config/axiosConfig.ts'

export function getProductAsyc() {
    return async (dispatch:any, _getState:any) => {
        const res = await getRequest('products?populate=*')
        dispatch(getProduct(res.data))
    }
}