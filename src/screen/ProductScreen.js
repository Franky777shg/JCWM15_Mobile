import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native'
import { Header, Avatar, Tile, Card, Button, Rating } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
            <Text style={{ marginTop: 20, marginHorizontal: 20, fontSize: 25, fontWeight: 'bold' }}>Product</Text>
            <FlatList
                data={product}
                renderItem={({ item }) => (
                    <Card containerStyle={{ flex: 1, padding: 10, borderRadius: 5 }}>
                        <Card.Image
                            source={{
                                uri: item.images[0]
                            }}
                            style={{ resizeMode: 'center' }}
                        />
                        <View style={{ display: 'flex', justifyContent: 'space-between', height: 135 }}>
                            <Text style={{ marginBottom: 10, fontSize: 12.5 }}>
                                {item.nama}
                            </Text>
                            <View style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={item.rating}
                                />
                                <Text style={{ marginVertical: 5 }}>IDR {item.harga.toLocaleString()}</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', width: 130, justifyContent: 'space-around' }}>
                                    <Button
                                        icon={
                                            <Icon
                                            name="bookmark"
                                            size={15}
                                            color="#28527a"
                                            />
                                        }
                                        buttonStyle={{width: 50, backgroundColor: '#f4d160'}}
                                    />
                                    <Button
                                        icon={
                                            <Icon
                                                name="shopping-cart"
                                                size={15}
                                                color="white"
                                            />
                                        }
                                        buttonStyle={{width: 50, backgroundColor: '#28527a'}}
                                        />
                                </View>
                            </View>
                        </View>
                    </Card>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ListFooterComponent={<View style={{ height: 20 }}></View>}
            />
        </SafeAreaView>
    )
}

export default ProductScreen