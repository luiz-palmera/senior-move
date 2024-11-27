import { SafeAreaView, StyleSheet, View } from "react-native"
import { Title } from "react-native-paper"

export const AccountScreen = () => {
    return( 
        <>
            <SafeAreaView style={styles.content}>
                <Title>Teste</Title>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        paddingTop: 32,
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    searchbar: {
        width: '95%',
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: 'white',
        marginTop: 35,
        shadowColor: '#000',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: '#edebeb',
        borderWidth: 2
    },
    recentText: {
        color: '#5a5a5a',
        fontWeight: 800,
        fontSize: 20,
        marginTop: 90,
        alignSelf: 'center'
    },
    bottomCurve:{
        position: 'absolute',
        height: 80,
        width: '100%',
        bottom: 0,
        zIndex: -500,
        alignSelf: 'flex-end',
    },
})