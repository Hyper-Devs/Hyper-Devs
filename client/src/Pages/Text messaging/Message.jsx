import React, { useState } from "react";
import api from "../../api/api"


function Message() {

    const [text, setText] = useState({
        recipient: '',
        textMessage: '',
    });

    const sendText = () => {

        console.log(text)
        api.fetch(`/message?recipient=${text.recipient}&textMessage=${text.textMessage}`)
        .catch(err => console.error(err))
    }


    const space = {
        margin: 8
    }

    const textArea = {
        borderRadius: 4
    }
 
    return(
        <div>
            <div style = {{marginTop: 10}}>
                <h2> Send Text Message </h2>
                <label> Phone Number </label>
                <br />
                <input value={text.recipient}
                    onChange={e => setText({...text, recipient: e.target.value})}/>
                <div style={space}/>
                <label> Message </label>
                <br/>
                <textArea rows={3} value={text.textMessage} style={textArea} 
                    onChange={e => setText({...text, textMessage: e.target.value})}/>
                <div style={space}/>
                <button onClick={sendText}> Send Text </button>
            </div>
        </div>
    );
}

export default Message;
