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

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        margin: {
            margin: theme.spacing(1),
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
                    <Button variant="contained" color="primary" disableElevation fullWidth className={classes.margin}>
                        Sign In
                    </Button>
                </ThemeProvider>
            </Card2>
        </>
    );
}