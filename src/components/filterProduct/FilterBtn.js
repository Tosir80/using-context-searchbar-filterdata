import React, { useEffect, useState } from 'react'
import { UseContext } from '../context/ContextProvider'

const FilterBtn = () => {
const[btn,setBtn]=useState([])
    const {searchPro,filterProducts}=UseContext()

useEffect(()=>{
    const btnFilter=["All",...new Set(searchPro.map(item=>item.category))]
    setBtn(btnFilter);

},[searchPro])

  return (
    <div>
      {btn?.map((item,index)=><div key={index}>
          <button onClick={()=>filterProducts(item)}>{item}</button>
      </div>)}
    </div>
  )
}

export default FilterBtn
