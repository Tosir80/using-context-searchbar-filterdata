


import React, { createContext, useContext, useEffect, useState } from 'react'

// create context 
const ContextCreator=createContext()

// props will come from app js as a children

const ContextProvider = ({children}) => {

  // product store state

  const [product, setProduct]=useState([])
  const [searchPro,setSearchPro]=useState([])
  const [filterpro,setFilterPro]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{setProduct(json)
      setSearchPro(json)
    })
  },[])

// input value get 
const inputData=(search )=>{
  const keyword=search.toLowerCase()
  const categoryProduct=searchPro.filter(product=>product.category.toLowerCase().includes(keyword))
  setProduct(categoryProduct);

}

// filter product by btn

const filterProducts=(pro)=>{
  if(pro=="All"){
    return setFilterPro(searchPro)
  }
  console.log(pro);
  const products=searchPro.filter((item)=>item.category==pro)
  setFilterPro(products)
}


  const contextValue={
    product,
    inputData,
    searchPro,
    filterProducts,
    filterpro

  }


  return (
   <ContextCreator.Provider value={contextValue}>
    {children}
   </ContextCreator.Provider>
  )
}

export default ContextProvider


// use context / or call any page 

export const UseContext=()=>useContext(ContextCreator)
