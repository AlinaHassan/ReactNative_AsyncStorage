import React from "react"
import { View,TextInput} from "react-native"
import Colors from "../Components/Colors"
const MyInput = (props) => {
    return (
        <View style={{ height: 50, width: "100%", backgroundColor: Colors.bgWhite, borderRadius: 10, justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
            <TextInput
                onChangeText={props.OnChangeText}
                style={{ width: "100%", marginLeft: 10 }}
                placeholder={props.placeholder}
                secureTextEntry={props.secure?true:false}
            />
        </View>
    )
}
export default MyInput