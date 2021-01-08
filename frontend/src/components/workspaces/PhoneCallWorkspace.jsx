import React, { useEffect, useState } from "react";
import { Grid, Button, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';

import phoneCallFields from "../../public/json/phoneCallFields.json";
import Grow from '@material-ui/core/Grow';


const PhoneCallWorkspace = () => {
    const CssTextField = withStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                width: "615px",
                height: "109px",
                '& fieldset': {
                    borderColor: '#FFB300',
                    borderWidth: 3,
                },
                '&:hover fieldset': {
                    borderColor: '#12005E',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#12005E',
                },
            },
        },
    })(TextField);


    const useStyles = makeStyles({
        fontFamily: "Roboto",
        fontStyle: "normal",
        root: {
            width: "650px",
            height: "676px"
        },
        header: {
            backgroundColor: "#FFE54C",
            color: "black",
        },
        headerTitle: {
            fontSize: "55px",
            fontWeight: "300",
        },
        action: {
            fontSize: "30px",
            lineHeight: "35px",
            color: "#000000",
            "&:hover": {
                background: "none",
                color: "#C68400",
            }
        },
        labelRoot: {
            fontWeight: "300",
            fontSize: 45,
            lineHeight: "64px",
            "&$labelFocused": {
                color: "purple",
                lineHeight: "0px",
                fontSize: 15,
            }
        },
        labelFocused: {},
        exit:{
            "&:hover": {
                boxShadow: "0px 2px 4px #C68400"
            }
        }
    });

    const classes = useStyles();


    return (
        <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...({ timeout: 1000 })}
    >
        <Card className={classes.root}>
            <CardHeader className={classes.header} classes={{
                title: classes.headerTitle
            }} title="Заказать звонок" action={
                <IconButton aria-label="settings">
                    <CloseIcon  className={classes.exit}/>
                </IconButton>
            } />
            <CardContent>
                <Grid container spacing={7} direction="column"
                    alignItems="center" justify="flex-start" >
                    {phoneCallFields.map((item, key) => {
                        return (
                            <Grid item>
                                <CssTextField label={item.label} variant="outlined" id={key} InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }} />
                            </Grid>
                        );
                    })}
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify="flex-end">
                    <Button className={classes.action}>Отправить</Button>
                </Grid>
            </CardActions>
        </Card>
</Grow>
    );
}
export default PhoneCallWorkspace;