function CardHeaderText({header, text}){
  return (
    <>
      <h1 className="card__header">{header}</h1>
      <p className="card__text">
        {text}
      </p>
    </>
  )
}

export default CardHeaderText;