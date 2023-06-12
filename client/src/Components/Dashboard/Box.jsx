import { useState, useEffect } from 'react'
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

    const [tipIndex, setTipIndex] = useState(0)
    const tips = [
      'Tips: You can change your profile picture in the account settings!',
      'Tips: You can also change your password in the account settings!',
      'Tips: Access a students information in the database page!',
      'Tips: You can override a students access logs in the override page!',
      'Tips: Enroll and edit a students information in the enrollment page!',
      'Tips: Remember to rehydrate!',
      'Tips: You can search students by groups. You can search all students by school year, grade level, or even by sections.',
      'Tips: You can search students using ID, Name, or First Name + Last Name',
      'Tips: Search a students attendance logs using date ranges (eg. 2023/01/01 - 2023/12/2)'
    ]
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTipIndex((tipIndex + 1) % tips.length)
      }, 10000)
      return () => clearInterval(interval)
    }, [tipIndex, tips.length])

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
                            {/* <div className='icon-boxes'>
                                <img src={circle1} alt='White Circle'/>
                                <img src={circle2} alt='Green Circle'/>
                            </div> */}
                            {/* <div className='icon-boxes'>
                                <img src={bell} alt='Bell'/>
                                <img src={bell} alt='Bell'/>
                            </div> */}
                           
                            
                            <div className='text'>
                                <div className='text-control'>{tips[tipIndex]}</div>  
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box