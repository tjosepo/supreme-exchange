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

export default function SignInPage(){
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
                                Username
                            </InputBox>
                            <InputBox type="password">
                                Password
                            </InputBox>
                        <div>
                            <Button variant="contained" color="primary" disableElevation fullWidth className={classes.signButton}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                    <p className="text">
                        Don't have an account? <a href="https://www.w3schools.com/tags/tag_br.asp">Sign Up</a>
                    </p>
                </ThemeProvider>
            </Card2>
        </>
    );
}