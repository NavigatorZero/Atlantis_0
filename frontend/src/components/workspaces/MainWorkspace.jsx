import Main_workspace_logo from '../../public/images/Main_workspace_logo.svg';
import {Grid, Button, Typography} from '@material-ui/core';
import PrimaryButton from "../customUIElements/PrimaryButton"
const MainWorkspace = () => {

    return (
        <Grid container>
            <Grid item  xs={6} >
                <img src={Main_workspace_logo} className="App-logo" alt="logo"  className="Main_workspace__logo" />
            </Grid>
            <Grid item container xs={6}  direction="column" justify="center" alignItems="flex-start">
                <Grid item className="Main_workspace__slogan">
                КАПИТАЛ - БУХГАЛТЕРСКАЯ ШКОЛА БУДУЩЕГО 
                </Grid>
                <Grid item className="Main_workspace__subslogan">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. 
                </Grid>
                <Grid item>
                    <PrimaryButton placeholder={{color:"black", text:"Начать"}}/>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default MainWorkspace;
