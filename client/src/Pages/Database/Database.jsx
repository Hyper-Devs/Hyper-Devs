import "./Database.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/header'
import DatabaseModifier from "../../Components/Database/Database-Modifier";
import DatabaseResult from "../../Components/Database/Database-Result";
import Header2 from "../../Components/Database/Header/Header2";
import Footer1 from "../../Components/footer";

function Database(){
    
    return(
    <div className="database-container">
        <div className="database-default">
        <Sidebar
                buttonState={{
                    item1: false,
                    item2: false,
                    item3: true,
                    item4: false,
                    item5: false,
                }} />
        </div>
        
        <div className="database-content-container ">
            
            <Header2/>
                <div className="page-title"><p>SYSTEM DATABASE</p></div>
            <DatabaseModifier/>
            <DatabaseResult/>
            <div className="database-footer"><Footer1/></div>
        </div> 
    </div>


        )
}
export default Database