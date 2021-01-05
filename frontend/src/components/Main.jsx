import logo from './../logo.svg';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainActions } from '../actions/MainActions';
import Header from './common/Header';
import MainWorkspace from './workspaces/MainWorkspace';
import CoursesDescription from './courses/CoursesDescription';
import Footer from './common/Footer';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Grid } from '@material-ui/core';

const Main = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleClick = async () => {
        await dispatch(MainActions.fetchUserInfo());
        console.log(state)
    }
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Header />
            <MainWorkspace />
            <CoursesDescription />
            <Footer/>
        </Router>



    )


}
export default Main;