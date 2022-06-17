import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () =>{
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
            </li>
            <li className={styles.item}>
            <Link to="/contato">contato</Link>
            </li>
        </ul>
    );
};
export default NavBar;