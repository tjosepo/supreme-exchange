import { ChangeEvent, useRef, useState } from 'react';
import Header from '../shared/Header';
import { Listing } from '../../interfaces/Interfaces';

import './SearchPage.css';
import SearchBar from './SearchBar';
import { CircularProgress } from '@material-ui/core';
import { NotificationsNone, AccountCircle } from '@material-ui/icons';
import SearchResult from './SearchResult';
import Hero from './Hero';

const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Sesame Street LEGO',
    price: 199.99,
    subtitle: '2 available',
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
    subtitle: '3 available',
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
    subtitle: '7 available',
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
    subtitle: '2 available',
    condition: 'Like new',
    pickup: 'Can deliver',
    negotiable: 'No',
    image:
      'https://www.lego.com/cdn/cs/set/assets/blteb1a7b4f36578ecd/2000430.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1'
  }
];

export default function SearchPage() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const timeout = useRef<number | null>(null);

  const simulateLoading = () => {
    setLoading(true);

    if (timeout.current !== null) clearTimeout(timeout.current);
    timeout.current = (setTimeout(() => {
      setLoading(false);
      timeout.current = null;
    }, 500) as unknown) as number;
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length === 0) return;

    setInput(input);
    simulateLoading();
    const filtered = mockListings;
    // mockListings.filter(mockListings => {
    //   return mockListings.title.toLowerCase().includes(input.toLowerCase());
    // });
    setList(filtered);
  };

  return (
    <div className="SearchPage">
      <Header leftButton={<NotificationsNone />} rightButton={<AccountCircle />}>
        <SearchBar onChange={handleSearch} />
      </Header>
      {input.length === 0 && <Hero />}

      {input.length > 0 && loading ? (
        <div className="SearchPage__loading">
          <div className="SearchPage__loading__message">
            Searching for <span>{input}</span>
          </div>
          <div className="SearchPage__loading__spinner">
            <CircularProgress />
          </div>
        </div>
      ) : input.length > 0 && list.length > 0 ? (
        list.map(ele => <SearchResult key={ele.id} {...ele} />)
      ) : (
        input.length > 0 && (
          <div className="SearchPage__loading">
            <div className="SearchPage__loading__message">
              Found no results for <span>{input}</span>
            </div>
            <div className="SearchPage__loading__message">
              <span>Tip:</span> Try searching for "Lego".
            </div>
          </div>
        )
      )}
    </div>
  );
}
