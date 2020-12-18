import React, {useState, useEffect} from 'react';
import { Products, Navbar} from './components';
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
       fetchProducts();
       fetchCart();
    }, [])

    const fetchCart = async () => setCart(await commerce.cart.retrieve());

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    console.log(cart);
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
          {/*  <Products products={products} onAddToCart={handleAddToCart}/>*/}
          <Cart cart={cart}></Cart>
        </div>
    );
};

export default App;