import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native'
import Carousel from 'react-native-snap-carousel'

// import actions
import { getCarousel, getProduct } from '../actions'

// import components
import TileComp from '../components/TileComp'
import ProductCard from '../components/ProductCard'

const WIDTH = Dimensions.get('screen').width;

const ProductScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const { product, carousel } = useSelector((state) => {
        return {
            product: state.productReducer.product,
            carousel: state.productReducer.carousel
        }
    })

    React.useEffect(() => {
        dispatch(getCarousel())
        dispatch(getProduct())
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: '#fbeeac', flex: 1, paddingTop: 10 }}>
            <View>
                <Carousel
                    data={carousel}
                    renderItem={({ item }) => (
                        <TileComp data={item} />
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
                    <ProductCard
                        product={item}
                        onTouch={() => navigation.navigate('Product Detail', {
                            product: item
                        })} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ListFooterComponent={<View style={{ height: 20 }}></View>}
            />
        </SafeAreaView>
    )
}

export default ProductScreen