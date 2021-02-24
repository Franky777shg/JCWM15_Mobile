import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native'
import { Tile, Card, Button, Rating } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'

// import actions
import { getCarousel, getProduct } from '../actions'

// import components
import HeaderComp from '../components/HeaderComp'
import TileComp from '../components/TileComp'
import ProductCard from '../components/ProductCard'

const WIDTH = Dimensions.get('screen').width;

const ProductScreen = () => {
    const dispatch = useDispatch()

    const { product, carousel, username } = useSelector((state) => {
        return {
            product: state.productReducer.product,
            carousel: state.productReducer.carousel,
            username: state.userReducer.username
        }
    })

    React.useEffect(() => {
        dispatch(getCarousel())
        dispatch(getProduct())
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: '#fbeeac', flex: 1 }}>
            <HeaderComp
                username={username}
            />
            <View>
                <Carousel
                    data={carousel}
                    renderItem={({ item }) => (
                        <TileComp data={item}/>
                    )}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH}
                    loop
                />
            </View>
            <Text style={{ marginTop: 20, marginHorizontal: 20, fontSize: 25, fontWeight: 'bold' }}>Product</Text>
            <FlatList
                data={product}
                renderItem={({ item }) => (
                    <ProductCard product={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ListFooterComponent={<View style={{ height: 20 }}></View>}
            />
        </SafeAreaView>
    )
}

export default ProductScreen