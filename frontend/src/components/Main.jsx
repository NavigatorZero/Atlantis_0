import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainActions } from '../actions/MainActions';
import Header from './common/Header';
import MainWorkspace from './workspaces/MainWorkspace';
import CoursesDescription from './courses/CoursesDescription';
import Footer from './common/Footer';
import { useLocation } from 'react-router-dom'

const Main = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const location = useLocation();
    const [path, setPath] = useState(null);
    const handleClick = async () => {
        await dispatch(MainActions.fetchUserInfo());
        console.log(state)
    }
    useEffect(() => {
        setPath(location.pathname);

    });

    console.log(path);
    return (<div>
        <Header />
        <MainWorkspace path={path} />
        <CoursesDescription />
        <Footer />
    </div>
    )


}
export default Main;