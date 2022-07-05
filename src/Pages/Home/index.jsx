import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header";
import { addProduct } from "../../store/modules/cart/actions";

function Home() {
    const notebooks = useSelector((store) => store.notebooks);
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <ul>
                {notebooks.map((item) => (
                    <li key={item.id} className={"productCard"}>
                        <h2>{item.name}</h2>
                        <img
                            src={item.image}
                            alt={`Foto do ${item.name}`}
                            className={"product-img"}
                        />
                        <div className="priceDesc">
                            <span>
                                R$ {item.price.toFixed(2).replace(".", ",")}
                            </span>
                            <p>{item.details}</p>
                        </div>
                        <button
                            onClick={() => {
                                dispatch(addProduct(item));
                            }}
                        >
                            Comprar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;
