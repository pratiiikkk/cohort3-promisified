"use client";
import Fetch from "@/components/Fetch";
import ReadFile from "@/components/ReadFile";
import SetTimeoutComponent from "@/components/SetTimeout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState<number>(0);

  return (
      <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="space-x-1">
        <Button variant={"outline"} onClick={() => setCurrent(0)}>
          Read File
        </Button>
        <Button variant={"outline"} onClick={() => setCurrent(1)}>
          Fetch
        </Button>
        <Button variant={"outline"} onClick={() => setCurrent(2)}>
          setTimeout
        </Button>
      </div>
    
      <div className="flex flex-col items-center space-y-4 mt-4 md:mt-8">
        {current === 0 && <ReadFile />}
        {current === 1 && <Fetch />}
        {current === 2 && <SetTimeoutComponent />}
      </div>
    
      <p className="mt-4 text-center">
        made with <span className="text-red-500">❤️</span> by <a href="https://x.com/neexzz_tw">@pratiikkk</a>
      </p>
    </main>
  );
}
