import {Link} from 'react-router-dom';
import {PlaceType} from '../mocks/offer.ts';

export type Place = {
  id: number;
  rating: number;
  cardType: PlaceType;
  name: string;
  price: number;
  imageName: string;
}

export type OfferedPlaceCardProps = { place: Place };

export function OfferedPlaceCard(props: OfferedPlaceCardProps) {
  return (
    <article className='cities__card place-card'>
      <div className='place-card__mark'>
        <span>premium</span>
      </div>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img className='place-card__image' src={`img/${props.place.imageName}`} width='260' height='200'
            alt='place image'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{props.place.price}</b>
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
            <span style={{width: `${props.place.rating / 5 * 100}%`}}></span>
            <span className='visually-hidden'>rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${props.place.id}`}>{props.place.name}</Link>
        </h2>
        <p className='place-card__type'>{props.place.cardType}</p>
      </div>
    </article>);
}

