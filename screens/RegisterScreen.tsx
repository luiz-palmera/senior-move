import { StyleSheet, Text, View } from "react-native"
import { Input } from "@/components/ui/input"

    
export const RegisterScreen = () => {
    return(
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '800',
        marginTop: 30,
        color: '#98c3ca'
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