import Card from '../shared/Card';
import { Link } from 'react-router-dom';
import { Listing } from '../../interfaces/Interfaces';

import './SearchResult.css';

export default function SearchResult(props: Listing) {
  return (
    <Link to={`/listings/${props.title}`}>
      <Card className="SearchResult">
        <img className="SearchResult__image" src={props.image} alt="" />
        <div className="SearchResult__info">
          <p className="SearchResult__info__price">${props.price}</p>
          <p className="SearchResult__info__title">{props.title}</p>
          <p className="SearchResult__info__subtitle">{props.subtitle}</p>
        </div>
      </Card>
    </Link>
  );
}
