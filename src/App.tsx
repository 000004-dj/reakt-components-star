import React, {useState} from 'react';
import './App.css';
// import {OnOff} from "./Components/OnOff/OnOff";
import {Accordion} from "./Components/Accardion/Accordion";
import {UnControlledAccordion} from "./Components/UnControledAccardion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating"
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let[on, setOn] = useState(false)

    return (
        <div>
            <Accordion  items={[{title: "Sam", value: 1}, {title: "Alena", value: 2}, {title: "Lol", value: 3}]} title = {"Menu"}   onClick={() => setCollapsed(!collapsed)} collapsed={collapsed} />
            <UnControlledAccordion title = {"Menu"}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <UnControlledRating/>
            {/*<OnOff setOn={setOn} on={on} />*/}
            <UncontrolledOnOff setOn={setOn}/> {on.toString()}
        </div>

    );
}

export default App;


