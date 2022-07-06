import React from "react";

export default function Counters(props){
    let place1 
    let place2
    let place3 
    let place4 
    let place5 
    let place6
        if(props.number < 10 ){
            place1 = props.number
        }   else if (props.number < 100){                                 
            const places = props.number.toString().split("")            
            place1 = places[1];
            place2 = places[0];
        }   else if (props.number < 1000){
            const places = props.number.toString().split("")            
            place1 = places[2];                                        
            place2 = places[1];
            place3 = places[0];
        }   else if (props.number < 10000){
            const places = props.number.toString().split("")            
            place1 = places[3];                                        
            place2 = places[2];
            place3 = places[1];
            place4 = places[0];
        }   else if (props.number < 100000){
            const places = props.number.toString().split("")            
            place1 = places[4];                                        
            place2 = places[3];
            place3 = places[2];
            place4 = places[1];
            place5 = places[0];
        }   else if (props.number < 1000000){
            const places = props.number.toString().split("")            
            place1 = places[5];                                        
            place2 = places[4];
            place3 = places[3];
            place4 = places[2];
            place5 = places[1];
            place6 = places[0];
}

 	return <div className="container">
    <h1>SIMPLE COUNTER CLOCK</h1>
    <div className="container-lg row">
        <div className="col box">
        <h2 class="fa-regular fa-clock"></h2></div>
        <div className="col box">
        <h2>{place6 || 0}</h2></div>
        <div className="col box">
        <h2>{place5 || 0}</h2></div>
        <div className="col box">
        <h2>{place4 || 0}</h2></div>
        <div className="col box">
        <h2>{place3 || 0}</h2></div>
        <div className="col box">
        <h2>{place2 || 0}</h2></div>
        <div className="col box">
        <h2>{place1 || 0}</h2></div>
    </div>
</div>
}