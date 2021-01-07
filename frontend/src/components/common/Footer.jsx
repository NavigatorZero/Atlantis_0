import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsEmpty, Map } from "react-lodash"
import { AppBar, Toolbar, Typography, makeStyles, Button, MenuItem, Box, Link } from "@material-ui/core";
import { Paper } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import social_full from '../../public/images/social_full.svg';

const Footer = () => {

    const menuColumn1 = [
        {
            label: "Заказать звонок",
            link: "/phone"
        },
        {
            label: "Консультация",
            link: "/phone"
        },
        {
            label: "Оплата",
            link: "/phone"
        },
        {
            label: "Условия оферты",
            link: "/phone"
        },
    ];

    const menuColumn2 = [
        {
            label: "Условия обработки данных",
            link: "/phone"
        },
        {
            label: "Наши партнеры",
            link: "/phone"
        },
        {
            label: "Наша команда",
            link: "/phone"
        },
        {
            label: "Ответы на вопросы",
            link: "/phone"
        },
    ];

    return (
        <Box component="footer" mt={25} className="footer">
            <Grid container xs={12} spacing={8}   justify="center" alignItems="center">
                <Grid item xs={6} container direction="column" spacing={3}
                    justify="center"
                    alignItems="center">
                    <Grid item className="header__logo__main">
                        КАПИТАЛ
                    </Grid>
                    <Grid item>
                        <img src={social_full} className="App-logo" alt="logo" className="Main_workspace__logo" />
                    </Grid>
                    <Grid item className="header__logo__sub">
                        8 (666) 666-66-66
                    </Grid>
                </Grid>

                <Grid item xs={3} container direction="column" spacing={3} >
                    {menuColumn1.map(item => {
                        return (
                            <Grid item className="footer__link">
                                <Link color="inherit" href="#">
                                {item.label}
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid item xs={3} container direction="column" spacing={3} >
                    {menuColumn2.map(item => {
                        return (
                            <Grid item  className="footer__link">
                                <Link color="inherit"  href="#">
                                {item.label}
                                </Link>
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </Grid>
        </Box>
    );
}
export default Footer;