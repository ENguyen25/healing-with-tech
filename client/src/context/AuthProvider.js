import React, { createContext, useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    // const [auth, setAuth] = useState(null);
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          localStorage.setItem('token', token);
        } else {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem('token')
        }
      }, [token]);

    const contextValue = useMemo(
    () => ({
        token,
        setToken,
    }),
    [token]
    );

    // useEffect(() => {
    //     if(!auth) {
    //         try {
    //             axios.get('http://localhost:5000/auth/user').then(({data}) => {
    //                 console.log('receiving data: ' + data)
    //                 setAuth(data);
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }, [])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}


// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({});
    
//     return (
//         <AuthContext.Provider value={{ auth, setAuth }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
