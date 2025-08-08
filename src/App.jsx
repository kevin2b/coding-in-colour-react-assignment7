/** Component Imports */
import star from '@images/icon-star.svg';
import thankYou from '@images/illustration-thank-you.svg';

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles'
 *  4. We added additional comments below to guide you
 */

const App = () => {
  return (
    <article class="wrapper">
      <div class="card card-1 js-card-1">
        <span class="circle-container">
          <img src={star} alt="" class="circle__star" />
        </span>
        <h1 class="card__header">How did we do?</h1>
        <p class="card__text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <section class="rating-group">
          <button class="rating rating--hover js-rating">1</button>
          <button class="rating rating--hover js-rating">2</button>
          <button class="rating rating--hover js-rating">3</button>
          <button class="rating rating--hover js-rating">4</button>
          <button class="rating rating--hover js-rating js-rating--select">
            5
          </button>
        </section>
        <button class="card__submit js-card__submit card__submit--hover">
          Submit
        </button>
      </div>

      <div class="card card-2 js-card-2 js-hidden">
        <img
          src={thankYou}
          alt=""
          class="card__img"
        />
        <p class="card__selected">
          You selected <span class="card__rating-value"> </span> out of 5
        </p>
        <h1 class="card__header">Thank you!</h1>
        <p class="card__text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </article>
  )
}

export default App