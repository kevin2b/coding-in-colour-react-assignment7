import star from '@images/icon-star.svg';
import CardWrapper from '../CardWrapper/CardWrapper';
import CardHeaderText from '../global/CardHeaderText/CardHeaderText';
import RatingGroup from './RatingGroup/RatingGroup';
import styles from './RatingCard.module.css';

function RatingCard ({rating, setRating, setSubmit}) {
  const header = "How did we do?";
  const text = "Please let us know how we did with your support request. All " + 
    "feedback is appreciated to help us improve our offering!";

  return (
      <CardWrapper>
        <span className={styles["circle-container"]}>
          <img src={star} alt="" className={styles.circle__star} />
        </span>
        <CardHeaderText header={header} text={text} />
        <RatingGroup rating={rating} setRating={setRating}/>
        <button className={styles.card__submit} onClick={() => setSubmit(true)}>
          Submit
        </button>
      </CardWrapper>
  );
}

export default RatingCard;