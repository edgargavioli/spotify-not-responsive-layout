import {
    Home, 
    Search, 
    Library, 
} from "lucide-react"

export default function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Home />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="flex flex-col gap-3 mt-6 pt-10 border-t border-zinc-800">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Internacional</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Slwoed</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Suavizinha</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">é o trap memo</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rock</a>
          </nav>
        </aside>
    )
}