import { Button,
    createStyles,
    makeStyles,
    createMuiTheme,
    ThemeProvider,
    Theme,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors'
import Header from '../shared/Header';
import Card2 from '../shared/Card2';
import './style/SignPage.css';
import InputBox from './SignInInputs'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        signButton: {
            borderRadius: 10,
        }
    }),
);

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

export default function SignUpAdditional(){
    const classes = useStyles();

    return(
        <>
            <Header>
                Supreme Exchange
            </Header>
            <Card2>
                <ThemeProvider theme={theme}>
                    <form className="form">
                        <InputBox required={false} type="text" autocomplete="given-name">
                        First Name
                        </InputBox>

                        <InputBox required={false} type="text" autocomplete="family-name">
                        Last Name
                        </InputBox>

                        <InputBox required={false} type="text" autocomplete="country-name">
                        Country
                        </InputBox>

                        <InputBox required={false} type="text" autocomplete="address-level2">
                        City
                        </InputBox>

                        <InputBox required={false} type="text" autocomplete="street-address">
                        Address
                        </InputBox>

                        <InputBox required={false} type="tel" autocomplete="tel">
                        Phone Number
                        </InputBox>
                        <div>
                            <Button type="submit" variant="contained" color="primary" disableElevation fullWidth className={classes.signButton}>
                                Skip / Continue
                            </Button>
                        </div> 
                    </form>
                </ThemeProvider>
            </Card2>
        </>
    );
}