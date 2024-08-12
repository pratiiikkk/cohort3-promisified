import React, { useState } from 'react'
import { CodeHighLighter } from './CodeHighLighter'
import { Input } from './ui/input';
import { Button } from './ui/button';
const code = `//promisified version of fetch

export function fetchAsync(url: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

//fetch data from a url
 async function fetchData(url: string) {
  try {
    const response = await fetchAsync(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}`
function Fetch() {
    const [result, setResult] = useState<string>("");
    const[loading, setLoading] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('https://jsonplaceholder.typicode.com/posts/1');
    const ref = React.useRef<HTMLInputElement>(null);
    const fetchAsync = async (url: string): Promise<Response> => {
        return new Promise((resolve, reject) => {
          fetch(url)
            .then(response => resolve(response))
            .catch(error => reject(error));
        });
      }

    const fetchData = async (url: string) => {
        try {
          const response = await fetchAsync(url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      }

    const handleSubmit = async (e:any) => {
        setLoading(true);
        e.preventDefault();
        const data = await fetchData(url);
        setResult(JSON.stringify(data, null, 2));
        setLoading(false);
    }
  return (
    <div
    className='mt-4'
    >
         <Button variant={"outline"}
         className="my-3"
         >fetch</Button>
            <form>

                <div
                className='flex space-x-4 items-center'
                >
                    <Input type="text" placeholder="Enter URL"
                    ref={ref}
                    onChange={(e) => setUrl(e.target.value)}
                    defaultValue={'https://jsonplaceholder.typicode.com/posts/1'}
                 />
                    <Button
                    disabled={loading}
                    variant={"outline"}
                    onClick={handleSubmit}
                    className="bg-zinc-700 text-white"
                    >
                        {
                            loading ? 'Loading' : 'Fetch'
                        }
                    </Button>
                </div>
            </form>
            <div
            className='w-[700px]'
            >
            <CodeHighLighter code={result}/>

            </div>
            <CodeHighLighter code={code}/> 
    </div>
  )
}

export default Fetch