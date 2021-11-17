import React from "react";
import {View, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useCart } from "react-use-cart";


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <Text>Your Cart is Empty</Text> 

    return(
        <View style={{flex:1, backgroundColor:'blue'}}>
                <View style={{flex:1, backgroundColor:'blue'}}>

                
          <View>
              <View> <Text>Cart ({totalUniqueItems}) </Text> <Text>total Items: ({totalItems}) </Text> </View>

              <View> 
              <View>
               {items.map ((item, index) => {

                 
                            <View key={index}>
                                <View>
                                    <Image source={item.Image} style={{height: '50'}}></Image>
                                </View>

                                <View>
                                    {item.title}
                                </View>

                                <View>
                                    {item.price}
                                </View>

                                <View>
                                    Quantity({item.quantity})
                                </View>
                                <View>
                                <TouchableOpacity  style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}>-</TouchableOpacity>
                                <button>+</button>
                                <button>remove</button>
                                    </View>
                            </View>
                   
              } )}
              
              </View>
              </View>
          </View>
          </View>

        </View>
    )
}


export default Cart;


