import { 
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform, 
    TouchableOpacity
 } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "~/components/Button";
import { SvgXml } from "react-native-svg";
import { waves } from "~/svg/waves";
import { useState } from "react";
import { Dialog } from "react-native-paper";




export const WelcomeScreen = () => {
    const navigation = useNavigation<any>();

    const [visible, setVisible] = useState(false)

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return(

        <View style={styles.container}>
            <Dialog
                visible={visible}
                onDismiss={hideDialog}
            >
                <Dialog.Content>
                  <Text>Teste</Text>  
                </Dialog.Content>
            </Dialog>
            <SvgXml xml={waves} style={styles.topCurve}/>
            <Image
                style={styles.image}
                source={{
                    uri: "https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/cf84f557-3028-463b-ac10-19aecb3d40d1/DallEGeneratedImages/dalle-7610d923-604a-4933-9698-7d8438af74370251671996983864009800.jpg&dcHint=BrazilSouth&fileToken=5fac3608-519c-45b5-b4ac-6b32b0381893",
                  }}
            />
            <Button
                title="CADASTRE-SE"
                onPress={() => navigation.navigate('Register')}
            />
            <View style={styles.separator} />
            <Text style={styles.loginText}>
                  Já possui uma conta?
            </Text>
            <TouchableOpacity onPress={() => console.log("teste")}>
                <Text style={styles.loginLink}>
                    Entre aqui!
                </Text>
            </TouchableOpacity>
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
    bottomCurve:{
        position: 'absolute',
        height: 130,
        width: '180%',
        bottom: -90,
        zIndex: 10,
        alignSelf: 'flex-end',
        transform: [{ rotate: '180deg'}],
        right: -200
    },
    topCurve:{
        position: 'absolute',
        height: 120,
        width: '150%',
        top: 0,
        zIndex: 10,
        alignSelf: 'flex-end',
        transform: [{ rotate: '0deg'}],
        right: -20
    },
    curveWrapper:{
        position: 'relative',
        paddingTop: 0,
        zIndex:-20,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        marginTop: 30,
    },
    container: {
        flex: 1,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
   image: {
        width: 400,
        height: 400,
   },
   loginText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1e3a45',
   },
   separator: {
        backgroundColor: '#d1d5db',
        height: 1,
        marginVertical: 20,
        width: '90%',
    },
   loginLink: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#98c3ca'
   },
})