const CartProductLine=(props:any)=>{
    return (props.isProduct?<tr>
        <td>{props.product.id}</td>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
        <td>{props.product.in_stock}</td>
        <td><button onClick={()=>props.addItemInCart(props.product.id)}>+ Add in Cart</button><button onClick={()=>props.removeItemDFromCart(props.product.id)}>- Remove from Cart</button></td>
    </tr>:<tr>
    <td>{props.product.id}</td>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
    <td>{props.product.in_cart}</td>
    <td>{props.product.total_amount}</td>
    <td><button onClick={()=>props.addItemInCart(props.product.id)}>+ Add in Cart</button><button onClick={()=>props.removeItemDFromCart(props.product.id)}>- Remove from Cart</button></td>
</tr>)

}
export default CartProductLine;