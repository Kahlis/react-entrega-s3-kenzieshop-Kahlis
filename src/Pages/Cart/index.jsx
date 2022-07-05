import { useSelector } from "react-redux";
import Header from "../../Components/Header";

function Cart() {
    const cart = useSelector((store) => store.cart);
    return (
        <>
            <Header />
            <div className="container">
                <ul className="cart-container">
                    {cart &&
                        cart.map((item) => {
                            return (
                                <li className="cart-item">
                                    <img
                                        src={item.image}
                                        alt={`Foto do ${item.name}`}
                                    />
                                    <h2>{item.name}</h2>
                                    <span>
                                        R${" "}
                                        {item.price
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </span>
                                </li>
                            );
                        })}
                </ul>
                <div className="cart-resume">
                    <h2>Resumo do pedido:</h2>
                    <span>{cart.length} produtos </span>
                    <span>
                        R${" "}
                        {cart &&
                            cart
                                .reduce((prev, curr) => {
                                    console.log(curr, prev);
                                    return curr.price + prev;
                                }, 0)
                                .toFixed(2)
                                .replace(".", ",")}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Cart;
