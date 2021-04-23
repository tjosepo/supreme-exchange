import Map from '../../map/Map';
import Header from '../../shared/Header';
import Card from '../../shared/Card';
import './ListingInfo.css';
import { IconButton, InputBase } from '@material-ui/core';
import { Bookmark, Share, Close } from '@material-ui/icons';
import { useState, useEffect } from 'react';

import { getSpecificPost } from '../../utils/Firestore';
import { useParams } from 'react-router-dom';

export default function ListingInfo() {
  const [listing, setListing] = useState([]);
  const { title, user } = useParams();

  useEffect(() => {
    const getListing = async () => {
      const post = await getSpecificPost(title, user);
      setListing(post);
    }
    getListing();
  });

  return (
    <>
      <Header leftButton={<Close />}>{listing.title}</Header>
      <Card className="ListingInfo" media={{ src: listing.image }}>
        <p className="ListingInfo__title">{listing.title}</p>
        <p className="ListingInfo__price">${listing.price}</p>
        <p className="ListingInfo__subtitle">{listing.subtitle}</p>
        <p className="ListingInfo__details">Details</p>

        <div className="ListingInfo__property">
          <p className="ListingInfo__property__name">Condition</p>
          <p className="ListingInfo__property__value">{listing.condition}</p>
        </div>

        <div className="ListingInfo__property">
          <p className="ListingInfo__property__name">Pickup Policy</p>
          <p className="ListingInfo__property__value">{listing.pickup}</p>
        </div>

        <div className="ListingInfo__property">
          <p className="ListingInfo__property__name">Negotiable</p>
          <p className="ListingInfo__property__value">{listing.negotiable}</p>
        </div>

        <div className="ListingInfo__property">
          <p className="ListingInfo__property__name">Location</p>
          <p className="ListingInfo__property__value">{listing.location?.city}</p>
        </div>
        {listing.location && <Map location={listing.location} />}
        <hr />
        <div className="ListingInfo__message">
          <p className="ListingInfo__message__title">Message Seller</p>
          <InputBase className="ListingInfo__message__text" placeholder="When can I come by?" />
        </div>
        <div className="ListingInfo__footer">
          <div>
            <IconButton size="medium" className="ListingInfo__footer__button">
              <Bookmark />
            </IconButton>
            <span>Save</span>
          </div>
          <div>
            <IconButton size="medium" className="ListingInfo__footer__button">
              <Share />
            </IconButton>
            <span>Share</span>
          </div>
        </div>
      </Card>
    </>
  );
}
