import Link from "next/link"
import { Home, BookOpen, Search, Info, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#FFFFFF] border-r border-[#E0E0E0] p-6">
      <div className="mb-8">
        <Link href="/" className="block">
          <h2 className="text-2xl font-bold text-[#14161A]">Dagens Ord</h2>
        </Link>
        <p className="text-sm text-[#14161A]/80">Utforsk språkets dybder</p>
      </div>
      <nav>
        <ul className="space-y-6">
          <li>
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-medium text-[#14161A] hover:text-[#007AFF] hover:bg-[#F0F7FF] rounded-md p-2 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Dagens Ord</span>
            </Link>
          </li>
          <li>
            <Link
              href="/tidligere-ord"
              className="flex items-center gap-3 text-lg font-medium text-[#14161A] hover:text-[#007AFF] hover:bg-[#F0F7FF] rounded-md p-2 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Tidligere Ord</span>
            </Link>
          </li>
          <li>
            <Link
              href="/ord/sok"
              className="flex items-center gap-3 text-lg font-medium text-[#14161A] hover:text-[#007AFF] hover:bg-[#F0F7FF] rounded-md p-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Mer Info om Ord</span>
            </Link>
          </li>
          <li>
            <Link
              href="/info"
              className="flex items-center gap-3 text-lg font-medium text-[#14161A] hover:text-[#007AFF] hover:bg-[#F0F7FF] rounded-md p-2 transition-colors"
            >
              <Info className="w-5 h-5" />
              <span>Om Dagens Ord</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="flex items-center gap-3 text-lg font-medium text-[#14161A] hover:text-[#007AFF] hover:bg-[#F0F7FF] rounded-md p-2 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Admin</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

