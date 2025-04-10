function HourlyForecast({ data, showFeelsLike }) {
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
          <h2 className="card-title">Today</h2>
        </div>
        <div className="card-content" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px" }}>
          {data.map((hour, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "500" }}>{hour.time}</div>
              <div style={{ margin: "8px 0", fontSize: "1.5rem" }}>{getWeatherIcon(hour.condition)}</div>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{showFeelsLike ? hour.feelsLike : hour.temp}°</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default HourlyForecast
  