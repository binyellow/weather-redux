import React,{Component} from 'react';
import Search from './Search.js';
import WeatherContainder from './WeatherContainder.js';
require("../styles/APP.less")
class APP extends Component{
  render(){
    return(
      <div id="searchWrap">
        <Search/>
        <WeatherContainder/>
      </div>
    )
  }
}
export default APP
