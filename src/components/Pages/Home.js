import React, { useState } from "react";
import { UseContext } from "../context/ContextProvider";
import FilterBtn from "../filterProduct/FilterBtn";
import FilterProshow from "../filterProduct/FilterProshow";
 
// import css
import './Home.css'
const Home = () => {
  const { product ,inputData ,searchPro } = UseContext();
  const [name, setName] = useState("");
 const btnHandler =(e)=>{
     e.preventDefault()
     inputData(name);
     setName("")
 }
  return (
    <div>
        <form onSubmit={btnHandler}>
            <input required type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Search your Product"/>
            <button> Search</button>
        </form>
    {product?.length==0? <h5 style={{color:"red"}}>Sorry ! Product not Found </h5> : ''}
{/* show product */}
    <h2> Product Available: {(product.length==0?searchPro:product).length}  </h2>
<div className="product_container">
    {(product.length==0?searchPro:product).map(({id,category,image,price})=><div key={id}>
        <img src={image} width="200px" alt="" />
        <h2>{category}</h2>
        <h4>{price}</h4>
    </div>)}
</div>


{/*filter  btn show */}
<FilterBtn/>

{/* show product */}
<FilterProshow/>

    </div>
  );
};

export default Home;
