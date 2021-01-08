import { Grid, Button, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';


const PrimaryButton = ({
    link = null,
    backgroundColor = "#FFE54C",
    placeholder = { color: "#000000", text: "Placeholder" },
    width = "410px",
    height = "120px",
    onChange = {}
}) => {

    const useStyles = makeStyles({
        button: {
            backgroundColor: backgroundColor,
            borderRadius: "100px",
            border: 0,
            color: placeholder.color,
            height: height,
            width: width,
            padding: "0 30px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "55px",
            lineHeight: "64px",
            "&:hover": {
                backgroundColor: backgroundColor,
                boxShadow: "0px 4px 4px #FFB300;"
            }
        },
    });
    const classes = useStyles();
    const button = <Button className={classes.button} onClick={onChange}>{placeholder.text}</Button>
    return (
        link ? <Link to={link} spy={true} smooth={true}>{button}</Link> : button 
    );

}

export default PrimaryButton;