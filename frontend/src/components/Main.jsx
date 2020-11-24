import logo from './../logo.svg';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainActions } from '../actions/MainActions'


const Main = () => {
    const state = useSelector(state => state)
    useDispatch(MainActions.fetchUserInfo());

    const handleClick = () => {
        console.log(state)
    }

    return (
        <div className="App">
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