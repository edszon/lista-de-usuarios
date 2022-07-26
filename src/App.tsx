import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import cheerio from 'cheerio'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => 
    {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(res => setUsers (res)) 
    }, [])

  return (
    <div>
      <h1>lista de usuarios</h1>
      <List>
        {
        users.map((user: any) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.username} />
          </ListItem>))
        }

      </List>
    </div>
  )
}

export default App


// function App() {
//   const [titulos, setTitulos] = useState([])

//   useEffect(() => 
//     {
//       axios.get('https://www.youtube.com/watch?v=-3lqUHeZs_0')
//       .then(response => 
//         {
//           const html = response.data
//             const $ = cheerio.load(html)
//             $('.style-scope ytd-watch-metadata')
//         }
        
//         )
//       .then(response => response.json())
//       .then(res => setTitulos (res)) 
//     }, [])

//   return (
//     <div>
//       <h1>lista de usuarios</h1>
//       <List>
//         {
//         titulos.map((user: any) => (
//           <ListItem key={user.id}>
//             <ListItemText primary={user.username} />
//           </ListItem>))
//         }

//       </List>
//     </div>
//   )
// }

// export default App
