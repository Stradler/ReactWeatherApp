import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo2.png';
import './App.css';

import Weather from './Weather';


const APPID = '92cc43e7e1b33caf27008515c7da5b5e';

class App extends Component {

    state = {
        weather: []
    };

    getWeather = (city) => {
        console.log(city);
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='
                    + city
                    +'&format=json&units=metric&APPID='
                    + APPID)
            .then(res => {
                const weather = res.data;
                console.log(weather);
                this.setState({ weather })
            })
            .catch(() => console.log('Request error'))
    };

    searchCityWeatherHandler = () => {
        console.log('weather');
        if (this.state.cityName) {
            this.getWeather(this.state.cityName);
        } else {
            alert('Enter city name')
        }
    };

    inputCityHandler = (event) => {
        this.setState({ cityName: event.target.value});
        console.log(event.target.value)
    };


  render() {
      if (!this.props.weather) {
          return (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1 className="App-title">Welcome to React</h1>
                  </header>
                  <br></br>
                  <Weather click = {this.searchCityWeatherHandler}
                           change = {this.inputCityHandler}
                           weather = {this.state.weather}/>
              </div>
          );
      }
  }
}

export default App;
