import {ChangeEventHandler} from 'react';

const titles = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export type ReviewStarProps = {
  rating: 1 | 2 | 3 | 4 | 5;
  handleStarChange: ChangeEventHandler;
  checked: boolean;
};

export function ReviewStar(props: ReviewStarProps) {
  const id = `${props.rating}-stars`;
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={props.rating}
        id={id} onChange={props.handleStarChange} checked={props.checked}
        type="radio"
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label"
        title={titles[props.rating - 1]}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
