
import './Greeting.css'
import border from "../Assets/admin_border.png"

function Greeting({ name = "Noreen"}) {
    return (
        <div className='Greeting'>
            <div className='welcome-message'><p>Override</p></div>
            
        </div>
    )
}

export default Greeting;