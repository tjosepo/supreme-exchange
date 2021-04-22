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
                        <InputBox type="text">
                        First Name
                        </InputBox>

                        <InputBox type="text">
                        Last Name
                        </InputBox>

                        <InputBox type="text">
                        Country
                        </InputBox>

                        <InputBox type="text">
                        City
                        </InputBox>

                        <InputBox type="text">
                        Address
                        </InputBox>

                        <InputBox type="text">
                        Phone Number
                        </InputBox>
                        <div>
                            <Button variant="contained" color="primary" disableElevation fullWidth className={classes.signButton}>
                                Skip / Continue
                            </Button>
                        </div> 
                    </form>
                </ThemeProvider>
            </Card2>
        </>
    );
}