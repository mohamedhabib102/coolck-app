"use client"
import Clock from "@/components/Clock";
import Customize from "@/components/Customize";
import { useState } from "react";

interface Colors{
  firstBG: string;
  lastBG: string;
  color: string
}

export default function Home() {
  const [colors, setColors] = useState<Colors>({ 
  firstBG: "#171717",
  lastBG: "#000",
  color: "#fff"
  })
  return (
    <main className="container mx-auto px-10 py-14">
       <h1 className="text-2xl bg-gray-600 text-center rounded-lg p-2 font-bold mb-4 text-white">You Clock Here Yammmm</h1>
       <Clock 
        firstBG={colors.firstBG}
        lastBG={colors.lastBG}
        color={colors.color}
       />
       <div>
        <h5 className="text-left text-gray-600 text-4xl rounded-lg mb-8">Customize Theme</h5>
        <Customize 
        colors={colors}
        setColors={setColors}
        />
       </div>
    </main>
  );
}
