import ListingInfo from './components/listing/listing-info/ListingInfo';

const listing = {
  title: '123 Sesame Street 21324',
  price: 199.99,
  subtitle: 'Submitted an hour ago by JOHN123',
  condition: 'Like new',
  pickup: 'Can deliver',
  negotiable: 'Yes',
  image:
    'https://www.lego.com/cdn/cs/set/assets/blt6631c3930abc6526/21324.jpg?fit=bounds&format=jpg&quality=80&width=528&height=528&dpr=1',
  location: {
    address: '1455 De Maisonneuve Blvd. W.',
    city: 'Montreal',
    lat: 45.4974230654036,
    lng: -73.57907743891892
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListingInfo listing={listing} />
      </header>
    </div>
  );
}

export default App;
