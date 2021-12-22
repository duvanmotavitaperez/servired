import CancelarOrden from "./components/CancelarOrdenContent";
import React, { Component } from "react";
import { render } from "react-dom";
import {NavBar} from "./components/NavBar";
import Menu from "./components/Menu";
function LayoutSidenavItems(){
    return(
        <>
            <Menu/>
            <CancelarOrden/>
        </>    
    )
}
render(<NavBar/>, document.getElementById('nav'));
render(<LayoutSidenavItems/>, document.getElementById('layoutSidenav'))