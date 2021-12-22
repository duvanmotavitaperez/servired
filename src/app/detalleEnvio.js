import DetalleEnvioContent from "./components/detalleEnvioContent";
import React, { Component } from "react";
import { render } from "react-dom";
import {NavBar} from "./components/NavBar";
import Menu from "./components/Menu";
function LayoutSidenavItems(){
    return(
        <>
            <Menu/>
            <DetalleEnvioContent/>
        </>    
    )
}
render(<NavBar/>, document.getElementById('nav'));
render(<LayoutSidenavItems/>, document.getElementById('layoutSidenav'))