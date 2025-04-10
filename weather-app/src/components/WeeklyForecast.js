function WeeklyForecast({ data, showFeelsLike }) {
    const getWeatherIcon = (condition) => {
      switch (condition) {
        case "sunny":
          return "☀️"
        case "rainy":
          return "🌧️"
        case "cloudy":
        default:
          return "☁️"
      }
    }
  
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">This Week</h2>
        </div>
        <div className="card-content" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {data.map((day, index) => {
            const low = showFeelsLike ? day.lowFeelsLike : day.low
            const high = showFeelsLike ? day.highFeelsLike : day.high
  
            // Calculate percentage for temperature bar
            const minTemp = 20
            const maxTemp = 60
            const range = maxTemp - minTemp
            const lowPercent = ((low - minTemp) / range) * 100
            const highPercent = ((high - minTemp) / range) * 100
            const barWidth = highPercent - lowPercent
  
            return (
              <div key={index} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "100px", textAlign: "left" }}>
                  {day.day} {day.date}
                </div>
                <div style={{ width: "40px", textAlign: "center" }}>{getWeatherIcon(day.condition)}</div>
                <div style={{ width: "40px" }}>{low}°</div>
                <div style={{ flex: 1, margin: "0 8px", position: "relative" }}>
                  <div
                    style={{
                      height: "4px",
                      backgroundColor: "#6B7280",
                      borderRadius: "9999px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: `${lowPercent}%`,
                        width: `${barWidth}%`,
                        height: "4px",
                        backgroundColor: "white",
                        borderRadius: "9999px",
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ width: "40px" }}>{high}°</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  
  export default WeeklyForecast
  