import logo from './../logo.svg';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainActions } from '../actions/MainActions'
import Header from './common/Header';

const Main = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClick =  async () => {
       await dispatch(MainActions.fetchUserInfo());
       console.log(state)
    }

    return (
        <div className="App">
             <Header/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
                <p> Hello World </p>
                <button onClick={handleClick}>

                    TEEEST
        </button>
            </header>
        </div>

    )


}
export default Main;