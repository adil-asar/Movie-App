 
// create context

import { createContext, useContext, useEffect, useState } from "react";

const AppContext =  createContext();
;
const API = `http://www.omdbapi.com/?apikey=420f48ce&s=titanic`;

// context provider

const AppProvider = ({children}) => {

    const [apidata, setapidata] = useState([])
const [load, setload] = useState(true)
  

// api fetching function
const get_api = async (url)  => {
    try {
     const res = await fetch(url);
     const data = await res.json() 
     console.log(data); 
     if (data.Response === 'True') {
        setapidata(data.Search)
        setload(false)
     } 
    } catch (error) {
        console.log(error);
    }
}

// useeefect for fetching
useEffect(() => {
 get_api(API)
}, [])





return <AppContext.Provider value={{apidata,load}} >{children}</AppContext.Provider>
}

// custom hook for props

const UseProps = () => {
    return useContext(AppContext)
}

export {AppProvider,UseProps}