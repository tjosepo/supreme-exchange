import React, { useState, useEffect } from 'react';
import Map from '../../map/Map';
import Header from '../../shared/Header';
import Card from '../../shared/Card';
import './ListingInfo.css';
import { IconButton, TextField } from '@material-ui/core';
import { Send, Bookmark, Share } from '@material-ui/icons';
import { Close } from '@material-ui/icons';

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
          <TextField
            className="ListingInfo__message__text"
            defaultValue="When can I come by?"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => {
                    console.log('send message');
                  }}>
                  <Send />
                </IconButton>
              )
            }}
          />
        </div>
        <div className="ListingInfo__footer">
          <div className="ListingInfo__footer__button">
            <Bookmark /> <span>Save</span>
          </div>
          <div className="ListingInfo__footer__button">
            <Share /> <span>Share</span>
          </div>
        </div>
      </Card>
    </>
  );
}
