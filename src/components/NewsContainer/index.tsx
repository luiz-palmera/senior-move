import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { whiteWaves } from "~/svg/waves";

export const NewsContainer = () => {
    return(
        <View style={styles.wrapper}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/09/UberIM_001017-1024x683.jpg'}}
                />
            </View>
            <SvgXml xml={whiteWaves} style={styles.newsCurve} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Locomoção com mais acessibilidade!
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30,
        width: '95%',
        height: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer:{
        width: '100%',
        height: 250,
    },
    textContainer: {
        width: '100%',
        height: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        borderTopColor: 'white',
        borderTopWidth: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },
    text:{
        fontSize: 15,
        color: '#98c3ca',
        fontWeight: 800
    },
    image:{
        position: 'absolute',
        zIndex: -300,
        borderRadius: 30,
        borderTopLeftRadius: 0,
        width: '100%',
        height: 300
    },
    newsCurve:{
        position: 'absolute',
        width: '100%',
        height: 50,
        bottom: 49,
        zIndex: -30,
        marginRight: 100,
        transform: [{ rotate: '180deg'}],
    },
})