import thankYou from '@images/illustration-thank-you.svg';
import CardHeaderText from '../global/CardHeaderText/CardHeaderText';
import CardWrapper from '../CardWrapper/CardWrapper';

function ThankYouCard({rating}){
  const header ="Thank you!";
  const text = "We appreciate you taking the time to give a rating. If you ever need " +
    "more support, don't hesitate to get in touch!";
    
  return (
    <CardWrapper className="card-2 js-card-2">
      <img
        src={thankYou}
        alt=""
        className="card__img"
      />
      <p className="card__selected">
        You selected <span className="card__rating-value"> {rating} </span> out of 5
      </p>
      <CardHeaderText header={header} text={text} />
    </CardWrapper>
  );
}

export default ThankYouCard