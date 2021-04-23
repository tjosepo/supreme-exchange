import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Search, Create, Message, AccountCircle } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style/BottomNav.css';

const BottomNav = () => {
  const [currentTab, setCurrentTab] = useState<string>('search');

  return (
    <>
      <div className="BottomNav-margin" />
      <div className="BottomNav">
        <BottomNavigation
          showLabels
          value={currentTab}
          onChange={(_, value) => setCurrentTab(value)}>
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<Search />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Post Ad"
            value="post-ad"
            icon={<Create />}
            component={Link}
            to="/new-ad"
          />
          <BottomNavigationAction
            label="Messages"
            value="messages"
            icon={<Message />}
            component={Link}
            to="/messaging"
          />
          <BottomNavigationAction
            label="Account"
            value="account"
            icon={<AccountCircle />}
            component={Link}
            to="/account"
          />
        </BottomNavigation>
      </div>
    </>
  );
};

export default BottomNav;
