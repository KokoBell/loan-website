import styles from '../styles/Navbar.module.css'
import Button from './button'

const NavBar = (props) => {
    const default_function = () => { console.log("Add your function here") }
    return (
            <div className={styles.nav_links}>
                <h1 className={styles.nav_logo}> {props.logo} </h1>
                <p className={styles.nav_link}> All Products </p>
                <p className={styles.nav_link}> Learn </p>
                <p className={styles.nav_link}> Resources </p>
                <p className={styles.nav_link}> Contact </p>
                <div className={styles.signup}>
                <p className={styles.nav_link}> Sign Up </p>
                </div>
            </div>
    )
}

export default NavBar