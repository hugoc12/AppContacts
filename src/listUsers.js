import React, {useEffect, useContext} from 'react';
import { View, FlatList} from 'react-native';
import CardUser from './cardUser';

import { UserContext } from './context';
import { initRealm } from './realmSchemas';

export default function ListUsers() {

    const {setUsuarios, usuarios} = useContext(UserContext);

    useEffect(()=>{
        async function setUsers(){
            try{
                const realm = await initRealm();
                const data = realm.objects('User');
                setUsuarios(data);
            }catch(err){
                console.log(err);
            }
        }

        setUsers();

    }, [])

    return (
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'flex-start', paddingTop:20}}>
            <FlatList style={{width:'100%'}} data={usuarios} renderItem={({item})=><CardUser user={item}/>}/>
        </View>
    );
}