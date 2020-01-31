import React, {Component, useEffect, useReducer, useState} from 'react';
import $ from 'jquery';
import EditorJs from 'react-editor-js';
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Index} from './context';
import Main from "./components/Main";
import Course from "./components/Course";
import Courses from "./components/Courses";
import Admin from "./components/Admin";
import reducer from './reducer';


function App() {


    const initialState = {
        archivedClaims: [],
        activeClaims: [],
    };

    const [store, dispatch] = useReducer(reducer, initialState);


    return (
        <BrowserRouter>
            <Index.Provider value={{dispatch, store}}>
                <Navbar/>

                <Switch>

                    <Route exact path='/courses' component={Courses}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/course/:id' component={Course}/>
                    <Route exact path='/' component={Main}/>
                </Switch>

            </Index.Provider>
        </BrowserRouter>
    );
}

export default App;
