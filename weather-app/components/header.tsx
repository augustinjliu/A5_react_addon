"use client"

interface HeaderProps {
  location: string
  showFeelsLike: boolean
  onToggle: () => void
}

export default function Header({ location, showFeelsLike, onToggle }: HeaderProps) {
  return (
    <div className="text-center mb-4">
      <h1 className="text-4xl font-bold text-white mb-4">{location}</h1>
      <div className="flex items-center justify-center gap-4">
        <span className={`${showFeelsLike ? "text-gray-400" : "text-red-500"} font-medium`}>True Temps</span>
        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-400" onClick={onToggle}>
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              showFeelsLike ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`${showFeelsLike ? "text-green-500" : "text-gray-400"} font-medium`}>Feels Like</span>
      </div>
    </div>
  )
}
