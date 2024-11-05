import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native"
import { Icon, MD3Colors, TextInput } from "react-native-paper"
import { SvgXml } from "react-native-svg";
import { Button } from "~/components/Button"
import { waveHaikiei } from "~/svg/wave-haikei";
import { waves } from "~/svg/waves";
    
export const RegisterScreen = () => {
    const navigation = useNavigation<any>();
    return(
        <View style={{backgroundColor: 'white', width:'100%', height: '100%'}}>
            <SvgXml xml={waves} style={styles.topCurve}/>
            <Text style={styles.title}>
                Primeiro passo
            </Text>
            <View style={styles.container}>
                <View style={styles.separator} />
                    <Text style={styles.subtitle}>Dados pessoais</Text>
                <View style={styles.separator} />
            </View>
            <View>
                <TextInput
                    label= "Nome"
                    style={styles.input}
                    mode="outlined"
                    activeOutlineColor="#98c3ca"
                />
                <TextInput
                    label= "Telefone"
                    style={styles.input}
                    mode="outlined"
                    activeOutlineColor="#98c3ca"
                />
                <View style={styles.inputWrapper}>
                    <TextInput
                        label= "CPF"
                        style={styles.inputSide}
                        mode="outlined"
                        activeOutlineColor="#98c3ca"
                    />
                    <TextInput
                        label= "Data Nascimento"
                        style={styles.inputSide}
                        mode="outlined"
                        activeOutlineColor="#98c3ca"
                    />
                </View>
                <Button
                    title="PRÓXIMO"
                    onPress={() => navigation.navigate('StepTwo')}
                    style={styles.button}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomCurve:{
        position: 'absolute',
        width: '100%',
        bottom: -210,
        alignSelf: 'flex-end',
        zIndex: -2,
        right: -90
    },
    topCurve:{
        position: 'absolute',
        height: 80,
        width: '150%',
        top: 0,
        alignSelf: 'flex-end',
        right: -80
    },
    button: {
        alignSelf: 'center',
        marginTop: 40,
        width: '80%'
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
        width: '27%',
        alignSelf: 'center'
    },
    endSeparator: {
        backgroundColor: '#98c3ca',
        height: 1,
        marginVertical: 20,
        width: '90%',
        alignSelf: 'center',
        marginTop: 40
    },
})