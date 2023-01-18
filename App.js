import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth, { AuthProvider } from './hooks/useAuth';
import ChatScreen from './screens/ChatScreen';
import ProgramScreen from './screens/ProgramScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const user=useAuth();
  return (
    <NavigationContainer>
      
    <TailwindProvider>
    <AuthProvider>
    <Stack.Navigator>

    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Program" component={ProgramScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
      
      
      
      
      
      


     



      
        
        
      </Stack.Navigator>
      </AuthProvider>
    </TailwindProvider>

    </NavigationContainer>
  );
}


