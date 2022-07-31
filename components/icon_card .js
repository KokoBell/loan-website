import Image from 'next/image'
import styles from '../styles/IconCard.module.css'

const IconCard = (props) => {
    const heading = props.heading ? props.heading.toUpperCase() : "Insert a heading".toUpperCase()
    return (<div className={styles.card}>
        <div className={styles.image_wrapper}>
            <Image
                height={52}
                width={52}
                src={props.source ? props.source : '/ccptick.svg'}
            />
        </div>
        <h2 className={styles.heading}>
            {props.heading ? props.heading : "Heading goes here"}
        </h2>
        <p className={styles.text}>
            {props.text ? props.text : "Text goes here"}
        </p>
    </div>
    )
}

export default IconCard