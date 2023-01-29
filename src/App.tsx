import React from 'react';
import './App.css';
import {Clock} from "./Components/Clock/Clock";


function App() {
    return (
        <div>
            {/*<Accordion  items={[{title: "Sam", value: 1}, {title: "Alena", value: 2}, {title: "Lol", value: 3}]} title = {"Menu"}   onClick={() => setCollapsed(!collapsed)} collapsed={collapsed} />*/}
            {/*<UnControlledAccordion title = {"Menu"}/>*/}
            {/*<Rating value={ratingValue} onClick = {setRatingValue}/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UncontrolledOnOff setOn={setOn}/> {on.toString()}*/}
            <Clock/>
        </div>
    );
}

export default App;


