import React from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import { Button, Card } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'
import Modal from 'react-native-modal';

// import components
import Rating from '../components/RatingComp'

const WIDTH = Dimensions.get('screen').width;

const COLOR = [
    {
        color: '#B21A15',
        name: 'RED'
    },
    {
        color: '#12B5B4 ',
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

    const [visible, setVisible] = React.useState(true)

    const renderColor = () => {
        return (
            COLOR.map((item, index) => {
                return (
                    <Pressable style={{
                        borderRadius: 25,
                        height: 50,
                        width: 50,
                        backgroundColor: `${item.color}`
                    }}>
                    </Pressable>
                )
            })
        )
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
            <View>
                {renderColor}
            </View>
            <Modal
                isVisible={visible}
                backdropOpacity={0.1}
                onBackdropPress={() => setVisible(false)}
                style={{ maxHeight: 250, marginTop: 400 }}
            // coverScreen={false}
            >
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>


                    <Button title="Hide modal" onPress={() => setVisible(false)} />
                </View>
            </Modal>
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