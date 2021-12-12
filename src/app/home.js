
import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import HomeUserContent from "./components/HomeUserContent";
render(<NavBar/>, document.getElementById('nav'));
render(<Menu/>, document.getElementById('menu'));
render(<HomeUserContent/>, document.getElementById('homeusercontent'));


