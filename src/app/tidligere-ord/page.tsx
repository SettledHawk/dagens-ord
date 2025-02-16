import Sidebar from "@/components/sidebar"
import TidligereOrdListe from "@/components/tidligere-ord-liste"

export default function TidligereOrd() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Tidligere Ord</h1>
        <TidligereOrdListe />
      </main>
    </div>
  )
}

