import WeatherApp from "@/components/weather-app"

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/clouds.png')",
      }}
    >
      <WeatherApp />
    </main>
  )
}
