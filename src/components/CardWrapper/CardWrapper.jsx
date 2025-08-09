import styles from './CardWrapper.module.css'

function CardWrapper ({className = "", children}){
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}

export default CardWrapper;