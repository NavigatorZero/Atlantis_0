
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsEmpty, Map } from "react-lodash"
import { Typography, Grid, Box,Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const Header = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const leftMenu = [
        "Контакты",
        "Консультация",
    ];

    const middleMenu = ["КАПИТАЛ"]
    const rightMenu = [
        "Регистрция",
        "Войти"
    ];

    return (
        <Container>
        <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
        
        <Grid
        container   xs="5" >
                    {leftMenu.map(i => (
                        <Grid item  >
                            <Box p={1} >
                                {i}
                            </Box>
                        </Grid>
                    ))}
              </Grid> 
              <Grid
        container   xs="2" >
                    {middleMenu.map(i => (
                        <Grid item  >
                            <Box p={1} >
                                {i}
                            </Box>
                        </Grid>
                    ))}
         </Grid>
         <Grid
        container   xs="5" justify="flex-end" >
                    {rightMenu.map(i => (
                        <Grid item  >
                            <Box p={1} >
                                {i}
                            </Box>
                        </Grid>
                    ))}
               </Grid>
           
        </Grid>
        </Container>
    )
}
export default Header;