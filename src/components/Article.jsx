import RatingCard from './RatingCard/RatingCard';
import ThankYouCard from './ThankYouCard/ThankYouCard';
import { useState } from 'react';
import styles from './Article.module.css';

function Article (){
  const [rating, setRating] = useState(5);
  const [submit, setSubmit] = useState(false);
  return (
    <article className={styles.wrapper}>
      {!submit && <RatingCard rating={rating} setRating={setRating} setSubmit={setSubmit}/>}
      {submit && <ThankYouCard rating={rating}/>}
    </article>
  );
}

export default Article;