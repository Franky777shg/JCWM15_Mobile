import Axios from 'axios'

export const getProduct = () => {
    return async (dispatch) => {
        try {
            console.log('get product trigered')

            const res = await Axios.get('http://192.168.100.3:2000/product/getProduct')
            // console.log(res.data)
            console.log('after axios')

            dispatch({
                type: 'GET_PRODUCT',
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const getCarousel = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get('http://192.168.100.3:2000/product/getCarousel')
            // console.log(res.data)

            dispatch({
                type: 'GET_CAROUSEL',
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}