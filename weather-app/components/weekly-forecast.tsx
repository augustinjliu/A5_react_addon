import { Cloud, CloudRain, Sun } from "lucide-react"

interface WeeklyForecastProps {
  data: Array<{
    day: string
    date: string
    low: number
    high: number
    lowFeelsLike: number
    highFeelsLike: number
    condition: string
  }>
  showFeelsLike: boolean
}

export default function WeeklyForecast({ data, showFeelsLike }: WeeklyForecastProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-6 w-6 text-white" />
      case "rainy":
        return <CloudRain className="h-6 w-6 text-white" />
      case "cloudy":
      default:
        return <Cloud className="h-6 w-6 text-white" />
    }
  }

  return (
    <div className="bg-gray-700/70 rounded-lg overflow-hidden">
      <div className="bg-cyan-500 py-2 px-4">
        <h2 className="text-2xl font-bold text-white text-center">This Week</h2>
      </div>
      <div className="p-4 space-y-3">
        {data.map((day, index) => {
          const low = showFeelsLike ? day.lowFeelsLike : day.low
          const high = showFeelsLike ? day.highFeelsLike : day.high

          return (
            <div key={index} className="flex items-center">
              <div className="w-24 text-white font-medium">
                {day.day} {day.date}
              </div>
              <div className="w-10 flex justify-center">{getWeatherIcon(day.condition)}</div>
              <div className="w-12 text-white font-medium ml-2">{low}°</div>
              <div className="flex-1 mx-2">
                <div className="h-1 bg-gray-500 rounded-full">
                  <div
                    className="h-1 bg-white rounded-full"
                    style={{
                      width: `${((high - low) / (60 - 20)) * 100}%`,
                      marginLeft: `${((low - 20) / (60 - 20)) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="w-12 text-white font-medium">{high}°</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
