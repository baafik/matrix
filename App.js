import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import {CartProvider} from "react-use-cart"
// import data from "./products/data"






export default function App() {
  const MainNavigator = createStackNavigator();

  return (
   <View style={{flex: 1}}>
     <NavigationContainer>
       <MainNavigator.Navigator screenListeners={{headerShown: false}} initialRouteName="Login">
         <MainNavigator.Screen name="Home" component={Home}></MainNavigator.Screen>
         <MainNavigator.Screen name="Login" component={Login}></MainNavigator.Screen>
         <MainNavigator.Screen name="Cart" component={Cart}></MainNavigator.Screen>
         {/* <MainNavigator.Screen name="data" component={data}></MainNavigator.Screen> */}
        
        
        
        
         
       </MainNavigator.Navigator>
     </NavigationContainer>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});