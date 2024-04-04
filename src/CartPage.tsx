import CartProductLine from "./cartProductsLine"

const CartPage=(props:any)=>{
    return <table >
        <tr>
            <th>Id</th>
            <th>Product</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Action</th>
        </tr>
        {props.products.map((item:any)=>(
            <CartProductLine isProduct={true} product={item} addItemInCart={props.addItemInCart} removeItemDFromCart={props.removeItemDFromCart}/>
        ))}

    </table>
}
export default CartPage;