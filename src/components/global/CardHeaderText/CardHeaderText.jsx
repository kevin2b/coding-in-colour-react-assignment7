import styles from './CardHeaderText.module.css'

function CardHeaderText({header, text}){
  return (
    <div className={styles["card__header-wrapper"]}>
      <h1 className={styles["card__header"]}>{header}</h1>
      <p>
        {text}
      </p>
    </div>
  )
}

export default CardHeaderText;