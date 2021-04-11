import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        marginTop: '15px',
        marginBottom: '15px',
        borderRadius: '0px'
    },
    content: {
        textAlign: 'left'
    },
    header: {
        textAlign: 'left',
        opacity: 0.7,
    },
    media: {
        height: 300,
    },
    priceText: {
        color: '#81C788'
    },
    detailHeader: {
        fontWeight: 'bolder',
        textAlign: 'left'
    },
    detail: {
        textAlign: 'right'
    },
}));

export default function ListingBox(props) {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardMedia
                className={classes.media}
                image={props.image}
                title='toy image'
            />
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography className={classes.priceText} gutterBottom variant="body2" color="textSecondary" component="p">
                    {`$${props.price}`}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                    {props.subtitle}
                </Typography>
                <Typography variant="h5" component="h2">
                    Details
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography className={classes.detailHeader} variant="body2" component="h2">
                            Condition
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.detail} variant="body2" component="h2">
                            {props.condition}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.detailHeader} variant="body2" component="h2">
                            Pickup Policy
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.detail} variant="body2" component="h2">
                            {props.pickup}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.detailHeader} variant="body2" component="h2">
                            Negotiable
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes.detail} variant="body2" component="h2">
                            {props.negotiable ? 'Yes' : 'No'}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
