import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from "../styles/header.module.css"

const Header = () => {
  const routes = 
    [ {name: "Store", link: "/"}
    , {name: "Cart", link: "/cart"}
    , {name: "TempName", link: "/temp"}
    ]

  return (
    <div className={styles.header}>
      {routes.map(x => 
        <Link key={x.name} className={styles.link} to={x.link}>{x.name}</Link>
      )}
    </div>
  )
}

export default Header