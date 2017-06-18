import CityReducer from './Citys.js';
import WeatherReducer from './Weathers.js';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  WeatherReducer,
  CityReducer
})
export default reducer
