"use client"

function Header({ location, showFeelsLike, onToggle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "16px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>{location}</h1>
      <div className="toggle-container">
        <span className={`true-temps ${showFeelsLike ? "inactive" : ""}`}>True Temps</span>
        <div className="toggle-switch" onClick={onToggle}>
          <span className={`toggle-switch-circle ${showFeelsLike ? "active" : ""}`}></span>
        </div>
        <span className={`feels-like ${showFeelsLike ? "" : "inactive"}`}>Feels Like</span>
      </div>
    </div>
  )
}

export default Header
