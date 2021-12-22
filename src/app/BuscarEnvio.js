import React from "react";
import { render } from "react-dom";
import {NavBar} from "./components/NavBar";
import Menu from "./components/Menu";
import BuscarEnviocontent from "./components/BuscarEnviocontent";
function LayoutSidenavItems(){
    return(
        <>
            <Menu/>
            <BuscarEnviocontent/>
        </>
    )
}
render(<NavBar/>, document.getElementById('nav'));
render(<LayoutSidenavItems/>, document.getElementById('layoutSidenav'));
