import styles from './Rating.module.css';
function Rating ({number, selected, handleClick}){
  return (
      <button className={`${styles.rating} ${selected? styles["rating--select"] : ""}`} onClick={handleClick}>
        {number}
      </button>
  )
}
export default Rating;
