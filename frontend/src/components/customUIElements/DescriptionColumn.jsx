import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import PrimaryButton from "../customUIElements/PrimaryButton";
import { Grid } from '@material-ui/core';

const DescriptionColumn = ({ headerColor = "#4A148C", cardTitle = "placeholder", subheader = null, cardBody = "cardBody" }) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            maxWidth: 420,
        },
        header: {
            backgroundColor: headerColor,
            color: "white",

        },
        headerTitle: {
            fontSize: "40px",
            maxWidth: "250px"
        },

        body: {
            fontSize: "36px"
        },
        pos: {
            marginBottom: 12,
        },
        action: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "30px",
            lineHeight: "35px",
            color: "#000000",
            "&:hover": {
                color: "#C68400",
            }
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header} classes={{
                title: classes.headerTitle
            }} title={cardTitle} subheader={subheader} />
            <CardContent className={classes.body}>
                {cardBody}
            </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Button className={classes.action}>Узнать Больше</Button>
                </Grid>
            </CardActions>
        </Card>
    );
}
export default DescriptionColumn;