import { useSelector } from "react-redux";
import cartGreen from "./cartGreen.png";
import { useNavigate } from "react-router-dom";

function Header() {
    const cart = useSelector((store) => store.cart);
    const navigate = useNavigate();
    return (
        <header>
            <h1
                onClick={() => {
                    navigate("../home");
                }}
            >
                KenzieShop
            </h1>
            <div className="cart-total-container">
                <img
                    src={cartGreen}
                    alt={"Icone carrinho"}
                    className={"cart-icon"}
                />
                <span
                    className="cart-total"
                    onClick={() => {
                        navigate("../cart");
                    }}
                >
                    R${" "}
                    {cart &&
                        cart
                            .reduce((prev, curr) => {
                                console.log(curr, prev);
                                return curr.price + prev;
                            }, 0)
                            .toFixed(2)}
                </span>
            </div>
        </header>
    );
}

export default Header;
