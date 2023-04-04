import "./Database.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/header'
import DatabaseModifier from "../../Components/Database/Database-Modifier";
import DatabaseResult from "../../Components/Database/Database-Result";

function Database(){
    
    return(
    <div className="database-container">
        {/* <div className="database-default">
        <Header/>
        <Sidebar
                buttonState={{
                    item1: false,
                    item2: false,
                    item3: true,
                    item4: false,
                    item5: false,
                }} />
        </div> */}
        
        <div className="database-content-container">
            <DatabaseModifier/>
            <DatabaseResult/>
        </div> 
    </div>


        )
}
export default Database