import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f4f9f9',
        height: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: "500"
    },
    inputContainer: {
        height: 150,
        alignItems: 'center'
        // backgroundColor: 'salmon'
    },
    listContainer: {
        height: 'auto',
        // backgroundColor: 'salmon'

    },
    listItem: {
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#ccf2f4'
    },
    overlay: {
        height: 150,
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#f4f9f9'
    },
    childOverlay: {
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        width: '80%',
        justifyContent: 'space-around'
    }
})

export default styles