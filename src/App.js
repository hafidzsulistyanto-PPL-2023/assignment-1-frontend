import { useEffect, useState } from 'react'
import User from './components/user'
import { addUser, getAllUser } from './utils/handleApi'

function App() {
  const [user, setUser] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    getAllUser(setUser)
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <h1>PPL Assignment-1 App</h1>

        <div className='top'>
          <input
            type='text'
            placeholder='Enter Your Name Here'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className='add' onClick={() => addUser(name, setName, setUser)}>
            Done
          </div>
        </div>

        <div className='list'>
          {user.map((item) => (
            <User
              key={item._id}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App