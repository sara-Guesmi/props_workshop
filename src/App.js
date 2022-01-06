import "./App.css";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import ProductList from "./Component/ProductList/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
