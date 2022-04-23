import Realm from 'realm';

const User = {
    name:'User',
    primaryKey:'id',
    properties:{
        id:'int',
        nick:'string',
        email:'string',
        password:'string',
    }
}

export async function initRealm(){
    try{
        return Realm.open({
            path:'myRealm',
            schema:[User]
        })
    }catch(err){
        console.log(err);
    }
}