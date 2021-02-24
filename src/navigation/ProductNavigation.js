import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import ProductScreen from '../screen/ProductScreen'
import ProductDetail from '../screen/ProductDetail'

const ProductNavigation = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator >
            <Stack.Screen name="home-product" component={ProductScreen} options={{headerShown: false}}/>
            <Stack.Screen name="product-detail" component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default ProductNavigation