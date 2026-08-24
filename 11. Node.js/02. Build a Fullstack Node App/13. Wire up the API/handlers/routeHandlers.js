import { getData, sendResponse } from './utils.js'

// handleGet
export function handleGet(req, res) {
   const data = getData()
   const payload = JSON.stringify(data)
   sendResponse(res, 200, 'application/json', payload)
}
/*
Challenge:
1. Export a function called handleGet().
2. It should:
   - use getData() to get the data
   - stringify that data
   - use sendResponse() to serve it

Open the browser and load the sightings page to see if it works.
*/

// handlePost
