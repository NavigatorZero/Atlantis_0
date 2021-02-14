import Main_workspace_logo from '../../public/images/Main_workspace_logo.svg';
import { Grid, Button, Typography } from '@material-ui/core';
import PrimaryButton from "../customUIElements/PrimaryButton"
import ContactsWorkspace from './ContactsWorkspace';
import React, { useEffect, useState, useRef } from "react";
import Grow from '@material-ui/core/Grow';
import { useDispatch, useSelector } from "react-redux";
import PhoneCallWorkspace from "./PhoneCallWorkspace";
import CoursesDescription from '../courses/CoursesDescription';


const MainWorkspace = () => {

    const state = useSelector(state => state);
    const [isLoading, setIsLoading] = useState(true);
 

    const getWorkspace = (workspaceName) => {
        
        switch (workspaceName) {
            case "contacts":
                return <ContactsWorkspace />;
            case "consult":
                return <PhoneCallWorkspace />;
            default:
                return defaultWorkspace;
        }
    }


    const defaultWorkspace = <React.Fragment>
        <Grid item className="Main_workspace__slogan">
            КАПИТАЛ - БУХГАЛТЕРСКАЯ ШКОЛА БУДУЩЕГО
        </Grid>
        <Grid item className="Main_workspace__subslogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
        </Grid>
        <Grid item>
            <PrimaryButton link="about" placeholder={{ color: "black", text: "Начать" }} />
        </Grid>
    </React.Fragment>

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6} >
                    <img src={Main_workspace_logo} className="App-logo" alt="logo" className="Main_workspace__logo" />
                </Grid>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...({ timeout: 1000 })}
                >
                    <Grid item container xs={6} direction="column" justify="center" alignItems="flex-start">
                        {getWorkspace(state.location)}
                    </Grid>
                </Grow>
            </Grid>
            <CoursesDescription />
        </React.Fragment>
    );
}
export default MainWorkspace;
