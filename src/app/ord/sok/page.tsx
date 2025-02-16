"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function OrdSok() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/ord/${searchTerm.toLowerCase()}`)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Søk etter ord</h1>
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Skriv inn et ord..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit" className="bg-[#007AFF] hover:bg-[#0056b3]">
                  <Search className="w-5 h-5 mr-2" />
                  Søk
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

