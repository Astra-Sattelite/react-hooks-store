import styles from "../styles/store.module.css"
import axios from "axios"
import { useState, useEffect } from "react";
import { Product } from "../../StoreApp"

interface StoreProps {
  products: Product[],
  setProducts: (product: Product[]) => void
}

const Store = (props: StoreProps) => {

  return (
    <div className={styles.store}>
      {props.products.map(product =>
        <div key={product.id}>{product.title}</div>
      )}
    </div>
  )
}

export default Store