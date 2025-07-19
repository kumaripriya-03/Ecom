import './App.css'
import Cart2 from "./cart/Cart2";
import Header from "./components/header/Header";
import Product from "./components/products/Product";
import './App.css';

const App = () => {
  return (
    <>
      <Header />
        <div className="main-container">
        <div className="container-l">
        <Product />
        </div>
        <div className="container-r">
          {/* <Cart /> */}
          <Cart2 />
        </div>
      </div>
      
    </>
  );
};

export default App;

