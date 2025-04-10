function CurrentWeather({ data, showFeelsLike }) {
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
  
    const temp = showFeelsLike ? data.feelsLike : data.temp
    const high = showFeelsLike ? data.highFeelsLike : data.high
    const low = showFeelsLike ? data.lowFeelsLike : data.low
  
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Now</h2>
        </div>
        <div className="card-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "4rem", fontWeight: "bold" }}>{temp}°</div>
            <div style={{ marginTop: "8px" }}>
              H: {high}° L: {low}°
            </div>
          </div>
  
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{data.windSpeed} mph</div>
            <div style={{ marginTop: "8px" }}>
              <img src="/wind.png" alt="Wind" style={{ width: "40px", height: "20px" }} />
            </div>
          </div>
  
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "3rem" }}>{getWeatherIcon(data.condition)}</div>
            {data.precipitation.map((p, index) => (
              <div key={index} style={{ fontSize: "0.875rem", marginTop: "4px" }}>
                {p.time} ({p.chance}%)
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default CurrentWeather
  