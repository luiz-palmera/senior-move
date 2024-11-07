import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"
import { SvgXml } from "react-native-svg";
import { Button } from "~/components/Button"
import { waveHaikiei } from "~/svg/wave-haikei";
import { waves } from "~/svg/waves";
    
export const RegisterStepTwo = () => {
    const navigation = useNavigation<any>();
    return(
        <View style={{backgroundColor: 'white', width:'100%', height: '100%'}}>
            <SvgXml xml={waves} style={styles.topCurve}/>
            <Text style={styles.title}>
                Segundo passo
            </Text>
            <View style={styles.container}>
                <View style={styles.separator} />
                    <Text style={styles.subtitle}>Informações físicas</Text>
                <View style={styles.separator} />
            </View>
            <View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        label= "Peso"
                        style={styles.inputSide}
                        mode="outlined"
                        activeOutlineColor="#98c3ca"
                    />
                    <TextInput
                        label= "Altura"
                        style={styles.inputSide}
                        mode="outlined"
                        activeOutlineColor="#98c3ca"
                    />
                </View>
                <Button
                    title="PRÓXIMO"
                    onPress={() => navigation.navigate('StepThree')}
                    style={styles.button}
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.curveWrapper}
            >
                <SvgXml xml={waves} style={styles.bottomCurve}/>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginTop: 40,
        width: '80%'
    },
    bottomCurve:{
        position: 'absolute',
        height: 130,
        width: '180%',
        bottom: -350,
        zIndex: 10,
        alignSelf: 'flex-end',
        transform: [{ rotate: '180deg'}],
        right: -200
    },
    curveWrapper:{
        position: 'relative',
        paddingTop: 0,
        zIndex:-20,
    },
    topCurve:{
        position: 'absolute',
        height: 80,
        width: '150%',
        top: 0,
        alignSelf: 'flex-end',
        right: -80
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        marginTop: 60,
        color: '#98c3ca',
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#98c3ca',
        alignSelf: 'center'
    },
    inputWrapper: {
        flexDirection: 'row',
        gap: 15,
        alignSelf: 'center'
    },
    input: {
        marginTop: 25,
        width: '80%',
        alignSelf: 'center',
    },
    inputSide: {
        marginTop: 30,
        width: '38%',
        alignSelf: 'center',
    },
    container: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
   separator: {
        backgroundColor: '#98c3ca',
        height: 1,
        width: '23%',
        alignSelf: 'center'
    },
})