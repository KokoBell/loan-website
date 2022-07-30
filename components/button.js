import styles from '../styles/Button.module.css'

const Button = (props) => {
    return (<input type="button" value={props.text} className={props.class_name ? styles.secondary : styles.primary} onClick={props.function}/>)
}

export default Button