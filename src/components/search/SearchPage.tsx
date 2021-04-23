import { ChangeEvent, useRef, useState, useEffect } from 'react';
import Header from '../shared/Header';

import './SearchPage.css';
import SearchBar from './SearchBar';
import { CircularProgress } from '@material-ui/core';
import { NotificationsNone, AccountCircle } from '@material-ui/icons';
import SearchResult from './SearchResult';
import { getAllPosts } from '../utils/Firestore';
import Hero from './Hero';

export default function SearchPage() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [uniqueList, setUniqueList] = useState<any[]>([]);
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
    const filtered = uniqueList.filter(l => {
      return l.title.toLowerCase().includes(input.toLowerCase());
    });
    setList(filtered);
  };

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts();
      let object: any[];
      object = [];
      posts.forEach(p => {
        let present = false;
        object.forEach(o => {
          if(o.title === p.title) present = true
        });
        if(!present) object.push(p)
      });
      setUniqueList(object);
    }
    getPosts();
  }, []);

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
      ) : list.length > 0 ? (
        list.map(ele => <SearchResult key={ele.title} {...ele} />)
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
