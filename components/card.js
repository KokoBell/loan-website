import styles from '../styles/Card.module.css'

const Card = (props) => {
    const heading = props.heading ? props.heading.toUpperCase() : "Insert a heading".toUpperCase()
    return (<div className={styles.card}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.text}>{props.text ? props.text : "Text goes here"}</p>
        <p className={styles.link}>
            <a href={props.url ? props.url : "/"}>{props.link_text ? props.link_text : "Link text goes here"}</a>
        </p>
    </div>
    )
}

export default Card