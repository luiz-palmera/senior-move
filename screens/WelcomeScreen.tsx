import { 
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform, 
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Pressable
 } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "~/components/Button";
import { SvgXml } from "react-native-svg";
import { waves } from "~/svg/waves";
import { useState } from "react";
import { Icon, TextInput } from "react-native-paper";
import { waveLogin } from "~/svg/waveLogin";




export const WelcomeScreen = () => {
    const navigation = useNavigation<any>();

    const [visible, setVisible] = useState(false)

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return(

        <View style={styles.container}>
                <Modal
                    visible={visible}
                    style={styles.modal}
                    transparent={true}
                    animationType="fade"
                >
                    <Pressable onPress={hide} style={styles.modalbackdrop}/>
                    <View style={styles.modal}>
                        <View style={{
                            width: 600,
                            height: 600,}}>
                            <TouchableOpacity onPress={hide} style={styles.close}>
                                <Icon
                                    source={'close-circle'}
                                    size={50}
                                    color="#FF746C"    
                                />
                            </TouchableOpacity>
                            <View style={styles.loginImageWrapper}>    
                                <Image
                                    style={styles.imageLogin}
                                    source={{
                                        uri: "https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/cf84f557-3028-463b-ac10-19aecb3d40d1/DallEGeneratedImages/dalle-7610d923-604a-4933-9698-7d8438af74370251671996983864009800.jpg&dcHint=BrazilSouth&fileToken=5fac3608-519c-45b5-b4ac-6b32b0381893",
                                    }}
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    label= "E-mail / Telefone"
                                    style={styles.input}
                                    mode="outlined"
                                    activeOutlineColor="#98c3ca"
                                />
                                <TextInput
                                    label= "Senha"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="eye" />}
                                    style={styles.input}
                                    mode="outlined"
                                    activeOutlineColor="#98c3ca"
                                />
                            </View>
                            <Button
                                title="Entrar"
                                onPress={hide} 
                                style={styles.button}
                                variant="outlined"
                            />
                            <View style={styles.separatorWrapper}>
                                <View style={styles.separatorLogin} />
                                    <Text style={styles.subtitle}>Entre com</Text>
                                <View style={styles.separatorLogin} />
                            </View>
                        </View>
                        <View style={styles.otherLoginContainer}>
                            <SvgXml xml={waves} style={styles.loginCurve}/>
                            <TouchableOpacity style={styles.googleIcon}>
                                <Icon
                                    source={'google'}
                                    size={50}
                                    color="white"    
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.facebookIcon}>
                                <Icon
                                    source={'facebook'}
                                    size={50}
                                    color="white"    
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
            <TouchableOpacity onPress={show}>
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
    modalbackdrop: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: '#000',
        opacity: 0.5,
        width: '100%',
        height: '100%'
    },
    input: {
        marginTop: 15,
        width: '45%',
        alignSelf: 'center',
        borderRadius: 30,
    },
    modal:{
        zIndex: 2,
        position:'absolute',
        backgroundColor:'white',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 60,

    },
    otherLoginContainer:{
        backgroundColor: '#98c3ca', 
        width: '100%', 
        height: "27%", 
        position: 'absolute', 
        zIndex: -3000, 
        bottom:0, 
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
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
        right: -20
    },
    curveWrapper:{
        position: 'relative',
        paddingTop: 0,
        zIndex:-20,
    },
    loginCurve:{
        position: 'absolute',
        width: '100%',
        height: 50,
        bottom: 160,
        zIndex: -30,
        marginRight: 100,
        transform: [{ rotate: '180deg'}],
    },
    googleIcon: {
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 30,
        padding: 10,
        position: 'absolute',
        bottom: 40,
        right:90,
    },
    close: {
        padding: 10,
        position: 'absolute',
        top: -3,
        right:122,
        zIndex: 100
    },
    facebookIcon: {
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 30,
        padding: 10,
        position: 'absolute',
        bottom: 40,
        left: 90
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
        width: '45%',
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
   loginImageWrapper:{
        alignItems: 'center',
   },
   inputWrapper: {
    marginTop: 200,
   },
   imageLogin: {
        position: 'absolute',
        // left: 193,
        width: 230,
        height: 230,
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
   separatorWrapper: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    separatorLogin: {
        backgroundColor: 'white',
        height: 1,
        width: '15%',
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '800',
        color: 'white',
        alignSelf: 'center'
    },
})