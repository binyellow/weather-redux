export default function WeatherReducer(state, action) {
  if (!state) {
    return state = {weathers:[]}
  }
  switch (action.type) {
    case "ADD_NEWCITY_WEATHER":
      return {
        weathers: [action.weather]
      }
    case "INIT_WEATHER":
      return {
        weathers: [action.weather]
      }
    default:
      return state
  }
}
export const addWeather = (weather) => {
  return {type: "ADD_NEWCITY_WEATHER", weather}
}
export const initWeather = (weather) => {
  return {type: "INIT_WEATHER", weather}
}
