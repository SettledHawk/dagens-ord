"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Copy } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function DagensOrd() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const dagensOrd = {
    ord: "Prokrastinere",
    ordklasse: "verb",
    uttale: "/prokrastiˈneːrə/",
    definisjon: "Å utsette eller drøye noe, særlig en oppgave eller et arbeid som burde eller må gjøres.",
    eksempel:
      "Studenten hadde en tendens til å prokrastinere, og endte ofte opp med å skrive oppgaven natten før innleveringsfristen.",
  }

  const playAudio = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 2000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dagensOrd.ord)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const navigateToDetails = () => {
    router.push(`/ord/${dagensOrd.ord.toLowerCase()}`)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="bg-[#D6D5D7] text-[#14161A] p-8 rounded-t-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-5xl font-bold text-[#14161A]">{dagensOrd.ord}</h2>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#14161A] hover:text-[#14161A]/80 hover:bg-[#FFFFFF]/20"
                onClick={copyToClipboard}
              >
                <Copy className="h-5 w-5" />
                <span className="sr-only">Kopier ord</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#14161A] hover:text-[#14161A]/80 hover:bg-[#FFFFFF]/20"
                onClick={playAudio}
              >
                <Volume2 className={`h-5 w-5 ${isPlaying ? "animate-pulse" : ""}`} />
                <span className="sr-only">Spill av uttale</span>
              </Button>
            </div>
          </div>
          {/* Meldingen flyttet over ordklasse og uttale */}
          {isCopied && (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-sm text-[#14161A] mb-2"
            >
              Kopiert til utklippstavle!
            </motion.p>
          )}
          <p className="text-lg font-medium text-[#14161A]">
            {dagensOrd.ordklasse} - {dagensOrd.uttale}
          </p>
        </div>
        <CardContent className="p-8 space-y-8 bg-[#FFFFFF]">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#14161A] flex items-center gap-2">→ Definisjon</h3>
            <p className="text-lg text-[#14161A] leading-relaxed">{dagensOrd.definisjon}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#14161A] flex items-center gap-2">→ Eksempel</h3>
            <p className="text-lg text-[#14161A]/80 italic leading-relaxed">"{dagensOrd.eksempel}"</p>
          </div>
          <Button
            onClick={navigateToDetails}
            className="w-full mt-6 bg-[#F0F7FF] text-[#007AFF] hover:bg-[#007AFF] hover:text-white border border-[#007AFF] transition-colors font-semibold py-2 rounded-md"
          >
            Se mer informasjon
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

