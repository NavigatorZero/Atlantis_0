import React, { useEffect, useState } from "react";
import DescriptionColumn from "../customUIElements/DescriptionColumn";
import { Grid, Button, Typography, Box } from '@material-ui/core';
import CoursesDescriptionData from "../../public/json/coursesDescriptionData.json";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const CoursesDescription = () => {

    return (
        <Grid container justify="center" >
            <Grid item container justify="center">
                <Box className="introduction" mt={18.8} mb={6.3}>
                    Мы предоставляем обучение в трёх направлениях
                    </Box>
            </Grid>
            <Grid item container xs={12} direction="row"
                justify="center"
                alignItems="center" spacing={10}>
                {CoursesDescriptionData.map(item => {
                    return (
                        <Grid item >
                            <DescriptionColumn headerColor={item.headerColor} cardTitle={item.title} cardBody={item.description} />
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
}
export default CoursesDescription;
