import { Cloud, CloudRain, Sun } from "lucide-react"

interface HourlyForecastProps {
  data: Array<{
    time: string
    temp: number
    feelsLike: number
    condition: string
  }>
  showFeelsLike: boolean
}

export default function HourlyForecast({ data, showFeelsLike }: HourlyForecastProps) {
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
    <div className="bg-gray-700/70 rounded-lg overflow-hidden mb-4">
      <div className="bg-cyan-500 py-2 px-4">
        <h2 className="text-2xl font-bold text-white text-center">Today</h2>
      </div>
      <div className="p-4 grid grid-cols-6 gap-2">
        {data.map((hour, index) => (
          <div key={index} className="text-center">
            <div className="text-white font-medium">{hour.time}</div>
            <div className="my-2 flex justify-center">{getWeatherIcon(hour.condition)}</div>
            <div className="text-white font-bold text-xl">{showFeelsLike ? hour.feelsLike : hour.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  )
}
