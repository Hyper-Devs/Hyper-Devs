import { useState } from "react";
import "./clock.css"

const Clocks = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime,1000);

    return(
        <div className="Clocks">
            <p>{currentTime}</p>
        </div>
    )
}

export default Clocks;