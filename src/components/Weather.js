import React,{Component} from 'react';
require("../styles/Weather.less");

class Weather extends Component{
  constructor(){
    super()
    this.state={
      imgSrc:""
    }
  }
  componentWillMount(){
    switch(this.props.data.type){
      case "晴":
        this.setState({imgSrc:"./imgs/sun.png"});
        console.log("晴");
        break;
      case "阴":
        this.setState({imgSrc:"./imgs/yin.png"});
        console.log("阴");
        break;
      case "多云":
        this.setState({imgSrc:"./imgs/yin.png"});
        console.log("多云");
        break;
      case "小雨":
        this.setState({imgSrc:"./imgs/small.png"});
        console.log("小雨");
        break;
      case "雷阵雨":
        this.setState({imgSrc:"./imgs/Thunderstorms.png"});
        console.log("雷阵雨");
        break;
      case "中雨":
        this.setState({imgSrc:"./imgs/medium.png"});
        console.log("中雨");
        break;
      case "阵雨":
        this.setState({imgSrc:"./imgs/large.png"});
        console.log("阵雨");
        break;
      default:
        this.setState({imgSrc:"./imgs/sun.png"});
        console.log("晴");
        break;
    }
  }
  componentWillReceiveProps(nextProps){
    switch(nextProps.data.type){
      case "晴":
        this.setState({imgSrc:"./imgs/sun.png"});
        console.log("晴");
        break;
      case "阴":
        this.setState({imgSrc:"./imgs/yin.png"});
        console.log("阴");
        break;
      case "多云":
        this.setState({imgSrc:"./imgs/yin.png"});
        console.log("多云");
        break;
      case "小雨":
        this.setState({imgSrc:"./imgs/small.png"});
        console.log("小雨");
        break;
      case "雷阵雨":
        this.setState({imgSrc:"./imgs/Thunderstorms.png"});
        console.log("雷阵雨");
        break;
      case "阵雨":
        this.setState({imgSrc:"./imgs/large.png"});
        console.log("阵雨");
        break;
      case "中雨":
        this.setState({imgSrc:"./imgs/medium.png"});
        console.log("中雨");
        break;
      default:
        this.setState({imgSrc:"./imgs/sun.png"});
        console.log("晴");
        break;
    }
  }
  render(){
    // console.log(this.props.data);
    return(
      <li className="weather_wrap">
        <div>{this.props.data.date}</div>
        <img src={this.state.imgSrc} className="weather_img"></img>
        <div>{this.props.data.type}</div>
        <div>{this.props.data.low+"~"+this.props.data.high}</div>
      </li>
    )
  }
}
export default Weather
