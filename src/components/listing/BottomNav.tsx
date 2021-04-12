import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Search, Create, Message, DeveloperBoard } from '@material-ui/icons';

import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="BottomNav">
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Search" icon={<Search />} />
        <BottomNavigationAction label="Post Ad" icon={<Create />} />
        <BottomNavigationAction label="Messages" icon={<Message />} />
        <BottomNavigationAction label="Listings" icon={<DeveloperBoard />} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
