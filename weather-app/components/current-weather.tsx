import { Cloud, CloudRain, Sun } from "lucide-react"
import Image from "next/image"

interface CurrentWeatherProps {
  data: {
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
  showFeelsLike: boolean
}

export default function CurrentWeather({ data, showFeelsLike }: CurrentWeatherProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-12 w-12 text-white" />
      case "rainy":
        return <CloudRain className="h-12 w-12 text-white" />
      case "cloudy":
      default:
        return <Cloud className="h-12 w-12 text-white" />
    }
  }

  const temp = showFeelsLike ? data.feelsLike : data.temp
  const high = showFeelsLike ? data.highFeelsLike : data.high
  const low = showFeelsLike ? data.lowFeelsLike : data.low

  return (
    <div className="bg-gray-700/70 rounded-lg overflow-hidden mb-4">
      <div className="bg-cyan-500 py-2 px-4">
        <h2 className="text-2xl font-bold text-white text-center">Now</h2>
      </div>
      <div className="p-6 flex justify-between items-center">
        <div>
          <div className="text-7xl font-bold text-white">{temp}°</div>
          <div className="text-white mt-2">
            H: {high}° L: {low}°
          </div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold text-white">{data.windSpeed} mph</div>
          <div className="mt-2 flex justify-center">
            <Image src="/images/wind.png" alt="Wind" width={40} height={20} className="mx-auto" />
          </div>
        </div>

        <div className="text-right">
          {getWeatherIcon(data.condition)}
          {data.precipitation.map((p, index) => (
            <div key={index} className="text-white text-sm mt-1">
              {p.time} ({p.chance}%)
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
