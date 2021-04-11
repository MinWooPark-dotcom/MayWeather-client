import { createAction, handleActions } from 'redux-actions'

// action

const GET_AIR_QUALITY_INDEX = 'landingPresentWeather/GET_AIR_QUALITY_INDEX';
const GET_FEEL_LIKE_TEMP = 'landingPresentWeather/GET_FELL_LIKE_TEMP';
const GET_HUMIDITY = 'landingPresentWeather/GET_HUMIDITY'
const GET_TEMP = 'landingPresentWeather/GET_TEMP';
const GET_TEMP_MAX = 'landingPresentWeather/GET_TEMP_MAX'
const GET_TEMP_MIN = 'landingPresentWeather/GET_TEMP_MIN'
const GET_WEATHER = 'landingPresentWeather/GET_WEATHER'
const GET_WEATHER_ICON = 'landingPresentWeather/GET_WEATHER_ICON'
const GET_WIND_DEG = 'landingPresentWeather/GET_WIND_DEG'
const GET_WIND_SPEED = 'landingPresentWeather/GET_WIND_SPEED'
const GET_TEMP_DIFFERENCE_YESTERDAY = 'landingPresentWeather/GET_TEMP_DIFFERENCE_YESTERDAY'

// action creator

export const getAirQualityIndex = createAction(GET_AIR_QUALITY_INDEX)
export const getFeelLikeTemp = createAction(GET_FEEL_LIKE_TEMP)
export const getHumidity = createAction(GET_HUMIDITY)
export const getTemp = createAction(GET_TEMP)
export const getTempMax = createAction(GET_TEMP_MAX)
export const getTempMin = createAction(GET_TEMP_MIN)
export const getWeather = createAction(GET_WEATHER)
export const getWeatherIcon = createAction(GET_WEATHER_ICON)
export const getWindDeg = createAction(GET_WIND_DEG)
export const getWindSpeed = createAction(GET_WIND_SPEED)
export const getTempDifferenceYesterday = createAction(GET_TEMP_DIFFERENCE_YESTERDAY)



const initialState = {
    airQualityIndex: null,
    feelLike: null,
    humidity: null,
    temp: null,
    tempMax: null,
    tempMin: null,
    weatherDescription: null,
    weatherIcon: null,
    windeDeg: null,
    windSpeed: null,
    tempDifferenceYesterday: null
}

// reducer
const landingPresentWeather = handleActions(
    {
        [GET_AIR_QUALITY_INDEX]: (state, { payload: index }) =>  ({ ...state, index }),
        [GET_FEEL_LIKE_TEMP]: (state, { payload: temp }) => ({ ...state, temp }),
        [GET_HUMIDITY]: (state, { payload: humidity }) => ({ ...state, humidity }),
        [GET_TEMP]: (state, { payload: temp}) => ({ ...state, temp}),
        [GET_TEMP_MAX]: (state, { payload: tempMax }) => ({ ...state, tempMax }),
        [GET_TEMP_MIN]: (state, { payload: tempMin }) => ({ ...state, tempMin }),
        [GET_WEATHER]: (state, { payload: weatherDescription }) => ({ ...state, weatherDescription }),
        [GET_WEATHER_ICON]: (state, { payload: weatherIcon }) => ({ ...state, weatherIcon }),
        [GET_WIND_DEG]: (state, { payload: windDeg }) => ({ ...state, windDeg}),
        [GET_WIND_SPEED]: (state, { payload: windSpeed }) => ({ ...state, windSpeed }),
        [GET_TEMP_DIFFERENCE_YESTERDAY]: (state, { payload: tempDifferenceYesterday }) => ({ ...state, tempDifferenceYesterday })
    },
    initialState
)

export default landingPresentWeather;