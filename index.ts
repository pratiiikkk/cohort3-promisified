//promisified version of fetch

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
}