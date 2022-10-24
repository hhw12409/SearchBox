import axios from 'axios'

const BASE_URL = 'attractions'

const request = async config => {
  const response = await axios(config)
  return response.data
}

const API = {
  getAttraction: () => {
    return request({
      method: 'GET',
      url: `${BASE_URL}`,
    })
  },
}

export default API
