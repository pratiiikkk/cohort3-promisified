"use client";
import React, { useRef, useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CodeHighLighter } from "./CodeHighLighter";

const code = `
function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
wait(2000).then(() => {
    console.log('2 seconds have passed');
});
`;

function SetTimeoutComponent() {
  const [time, setTime] = useState<number>(1000);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const handlesubmit = useCallback(async () => {
    setLoading(true);
    try {
      await wait(time);
      setResult(`${time} milliseconds have passed`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [time]);

  return (
    <div>
      <div>
        <Button variant={"outline"}>setTimeout</Button>
        <div className="w-[700px] rounded-lg mt-4 flex justify-between ">
          <div className="items-center space-x-4 w-full">
            <div className="flex">
              <Input
                ref={ref}
                type="number"
                defaultValue={1000}
                onChange={(e) => setTime(parseInt(e.target.value))}
              />
              <Button
                onClick={handlesubmit}
                variant={"ghost"}

                className="ml-4 bg-zinc-700 text-white"
              >
                {loading ? "Loading" : "Submit"}
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg mt-4">Result: {result}</div>
        <code>
          <CodeHighLighter code={code} />
        </code>
      </div>
    </div>
  );
}

export default SetTimeoutComponent;