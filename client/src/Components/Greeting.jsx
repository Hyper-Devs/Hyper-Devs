
import './Greeting.css'
import border from "../Assets/admin_border.png"

function Greeting({ name = "Noreen"}) {
    return (
        <div className='Greeting'>
            <img src={border}/>
            <div className='welcome-message'><p>Welcome back, {name}.</p><p>Logout</p></div>
            <img src={border}/>
            
        </div>
    )
}

export default Greeting;