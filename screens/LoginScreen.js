import { View, Text, Button,Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native';
import { CakeIcon, SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import Svg from 'react-native-svg';


const LoginScreen = () => {
    const {user} = useAuth();
    const navigation = useNavigation();
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )


  return (
    
    <View>

        <Image source={{ uri:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} className="h-96 rounded-b-full w-full"/>
        <Text className="text-center text-3xl pt-8 font-bold px-5">India's #1 Fitness and Exercise</Text>
        <Text className="pt-4 text-center font-bold text-gray-500 text-xl">Login or Signup</Text>
        <View className="flex pt-5 text-black items-center">
        <TextInput placeholder='Enter phone number' className="text-2xl pl-2 border-solid border-2 w-80 h-12 border-gray-400 rounded-xl" keyboardType='number-pad'/>
        <TouchableOpacity className="pt-5 w-72" onPress={()=>navigation.navigate('Program')} >
            <View className="bg-red-400 rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Continue</Text>
            </View>
        </TouchableOpacity>
        <Text className="text-xl font-semibold pt-3 text-gray-500">or</Text>
        </View>
        <View className="items-center pt-5">
        <View className="flex-row space-x-12">
        <TouchableOpacity>
        <CakeIcon height={40} width={40} color="red"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <CakeIcon height={40} width={40} color="red"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <CakeIcon height={40} width={40} color="red"/>
        </TouchableOpacity>
        </View>
        <Text className="pt-5 text-xs">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs">Terms of Service || Privacy Policy || Content Policy</Text>

        
        </View> 
        
        
    </View>
  )
}

export default LoginScreen