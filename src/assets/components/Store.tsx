import styles from "../styles/store.module.css"
// import axios from "axios"
import { Product } from "../../StoreApp"
import CSS from 'csstype';

interface StoreProps {
  products: Product[],
  setProducts: (product: Product[]) => void
}

const Store = (props: StoreProps) => {

  const storeItemStyle = (img: string): CSS.Properties => {
    return {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundImage: "url(" + img + ")",
      height: "125px",
      width: "100%"
    }
  }

  return (
      <div className={styles.store}>
        <div className={styles.storeGrid}>
          {props.products.map(product =>
            <div className={styles.storeItem} key={product.id}>
              <div style={storeItemStyle(product.image)} />
              <div className={styles.storeItemTitle}>{product.title}</div>
              <div className={styles.storeItemPrice}>{product.price}$</div>
              <div className={styles.storeItemButton}>В корзину</div>
            </div>
          )}
        </div>
      </div>
  )
}

export default Store