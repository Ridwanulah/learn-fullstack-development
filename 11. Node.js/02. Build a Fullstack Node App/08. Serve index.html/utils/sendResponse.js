/*
Challenge 2:

- Create and export a function called sendResponse().
  What 4 things should this function take in as parameters?

*/

export function sendResponse(res, filePath) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(filePath)
}
