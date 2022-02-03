import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import EditProduct from './components/EditProduct'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
          <Switch>

            <Route exact path="/">
              <h1>Product Manager</h1>
              <ProductForm/>
              <hr/>
              <AllProducts/>
            </Route>

            <Route exact path="/product/:id">
              <SingleProduct></SingleProduct>
            </Route>

            <Route exact path="/product/edit/:id">
              <EditProduct></EditProduct>
            </Route>
          
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
