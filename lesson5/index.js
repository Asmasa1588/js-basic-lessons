console.log(" Hi from USA!");
async function extractData() {
  const response = await fetch(
    "https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8"
  );
  const data = await response.json();
  const { results } = data;
  // this is an example of object destructuring.
  const [firstArrayElement, secondArrayElement] = results;
  // this is array destructuring ex.

  console.log(
    "first two elements of the result of array",
    firstArrayElement,
    secondArrayElement
  );
}
extractData();
