import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RegisterScreen } from 'screens/RegisterScreen';
import { WelcomeScreen } from 'screens/WelcomeScreen';
import { BackButton } from '~/components/BackButton';

export type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  Details: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#98c3ca',
            },
            headerTitle: 'Cadastro',
            headerTitleStyle:{
              paddingBottom:2,
              color: 'white',
            },
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
