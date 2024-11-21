import {Review, ReviewItem} from './review-item.tsx';

export type ReviewItemListProps = {
  reviews: Review[];
};

export function ReviewItemList(props: ReviewItemListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{props.reviews.length}</span></h2>
      <ul className="reviews__list">
        {props.reviews.map((r) =>
          // eslint-disable-next-line react/jsx-key
          <li className="reviews__item"><ReviewItem review={r}/></li>)}
      </ul>
    </>
  );
}
