import star from '@images/icon-star.svg';
import CardWrapper from '../CardWrapper/CardWrapper';
import CardHeaderText from '../global/CardHeaderText/CardHeaderText';
import RatingGroup from './RatingGroup/RatingGroup';

function RatingCard ({rating, setRating, setSubmit}) {
  const header = "How did we do?";
  const text = "Please let us know how we did with your support request. All " + 
    "feedback is appreciated to help us improve our offering!";

  return (
      <CardWrapper className="card-1 js-card-1">
        <span className="circle-container">
          <img src={star} alt="" className="circle__star" />
        </span>
        <CardHeaderText header={header} text={text} />
        <RatingGroup rating={rating} setRating={setRating}/>
        <button className="card__submit js-card__submit card__submit--hover" onClick={() => setSubmit(true)}>
          Submit
        </button>
      </CardWrapper>
  );
}

export default RatingCard;