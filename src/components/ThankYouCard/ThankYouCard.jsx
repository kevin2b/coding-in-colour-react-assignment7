import thankYou from '@images/illustration-thank-you.svg';
import CardHeaderText from '../global/CardHeaderText/CardHeaderText';

function ThankYouCard(){
  const header ="Thank you!";
  const text = "We appreciate you taking the time to give a rating. If you ever need " +
    "more support, don't hesitate to get in touch!";
    
  return (
    <div className="card card-2 js-card-2 js-hidden">
      <img
        src={thankYou}
        alt=""
        className="card__img"
      />
      <p className="card__selected">
        You selected <span className="card__rating-value"> </span> out of 5
      </p>
      <CardHeaderText header={header} text={text} />
    </div>
  );
}

export default ThankYouCard