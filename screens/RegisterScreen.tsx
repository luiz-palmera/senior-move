import { StyleSheet, Text, View } from "react-native"
import { Input, InputField } from "@/components/ui/input"
import { VStack } from "@/components/ui/vstack/index.web"
import { Heading } from "@/components/ui/heading"
import { FormControl } from "@/components/ui/form-control"

    
export const RegisterScreen = () => {
    return(
        <FormControl>
      <View>
        <Heading className="text-typography-900 leading-3">Login</Heading>
        <View>
          <Text className="text-typography-500 leading-1">Email</Text>
          <Input>
            <InputField type="text" />
          </Input>
        </View>
    </View>
    </FormControl>
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