 
// create context

import { createContext, useContext, useEffect, useState } from "react";

const AppContext =  createContext();
;
export const API = `http://www.omdbapi.com/?apikey=420f48ce`;

// context provider

const AppProvider = ({children}) => {

    const [apidata, setapidata] = useState([])
const [load, setload] = useState(true)
const [query, setquery] = useState('Titanic')
  const [isError, setisError] = useState({show:false, msg:''})

// api fetching function
const get_api = async (url)  => {
    try {
     const res = await fetch(url);
     const data = await res.json() 
     console.log(data); 
     if (data.Response === 'True') {
        setapidata(data.Search)
        setload(false)
        setisError({
            show:false,
             msg:''
        })
     } else{
        setisError({
            show:true,
             msg:data.Error
        })
     }
    } catch (error) {
        console.log(error);
    }
}

// useeefect for fetching
useEffect(() => {

   let debounce =  setTimeout(() => {
        get_api(`${API}&s=${query}`)
    }, 800);

    return ()=> clearTimeout(debounce);
 
}, [query])





return <AppContext.Provider value={{apidata,load,query, setquery,isError}} >{children}</AppContext.Provider>
}

// custom hook for props

const UseProps = () => {
    return useContext(AppContext)
}

export {AppProvider,UseProps}