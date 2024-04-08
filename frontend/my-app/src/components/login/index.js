import {useNavigate} from 'react-router-dom'
import './index.css'
import {useState} from 'react'
//import Cookies from 'js-cookie'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [err, setErr] = useState()
    
    const navigate = useNavigate()

    

    const onCheckingUser = async(e) => {
        e.preventDefault()
        // const url = "http://localhost:5000/login"
        const user = "trial"
        const pass = "assignment123"
        // const useData = {
        //     phonenumber: phonenumber,
        //     password: password
        // }
        // const options = {
        //     method:"POST",
        //     headers:{
        //         "Content-type": "Application/json"
        //     },
        //     body: JSON.stringify(useData)
        // }
        // try{
        //     const response = await fetch(url, options)
        //     const data = await response.json()
        //     if(response.ok){
        //         Cookies.set('jwt_token', data.jwtToken)
        //         navigate("/home")
                
        //     }else{
        //         console.log(data.msg)
        //         setSerr(data.msg)
        //     }
        // }catch(e){
        //     console.log(e)
        // }
        if(username === user && password === pass){
            navigate("/")
        }else{
            setErr("*user password not match")
        }
        
    }

    return(
    <div className = 'login'>
        
            <form className = "form" onSubmit={onCheckingUser}>
                <p>username: trial</p>
                <p>password: assignment123</p>
            <h1 className = 'register'>Login</h1>
                <div className='input-container'>
                <label>Username</label><br />
                <input placeholder='Username' className='input' value={username} type = 'text' onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='input-container'>
                <label>Password</label><br />
                <input placeholder='Password' className='input' value={password} type = 'password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                <button className='submit-button' type='submit'>Login</button>
                {/* <Link to = '/register'><button className='submit-button' type='submit'>Register</button></Link> */}
                <button className='submit-button' type='submit'>Register</button>
                </div>
                <p className='err'>{err}</p>
            </form>
  
    </div>
    )
    
}

export default Login