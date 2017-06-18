import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addCity,deleteCity,initCitys} from '../reducers/Citys.js';
import {addWeather,initWeather} from '../reducers/Weathers.js';
import Search from '../components/Search.js'
class SearchContainder extends Component{
  componentWillMount(){//从storage取出并设置到state
    this._loadCitys()
    // this._loadWeathers()
  }
  _loadCitys(){
    let localcitys = localStorage.getItem("localcitys");
    localcitys = localcitys?JSON.parse(localcitys):[];
    this.props.initCitys(localcitys);
  }
  // _loadWeathers(){
  //   // var stateWeathers = this.props.weathers;
  //   // console.log(stateWeathers);
  //   let weathers = localStorage.getItem("weathers");
  //   weathers = weathers?JSON.parse(weathers):[];
  //   // console.log(weathers);
  //   this.props.initWeather(weathers);
  // }
  _saveCity(localcitys) {
    let oldcitys = localStorage.getItem("localcitys")?localStorage.getItem("localcitys"):"";
    // console.log(oldcitys+"-"+localcitys);
    if(oldcitys.indexOf(localcitys)>=0){
      return alert("已经存在该城市");
    }
    const {citys} = this.props;
    let newcitys = [...citys,localcitys];
    newcitys = JSON.stringify(newcitys);
    // console.log(newcitys);
    localStorage.setItem('localcitys', newcitys);//存到storage每次只能从state中重新取
    if(this.props.addCity){
        this.props.addCity(localcitys);//存到state不用管 reducer里面本来就存了之前的
    }
  }
  _saveWeather(city,details,curTem){
    this.props.addWeather({
      city:city,
      details:details,
      wendu:curTem
    })
    localStorage.setItem('weathers', JSON.stringify({city:city,details:details,wendu:curTem}));
    // console.log(this.props.weathers);
  }
  handSubmit(textInput){
    var that = this;
    if(!textInput.trim())
      return alert("请输入城市");
    fetch("http://wthrcdn.etouch.cn/weather_mini?city="+textInput).then(function(response) {
      if (response.status !== 200) {
        console.log("存在一个问题，状态码为：" + response.status);
        return;
      }
      //检查响应文本
      response.json().then(function(data) {
        // console.log(data.data);
        that._saveWeather(data.data.city,data.data.forecast,data.data.wendu);
        that._saveCity(data.data.city);
      });
    }).catch(function(err) {
      console.log("Fetch错误:" + err);
    });
  }
  handDelete(index){
    // console.log(index);
    const { citys } = this.props
    const newCitys = [
      ...citys.slice(0, index),
      ...citys.slice(index + 1)
    ]
    localStorage.setItem('localcitys', JSON.stringify(newCitys))
    this.props.deleteCity(index);
  }
  handClick(text){
    var that = this;
    if(!text.trim())
      return alert("请输入城市");
    // console.log(text);
    fetch("http://wthrcdn.etouch.cn/weather_mini?city="+text).then(function(response) {
      if (response.status !== 200) {
        console.log("存在一个问题，状态码为：" + response.status);
        return;
      }
      //检查响应文本
      response.json().then(function(data) {
        console.log(data.data);
        that._saveWeather(data.data.city,data.data.forecast,data.data.wendu);
      });
    }).catch(function(err) {
      console.log("Fetch错误:" + err);
    });
  }
  render(){
    return(
      <Search onhandSubmit={this.handSubmit.bind(this)} citys={this.props.citys}
      onhandDelete={this.handDelete.bind(this)}
      onhandClick={this.handClick.bind(this)}/>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    citys:state.CityReducer.citys,
    weathers:state.WeatherReducer.weathers
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    addCity:(city)=>{
      dispatch(addCity(city))
    },
    deleteCity:(index)=>{
      dispatch(deleteCity(index))
    },
    initCitys:(citys)=>{
      dispatch(initCitys(citys))
    },
    addWeather:(weather)=>{
      dispatch(addWeather(weather))
    },
    initWeather:(weather)=>{
      dispatch(initWeather(weather))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchContainder)
