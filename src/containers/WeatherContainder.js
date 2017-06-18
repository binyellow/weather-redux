import React,{Component} from 'react';
import {connect} from 'react-redux';
import WeatherList from "../components/WeatherList.js"

class WeatherContainder extends Component{
  render(){
    return(
      <WeatherList weathers={this.props.weathers}/>
    )
  }
}
const mapStateToProps=(state)=>{
  console.log("container props:weathers"+state.WeatherReducer.weathers)
  return{weathers:state.WeatherReducer.weathers}
}
const mapDispatchToProps=(dispatch)=>{
  return{

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(WeatherContainder)
