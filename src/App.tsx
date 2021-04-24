import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchPage from './components/search/SearchPage';
import PostingPage from './components/post/PostingPage';
import BottomNav from './components/shared/BottomNav';
import ListingPage from './components/listing/ListingPage';
import ListingInfo from './components/listing/listing-info/ListingInfo';
import SignInPage from './components/login/SignInPage';
import PaymentPage from './components/payment/PaymentPage';
import SignUpPage from './components/login/SignUpPage';
import SignUpAdditional from './components/login/SignUpAdditional';
import Messaging from './components/messaging/Messaging';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/listings/:title" exact component={ListingPage} />
          <Route path="/listing-info/:user/:title" exact component={ListingInfo} />
          <Route path="/new-ad" exact component={PostingPage} />
          <Route path="/messaging" exact component={Messaging} />
          <Route path="/account" exact component={SignInPage} />
          <Route path="/payment" exact component={PaymentPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/sign-up-additional" exact component={SignUpAdditional} />
        </Switch>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
