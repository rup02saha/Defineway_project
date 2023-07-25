import react from "react"
import Login from "./Login"
import Register from "./Register"
import { useParams,useNavigate } from "react-router-dom"

function Home()
{
    const params=useParams()
    let history=useNavigate() 

    function handleLogout(){
       history('/')        
    } 

    return (
    <>
        <h1>Welcome {params.name} !</h1>
        <button onClick={handleLogout}>Logout</button>         
    </>)
}

export default Home

