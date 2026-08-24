export const getDataByQueryParams = (localData, queryObj) => {
    const filteredData = localData.filter((item) => {
      for (const [key, value] of Object.entries(queryObj)) {
        if (item[key] !== value) return false
      }
      return true
    })

}
