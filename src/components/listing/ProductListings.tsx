import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import ListingShort from './ListingShort';
import './ProductListings.css';

const mockListings = [
  {
    id: '1',
    title: '123 Sesame Street 21324',
    price: 199.99,
    subtitle: 'Submitted an hour ago by JOHN123',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: 'Yes',
    image:
      'https://www.lego.com/cdn/cs/set/assets/blt6631c3930abc6526/21324.jpg?fit=bounds&format=jpg&quality=80&width=528&height=528&dpr=1'
  },
  {
    id: '2',
    title: '123 Sesame Street 21324',
    price: 500.99,
    subtitle: 'Submitted a week ago by LegoDude97',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: 'Yes',
    image:
      'https://www.lego.com/cdn/cs/set/assets/blt663079722b9ad39e/21319_alt1.jpg?fit=bounds&format=jpg&quality=80&width=528&height=528&dpr=1'
  },
  {
    id: '3',
    title: '123 Sesame Street 21324',
    price: 150.99,
    subtitle: 'Submitted an hour ago by HALIBABA',
    condition: 'Like new',
    pickup: 'First Come, First Served',
    negotiable: 'No',
    image:
      'https://www.lego.com/cdn/cs/set/assets/blt4077c030eb5d127d/75318.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  },
  {
    id: '4',
    title: '123 Sesame Street 21324',
    price: 175.99,
    subtitle: 'Submitted an hour ago by PokemonGoLover69',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: 'No',
    image:
      'https://www.lego.com/cdn/cs/set/assets/blteb1a7b4f36578ecd/2000430.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  }
];

export default function ProductListings() {
  const [asc, setAsc] = useState(true);

  const compareAsc = (a: { price: number }, b: { price: number }) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  };

  const compareDesc = (a: { price: number }, b: { price: number }) => {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
  };

  const listings = mockListings.sort(asc ? compareAsc : compareDesc);

  return (
    <div className="ProductListing">
      <div className="ProductListing__header">
        <span className="ProductListing__header__title">Listings</span>
        <Button
          size="large"
          endIcon={asc ? <ExpandMore /> : <ExpandLess />}
          onClick={() => setAsc(!asc)}>
          Price
        </Button>
      </div>
      {listings?.map(ele => (
        <ListingShort
          key={ele.id}
          title={ele.title}
          price={ele.price}
          subtitle={ele.subtitle}
          condition={ele.condition}
          pickup={ele.pickup}
          negotiable={ele.negotiable}
          image={ele.image}
        />
      ))}
    </div>
  );
}
