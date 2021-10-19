import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./assets/components/Header";
import Store from "./assets/components/Store";
import axios from "axios"
import { useState, useEffect } from "react";

export interface Product {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

const StoreApp = () => {

  const [products, setProducts] = useState<Product[]>([] as Product[])

  useEffect(() => {
    const getProducts = async () => {
      const request = await axios.get("https://fakestoreapi.com/products")
        setProducts(request.data as Product[])
    }
    getProducts()
  }, [])

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Store products={products} setProducts={setProducts} />
          </Route>
          <Route exact path="/cart">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default StoreApp
