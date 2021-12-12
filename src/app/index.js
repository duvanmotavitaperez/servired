import React from "react";
import { render } from "react-dom";
import SlideBar from   "./components/SlideBar";
import {NavBar} from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
let textLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat praesentium eveniet consectetur dolorum necessitatibus? Asperiores, eveniet a! Numquam reprehenderit, cupiditate iste nostrum cum nemo maxime mollitia ratione reiciendis autem."
render(<NavBar/>, document.getElementById('nav'));
render(<SlideBar/>, document.getElementById('root'));
function MainContent(){
    return(
        <>
            <Card title="Title" text={textLorem}/>
            <Card title="Title" text={textLorem}/>
            <Card title="Title" text={textLorem}/>
        </>
        
    )
}

render(<MainContent/>, document.querySelector('main'));
render(<Footer/>, document.querySelector('footer'));



