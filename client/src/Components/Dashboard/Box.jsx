import Clocks from '../Clocks'
import './Box.css'
import circle1 from '../../Assets/Ellipse 14.png'
import circle2 from '../../Assets/Ellipse 15.png'
import bell from '../../Assets/Vector.png'



function Box() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString("default", { month: "long" });
    const currentYear = currentDate.getFullYear();

    return (
        <div className='LiveBox' data-testid="box-test">
            <div className='rectangle'>
                <p style={{fontSize: 32}}>Live RFID Access</p>
                <div className='rectangle1'>
                    <div className='Date'>
                        <div className='Month'>{currentMonth}</div>
                        <div className='Day'>{currentDay}</div>
                        <div className='Year'>{currentYear}</div>
                    </div>
                    <div className="clock-box">
                        <div className='clock'><Clocks/></div>
                        <div className='entrance-exit'>
                            <div className='icon-boxes'>
                                <img src={circle1} alt='White Circle'/>
                                <img src={circle2} alt='Green Circle'/>
                            </div>
                            <div className='icon-boxes'>
                                <img src={bell} alt='Bell'/>
                                <img src={bell} alt='Bell'/>
                            </div>
                           
                            
                            <div className='text'>
                               <div className='text-control'> ENTRANCE </div>
                               <div className='text-control'> EXIT </div>    
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box