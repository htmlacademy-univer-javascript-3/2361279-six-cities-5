import {ReviewRating} from './review-star.tsx';

export type Review = {
  name: string;
  rating: ReviewRating;
  date: Date;
  imagePath: string;
  reviewText: string;
};

export type ReviewItemProps = {
  review: Review;
};

export function ReviewItem(props: ReviewItemProps) {
  const review = props.review;
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.imagePath} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${100 * review.rating / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.reviewText}
        </p>
        <time className="reviews__time" dateTime={review.date.toISOString()}>
          {review.date.toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', timeZone: 'Europe/Moscow'})}
        </time>
      </div>
    </>
  );
}
