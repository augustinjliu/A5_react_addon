export interface WeatherData {
    location: string
    current: {
      temp: number
      feelsLike: number
      windSpeed: number
      high: number
      highFeelsLike: number
      low: number
      lowFeelsLike: number
      precipitation: Array<{ time: string; chance: number }>
      condition: string
    }
    hourly: Array<{
      time: string
      temp: number
      feelsLike: number
      condition: string
    }>
    weekly: Array<{
      day: string
      date: string
      low: number
      high: number
      lowFeelsLike: number
      highFeelsLike: number
      condition: string
    }>
  }
  