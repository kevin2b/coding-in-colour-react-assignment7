function CardHeaderText({header, text}){
  return (
    <div className="card__header-wrapper">
      <h1 className="card__header">{header}</h1>
      <p className="card__text">
        {text}
      </p>
    </div>
  )
}

export default CardHeaderText;