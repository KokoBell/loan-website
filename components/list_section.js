import styles from '../styles/ListSection.module.css'
import Image from 'next/image'

const ListSection = (props) => {
    return (
        <div className={props.right ? styles.list_section : `${styles.list_section} ${styles.right}`}>
            <div className={styles.image}>
                <Image
                    height={338}
                    width={410}
                    src={props.source}
                />
            </div>
            <div className={styles.list_wrapper}>
                <p className={styles.headline}>{props.headline}</p>
                <ul className={styles.list_items}>
                    {props.list_items.map((list_item) => {
                        return <li key={list_item} className={styles.list_item}>
                            {list_item}
                        </li>
                    })}
                </ul>
                <p className={styles.link}>
                    <a href={props.url ? props.url : "/"}>{props.link_text ? props.link_text : "Link text goes here"}</a><span className={styles.arrow}>&rarr;</span>
                </p>
            </div>
        </div>
    )
}

export default ListSection