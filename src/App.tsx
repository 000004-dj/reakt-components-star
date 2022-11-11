import React from 'react';
import './App.css';
import Rating from "./Components/Rating";
import Accordion from "./Components/Accardion/Accordion";


function App() {
    console.log('App rendering');
    return (
        <div>
            <Rating velue = {3} />
            <Accordion title = {"menu"} collapsed = {false}/>
            <Accordion title = {"Users"} collapsed = {true}/>
            <Rating velue = {4}/>
        </div>

    );
}

export default App;
