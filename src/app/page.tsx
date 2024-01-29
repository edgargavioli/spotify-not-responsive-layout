import Image from "next/image";
import { 
  Play,
} from "lucide-react";
import PageTransitionButton from "@/components/PageTransitionButton";
import HelloComponent from "@/components/HelloComponent";
import Recents from "@/components/Recents";
import Populars from "@/components/Populars";



export default function Home() {
  return (
      <main className="flex-1 p-6">
          <PageTransitionButton />
          
          <HelloComponent />

          <Recents />

          <h2 className="font-semibold text-2xl mt-10">
            Populars
          </h2>

          <Populars />
      </main>
  );
}
