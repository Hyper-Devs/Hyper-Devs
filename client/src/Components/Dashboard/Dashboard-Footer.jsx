import "./Dashboard-Footer.css";
import science_logo from "../../Assets/dept_compsci.png";
import up_logo from "../../Assets/upc_logo.png";

function DashFoot (){
  return(
    <div className='Foot'>
        <div className="presented"><p>A project presented to:</p></div>
        <div className="beneficiaries">
          <p>Department of Computer Science</p>
          <p>University of the Philippines Cebu</p>
          </div>
        <div className="logos"><img src={science_logo} /></div>
        <div className="logos"><img src={up_logo} /></div>
        <div className="collaborators"><p>In collaboration with:   University of the Philippines - Cebu High School</p></div>
        <div className="messaging"><p>Messaging powered by:</p></div>
    </div>
  )
}

export default DashFoot