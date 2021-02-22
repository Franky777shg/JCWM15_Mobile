import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions } from 'react-native'
import { Header, Avatar, Tile } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'

// import actions
import { getCarousel, getProduct } from '../actions'

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
        <View style={{ backgroundColor: '#fbeeac', flex: 1}}>
            <Header
                centerComponent={{ text: 'Home', style: { color: '#fff', fontSize: 20 } }}
                rightComponent={
                    <Avatar
                        rounded
                        title={username.slice(0, 2)}
                        overlayContainerStyle={{ backgroundColor: '#fbeeac' }}
                        titleStyle={{ color: '#28527a' }}
                    />
                }
                backgroundColor='#28527a'
                containerStyle={{ marginBottom: 5 }}
            />
            <Carousel
                data={carousel}
                renderItem={({ item }) => (
                    <Tile
                        activeOpacity={1}
                        imageSrc={{
                            uri: item.image
                        }}
                        featured
                        title={item.quote}
                        titleStyle={{
                            backgroundColor: 'rgba(4, 4, 4, 0.4)',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                        height={220}
                    />
                )}
                sliderWidth={WIDTH}
                itemWidth={WIDTH}
                loop
            />

        </View>
    )
}

export default ProductScreen