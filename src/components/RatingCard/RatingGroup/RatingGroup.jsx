import Rating from "./Rating/Rating";

function RatingGroup ({rating, setRating}){
  const MAX = 5;
  const ratings = (new Array(MAX)).fill(0).map((curr,index) => index+1);

  return (
    <section className="rating-group">
      {ratings.map((curr) => {
        return <Rating number={curr} selected={curr === rating} key={curr} handleClick={() => setRating(curr)}/>
      })}
    </section>    
  )
}

export default RatingGroup;