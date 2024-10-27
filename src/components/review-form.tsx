import {ChangeEventHandler, useState} from 'react';
import {ReviewRating, ReviewStar} from './review-star.tsx';

export function ReviewForm() {
  const [reviewData, setReviewData] = useState({
    review: '',
    rating: 0
  });

  const handleStarChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {name, value} = event.target;
    setReviewData({...reviewData, [name]: parseInt(value, 10)});
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const {name, value} = event.target;
    setReviewData({...reviewData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from(Array(5).keys())
          .reverse()
          .map((i) => i + 1)
          .map((i) => (
            <ReviewStar checked={i === reviewData.rating}
              handleStarChange={handleStarChange} key={i}
              rating={i as ReviewRating}
            />))}
      </div>
      <textarea onChange={handleTextChange}
        className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
