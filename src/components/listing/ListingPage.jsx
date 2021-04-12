import { Close } from '@material-ui/icons';
import Header from '../shared/Header';
import PriceHistoryChart from './PriceHistoryChart';
import ProductListings from './ProductListings';

export default function ListingPage() {
  return (
    <>
      <Header leftButton={<Close/>}>123 Sesame Street 21324</Header>
      <PriceHistoryChart />
      <ProductListings />
    </>
  );
}
