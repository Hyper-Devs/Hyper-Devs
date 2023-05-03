import Clocks from '../Clocks'
import './Box.css'
import circle1 from '../../Assets/Ellipse 14.png'
import circle2 from '../../Assets/Ellipse 15.png'
import bell from '../../Assets/Vector.png'



function Box() {
    return (
        <div className='LiveBox'>
            <div className='rectangle'>
                <p style={{fontSize: 32}}>Live RFID Access</p>
                <div className='rectangle1'>
                    <div className='Date'>
                        <div className='Month'>March</div>
                        <div className='Day'>08</div>
                        <div className='Year'>2023</div>
                    </div>
                    <div className="clock-box">
                        <div className='clock'><Clocks/></div>
                        <div className='entrance-exit'>
                            <div className='icon-boxes'>
                                <img src={circle1}/>
                                <img src={circle2}/>
                            </div>
                            <div className='icon-boxes'>
                                <img src={bell}/>
                                <img src={bell}/>
                            </div>
                           
                            
                            <div className='text'>
                                ENTRANCE
                                <div/>
                                EXIT
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box