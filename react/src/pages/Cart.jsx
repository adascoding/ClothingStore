import { useSelector, useDispatch } from "react-redux"
import { removeItem } from '../redux/cartReducer'
import Navbar from "../components/Navbar";
import SpecialSale from "../components/SpecialSale"
export default function Cart() {
    const products = useSelector((state) => state.cart.products);
    const dispach = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    }
    return (
        <div>
            <SpecialSale/>
            <Navbar/>
            <h1>Cart</h1>

            {products?.map((item) => (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div>Price: {item.quantity} x {item.price}</div>
                    <button onClick={ 
                        () =>
                        dispach(removeItem(item.id))
                    }>x</button>
                </div>
            ))}

            <h3>Subtotal: {totalPrice()}</h3>
        </div>
    )
}
