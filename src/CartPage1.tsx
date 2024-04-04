import CartProductLine from "./cartProductsLine"

const CartPage1=(props:any)=>{
    return <table >
        <tr>
            <th>Id</th>
            <th>Product</th>
            <th>Price</th>
            <th>In Cart</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
        {props.cartItems.map((item:any)=>(
            <CartProductLine isProduct={false} product={item} addItemInCart={props.addItemInCart} removeItemDFromCart={props.removeItemDFromCart}/>
        ))}

    </table>
}
export default CartPage1;