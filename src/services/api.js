import axios from 'axios'

const api = axios.create({
    // Através do USB deve-se colocar o IP para conectar no localhost
    baseURL: 'http://10.0.0.104:3333'
})

export default api