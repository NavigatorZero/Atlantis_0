import { Grid, Box } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import social_full from '../../public/images/social_full.svg';
import PrimaryButton from "../customUIElements/PrimaryButton";
import Grow from '@material-ui/core/Grow';
import Loader from 'react-loaders'
import Delay from 'react-delay-render';


const ContactsWorkspace = () => {

    const [checked, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    },[]);

    return (
          <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})}
        >
        <Grid xs={6} container direction="column" spacing={3}
            justify="center"
            alignItems="flex-start">
            <Grid item className="header__logo__main">
                Контакты
                <Box className="header__logo__main">  8 (666) 666-66-66 </Box>
                <Box>kapitalbuh@gmail.com </Box>
            </Grid>
            <Grid item>
                <Box className="header__logo__main">
                    Наши социальные сети:
                </Box>
                <img src={social_full} className="App-logo" alt="logo" className="Main_workspace__logo" />
            </Grid>
            <Grid item>
                <PrimaryButton placeholder={{ color: "black", text: "Заказать звонок" }} width="600px" />
            </Grid>
        </Grid>
        </Grow>
    );
}


   export default ContactsWorkspace;