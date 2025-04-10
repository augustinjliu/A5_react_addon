"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import CurrentWeather from "./components/CurrentWeather"
import HourlyForecast from "./components/HourlyForecast"
import WeeklyForecast from "./components/WeeklyForecast"

// Sample weather data
const weatherData = {
  location: "Philadelphia",
  current: {
    temp: 28,
    feelsLike: 22, // Lower than true temp
    windSpeed: 8,
    high: 40,
    highFeelsLike: 33, // Lower than true high
    low: 25,
    lowFeelsLike: 19, // Lower than true low
    precipitation: [
      { time: "5-6:30 PM", chance: 50 },
      { time: "10-11 PM", chance: 30 },
    ],
    condition: "rainy",
  },
  hourly: [
    { time: "Now", temp: 28, feelsLike: 22, condition: "cloudy" },
    { time: "3 pm", temp: 30, feelsLike: 24, condition: "cloudy" },
    { time: "4 pm", temp: 29, feelsLike: 23, condition: "cloudy" },
    { time: "5 pm", temp: 30, feelsLike: 24, condition: "rainy" },
    { time: "6 pm", temp: 32, feelsLike: 26, condition: "rainy" },
    { time: "7 pm", temp: 31, feelsLike: 25, condition: "rainy" },
  ],
  weekly: [
    { day: "Today", date: "1/31", low: 25, high: 40, lowFeelsLike: 19, highFeelsLike: 33, condition: "cloudy" },
    { day: "Sat", date: "2/1", low: 35, high: 49, lowFeelsLike: 28, highFeelsLike: 42, condition: "sunny" },
    { day: "Sun", date: "2/2", low: 28, high: 42, lowFeelsLike: 22, highFeelsLike: 35, condition: "sunny" },
    { day: "Mon", date: "2/3", low: 43, high: 45, lowFeelsLike: 36, highFeelsLike: 38, condition: "sunny" },
    { day: "Tue", date: "2/4", low: 23, high: 31, lowFeelsLike: 17, highFeelsLike: 25, condition: "cloudy" },
    { day: "Wed", date: "2/5", low: 35, high: 52, lowFeelsLike: 28, highFeelsLike: 45, condition: "sunny" },
    { day: "Thur", date: "2/6", low: 50, high: 53, lowFeelsLike: 43, highFeelsLike: 46, condition: "sunny" },
    { day: "Fri", date: "2/7", low: 47, high: 49, lowFeelsLike: 40, highFeelsLike: 42, condition: "sunny" },
  ],
}

function App() {
  const [showFeelsLike, setShowFeelsLike] = useState(false)

  const toggleTemperatureDisplay = () => {
    setShowFeelsLike(!showFeelsLike)
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('/clouds.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="weather-container">
        <Header location={weatherData.location} showFeelsLike={showFeelsLike} onToggle={toggleTemperatureDisplay} />
        <CurrentWeather data={weatherData.current} showFeelsLike={showFeelsLike} />
        <HourlyForecast data={weatherData.hourly} showFeelsLike={showFeelsLike} />
        <WeeklyForecast data={weatherData.weekly} showFeelsLike={showFeelsLike} />
      </div>
    </div>
  )
}

export default App
