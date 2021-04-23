import Card from '../shared/Card';
import { Link } from 'react-router-dom';
import { Listing } from '../../interfaces/Interfaces';

import './style/ListingShort.css';

export default function ListingShort(props: Listing) {
  return (
    <Link to={`/listing-info/${props.createdBy}/${props.title}`}>
      <Card className="ListingShort" media={{ src: props.image }}>
        <p className="ListingShort__title">{props.title}</p>
        <p className="ListingShort__price">${props.price}</p>
        <p className="ListingShort__subtitle">{props.subtitle}</p>
        <p className="ListingShort__details">Details</p>

        <div className="ListingShort__property">
          <p className="ListingShort__property__name">Condition</p>
          <p className="ListingShort__property__value">{props.condition}</p>
        </div>

        <div className="ListingShort__property">
          <p className="ListingShort__property__name">Pickup Policy</p>
          <p className="ListingShort__property__value">{props.pickup}</p>
        </div>

        <div className="ListingShort__property">
          <p className="ListingShort__property__name">Negotiable</p>
          <p className="ListingShort__property__value">{props.negotiable}</p>
        </div>
      </Card>
    </Link>
  );
}
