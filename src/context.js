import React from 'react';
import { createContext, useState } from 'react';

export const UserContext = createContext({});

function ContextProvider({children}){


    const [usuarios, setUsuarios] = useState([
    ]);

    return(
        <UserContext.Provider value={{usuarios, setUsuarios}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider;