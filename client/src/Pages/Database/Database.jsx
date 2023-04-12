import "./Database.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/header'
import DatabaseModifier from "../../Components/Database/Database-Modifier";
//accept more output from this import such as the result of the query in database modifier component
//the input that output into the database result component then render it with the search results using the input
import DatabaseResult from "../../Components/Database/Database-Result";
import Header2 from "../../Components/Database/Header/Header2";
import Footer1 from "../../Components/footer";

function Database(){
    
    return(
    <div className="database-container">
        <div className="database-content-container">
        <div>
        <Sidebar
                buttonState={{
                    item1: false,
                    item2: true,
                    item3: false,
                    item4: false,
                    item5: false,
                }} />
        </div>
        
        <div className="database-content"> 
            <Header2/>
                <div className="page-title"><p>SYSTEM DATABASE</p></div>
            <DatabaseModifier/>
            <DatabaseResult/>
        </div>
        </div> 
        <Footer1/>
    </div>


        )
}
export default Database