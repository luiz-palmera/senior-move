import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Searchbar, Text } from "react-native-paper"
import { SvgXml } from "react-native-svg";
import { NewsContainer } from "~/components/NewsContainer";
import { RecentLocation } from "~/components/RecentLocations";
import { waveHaikiei } from "~/svg/wave-haikei";
import { waves } from "~/svg/waves";

export const HomeScreen = () => {
    const [search, setSearch] = useState('');
    return(
        <SafeAreaView style={styles.content}>
            <Searchbar
                placeholder="Para onde deseja ir?"
                onChangeText={setSearch}
                value={search}
                style={styles.searchbar}
            />
            <View style={{marginTop: 10}}>
                <RecentLocation type={'home'} street={'Av. João césar de oliviera, 1800'} city={'Contagem'}/>
                <RecentLocation type={'building'} street={'Seguro PASI'} city={'Belo Horizonte'}/>
            </View>
            <NewsContainer/>
            <SvgXml xml={waveHaikiei} style={styles.bottomCurve}/>
        </SafeAreaView>
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