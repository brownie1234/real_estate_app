import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Staff from './Staff'
import Tenant from './Tenant'
import Manager from './Manager'

export default function Login() {
    const [creds, setCreds] = useState(
        {
            id: '',
            password: ''
        }
    )
    const [login, setLogin] = useState(
        {
            loggedIn: false,
            id: null,
            role: null
        }
    )
    if (login.loggedIn){
        if(login.role === 'staff'){
            return <Staff id={login.id}/>
        }
        if(login.role === 'tenant'){
            return <Tenant id={login.id}/>
        }
        if(login.role === 'manager'){
            return <Manager id={login.id}/>
        }
    }
    async function authenticate(){
        await axios.post('http://localhost:3001/login', creds)
        .then(res=>{
            if(res.data.loggedIn){
                setLogin({
                    loggedIn: true,
                    id: res.data.id,
                    role: res.data.role
                })
            }
        })
    }
  return (
    <div className='login'>
        <h1>Login</h1>
        <div>
        <input type="text" placeholder="id" value={creds.username} onChange={(e)=>setCreds({...creds, id: e.target.value})}/>
        </div>
        <div>
        <input type="password" placeholder="password" value={creds.password} onChange={(e)=>setCreds({...creds, password: e.target.value})}/>
        </div>
        <button onClick={()=>authenticate()}>Login</button>
    </div>
  )
}
