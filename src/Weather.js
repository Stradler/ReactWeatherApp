import React from 'react';


const weather = (props) => {

    if (props.weather.main) {
        console.log(props.weather);
        return (
            <div>
                <input onChange={props.change}/>
                <button onClick={props.click}>Get weather</button>
                <p>City: {props.weather.name}</p>
                <p>Temperature: {props.weather.main.temp}</p>
                <p>Pressure: {props.weather.main.pressure}</p>
                <p>Humidity: {props.weather.main.humidity}</p>
                <img alt={'Weather icon'} src= {'http://openweathermap.org/img/w/'
                + props.weather.weather[0].icon
                + '.png'
                }/>
            </div>
        )
    }

    return (
        <div>
            <input onChange={props.change}/>
            <button onClick={props.click}>Get weather</button>
        </div>
    )
};

export default weather;