
import RatingCard from './RatingCard/RatingCard';
import ThankYouCard from './ThankYouCard/ThankYouCard';

function Article (){
  return (
    <article className="wrapper">
      <RatingCard />
      <ThankYouCard />
    </article>
  );
}

export default Article;