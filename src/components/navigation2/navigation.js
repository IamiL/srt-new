import styles from "./navigation.module.css";
import {Link} from "react-router-dom";

export default function Navigation({enLan}) {
    if (enLan === true) {
        return <nav id={styles.nav}>
            <a href={`#advantages`} id={styles.nav1}>Advantages</a>
            <a href={`#capabilities`} id={styles.nav2}>Capabilities</a>
            <a href={`#industrial_robots`} id={styles.nav3}>Industrial robots</a>
            <a href={`#manufacturing`} id={styles.nav4}>Manufacturing</a>
            <a href={`#contacts`} id={styles.nav5}>Contacts</a>
        </nav>
    } else {
        return <nav id={styles.nav}>
            <Link to={`/`} id={styles.nav1}>О нас</Link>
            <Link to={`/cases`} id={styles.nav2}>Наши работы</Link>
            <Link to={`/manufacturing`} id={styles.nav3}>Производство</Link>
            <Link to={`/catalog`} id={styles.nav4}>Каталог оборудования</Link>
            <Link to={`/#contacts`} id={styles.nav5}>Контакты</Link>
        </nav>
    }
}