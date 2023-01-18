import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StarIcon } from 'react-native-heroicons/mini';


const ProgramScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
<View>
        <Image source={{ uri:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}} className="h-72  w-full"/>

        <View className="absolute top-64 left-12">
    <View className="flex items-center">
        <View className="flex-row gap-x-12 ">
        <TouchableOpacity>
            <View className="border bg-gray-50 h-32 w-32 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/6848/6848951.png"}} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Weight Gain</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View className="border h-32 bg-gray-50 w-32 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/7959/7959784.png"}} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Weight Loss</Text>
            </View>
            </TouchableOpacity>
        </View>


        
        <View className="flex-row gap-x-12 pt-5 ">
        <TouchableOpacity>
            <View className="border h-32 w-32 bg-gray-50 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/2690/2690169.png"}} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Muscle Gain</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View className="border h-32 w-32 bg-gray-50 rounded-2xl shadow-2xl pt-4  items-center">
            <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/3344/3344147.png"}} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Guidance</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
    </View>
    <Text className="top-72 text-center text-3xl font-bold">What Brings you to Vishesh?</Text>
    <View className="pt-64 flex items-center ">
    <TouchableOpacity className=" pt-12 w-72" >
            <View className="bg-red-400 flex rounded-xl h-11">
            <Text className=" pl-20  text-white font-extrabold  pt-2 text-xl  h-8">Go Pro</Text>
            
            </View>
            <View className="absolute top-14 flex-row left-40 ">
            <StarIcon color={"yellow"}/>
            <StarIcon color={"yellow"}/>
            <StarIcon color={"yellow"}/>
            </View>
        </TouchableOpacity>
    </View>
    <Text className="pt-10 text-xs text-center">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs text-center">Terms of Service || Privacy Policy || Content Policy</Text>

    </View>
    
    
  )
}

export default ProgramScreen