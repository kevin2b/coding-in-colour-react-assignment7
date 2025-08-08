import RatingCard from './RatingCard/RatingCard';
import ThankYouCard from './ThankYouCard/ThankYouCard';
import { useState } from 'react';

function Article (){
  const [rating, setRating] = useState(5);
  const [submit, setSubmit] = useState(false);
  return (
    <article className="wrapper">
      {!submit && <RatingCard rating={rating} setRating={setRating} setSubmit={setSubmit}/>}
      {submit && <ThankYouCard rating={rating}/>}
    </article>
  );
}

export default Article;