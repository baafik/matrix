  import React from "react";
import {View, Text, ImageBackground, Image ,StyleSheet, TouchableOpacity, Touchable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";
import { useState } from "react/cjs/react.development";

export default function Prod() {

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
                <Text>hello</Text>
            </View>
        </View>
    );
}
            return(
                <SafeAreaView>
                    <CustomRatingBar/>
                </SafeAreaView>
            )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    },
    customRatingBarStyle:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:30

    },

    starImgStyle:{
        width:40,
        height:40,
        resizeMode:'cover'
    }

}       

)