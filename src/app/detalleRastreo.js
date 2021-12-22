

import React, { Component } from "react";
import { render } from "react-dom";
import {NavBar} from "./components/NavBar";
import Menu from "./components/Menu";
import DetalleRastreoContent from "./components/detalleRastreoContent";
function LayoutSidenavItems(){
    return(
        <>
            <Menu/>
            <DetalleRastreoContent/>
        </>    
    )
}
render(<NavBar/>, document.getElementById('nav'));
render(<LayoutSidenavItems/>, document.getElementById('layoutSidenav'))