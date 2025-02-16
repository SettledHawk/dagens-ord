"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Copy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface OrdInfo {
  ord: string | string[] | undefined
  ordklasse: string
  uttale: string
  definisjon: string
  eksempler: string[]
  bøyninger: Array<{
    form: string
    bøyning: string
  }>
  synonymer: string[]
  antonymer: string[]
  etymologi: string
  bruksomrader: string
}

export default function OrdDetaljer() {
  const params = useParams()
  const router = useRouter()
  const [ordInfo, setOrdInfo] = useState<OrdInfo | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      const mockOrdInfo = {
        ord: params.ord,
        ordklasse: "verb",
        uttale: "/prokrastiˈneːrə/",
        definisjon: "Å utsette eller drøye noe, særlig en oppgave eller et arbeid som burde eller må gjøres.",
        eksempler: [
          "Studenten hadde en tendens til å prokrastinere, og endte ofte opp med å skrive oppgaven natten før innleveringsfristen.",
          "Mange prokrastinerer når det gjelder å starte på store prosjekter.",
          "Han prokrastinerte med å ringe tannlegen, selv om han visste at han burde gjøre det.",
        ],
        bøyninger: [
          { form: "Infinitiv", bøyning: "å prokrastinere" },
          { form: "Presens", bøyning: "prokrastinerer" },
          { form: "Preteritum", bøyning: "prokrastinerte" },
          { form: "Perfektum partisipp", bøyning: "prokrastinert" },
        ],
        synonymer: ["utsette", "drøye", "somle", "nøle"],
        antonymer: ["handle", "gjennomføre", "fullføre"],
        etymologi:
          "Fra latin 'procrastinare', som er sammensatt av 'pro-' (frem) og 'crastinus' (tilhørende i morgen). Ordet kom inn i norsk via engelsk på 1900-tallet.",
        bruksomrader:
          "Ordet brukes ofte i akademiske og profesjonelle sammenhenger, særlig når man diskuterer tidsplanlegging og produktivitet. Det kan ha en negativ konnotasjon i formelle situasjoner, men brukes også humoristisk i mer uformelle sammenhenger.",
      }
      setOrdInfo(mockOrdInfo)
      setIsLoading(false)
    }, 1000)
  }, [params.ord])

  const playAudio = () => {
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 2000)
  }

  const copyToClipboard = () => {
    if (ordInfo) {
      navigator.clipboard.writeText(String(ordInfo.ord))
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  if (isLoading)
    return (
      <div className="flex min-h-screen bg-[#F8F9FA]">
        <Sidebar />
        <main className="flex-1 p-12 overflow-y-auto">
          <div className="text-center">Laster...</div>
        </main>
      </div>
    )

  if (!ordInfo)
    return (
      <div className="flex min-h-screen bg-[#F8F9FA]">
        <Sidebar />
        <main className="flex-1 p-12 overflow-y-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ordet ble ikke funnet</h2>
            <Button onClick={() => router.push("/ord/sok")} className="bg-[#007AFF] hover:bg-[#0056b3]">
              Gå tilbake til søk
            </Button>
          </div>
        </main>
      </div>
    )

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Mer Info om Ord</h1>
        <Card className="max-w-3xl mx-auto shadow-lg">
          <div className="bg-[#D6D5D7] text-[#14161A] p-8 rounded-t-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-5xl font-bold text-[#14161A] capitalize">{ordInfo?.ord}</h2>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#14161A] hover:text-[#14161A]/80 hover:bg-[#FFFFFF]/20"
                  onClick={copyToClipboard}
                >
                  <Copy className={`h-5 w-5 ${isCopied ? "text-black" : ""}`} />
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
            <AnimatePresence>
              {isCopied && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-sm text-black mt-2"
                >
                  Kopiert til utklippstavle!
                </motion.p>
              )}
            </AnimatePresence>
            <p className="text-lg font-medium text-[#14161A]">
              {ordInfo?.ordklasse} - {ordInfo?.uttale}
            </p>
          </div>
          <CardContent className="p-8 space-y-8 bg-[#FFFFFF]">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Definisjon</h3>
              <p className="text-lg text-[#14161A] leading-relaxed">{ordInfo?.definisjon}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Eksempler</h3>
              <ul className="list-disc pl-5 space-y-2">
                {ordInfo?.eksempler.map((eksempel: string, index: number) => (
                  <li key={index} className="text-lg text-[#14161A]/80 italic leading-relaxed">
                    "{eksempel}"
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Bøyninger</h3>
              <div className="grid grid-cols-2 gap-4">
                {ordInfo?.bøyninger.map((bøyning: { form: string; bøyning: string }, index: number) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{bøyning.form}:</span>
                    <span>{bøyning.bøyning}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Synonymer</h3>
              <p className="text-lg text-[#14161A] leading-relaxed">{ordInfo?.synonymer.join(", ")}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Antonymer</h3>
              <p className="text-lg text-[#14161A] leading-relaxed">{ordInfo?.antonymer.join(", ")}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Etymologi</h3>
              <p className="text-lg text-[#14161A] leading-relaxed">{ordInfo?.etymologi}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#14161A]">→ Bruksområder og kontekst</h3>
              <p className="text-lg text-[#14161A] leading-relaxed">{ordInfo?.bruksomrader}</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

