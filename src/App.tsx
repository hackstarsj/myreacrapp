import CartPage from "./CartPage";
import CartPage1 from "./CartPage1";
import ClickComponent from "./ClickComponent";
import React, { useState } from "react";
function App(){

  const [count, setCount] = useState(0);
  const [cartItems,setCartItems]=useState<any>([]);
  let [productItems,setProductItems]=useState([
    {
        id:1,
        name:"Car",
        price:100,
        in_stock:10,
        isProduct:true
      },
    {  id:2,
        name:"Bike",
        price:1000,
        in_stock:10,
        isProduct:true
      },{
        id:3,
        name:"Scooty",
        price:5000,
        in_stock:10,
        isProduct:true
      },
      {
        id:4,
        name:"Thar",
        price:10000,
        in_stock:10,
        isProduct:true
        },
  {       
     id:5,
        name:"Truck",
        price:15000,
        in_stock:10,
        isProduct:true
      }
  ]);

  const addItemInCart=(id:any)=>{
    let currentProduct:any={};
    for(let i=0;i<productItems.length;i++){
      if(productItems[i].id==id){
        productItems[i]['in_stock']=productItems[i]['in_stock']-1;
        currentProduct=productItems[i];
      }
    }
    setProductItems([...productItems]);

    let isDataUpdate=false;
    for(let i=0;i<cartItems.length;i++){
      if("id" in cartItems[i]){
        if(cartItems[i].id==id){
          cartItems[i]['in_cart']=cartItems[i]['in_cart']+1;
          cartItems[i]['total_amount']=cartItems[i]['in_cart']*cartItems[i]['price'];
          isDataUpdate=true;
        }
      }
    }
    if(isDataUpdate==false){
      cartItems.push({
        id:id,
        name:currentProduct.name,
        price:currentProduct.price,
        in_cart:1,
        total_amount:currentProduct.price
      });
    }
    setCartItems([...cartItems]);
    setProductItems([...productItems]);
  }

  const removeItemDFromCart=(id:any)=>{
    let currentProduct:any={};
    for(let i=0;i<productItems.length;i++){
      if(productItems[i].id==id){
        productItems[i]['in_stock']=productItems[i]['in_stock']+1;
        currentProduct=productItems[i];
      }
    }
    setProductItems([...productItems]);

    let isDataUpdate=false;
    for(let i=0;i<cartItems.length;i++){
      if("id" in cartItems[i]){
        if(cartItems[i].id==id){
          cartItems[i]['in_cart']=cartItems[i]['in_cart']-1;
          cartItems[i]['total_amount']=cartItems[i]['in_cart']*cartItems[i]['price'];
          isDataUpdate=true;
        }
      }
    }

    setCartItems([...cartItems]);
  }

  return (
    // <>
    //   <h1>Hello World {count}</h1>
    //   <ClickComponent parentCounter={count} changeParentCounter={setCount}/>
    //   <ClickComponent parentCounter={count} changeParentCounter={setCount}/>
    //   <ClickComponent parentCounter={count} changeParentCounter={setCount}/>
    //   <ClickComponent parentCounter={count} changeParentCounter={setCount}/>
    // </>
    <>
    <h1>Products</h1>
    <CartPage products={productItems} addItemInCart={addItemInCart} removeItemDFromCart={removeItemDFromCart}/>
    <h1>Cart</h1>
    <CartPage1 cartItems={cartItems} addItemInCart={addItemInCart} removeItemDFromCart={removeItemDFromCart}/>
    </>
  );
}
export default App;