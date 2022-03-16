import React, {Component} from "react";
import Form from "./components/Form";
import Wheather from "./components/Wheather";

const api_key = "204e13d0f6dda13f88c54d275202f094";
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWheather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}%2Cegypt&appid=${api_key}`);
    const data = await api.json();

    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    }else{
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter data'
      })
    }
  };



  render(){
    return(
     <div className="wrapper">
      <div className="form-container">
      <Form getWheather={this.getWheather}/>
      <Wheather
      temperature = {this.state.temperature}
      city = {this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      description = {this.state.description}
      error = {this.state.error}
      />
      </div>
     </div>
    );
  };
};

export default App;
