import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import ProgramarEnvio from "./components/ProgramarEnvio";
render(<NavBar/>, document.getElementById('nav'));
render(<Menu/>, document.getElementById('menu'));
render(<ProgramarEnvio/>, document.getElementById('homeusercontent'));