import React from 'react';
import ContextProvider from './src/context';

import Cadastro from './src/cadastro';
import ListUsers from './src/listUsers';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconCadastro from 'react-native-vector-icons/AntDesign';
import IconListUsers from 'react-native-vector-icons/FontAwesome';

export default function App(){
    const TabsNavigator = createBottomTabNavigator();
    return(
        <ContextProvider>
        
            <NavigationContainer>
                <TabsNavigator.Navigator screenOptions={{headerShown:false}}>
                    <TabsNavigator.Screen name='Cadastro' component={Cadastro} options={{tabBarLabel:'Home',tabBarIcon:({color='#000', size='22'})=>(<IconCadastro name='form' color={color} size={size}/>)}}/>
                    <TabsNavigator.Screen name='ListUsers' component={ListUsers} options={{tabBarIcon:({color='000', size='22'})=>(<IconListUsers name='users' color={color} size={size}/>)}}/>
                </TabsNavigator.Navigator>
            </NavigationContainer>

        </ContextProvider>
    )
}