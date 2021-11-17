
import React, {useState}  from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { State, TextInput } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable"

export default function Home({navigation}) {
  
    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] =useState([1,2,3,4,5])
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner= 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
   
    const CustomRatingBar =() => {
        return(
            
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                                <TouchableOpacity 
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}
                                >
                                    <Image
                                    style={styles.starImgStyle}
                                    source={item <= defaultRating
                                    ?{uri: starImgFilled}
                                : {uri: starImgCorner}}
                                    >
    
                                    </Image>
    
                                </TouchableOpacity>
                                
                        )
                    })
                }
                <View>
                 
                </View>
            </View>
        );
    }

    return (

            // Beginning the Homepage
      
            // creating the searchbar
        <View style={{flex: 1, backgroundColor: "white",}}>
         
         <View style={{height:80, backgroundColor:"#c45653", justifyContent:"center", paddingHorizontal:5,}}>

        <Animatable.View animation="slideInRight" duration={500} style={{height: 50, backgroundColor:"white", flexDirection:"row", padding: 5, alignItems:"center"}}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search"
        style={{fontSize:24, marginLeft:15}}
        >

        </TextInput>
        </Animatable.View>

         
         </View>

                    {/* The entire Menu is done here.
                    The lists bellow contains the items which are sold on the app. */}


                            {/* First Item collection: CLOTHING */}
            
         <ScrollView style={styles.contentContainer}>
                    {/* <View style={styles.container}>  */}
                
                            <View style={styles.box}>
                            <Text style={styles.heads}>Fashion</Text>
                                <View style={styles.inner}>
                                     
                                    
                                      
                                       
                                       <Image 
                                       
                                        style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:1,
                                           borderTopRightRadius:30,
                                    height:"60%",
                                    width:120,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/Food/0dd8fe7d62c088868f1899bfdd8b6394.png")}>

                                    </Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Tops for Ladies
                                    </Text>
                                    <Text style={styles.text}>Different colours in stock</Text>
                                    <Text style={styles.text}>Different sizes available</Text>
                                    
                                  
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'blue',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:30,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                </View>
                                
                            </View>


                           
                           

                          
                           
                            
                   
                </ScrollView>
           
           
            

          <View style={{flex:0.1, backgroundColor:"yellow", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
        
        <TouchableOpacity  onPress={() => {navigation.navigate("Prod")}}>
        <Ionicons name="settings" size={24} color="black" style={{marginLeft:12}} /> 
        </TouchableOpacity>
          
                                
          <Feather name="shopping-cart" size={24} color="black" style={{marginRight:12}} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {

      width : '100%',
      height : '85%',
      padding : 5,
     
      flex: 7,
    
      paddingBottom:30
  },

 
 
  inner: {
    flex:1,
    backgroundColor: '#edf2ef',
    // alignItems:'flex-start',
    // justifyContent:'space-between',    
    borderTopRightRadius:30, 
    borderTopLeftRadius:30, 
    borderBottomLeftRadius:30, 
    borderBottomRightRadius:30,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // borderBottomColor:'green',
    borderColor:'red'

    // alignItems:'stretch',
    // justifyContent:'space-between'
},
  
box: {
    width: '100%',
    height: '68%',
    padding: 10,
   borderColor: 'red'
    // flexDirection:"row"
    // alignItems:'stretch'
    
  
    
},

//   item: {
//       marginTop:24,
//       padding:30,
//       backgroundColor:'pink',
//       fontSize:24,
//       flexDirection:"row",
//       justifyContent:"space-between"
      
//   },
  contentContainer:{
      width : '100%',
      height : '85%',
      padding : 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 7,
      flexDirection:'row',
      flexWrap:'wrap',
      alignContent:'center'
  },

  heads:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    marginLeft:40,
    textDecorationLine:'underline'
  },
  customRatingBarStyle:{
    justifyContent:'center',
    flexDirection:'row',
    // marginTop:30

},

starImgStyle:{
    width:40,
    height:40,
    resizeMode:'cover',
//    alignItems:'flex-start'
    // justifyContent:'space-between'
    
},

text:{
    fontSize:20,
    fontWeight:'900',
    fontStyle:'normal',
    margin:2
},
textview:{
    flexDirection:'column'
    
}
 
})