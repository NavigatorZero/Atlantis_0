import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './common/Header';
import MainWorkspace from './workspaces/MainWorkspace';
import CoursesDescription from './courses/CoursesDescription';
import Footer from './common/Footer';
import { useLocation } from 'react-router-dom'

const Main = () => {

    const state = useSelector(state => state);
    const location = useLocation();
    const [path, setPath] = useState(null);
    return (<React.Fragment>
        <Header />
        <MainWorkspace/>
      
        <CoursesDescription />
        <Footer />
        </React.Fragment>
    )


}
export default Main;