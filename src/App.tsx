//* Components
import Head from "./components/Head";
import Product from "./components/Product";
//* Context
import { useProducts } from "./context/ProductContext";
//* Styles
import "./App.css";

function App() {
  const { products } = useProducts();

  return (
    <div>
      <Head />
      <div>
        <ul>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
