import { Grid, Button, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';





const PrimaryButton = ({ backgroundColor = "#FFE54C", placeholder = { color: "#000000", text: "Placeholder" }, width = "410px", height = "120px", onChange }) => {

    const useStyles = makeStyles({
        button: {
            backgroundColor: backgroundColor,
            borderRadius: "100px",
            border: 0,
            color: placeholder.color,
            height: height,
            width: width,
            onChange: onChange ? onChange : () => { },
            padding: "0 30px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "55px",
            lineHeight: "64px",
            "&:hover": {
                backgroundColor: "#f5dc49",
                boxShadow: "0px 4px 4px #FFB300;"
            }
        },
    });
    const classes = useStyles();

    return (
        <Button className={classes.button} >
            {placeholder.text}
        </Button>
    );

}

export default PrimaryButton;