import { View,Text, StyleSheet, Image } from "react-native";
import { Button } from "../components/Button";


export const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/cf84f557-3028-463b-ac10-19aecb3d40d1/DallEGeneratedImages/dalle-7610d923-604a-4933-9698-7d8438af74370251671996983864009800.jpg&dcHint=BrazilSouth&fileToken=5fac3608-519c-45b5-b4ac-6b32b0381893",
                  }}
            />
            <Button
                title="CADASTRE-SE"
            />
            <View style={styles.separator} />
            <Text style={styles.loginText}>
                  Já possui uma conta?
            </Text>
            <Text style={styles.loginLink}>
                Entre aqui!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

   loginLink: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#98c3ca'
   },

   separator: {
        backgroundColor: '#d1d5db',
        height: 1,
        marginVertical: 20,
        width: '80%',
   }
})