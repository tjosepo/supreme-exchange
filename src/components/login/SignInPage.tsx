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
import './style/SignInPage.css';
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

export default function SignInPage(){
    const classes = useStyles();

    return(
        <>
            <Header>
                Supreme Exchange
            </Header>
            <Card2>
                <ThemeProvider theme={theme}>
                    <InputBox type="email">
                    Email Address
                    </InputBox>
                    <br/>
                    <br/>
                    <InputBox type="text">
                    Username
                    </InputBox>
                    <br/>
                    <br/>
                    <InputBox type="password">
                    Password
                    </InputBox>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary" disableElevation fullWidth className={classes.signButton}>
                        Sign In
                    </Button>
                    <br/><br/>
                    <p className="text">
                        Don't have an account? <a href="https://www.w3schools.com/tags/tag_br.asp">Sign Up</a>
                    </p>
                    
                </ThemeProvider>
            </Card2>
        </>
    );
}