"use client"

import { useState, useRef } from "react"
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster?: string
  onClose: () => void
}

export default function VideoPlayer({ src, poster, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -right-10 -top-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Fechar vídeo"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative overflow-hidden rounded-lg">
          <video ref={videoRef} src={src} poster={poster} className="w-full" onClick={togglePlay} />

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
            <button
              onClick={togglePlay}
              className="rounded-full bg-white/20 p-3 text-white hover:bg-white/30"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleMute}
              className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

