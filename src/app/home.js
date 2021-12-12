
import React, { Component } from "react";
import { render } from "react-dom";
import {NavBar} from "./components/NavBar";
import Menu from "./components/Menu";
import HomeUserContent from "./components/HomeUserContent";

function LayoutSidenavItems(){
    return(
        <>
            <Menu/>
            <HomeUserContent/>
        </>    
    )
}
render(<NavBar/>, document.getElementById('nav'));
render(<LayoutSidenavItems/>, document.getElementById('layoutSidenav'));


