import React from 'react';
import { View, Text } from 'react-native';

export default function CardUser(props) {
 return (
    <View style={{flexGrow:1 ,width:'90%', height:150, marginVertical:5, borderRadius:5 ,backgroundColor:'#a5bffe', alignSelf:'center' ,alignItems:'center', justifyContent:'center'}}>
        <Text>{props.user.nick}</Text>
        <Text>{props.user.email}</Text>
        <Text>{props.user.password}</Text>
    </View>
  );
}