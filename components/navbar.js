import styles from '../styles/Navbar.module.css'
import Button from './button'

const NavBar = (props) => {
    const default_function = () => { console.log("Add your function here") }
    return (<div className={styles.nav_background}>
        <div className={styles.navbar}>
            <div className={styles.nav_links}>
                <h1 className={styles.nav_logo}> {props.logo} </h1>
                <p className={styles.nav_link}> All Products </p>
                <p className={styles.nav_link}> Learn </p>
                <p className={styles.nav_link}> Resources </p>
                <p className={styles.nav_link}> Contact </p>
                <Button text="Sign Up" class_name="signup_button" function={default_function} />
            </div>
        </div>
    </div>
    )
}

export default NavBar