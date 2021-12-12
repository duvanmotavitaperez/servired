import React, { Component } from "react";
import { render } from "react-dom";
import {NavBar} from "./components/NavBar";
import Menu from "./components/Menu";
import ProgramarEnvio from "./components/ProgramarEnvio";
function LayoutSidenavItems(){
    return(
        <>
            <Menu/>
            <ProgramarEnvio/>
        </>    
    )
}
render(<NavBar/>, document.getElementById('nav'));
render(<LayoutSidenavItems/>, document.getElementById('layoutSidenav'))
