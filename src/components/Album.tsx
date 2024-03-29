import Image from "next/image"
import { Play } from "lucide-react"

export default function Album(){
    return(
        <a href="#" className="bg-white/5 group hover:bg-white/10 transition-colors rounded flex items-center gap-4 overflow-hidden">
            <Image width={104} height={104} src="/starboy.webp" alt="starboy album" />
            <strong>Starboy</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
            </button>
        </a>
    )
}