import Image from "next/image"

export default function Album(){
    return(
        <a href="#" className="bg-white/5 group hover:bg-white/10 flex flex-col p-3 rounded-md">
            <Image className="w-full" width={120} height={120} src="/starboy.webp" alt="starboy album" />
            <strong className="font-semibold">Starboy</strong>
            <span className="text-sm text-zinc-400">The Wekend</span>
        </a>
    )
}