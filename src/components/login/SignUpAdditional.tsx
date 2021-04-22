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
import './style/SignUpAdditional.css';
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
                    <form>
                        <InputBox type="text">
                        First Name
                        </InputBox>
                        <br/>
                        <br/>
                        <InputBox type="text">
                        Last Name
                        </InputBox>
                        <br/>
                        <br/>
                        <InputBox type="text">
                        Country
                        </InputBox>
                        <br/>
                        <br/>
                        <InputBox type="text">
                        City
                        </InputBox>
                        <br/>
                        <br/>
                        <InputBox type="text">
                        Address
                        </InputBox>
                        <br/>
                        <br/>
                        <InputBox type="text">
                        Phone Number
                        </InputBox>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" disableElevation fullWidth className={classes.signButton}>
                            Skip / Continue
                        </Button>
                    </form>
                </ThemeProvider>
            </Card2>
        </>
    );
}