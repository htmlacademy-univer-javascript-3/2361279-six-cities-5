import {PlaceType} from '../constants.ts';

export type OfferType = {
  rating: number;
  cardType: PlaceType;
  description: string;
  price: number;
  imageName: string;
}

export function Offer(props: OfferType) {
  return (<article className='cities__card place-card'>
    <div className='place-card__mark'>
      <span>premium</span>
    </div>
    <div className='cities__image-wrapper place-card__image-wrapper'>
      <a href='#'>
        <img className='place-card__image' src={`img/${ props.imageName}`} width='260' height='200'
          alt='place image'
        />
      </a>
    </div>
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{props.price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <button className='place-card__bookmark-button button' type='button'>
          <svg className='place-card__bookmark-icon' width='18' height='19'>
            <use xlinkHref='#icon-bookmark'></use>
          </svg>
          <span className='visually-hidden'>to bookmarks</span>
        </button>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{width: `${props.rating / 5 * 100 }%`}}></span>
          <span className='visually-hidden'>rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <a href='#'>{props.description}</a>
      </h2>
      <p className='place-card__type'>{props.cardType}</p>
    </div>
  </article>);
}

