export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";
export const INIT_CITYS = "INIT_CITYS";
export default function CityReducer(state,action){
  if(!state){
    state={citys:[]}
  }
  switch(action.type){
    case ADD_CITY:
      return {citys:[...state.citys,action.city]}
    case DELETE_CITY:
      return {citys:[
        ...state.citys.slice(0,action.cityIndex),
        ...state.citys.slice(action.cityIndex+1)
      ]}
    case INIT_CITYS:
      return {citys:action.citys}
    default:
      return state
  }
}
export const addCity=(city)=>{
  return {type:ADD_CITY,city}
}
export const deleteCity=(cityIndex)=>{
  return {type:DELETE_CITY,cityIndex}
}
export const initCitys=(citys)=>{
  return {type:INIT_CITYS,citys}
}
