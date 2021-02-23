import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native'
import { Header, Avatar, Tile, Card, Button } from 'react-native-elements'
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
        <SafeAreaView style={{ backgroundColor: '#fbeeac', flex: 1 }}>
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
            <View>
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
            <Text style={{ marginVertical: 5, marginHorizontal: 20, fontSize: 25, fontWeight: 'bold' }}>Product</Text>
            {/* <SafeAreaView> */}
            <FlatList
                data={product}
                renderItem={({ item }) => (
                    <Card containerStyle={{ flex: 1, padding: 5 }}>
                        <Card.Image
                            source={{
                                uri: item.images[0]
                            }}
                            style={{ resizeMode: 'center' }}
                        />
                        <View style={{ display: 'flex', justifyContent: 'space-between', height: 100 }}>
                            <Text style={{ marginBottom: 10 }}>
                                {item.nama}
                            </Text>
                            <Button
                                // icon={<Icon name='code' color='#ffffff' />}
                                // buttonStyle={{ justifyContent: 'flex-end' }}
                                title='VIEW NOW' />
                        </View>
                    </Card>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ListFooterComponent={<View style={{height: 20}}></View>}
            />
            {/* </SafeAreaView> */}
        </SafeAreaView>
    )
}

export default ProductScreen