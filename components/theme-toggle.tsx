"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2.5 rounded-full bg-secondary w-10 h-10" />
    )
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    
    // Create diagonal transition overlay
    const overlay = document.createElement('div')
    overlay.className = `theme-transition-overlay to-${newTheme}`
    document.body.appendChild(overlay)
    
    // Change theme at the midpoint of the animation
    setTimeout(() => {
      setTheme(newTheme)
    }, 400)
    
    // Remove overlay after animation completes
    setTimeout(() => {
      overlay.remove()
    }, 850)
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
