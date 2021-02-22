import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import { Header, Avatar } from 'react-native-elements'

// import actions
import { getCarousel, getProduct } from '../actions'

const ProductScreen = () => {
    const dispatch = useDispatch()

    const { product, carousel, username } = useSelector((state) => {
        return {
            product: state.productReducer.product,
            carousel: state.productReducer.carousel,
            username: state.userReducer.username
        }
    })
    // console.log('product', product)
    // console.log('carousel', carousel)

    React.useEffect(() => {
        dispatch(getCarousel())
        dispatch(getProduct())
    }, [])

    return (
        <View>
            <Header
                centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={
                    <Avatar
                        rounded
                        title={username.slice(0, 2)}
                        overlayContainerStyle={{ backgroundColor: '#fbeeac' }}
                        titleStyle={{ color: '#28527a'}}
                    />
                }
                backgroundColor='#28527a'
            // containerStyle={{height: 100}}
            />
        </View>
    )
}

export default ProductScreen