const products = [
    {
        id: 0,
        name: "Notebook Vostro 15 3515",
        price: 3799,
        image: "./img/01.png",
        details: "Core i5 8GB 256GB SSD Full HD",
    },
    {
        id: 1,
        name: "Notebook Lenovo IdeaPad 3",
        price: 2749.9,
        image: "./img/02.png",
        details: "Core i7 4GB 120GB SSD Full HD",
    },
    {
        id: 2,
        name: "Notebook Asus M515DA-BR1213W",
        price: 2998.9,
        image: "./img/03.png",
        details: "Core i5 16GB 1TB HDD 120GB SSD Full HD",
    },
    {
        id: 3,
        name: "Notebook Asus X515MA",
        price: 2999.0,
        image: "./img/04.png",
        details: "Core i5 16GB 1TB HDD Full HD",
    },
    {
        id: 4,
        name: "Notebook Inspiron 15",
        price: 6099.0,
        image: "./img/05.png",
        details: "Core i7 16GB 512GB SSD NVMe M.2 Full HD",
    },
];

const notebooksReducer = (state = products, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default notebooksReducer;
