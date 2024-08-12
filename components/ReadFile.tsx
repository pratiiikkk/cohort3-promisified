import React, { use, useRef, useState } from "react";
import { CodeHighLighter } from "./CodeHighLighter";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const code = `
import * as fs from "fs";

function PromisifiedReaFile(file: string, encoding: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile("data.txt", "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

PromisifiedReaFile("data.txt", "utf8").then((data) => {
    console.log(data);
});



`;
function ReadFile() {
  const [result, setResult] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const handleReadFile = async (e: any) => {
    e.preventDefault();
    const file = ref.current?.files?.[0];
    if (!file) {
      setResult("No file selected");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      setResult(text as string);
    };
    reader.readAsText(file);
  };

  return (
    <div className="mt-4">
      <Button variant={"outline"} className="my-3 w-full md:w-auto">
        Read File
      </Button>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
        <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-full">
          <Input type="file" ref={ref} className="w-full md:w-auto" />
          <Button
            onClick={handleReadFile}
            variant={"outline"}
            className="bg-zinc-700 text-white w-full md:w-auto"
          >
            Read File
          </Button>
        </form>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg mt-4 w-full">
        {result && <p className="mt-4">{result}</p>}
      </div>
      <div className="w-[350px] md:w-auto  mt-4">
        <CodeHighLighter code={code} />
      </div>
    </div>
  );
}

export default ReadFile;
