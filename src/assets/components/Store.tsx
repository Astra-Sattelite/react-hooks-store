import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from "../styles/store.module.css"
import axios from "axios"
import { useState, useEffect } from "react";

interface Product {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

const Store = () => {

  const [products, setProducts] = useState<Product[]>([] as Product[])

  useEffect(() => {
    const getProducts = async () => {
      const request = await axios.get("https://fakestoreapi.com/products")
        setProducts(request.data as Product[])
        return request
    }
    getProducts()
  }, [])

  return (
    <div className={styles.store}>
      {products.map(product =>
        <div key={product.id}>{product.title}</div>
      )}
    </div>
  )
}

export default Store