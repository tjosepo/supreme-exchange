import { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

import ListingShort from '../listing/ListingShort';
import BottomNav from '../listing/BottomNav';
import './SearchPage.css';

const mockListings = [
  {
    id: '1',
    title: 'Sesame Street LEGO',
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
    title: 'FRIENDS LEGO',
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
    title: 'Baby Yoda Lego',
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
    title: 'LEGO Spare Pieces',
    price: 175.99,
    subtitle: 'Submitted an hour ago by PokemonGoLover69',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: 'No',
    image:
      'https://www.lego.com/cdn/cs/set/assets/blteb1a7b4f36578ecd/2000430.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  }
];

export default function SearchResults() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<any[]>([]);

  const handleSearch = () => {
    const filtered = mockListings.filter(mockListings => {
      return mockListings.title.toLowerCase().includes(input.toLowerCase());
    });
    setList(filtered);
  };

  return (
    <div className="SearchPage">
      <SearchBar className="SearchPage__search_bar"
        placeholder="Search..."
        onChange={(newValue) => {setInput(newValue)}}
        onRequestSearch={() => handleSearch()}
        onCancelSearch={() => setList([])}
        cancelOnEscape={true}
      />
      {list?.map(ele => (
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
      <BottomNav/>
    </div>
  );
}
