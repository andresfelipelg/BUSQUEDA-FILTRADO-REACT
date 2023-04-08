import {useState, useEffect} from 'react';
import {Barra} from '../components/Barra'

const URL = 'https://jsonplaceholder.typicode.com/users';
export const Search = () => {
    //TODO: se setean los hooks
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    //llamando la api
    const showData  = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setUsers(data)
    }
        //TODO: funcion para buscar
    const searcher = (e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //TODO: funcion para filtrar

    const results = !search ?
     users : 
     users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))  
        

    useEffect(() => {
        showData();
    },[])
    

  return (
    <div>
        <Barra searcher={searcher} results={results}/>
      <table className="table table-striped table-hover mt-5 shadow-lg">
         <thead>
            <tr className='bg-curso text-white'>
                <th>User</th>
                <th>Username</th>
            </tr>
         </thead>

        <tbody>
            {
                results.map((user) =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}
