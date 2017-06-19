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
        <div style={{fontSize:"13px",color:"green",clear:"both"}}>
          {
            this.props.weathers.map(weather=>
              <span key="1">{weather.city+" : "+weather.ganmao}</span>
            )
          }
        </div>
      </div>
    )
  }
}
export default WeatherList
