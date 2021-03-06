import axios from 'axios'

export const createInstance = (req) => {
  return axios.create({
    baseURL: 'http://47.95.113.63/ssr',
    headers: {
      cookie: req.get('cookie')
    }
  })
}

export default createInstance