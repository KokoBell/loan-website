import styles from '../styles/Card.module.css'

const Card = (props) => {
    const heading = props.heading ? props.heading : "Insert a heading"
    return (
        <div>
            <a href={props.url ? props.url : "/"} className={styles.card}>
                <div>
                    <p className={styles.heading}>{heading}</p>
                    <p className={styles.text}>{props.text ? props.text : "Text goes here"}</p>
                    <p className={styles.link}>
                        {props.link_text ? props.link_text : "Link text goes here"}<span className={styles.arrow}>&rarr;</span>
                    </p>
                </div>
                <div className={styles.icon}>
                    {props.icon}
                </div>
            </a>
        </div >

    )
}

export default Card