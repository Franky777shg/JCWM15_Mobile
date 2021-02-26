import React from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Card, Icon, Input, Overlay } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

// import components
import Rating from '../components/RatingComp'

const WIDTH = Dimensions.get('screen').width;

const COLOR = [
    {
        color: '#B21A15',
        name: 'RED'
    },
    {
        color: '#12B5B4',
        name: 'BLUE'
    },
    {
        color: '#249912',
        name: 'GREEN'
    },
    {
        color: '#981398',
        name: 'PURPLE'
    },
    {
        color: '#F7F92A',
        name: 'YELLOW'
    },
]

const SIZE = [39, 40, 41, 42, 43]

const ProductDetail = ({ route }) => {
    const { product } = route.params

    const [visible, setVisible] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [color, setColor] = React.useState('')
    const [size, setSize] = React.useState(null)
    const [qty, setQty] = React.useState(0)

    const { id } = useSelector((state) => {
        return {
            id: state.userReducer.id
        }
    })

    const RenderColor = () => {
        return (
            COLOR.map((item, index) => {
                if (item.name === color) {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setColor(item.name)}
                            style={{
                                backgroundColor: '#fbeeac', borderRadius: 5, height: 60,
                                width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                        >
                            <View style={{
                                borderRadius: 25,
                                height: 50,
                                width: 50,
                                backgroundColor: `${item.color}`,
                                borderColor: '#28527a',
                                borderWidth: 2
                            }} >

                            </View>
                        </TouchableOpacity>
                    )
                }
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setColor(item.name)}
                        style={{
                            height: 60,
                            width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                    >
                        <View style={{
                            borderRadius: 25,
                            height: 50,
                            width: 50,
                            backgroundColor: `${item.color}`,
                            borderColor: '#28527a',
                            borderWidth: 2
                        }} >

                        </View>
                    </TouchableOpacity>
                )
            })
        )

    }

    const RenderSize = () => {
        return (
            SIZE.map((item, index) => {
                if (item === size) {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSize(item)}
                            style={{
                                height: 60,
                                width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center',
                                backgroundColor: '#fbeeac', borderRadius: 5
                            }}
                        >
                            <View style={{
                                borderRadius: 25,
                                height: 50,
                                width: 50,
                                borderColor: '#28527a',
                                borderWidth: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} >
                                <Text style={{ fontSize: 20 }}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSize(item)}
                        style={{
                            height: 60,
                            width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                    >
                        <View style={{
                            borderRadius: 25,
                            height: 50,
                            width: 50,
                            borderColor: '#28527a',
                            borderWidth: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >
                            <Text style={{ fontSize: 20 }}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        )
    }

    const handleMinus = () => {
        if (qty === 0 || qty === '0') return
        setQty(prev => prev - 1)
    }

    const handlePlus = () => {
        setQty(prev => parseInt(prev) + 1)
    }

    const handleConfirm = () => {
        if (qty === 0 || !color || !size) return setError(true)
        const sendToCart = {
            order_number: Date.now(),
            id_user: id,
            id_product: product.id,
            color,
            size,
            qty,
            total: qty * product.harga
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{product.nama}</Text>
            <View>
                <Carousel
                    data={product.images}
                    renderItem={({ item }) => (
                        <Card>
                            <Card.Image
                                source={{ uri: item }}
                                style={{ resizeMode: 'center' }}
                            >
                            </Card.Image>
                        </Card>
                    )}
                    itemWidth={WIDTH}
                    sliderWidth={WIDTH}
                />
            </View>
            <View style={styles.description}>
                <Text style={styles.textDescription}>Price : IDR {product.harga.toLocaleString()}</Text>
                <Rating count={product.rating} />
                <Text style={styles.textDescription}>Brand: {product.brand}</Text>
                <Text style={styles.textDescription}>Description: {product.deskripsi} </Text>
            </View>
            <Button
                containerStyle={styles.button}
                buttonStyle={{ backgroundColor: '#28527a' }}
                title="Add to Cart"
                onPress={() => setVisible(true)}
            />
            <Modal
                isVisible={visible}
                backdropOpacity={0.1}
                onBackdropPress={() => setVisible(false)}
                style={{ maxHeight: 350, marginTop: 300 }}
            >
                <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 5, display: 'flex', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17 }}>Choose Color:</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 315,
                        height: 70,
                        padding: 5,
                        alignItems: 'center'
                    }}
                    >
                        <RenderColor />
                    </View>
                    <Text style={{ fontSize: 17 }}>Choose Size:</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 315,
                        height: 70,
                        padding: 5,
                        alignItems: 'center'
                    }}
                    >
                        <RenderSize />
                    </View>
                    <Text style={{ fontSize: 17 }}>Quantity: </Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // backgroundColor: 'lightgreen',
                        width: 220,
                        height: 70,
                        padding: 5,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Icon
                            raised
                            reverse
                            name='minus'
                            type='font-awesome'
                            color='#28527a'
                            onPress={handleMinus}
                        />
                        <Input
                            containerStyle={{ width: 70 }}
                            onChangeText={setQty}
                            inputStyle={{ textAlign: 'center' }}
                        >
                            {qty}
                        </Input>
                        <Icon
                            raised
                            reverse
                            name='plus'
                            type='font-awesome'
                            color='#28527a'
                            onPress={handlePlus}
                        />
                    </View>
                    <Button
                        title="Confirm"
                        onPress={handleConfirm}
                        buttonStyle={{ width: 150, marginVertical: 10, backgroundColor: '#28527a' }}
                    />
                </View>
            </Modal>
            <Overlay isVisible={error} onBackdropPress={() => setError(false)}>
                <Text style={{fontSize: 30}}>Error: </Text>
                <Text style={{fontSize: 20}}>Make sure your confirm is right</Text>
            </Overlay>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbeeac',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20
    },
    description: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'flex-start',
        // backgroundColor: '#8ac4d0',
        marginHorizontal: 20,
    },
    textDescription: {
        fontSize: 20,
        marginVertical: 5
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 20
    }
})

export default ProductDetail