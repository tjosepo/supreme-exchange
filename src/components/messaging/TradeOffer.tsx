import './TradeOffer.css';
import { IconButton } from '@material-ui/core';
import { Close, Check } from '@material-ui/icons';

export default function TradeOffer() {
  return (
    <div className="TradeOffer">
      <div className="top">
        <p>Trade Invitation</p>
        <div className="line">
          <span>123 Sesame Stree</span>
          <span className="price">$119.99</span>
        </div>

        <div className="line">
          <span>Today</span>
          <span>5:00 PM EST</span>
        </div>

        <span>Montréal, QC</span>
        <br />
        <span className="faded">Exact location will be revealed after accepting the offer.</span>
      </div>

      <div className="bottom">
        <div>
          <IconButton size="medium" className="button">
            <Close />
          </IconButton>
          <span>Refuse</span>
        </div>
        <div>
          <IconButton size="medium" className="button">
            <Check />
          </IconButton>
          <span>Accept</span>
        </div>
      </div>
    </div>
  );
}
