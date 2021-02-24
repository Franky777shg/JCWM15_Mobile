import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'

// import components
import RatingComp from './RatingComp'
import IconComp from './IconComp'

const ProductCard = ({ product, onTouch }) => {
    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Image
                source={{
                    uri: product.images[0]
                }}
                style={{ resizeMode: 'center' }}
            />
            <View style={styles.viewTitleButton}>
                <Text style={styles.namaProduk}>
                    {product.nama}
                </Text>
                <View style={styles.viewRatingButton}>
                    <RatingComp count={product.rating} />
                    <Text style={{ marginVertical: 5 }}>IDR {product.harga.toLocaleString()}</Text>
                    <View style={styles.viewButton}>
                        <Button
                            icon={
                                <IconComp iconName='bookmark' color="#28527a"/>
                            }
                            buttonStyle={styles.buttonBookmark}
                        />
                        <Button
                            icon={
                                <IconComp iconName='shopping-cart' />
                            }
                            buttonStyle={styles.buttonCart}
                            onPress={onTouch}
                        />
                    </View>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 5
    },
    viewTitleButton: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 135
    },
    namaProduk: {
        marginBottom: 10,
        fontSize: 12.5
    },
    viewRatingButton: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    viewButton: {
        display: 'flex',
        flexDirection: 'row',
        width: 130,
        justifyContent: 'space-around'
    },
    buttonBookmark: {
        width: 50,
        backgroundColor: '#f4d160'
    },
    buttonCart: {
        width: 50,
        backgroundColor: '#28527a'
    }
})

export default ProductCard