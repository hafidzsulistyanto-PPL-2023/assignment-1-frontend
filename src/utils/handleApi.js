import axios from 'axios'

const baseUrl = 'http://localhost:5000'

const getAllUser = (setUser) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log('data ---> ', data)
    setUser(data)
  })
}

const addUser = (name, setName, setUser) => {
  axios
    .post(`${baseUrl}/save`, { name })
    .then((data) => {
      console.log(data)
      setName('')
      getAllUser(setUser)
    })
    .catch((err) => console.log(err))
}

export { getAllUser, addUser }
