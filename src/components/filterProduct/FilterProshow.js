import React from 'react'
import { UseContext } from '../context/ContextProvider'

const FilterProshow = () => {

    const {filterpro,searchPro} =UseContext()
  return (
    <div>
       <div className="product_container">
    {(filterpro.length==0? searchPro : filterpro).slice(0,5).map(({id,category,image,price})=><div key={id}>
        <img src={image} width="200px" alt="" />
        <h2>{category}</h2>
        <h4>{price}</h4>
    </div>)}
</div>
    </div>
  )
}

export default FilterProshow