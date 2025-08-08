function CardWrapper ({className = "", children}){
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export default CardWrapper;