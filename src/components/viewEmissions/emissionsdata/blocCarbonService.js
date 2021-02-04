export function fetchData(url, inputs, cb) {
  console.log(`Fetching from: ${url}`)
  fetch(`${url}/calculate`, {
    method: 'post',
    body: JSON.stringify({payload: inputs})
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    const { movies, sites } = data;
    cb({ movies, sites });
  });
}
