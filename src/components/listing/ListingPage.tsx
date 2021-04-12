import Header from './Header';
import PriceHistoryChart from './PriceHistoryChart';
import ProductListings from './ProductListings';

export default function ListingPage() {
  return (
    <>
      <Header icon={true}>123 Sesame Street 21324</Header>
      <PriceHistoryChart />
      <ProductListings />
    </>
  );
}
