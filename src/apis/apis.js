import axios from 'axios'

const BASE_URL = 'attractions'

const request = async config => {
  const response = await axios(config)
  return response.data
}

const API = {
  getAttraction: ({ queryKey }) => {
    if (queryKey[1]) {
      return request({
        method: 'GET',
        url: `${BASE_URL}?query=${queryKey[1]}`,
      })
    }
    if (!queryKey[1]) {
      return request({
        method: 'GET',
        url: `${BASE_URL}`,
      })
    }
  },
  editAttractionLike: ({ queryKey }) => {
    return request({
      method: 'PUT',
      url: `${BASE_URL}/${queryKey[1]}/like`,
    })
  },
  deleteAttractionLike: ({ queryKey }) => {
    return request({
      method: 'DELETE',
      url: `${BASE_URL}/${queryKey[1]}/like`,
    })
  },
}

export default API
