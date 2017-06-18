import React, {Component} from 'react';
import Weather from './Weather.js';
class WeatherList extends Component {
  render() {
    return (
      <div>
      {this.props.weathers.map(weather=>
          weather.details.map((data,i)=>{
              // console.log(data)
              return <Weather data={data}/>
          })
      )}
      </div>
    )
  }
}
export default WeatherList
