import Clocks from '../Clocks'
import './Box.css'

function Box() {
    return (
        <div className='LiveBox'>
            <div className='rectangle'>
                <p>Live RFID Access</p>
                <div className='rectangle2'>
                    <div className='Date'>
                        <div className='Month'>March</div>
                        <div className='Day'>08</div>
                        <div className='Year'>2023</div>
                    </div>
                    <div className='rectangle3'>
                        <div className='clock'><Clocks/></div>
                        <div className='entrance-exit'>
                            ENTRANCE
                            <div></div>EXIT
                        </div>
                        <div className='Icon-boxes'>

                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Box