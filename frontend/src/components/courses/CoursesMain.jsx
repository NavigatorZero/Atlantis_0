import { Grid, Button, Typography } from '@material-ui/core';
import { MainActions } from '../../actions/MainActions';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import PrimaryButton from "../customUIElements/PrimaryButton";
import computer from '../../public/images/computer.svg';

const CouresesMain = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.course);

    useEffect(() => {
        if (!state) {
            dispatch(MainActions.getCourse(props.courseId))
        }
    }, []);

    return (
      
        <Grid container xs={12} spacing={3} >
            <Grid item xs={12}>
                <Typography variant="h3">
                    {state && state.name || 'blya'}

                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h5">
                {state && state.shortDescription || 'blya'}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={computer} className="App-logo" alt="logo" className="Main_workspace__logo" />
            </Grid>
          
            <Grid item xs={12} align = "center">
            ПРОХОЖДЕНИЕ КУРСА ОСУЩЕТСВЛЯЕТСЯ
В ОНЛАЙН ФОРМАТЕ
            </Grid>
            <Grid item xs={12} align = "center" >
                <PrimaryButton  />
            </Grid>
        </Grid>
     
    )
}
export default CouresesMain;