import React, { useState } from 'react';
import Header from '../shared/Header';
import Card from '../shared/Card';
import Map from '../map/Map';
import { ArrowBack, CreditCard, AttachMoney, CheckBoxOutlineBlank, CheckBox } from '@material-ui/icons';
import { SvgIcon, Checkbox, Divider, Button, FormControlLabel, FormGroup } from '@material-ui/core';
import './style/payment.css';

function PaypalIcon() {
    return (
        <SvgIcon>
            <path d="M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.06.11.6-4.09c.6-3.8.59-3.74.67-3.85c.13-.17.11-.17 1.61-.18c1.32-.03 1.6-.03 2.19-.12c3.25-.45 5.26-2.36 5.96-5.66c.04-.22.08-.41.09-.41c0-.01.07.04.15.1c1.03.78 1.38 2.22.99 4.14c-.46 2.29-1.68 3.81-3.58 4.46c-.81.28-1.49.39-2.69.42c-.8.04-.82.04-1.05.19c-.17.17-.16.14-.55 2.55c-.27 1.7-.37 2.25-.41 2.35c-.07.16-.21.3-.37.38l-.11.07H10c-1.29 0-1.62 0-1.68-.03m-4.5-2.23c-.19-.1-.32-.27-.32-.47C3.5 19 6.11 2.68 6.18 2.5c.09-.18.32-.37.5-.44L6.83 2h3.53c3.91 0 3.76 0 4.64.2c2.62.55 3.82 2.3 3.37 4.93c-.5 2.93-1.98 4.67-4.5 5.3c-.87.21-1.48.27-3.14.27c-1.31 0-1.41.01-1.67.15c-.26.15-.47.42-.56.75c-.04.07-.27 1.47-.53 3.1a241.3 241.3 0 0 0-.47 3.02l-.03.06H5.69c-1.58 0-1.8 0-1.87-.04z" />
        </SvgIcon>
    );
}

export default function PaymentPage() {
    const [checked, setChecked] = useState(false);

    const handleCheck = () =>{
        setChecked(!checked)
    }

    const testingLocation = {
        address: '1455 De Maisonneuve Blvd. W.',
        city: 'Montreal',
        lat: 45.4974230654036,
        lng: -73.57907743891892
    };

    return (
        <>
            <Header leftButton={<ArrowBack />}>Supreme Exchange</Header>
            <Card>
                <p className="label">Payment</p>
                <div className="paymentHeader_Property">
                    <p className="paymentTitle">123 Sesame Street 21324</p>
                    <p className="paymentPrice">$119.99</p>
                </div>

                <div className="payment_map">
                    <Map location={testingLocation} />
                </div>

                <Divider />

                <div className="paymentMethod_Prop">
                    <div className="payment_label">Payment</div>
                    <div>
                        <p>Online Checkout</p>
                        <Button
                            className="cardButton"
                            variant="contained"
                            endIcon={<CreditCard />}
                            disableElevation>
                            card
                        </Button>
                        <Button
                            className="palButton"
                            variant="contained"
                            endIcon={<PaypalIcon />}
                            disableElevation>
                            paypal
                        </Button>
                    </div>
                    <div>
                        <p className="text_divider">
                            <span>or</span>
                        </p>
                        <Button
                            className="cashButton"
                            variant="contained"
                            endIcon={<AttachMoney />}
                            disableElevation
                            disabled={!checked}>
                            cash
                        </Button>
                    </div>
                    <div className="accountability">                  
                        <FormGroup>
                            <FormControlLabel control={
                                <Checkbox
                                icon={<CheckBoxOutlineBlank fontSize="small" />}
                                checkedIcon={<CheckBox fontSize="small" />}
                                name="cashCheckbox"
                                value={checked}
                                onChange={handleCheck}
                                />
                                }
                                label="By checking this box, you understand that Supreme Exchange is not held accountable for any cash transactions"
                                labelPlacement="end"
                                className="accountability"
                            />
                        </FormGroup>
                    </div>
                </div>
            </Card>
        </>
    );
}
