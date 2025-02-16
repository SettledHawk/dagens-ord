"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Lock, Plus, Pencil, Trash, Upload } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Word {
  id: number
  word: string
  class: string
  definition: string
  pronunciation: string
  examples: string[]
  synonyms: string[]
  antonyms: string[]
  etymology: string
  usage: string
}

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [words, setWords] = useState<Word[]>([
    {
      id: 1,
      word: "Prokrastinere",
      class: "verb",
      definition: "Å utsette eller drøye noe...",
      pronunciation: "/prokrastiˈneːrə/",
      examples: ["Studenten hadde en tendens til å prokrastinere..."],
      synonyms: ["utsette", "drøye"],
      antonyms: ["handle", "gjennomføre"],
      etymology: "Fra latin 'procrastinare'...",
      usage: "Brukes ofte i akademiske og profesjonelle sammenhenger...",
    },
    {
      id: 2,
      word: "Epifenomen",
      class: "substantiv",
      definition: "Et sekundært fenomen som ledsager...",
      pronunciation: "/epifenoˈmeːn/",
      examples: ["Bevisstheten blir av noen filosofer ansett som et epifenomen..."],
      synonyms: ["bieffekt", "følgefenomen"],
      antonyms: [],
      etymology: "Fra gresk 'epi' (på, over) og 'phainomenon' (fenomen)...",
      usage: "Brukes ofte innen filosofi og vitenskap...",
    },
  ])
  const [editingWord, setEditingWord] = useState<Word | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Feil passord. Prøv igjen.")
    }
  }

  const handleAddWord = (newWord: Omit<Word, "id">) => {
    setWords([...words, { ...newWord, id: words.length + 1 }])
  }

  const handleEditWord = (editedWord: Word) => {
    setWords(words.map((word) => (word.id === editedWord.id ? editedWord : word)))
  }

  const handleDeleteWord = (id: number) => {
    setWords(words.filter((word) => word.id !== id))
  }

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        const lines = content.split("\n")
        const newWords: Omit<Word, "id">[] = lines.slice(1).map((line) => {
          const [word, wordClass, definition, pronunciation, examples, synonyms, antonyms, etymology, usage] =
            line.split(",")
          return {
            word,
            class: wordClass,
            definition,
            pronunciation,
            examples: examples.split(";"),
            synonyms: synonyms.split(";"),
            antonyms: antonyms.split(";"),
            etymology,
            usage,
          }
        })
        setWords([...words, ...newWords.map((word, index) => ({ ...word, id: words.length + index + 1 }))])
      }
      reader.readAsText(file)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen bg-[#F8F9FA]">
        <Sidebar />
        <main className="flex-1 p-12 overflow-y-auto">
          <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Admin Innlogging</h1>
          <Card className="max-w-md mx-auto shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Passord
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                    placeholder="Skriv inn passord"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full bg-[#007AFF] hover:bg-[#0056b3]">
                  <Lock className="w-4 h-4 mr-2" />
                  Logg inn
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Admin Dashboard</h1>
        <Card className="max-w-5xl mx-auto shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Ordoversikt</h2>
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#007AFF] hover:bg-[#0056b3]">
                      <Plus className="w-4 h-4 mr-2" />
                      Legg til nytt ord
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className="max-w-[90vw] max-h-[90vh] overflow-y-auto"
                    aria-describedby="add-word-description"
                  >
                    <DialogHeader>
                      <DialogTitle>Legg til nytt ord</DialogTitle>
                      <DialogDescription id="add-word-description">
                        Fyll ut skjemaet nedenfor for å legge til et nytt ord i ordboken.
                      </DialogDescription>
                    </DialogHeader>
                    <WordForm
                      onSubmit={(newWord) => {
                        handleAddWord(newWord)
                        alert("Ordet ble lagt til!")
                      }}
                    />
                  </DialogContent>
                </Dialog>
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <div className="bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    <span>Last opp CSV</span>
                  </div>
                  <input id="csv-upload" type="file" accept=".csv" className="hidden" onChange={handleCSVUpload} />
                </label>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Ord</th>
                    <th className="border p-2 text-left">Ordklasse</th>
                    <th className="border p-2 text-left">Definisjon</th>
                    <th className="border p-2 text-left">Handlinger</th>
                  </tr>
                </thead>
                <tbody>
                  {words.map((word) => (
                    <tr key={word.id} className="hover:bg-gray-50">
                      <td className="border p-2">{word.word}</td>
                      <td className="border p-2">{word.class}</td>
                      <td className="border p-2">{word.definition}</td>
                      <td className="border p-2">
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Pencil className="w-4 h-4 mr-2" />
                                Rediger
                              </Button>
                            </DialogTrigger>
                            <DialogContent
                              className="max-w-[90vw] max-h-[90vh] overflow-y-auto"
                              aria-describedby="edit-word-description"
                            >
                              <DialogHeader>
                                <DialogTitle>Rediger ord</DialogTitle>
                                <DialogDescription id="edit-word-description">
                                  Rediger informasjonen for det valgte ordet.
                                </DialogDescription>
                              </DialogHeader>
                              <WordForm
                                onSubmit={(editedWord) => {
                                  handleEditWord({ ...editedWord, id: word.id })
                                  alert("Ordet ble oppdatert!")
                                }}
                                initialData={word}
                              />
                            </DialogContent>
                          </Dialog>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteWord(word.id)}>
                            <Trash className="w-4 h-4 mr-2" />
                            Slett
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

interface WordFormProps {
  onSubmit: (word: Omit<Word, "id">) => void
  initialData?: Word
}

function WordForm({ onSubmit, initialData }: WordFormProps) {
  const [formData, setFormData] = useState<Omit<Word, "id">>(
    initialData || {
      word: "",
      class: "",
      definition: "",
      pronunciation: "",
      examples: [""],
      synonyms: [""],
      antonyms: [""],
      etymology: "",
      usage: "",
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: "examples" | "synonyms" | "antonyms",
  ) => {
    const { value } = e.target
    setFormData({ ...formData, [field]: value.split("\n") })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    const closeButton = document.querySelector("[data-dialog-close]") as HTMLButtonElement | null
    if (closeButton) {
      closeButton.click()
    }
  }

  return (
    <ScrollArea className="h-[70vh]">
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor="word">Ord</Label>
          <Input id="word" name="word" value={formData.word} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="class">Ordklasse</Label>
          <Select
            name="class"
            value={formData.class}
            onValueChange={(value) => setFormData({ ...formData, class: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Velg ordklasse" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="substantiv">Substantiv</SelectItem>
              <SelectItem value="verb">Verb</SelectItem>
              <SelectItem value="adjektiv">Adjektiv</SelectItem>
              <SelectItem value="adverb">Adverb</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="definition">Definisjon</Label>
          <Textarea id="definition" name="definition" value={formData.definition} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pronunciation">Uttale</Label>
          <Input
            id="pronunciation"
            name="pronunciation"
            value={formData.pronunciation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="examples">Eksempler (ett per linje)</Label>
          <Textarea
            id="examples"
            name="examples"
            value={formData.examples.join("\n")}
            onChange={(e) => handleArrayChange(e, "examples")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="synonyms">Synonymer (ett per linje)</Label>
          <Textarea
            id="synonyms"
            name="synonyms"
            value={formData.synonyms.join("\n")}
            onChange={(e) => handleArrayChange(e, "synonyms")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="antonyms">Antonymer (ett per linje)</Label>
          <Textarea
            id="antonyms"
            name="antonyms"
            value={formData.antonyms.join("\n")}
            onChange={(e) => handleArrayChange(e, "antonyms")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="etymology">Etymologi</Label>
          <Textarea id="etymology" name="etymology" value={formData.etymology} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="usage">Bruksområder</Label>
          <Textarea id="usage" name="usage" value={formData.usage} onChange={handleChange} />
        </div>
        <Button type="submit" className="w-full bg-[#007AFF] hover:bg-[#0056b3]">
          {initialData ? "Oppdater ord" : "Legg til ord"}
        </Button>
      </form>
    </ScrollArea>
  )
}

