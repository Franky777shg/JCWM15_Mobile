import React from 'react'
import { StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'

const TileComp = ({ data }) => {
    return (
        <Tile
            activeOpacity={1}
            imageSrc={{
                uri: data.image
            }}
            featured
            title={data.quote}
            titleStyle={styles.titlestyle}
            height={220}
        />
    )
}

const styles = StyleSheet.create({
    titlestyle: {
        backgroundColor: 'rgba(4, 4, 4, 0.4)',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default TileComp