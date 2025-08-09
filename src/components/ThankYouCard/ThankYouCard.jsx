import thankYou from '@images/illustration-thank-you.svg';
import CardHeaderText from '../global/CardHeaderText/CardHeaderText';
import CardWrapper from '../CardWrapper/CardWrapper';
import cardWrapperStyles from '../CardWrapper/CardWrapper.module.css'
import styles from './ThankYouCard.module.css'

function ThankYouCard({rating}){
  const header ="Thank you!";
  const text = "We appreciate you taking the time to give a rating. If you ever need " +
    "more support, don't hesitate to get in touch!";
    
  return (
    <CardWrapper className={cardWrapperStyles["card-2"]}>
      <img
        src={thankYou}
        alt=""
        className={styles.card__img}
      />
      <p className={styles.card__selected}>
        You selected {rating} out of 5
      </p>
      <CardHeaderText header={header} text={text} />
    </CardWrapper>
  );
}

export default ThankYouCard;