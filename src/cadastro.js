import React, {useState, useContext} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { initRealm } from './realmSchemas';
import { UserContext } from './context';

export default function Cadastro() {
    const [nickUser, setNickUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {setUsuarios} = useContext(UserContext);

    async function registerUser(){
        try{
            const realm = await initRealm();
            const newId = (realm.objects('User').length) + 1
            console.log(`Usuário: ${newId} sendo criado...\n NICK:${nickUser} \n EMAIL:${email} \n PASSWORD:${password}`)
            await realm.write(()=>{
                realm.create('User', {
                    id:newId,
                    nick:nickUser,
                    email:email,
                    password:password,
                })
            })

            setNickUser('');
            setEmail('');
            setPassword('');

            alert('Usuário cadastrado!');
            setUsuarios(realm.objects('User'));

        }catch(err){
            console.log(err);
        }
    }

    async function localData(){
        try{
            const realm = await initRealm();
            console.log(realm.path)
        }catch(err){
            console.log(err);
        }
    }

    return (
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center'}}>
            <TextInput value={nickUser} onChangeText={(txt)=>setNickUser(txt)} placeholder='Nick' style={estilo.txtInput}/>
            <TextInput value={email} onChangeText={(txt)=>setEmail(txt)} placeholder='Email' style={estilo.txtInput}/>
            <TextInput value={password} onChangeText={(txt)=>setPassword(txt)} placeholder='Password' style={estilo.txtInput}/>

            <TouchableOpacity style={{width:'90%'}} onPress={()=>nickUser && email && password ? registerUser():alert('PREENCHA TODOS OS CAMPOS!')}>
                <Text style={estilo.btt}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'90%'}} onPress={()=>localData()}>
                <Text style={estilo.btt}>LOCAL DATA</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    txtInput:{
        width: '90%',
        fontSize:15,
        padding: 10,
        borderRadius:5,
        marginVertical:10,
        borderWidth:1,
        borderColor:'#ccc'
    },

    btt:{
        padding: 15,
        textAlign:'center',
        backgroundColor:'#62d046',
        color : '#fff',
        borderRadius:5,
        marginTop:30,
        fontWeight:'bold',
        elevation:2,
    }
})