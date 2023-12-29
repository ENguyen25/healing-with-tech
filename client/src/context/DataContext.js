import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://theselfcarecoder.onrender.com/posts')
            .then((response) => setData({
                postData: response.data,
                carousel: response.data.pop()
            }))
            .catch((error) => console.log(error))
    }, [])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}
