 "use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function TidligereOrdListe() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const tidligereOrd = [
    {
      dato: "2023-05-01",
      ord: "Epifenomen",
      ordklasse: "substantiv",
      uttale: "/epifenoˈmeːn/",
      definisjon: "Et sekundært fenomen som ledsager et primært fenomen, men som ikke har noen innvirkning på det.",
      eksempel: "Bevisstheten blir av noen filosofer ansett som et epifenomen av hjerneaktivitet.",
    },
    {
      dato: "2023-04-30",
      ord: "Ekvivok",
      ordklasse: "adjektiv",
      uttale: "/ekviˈvoːk/",
      definisjon: "Tvetydig, flertydig; som kan tolkes på flere måter.",
      eksempel: "Politikerens ekvivoke svar gjorde det vanskelig å forstå hans egentlige standpunkt.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto bg-transparent">
      {tidligereOrd.map((ord, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-[#F0F7FF] text-[#14161A] p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#14161A]">{ord.ordklasse}</span>
                <div className="flex items-center text-[#14161A] text-sm">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {ord.dato}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#14161A]">{ord.ord}</h3>
              <p className="text-sm text-[#14161A] mt-1">{ord.uttale}</p>
            </div>
            <CardContent className="p-6 bg-white">
              <Button
                variant="ghost"
                className="w-full text-[#14161A] hover:text-[#007AFF] hover:bg-[#F0F7FF] flex items-center justify-between rounded-md transition-colors"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {expandedIndex === index ? "Skjul detaljer" : "Vis detaljer"}
                {expandedIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-[#14161A]">→ Definisjon</h4>
                      <p className="text-[#14161A]">{ord.definisjon}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-[#14161A]">→ Eksempel</h4>
                      <p className="text-[#14161A]/90 italic">"{ord.eksempel}"</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

