import React from "react"
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"
import Colors from "../Components/Colors"
const AuthButton =props=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={Styles.mainContainer}>
            <Text style={Styles.btnTitle}>
                {props.btnTitle}
            </Text>
        </TouchableOpacity>
    )
}

const Styles=StyleSheet.create({
    mainContainer:{
        height:50,
        width:"100%",
        borderRadius:10,
        backgroundColor:Colors.btnColor,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },
    btnTitle:{
        fontSize:15,
        fontWeight:"bold",
        color:"white"
    }
})


export default AuthButton