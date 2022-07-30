import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Button from './button'

const Hero = (props) => {
    return (<div className={styles.hero}>
        <Image
            height={500}
            width={500}
            src={props.source}
            className={styles.hero_image}
        />

        <div className={styles.text_wrapper}>
            <p className={styles.main_text}>
                {props.main_text}
            </p>
            <p className={styles.sub_text}>
                {props.sub_text}
            </p>
            <ul className={styles.list_items}>
                <li className={styles.list_item}>Card Limit is 100% of FD Amount</li>
                <li className={styles.list_item}>Instant Virtual Card</li>
            </ul>
            <Button text="Get a Loan"/>
        </div>
    </div>
    )
}

export default Hero