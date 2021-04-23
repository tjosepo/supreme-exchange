import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import ListingShort from './ListingShort';
import './style/ProductListings.css';

import { getAllPostsWithTitle } from '../utils/Firestore';

export default function ProductListings(props) {
  const [asc, setAsc] = useState(true);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    let getListings = async () => {
      let temp = await getAllPostsWithTitle(props.title);
      temp = temp.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });
      setListings(temp);
    }
    getListings();
  },
  [props]);

  
  const compareAsc = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  };

  const compareDesc = (a, b) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  };

  const handleSorting = () => {
    setListings(listings.sort(!asc ? compareAsc : compareDesc));
    setAsc(!asc);
  }

  return (
    <div className="ProductListing">
      <div className="ProductListing__header">
        <span className="ProductListing__header__title">Listings</span>
        <Button
          size="large"
          endIcon={asc ? <ExpandMore /> : <ExpandLess />}
          onClick={handleSorting}>
          Price
        </Button>
      </div>
      {listings?.map(ele => (
        <ListingShort key={ele.createdAt} {...ele} />
      ))}
    </div>
  );
}
