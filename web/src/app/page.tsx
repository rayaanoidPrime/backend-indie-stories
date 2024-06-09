import { Hero } from "@/components/component/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen items-center justify-between ">
      <Hero />
    </main>
  );
}
