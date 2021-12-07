
import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
render(<NavBar/>, document.getElementById('nav'));
render(<Menu/>, document.getElementById('menu'));


