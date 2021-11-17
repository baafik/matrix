import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TouchableHighlightBase} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({navigation}) {
  

  
   
    return (
   
       <View style={{flex:1, backgroundColor:"white"}}>

            <View style={{flex:2, backgroundColor:"white",}}>

                
                <Image 
                style={{
                    width:200, 
                    height: 170,
                    borderRadius:10,
                    marginBottom:20,
                    alignItems:'center',
                    marginLeft:120,
                    marginTop:30,
                    transform:[{rotate: "10deg"}]
                }} 
        source={require("../assets/Food/0dd8fe7d62c088868f1899bfdd8b6394.png")}
        />

                <View style={styles.container}>
                    {/* <Text>Enter Name:</Text> */}
                    <TextInput placeholder='Enter Password' style={styles.input}>

                    </TextInput>
                </View>
                <View style={styles.container}>
                   
                    
                    <View style={styles.container}>
                    {/* <Text>Enter Password:</Text> */}
                    <TextInput secureTextEntry={true} placeholder='Enter PassWord' style={styles.input}>
                    </TextInput>                   
                </View>

                    <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                     style={{
                    backgroundColor:"blue", 
                    padding: 10, 
                    paddingHorizontal:60,
                    flexDirection:"row",
                    borderRadius:10,
                    marginTop:20,}}>
                        <Text>Submit</Text>
                    </TouchableOpacity>

                </View>

               

            </View>
          
       </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
     
    },

    input:{
        borderWidth:1,
        borderColor:'red',
        padding:8,
        margin:10,
        width:200,

    }
  });