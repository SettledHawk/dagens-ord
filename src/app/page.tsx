import DagensOrd from "@/components/dagens-ord"
import Sidebar from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Dagens Ord</h1>
        <DagensOrd />
      </main>
    </div>
  )
}