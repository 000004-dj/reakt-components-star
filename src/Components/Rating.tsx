import React from 'react';
import Star from './Star'

function Rating(props: any) {
    console.log('Rating rendering');
    if (props.velue === 1){
        return (<div>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>)
    }
    if (props.velue === 2){
        return (<div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>)
    }
    if (props.velue === 3){
        return (<div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>)
    }
    if (props.velue === 4){
        return (<div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
        </div>)
    }
    if (props.velue === 5){
        return (<div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
        </div>)
    }

    return (
        <div>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
            <Star selected = {false}/>
        </div>
    );
}
export default Rating