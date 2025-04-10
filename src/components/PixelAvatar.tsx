"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface PixelAvatarProps {
  size?: number
  className?: string
}

const PixelAvatar: React.FC<PixelAvatarProps> = ({ size = 150, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = size
    canvas.height = size

    // Load the original image
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "../assets/avatar.jpg"

    img.onload = () => {
      // Determine pixel size based on canvas size
      const pixelSize = Math.max(2, Math.floor(size / 30))

      // Draw the original image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw pixelated version
      for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
          // Get the color of the pixel at (x, y)
          const index = (y * canvas.width + x) * 4
          const r = data[index]
          const g = data[index + 1]
          const b = data[index + 2]
          const a = data[index + 3]

          // Set fill style
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`

          // Draw a rectangle
          ctx.fillRect(x, y, pixelSize, pixelSize)
        }
      }

      // Apply cyber teal glow effect
      ctx.shadowColor = "rgba(0, 191, 166, 0.5)"
      ctx.shadowBlur = 10
      ctx.drawImage(canvas, 0, 0)
    }
  }, [size])

  return <canvas ref={canvasRef} className={`pixel-art ${className}`} style={{ width: size, height: size }} />
}

export default PixelAvatar
