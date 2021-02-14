import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './common/Header';
import MainWorkspace from './workspaces/MainWorkspace';
import CoursesDescription from './courses/CoursesDescription';
import Footer from './common/Footer';
import CouresesMain from './courses/CoursesMain'
import CoursesDescriptionData from "../public/json/coursesDescriptionData.json";

import {
    Route,
    Switch,
    Redirect,
    withRouter,
    useLocation
  } from "react-router-dom"

const Main = () => {

    const state = useSelector(state => state);

    
    return (<React.Fragment>
        <Header />
            <Switch>
            <Route exact  path='/' component={MainWorkspace} />
            
             {CoursesDescriptionData.map((e)=>{
                return <Route path={e.link} component={ ()=>{return <CouresesMain courseId = {e.id}/>} }/>      
             })}   
          </Switch>
            <Footer />
        </React.Fragment>
    )


}
export default Main;