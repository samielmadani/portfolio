"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import myLogo from '../images/mylogo.png'
// import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const DEFAULT_PRIMARY_COLOR = 'rgb(215, 207, 187)'
const DEFAULT_SECONDARY_COLOR = 'rgb(86, 84, 73)'

export function NavBar() {
  const [spin, setSpin] = useState(false)
  const [primaryColor, setPrimaryColor] = useState(DEFAULT_PRIMARY_COLOR)
  const [secondaryColor, setSecondaryColor] = useState(DEFAULT_SECONDARY_COLOR)

  useEffect(() => {
    // Load saved colors from localStorage
    const savedPrimaryColor = localStorage.getItem('primaryColor')
    const savedSecondaryColor = localStorage.getItem('secondaryColor')

    if (savedPrimaryColor) {
      updateColor(savedPrimaryColor, setPrimaryColor, '--primary')
    }
    if (savedSecondaryColor) {
      updateColor(savedSecondaryColor, setSecondaryColor, '--secondary')
    }

    // Start the spinning animation
    setSpin(true)
    const timer = setTimeout(() => {
      setSpin(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const updateColor = (color: string, setter: (color: string) => void, cssVar: string) => {
    setter(color)
    document.documentElement.style.setProperty(cssVar, color)
    // Save to localStorage
    try {
      localStorage.setItem(cssVar === '--primary' ? 'primaryColor' : 'secondaryColor', color)
    } catch (error) {
      console.error('Error saving color to localStorage:', error)
    }
  }

  const resetColors = () => {
    updateColor(DEFAULT_PRIMARY_COLOR, setPrimaryColor, '--primary')
    updateColor(DEFAULT_SECONDARY_COLOR, setSecondaryColor, '--secondary')
    // Clear localStorage
    localStorage.removeItem('primaryColor')
    localStorage.removeItem('secondaryColor')
  }

  return (
    <div className="flex justify-between w-full items-center z-50 relative p-4">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center">
          <Image
            src={myLogo}
            alt="Logo"
            width={48}
            height={48}
            className={`rounded-full ${spin ? 'animate-spin' : ''}`}
          />
        </Link>
        <div className="flex items-center space-x-4">
          <ColorPicker
            label="Primary"
            color={primaryColor}
            onChange={(color) => updateColor(color, setPrimaryColor, '--primary')}
          />
          <ColorPicker
            label="Secondary"
            color={secondaryColor}
            onChange={(color) => updateColor(color, setSecondaryColor, '--secondary')}
          />
          <button
            style={{color: '#000'}}
            onClick={resetColors}
            title="Reset to Default Colors"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 primary-font">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} className="px-3 py-2 rounded transition-colors">
                <p className="navbar">{item}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

function ColorPicker({ label, color, onChange }: { label: string; color: string; onChange: (color: string) => void }) {
  return (
    <div className="flex flex-col items-center">
      <strong className="primary-font">{label}</strong>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
        id={`${label.toLowerCase()}ColorPicker`}
      />
      <label
        htmlFor={`${label.toLowerCase()}ColorPicker`}
        className="block w-8 h-8 rounded-full cursor-pointer border-2 border-black"
        style={{ backgroundColor: color }}
        title={`${label} Color`}
      />
    </div>
  )
}