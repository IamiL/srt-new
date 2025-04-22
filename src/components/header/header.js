import styles from './header.module.css'
import Navigation from "../navigation/navigation";
import "./header.css"
import MobileMenu from "@/components/mobileMenu/menu";
import Logo from "@/components/logo/logo";
import {Link} from "react-router-dom";

export default function Header({enLan}) {
    return <header id={styles.header} className="base_grid">
        <Link to='/' id={styles.logo}>
            <Logo enLan={enLan}/>
        </Link>
        <div className='nav_menu'>
            <Navigation enLan={enLan}/>
            <MobileMenu enLan={enLan}/>
        </div>
    </header>
}