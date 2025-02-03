// Store the true temperatures (what's currently shown)
const trueTemps = {
    current: 28,
    high: 40,
    low: 25,
    hourly: [28, 30, 29, 30, 32, 31],
    weekly: [
        [25, 40],
        [35, 49],
        [28, 42],
        [43, 45],
        [23, 31],
        [35, 52],
        [50, 53],
        [47, 49]
    ]
  };
  
  // Calculate the "feels like" temperatures (4-5 degrees lower)
  const feelsLikeTemps = {
    current: trueTemps.current - 4,
    high: trueTemps.high - 5,
    low: trueTemps.low - 4,
    hourly: trueTemps.hourly.map(temp => temp - 4),
    weekly: trueTemps.weekly.map(range => [range[0] - 4, range[1] - 5])
  };
  
  function toggleTemperature() {
    const toggle = document.getElementById('tempToggle');
    const trueTempLabel = document.querySelector('.true-temp');
    const feelsLikeLabel = document.querySelector('.feels-like');
    const temps = toggle.checked ? feelsLikeTemps : trueTemps;
  
    // Update labels
    trueTempLabel.classList.toggle('active', !toggle.checked);
    feelsLikeLabel.classList.toggle('active', toggle.checked);
  
    // Update current temperature
    document.getElementById('currentTemp').textContent = `${temps.current}°`;
    document.getElementById('highTemp').textContent = `${temps.high}°`;
    document.getElementById('lowTemp').textContent = `${temps.low}°`;
  
    // Update hourly temperatures
    const hourlyTemps = document.querySelectorAll('.hourly-forecast .temp-value');
    hourlyTemps.forEach((temp, index) => {
        temp.textContent = `${temps.hourly[index]}°`;
    });
  
    // Update weekly temperatures
    const weeklyTemps = document.querySelectorAll('.weekly-forecast .temp-value');
    weeklyTemps.forEach((temp, index) => {
        const weekIndex = Math.floor(index / 2);
        const isHigh = index % 2;
        temp.textContent = `${temps.weekly[weekIndex][isHigh]}°`;
    });
  }
  
  // Add event listener to the toggle
  document.getElementById('tempToggle').addEventListener('change', toggleTemperature);  