import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  return (
    
    <View>
      <Text className="text-red-600">HomeScreen {user}</Text>
      
    </View>
  )
}

export default HomeScreen