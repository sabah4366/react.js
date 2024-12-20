import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-left w-7/12 m-auto  mt-4 ">
            <div className="flex justify-between bg-black">
                <h1 className="text-2xl font-bold bg-black  p-2 text-white ">
                Cart
                </h1>
                <button className=" text-white m-2 ps-2 pe-2 rounded-lg border-2 border-white font-bold" onClick={handleClearCart}>Clear Cart</button>
            </div>
           
            <div className="">
                {
                    cartItems.length === 0 && <div className="text-center w-6/12 pt-10 m-auto align-middle">
                        <h1 
                        className=" font-semibold text-2xl pb-2"> 
                        Cart is empty. Add items to the cart!
                        </h1>
                        <Link to="/">
                            <h2 className="border-black  border-2 rounded-2xl ">
                                Home
                            </h2>
                        </Link>
                    </div>
                }
                <ItemList items={cartItems}/>
            </div>
            
        </div>
    )

} 

export default Cart;