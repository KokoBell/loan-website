import styles from '../styles/Heading.module.css'

const Heading = (props) => {
    const text = props.text ? props.text.toUpperCase() : "Inser some text here".toUpperCase()
    return (<div className={styles.text}>
        {text}
    </div>
    )
}

export default Heading