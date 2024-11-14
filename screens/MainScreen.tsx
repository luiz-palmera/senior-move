import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { HomeScreen } from "./HomeScreen";

const HomeRoute = () => <HomeScreen/>;

const AccountRoute = () => <Text>Albums</Text>;


export const MainScreen = () => {
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Inicio', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'account', title: 'Conta', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    account: AccountRoute,
  });
    return(
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

const styles = StyleSheet.create({
    content:{
        backgroundColor: '#98c3ca',
        width: '100%',
        height: '100%'
    }
})