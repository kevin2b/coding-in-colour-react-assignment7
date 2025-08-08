function Rating ({number, selected, handleClick}){
  return (
      <button className={`rating rating--hover js-rating ${selected?"js-rating--select":""}`} onClick={handleClick}>
        {number}
      </button>
  )
}
export default Rating;
