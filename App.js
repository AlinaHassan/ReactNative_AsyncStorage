import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import Colors from "./Components/Colors"
import MyInput from "./Components/MyInput"
import AuthButton from "./Components/AuthButton"
import AsyncStorage from "@react-native-async-storage/async-storage"

const App = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let userIdKey = '@userIdKey'
    let userPasswordKey = '@userPasswordKey'

    let obj = {
        email: email,
        password: password
    }


    AsyncStorage.setItem('user', JSON.stringify(obj));  // setting JSON object after stringifying it bcz accepts only string

    const signupHandler = async () => {

        try {
            await AsyncStorage.setItem(userIdKey, email); // sets a string
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        try {
            await AsyncStorage.setItem(userPasswordKey, password);
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }

    };



    const getDetail = async () => {
        try {
            const value = await AsyncStorage.getItem(userIdKey); //returns value for a key
obj.email=value
            if (value !== null) {
                console.log(value)
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }



        try {
            const value = await AsyncStorage.getItem(userPasswordKey);
obj.password=value
            if (value !== null) {
                console.log(value)
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }

        AsyncStorage.setItem('user', JSON.stringify(obj));
        let user = await AsyncStorage.getItem('user');
        alert(user)
        console.log(user)
        let parsed = JSON.parse(user);
        console.log(parsed)
    }



    const removeEmail = async () => {
        try {
          await AsyncStorage.removeItem(userIdKey) //removes value for a key
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }


      const removePassword = async () => {
        try {
          await AsyncStorage.removeItem(userPasswordKey)
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }



     const  removeBoth = async () => { 
        const keys = [userIdKey,userPasswordKey]
        try {
          await AsyncStorage.multiRemove(keys) //removes values for keys in array
        } catch(e) {
          // remove error
        }
      
        console.log('Done')
      }
      

// Clear()  Removes whole AsyncStorage data, for all clients, libraries, etc. 
// for removing only App's keys we use removeItem or multiRemove
// usage:  await AsyncStorage.clear();


    return (
        <SafeAreaView style={{ height: "100%", width: "100%", backgroundColor: Colors.bgWhite }}>
            <ScrollView >

                <View style={{ marginTop: 80, height: 500, width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: Colors.primary, borderRadius: 20 }}>
                    <View style={{ height: "100%", width: "90%", justifyContent: "center", alignItems: "center" }}>
                        <MyInput
                            OnChangeText={(text) => {
                                setEmail(text)
                            }}
                            placeholder="Enter your email address"
                        />

                        <MyInput
                            OnChangeText={(text) => {
                                setPassword(text)
                            }}
                            secure
                            placeholder="Enter your password"
                        />

                        <AuthButton onPress={signupHandler} btnTitle="SIGNUP" />
                        <AuthButton onPress={getDetail} btnTitle="GET DETAIL" />
                        <AuthButton onPress={removeEmail} btnTitle="Remove Email" />
                        <AuthButton onPress={removePassword} btnTitle="Remove Password" />
                        <AuthButton onPress={removeBoth} btnTitle="Remove Both" />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App