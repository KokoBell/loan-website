import Image from 'next/image'
import styles from '../styles/FlatCard.module.css'

const FlatCard = (props) => {
    const heading = props.heading ? props.heading.toUpperCase() : "Insert a heading".toUpperCase()
    return (<div className={styles.card}>
        <Image
            height={120}
            width={120}
            src={props.source}
            className={styles.hero_image}
            alt={props.text ? props.text : "Flat card image"}
        />
        <div className={styles.text_wrapper}>
        <p className={styles.text}>{props.text ? props.text : "Text goes here"}</p>
        {props.url && <p className={styles.link}>
            <a href={props.url ? props.url : "/"}>{props.link_text ? props.link_text : "Link text goes here"}</a><span className={styles.arrow}>&rarr;</span>
        </p>}
        </div>
    </div>
    )
}

export default FlatCard