import Main_workspace_logo from '../../public/images/Main_workspace_logo.svg';
import { Grid, Button, Typography } from '@material-ui/core';
import PrimaryButton from "../customUIElements/PrimaryButton"
import ContactsWorkspace from './ContactsWorkspace';
import React, { useEffect, useState } from "react";
import Grow from '@material-ui/core/Grow';

const MainWorkspace = (state) => {

    const path = state && state.path
    console.log(state);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    },);

    return (
   
        <Grid container>
            <Grid item xs={6} >
                <img src={Main_workspace_logo} className="App-logo" alt="logo" className="Main_workspace__logo" />
            </Grid>
            <Grow
        in={isLoading}
        style={{ transformOrigin: '0 0 0' }}
        {...(isLoading ? { timeout: 2000 } : {})}
    >
            <Grid item container xs={6} direction="column" justify="center" alignItems="flex-start">
           
                {path === "/contacts" ? <ContactsWorkspace /> :
                    <React.Fragment>
                       
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

                }
            </Grid>
            </Grow>
        </Grid>
      
    );
}
export default MainWorkspace;
