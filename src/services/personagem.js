import axios from 'axios'


const baseURL = 'https://api-ezdevs.herokuapp.com/heros/'

export default {
  getAllPersona: () => {
    return axios.get(baseURL)
  }
}
