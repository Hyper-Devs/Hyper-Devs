import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import axios from 'axios';



function BSNewSResults(){
    const [file, setFile] = useState(null);
    
    function handleFileInputChange(event) {
        setFile(event.target.files[0]);
    };

    function handleFileUpload(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('csv', file);

        addStudents(formData)
    };

    const addStudents = async (batchFile) => {
        try {
            const result = await axios.post(`http://localhost:8800/enroll/batch/new-student`, batchFile, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }});
            console.log(result)
        } catch (error){
            console.log(error)
        }
    };


    return(
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col">
                    <div className="row border border-success bg-secondary bg-opacity-25 rounded p-5">
                    <div className="row p-3 mb-2 border border-success rounded"> 
                        <label for="SInfo" class="form-label text-center text-success">UPLOAD STUDENT INFORMATION</label>
                        <form onSubmit={handleFileUpload}>
                            <div class="input-group">
                                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                <input 
                                    onChange={handleFileInputChange} 
                                    type="file" 
                                    name="batch-enroll-file" 
                                    class="form-control bg-success bg-opacity-50" 
                                    id="inputGroupFile01" 
                                    accept="application/csv,text/csv">  
                                     
                                </input>
                                <button type="submit" class="btn btn-success">Enroll Student</button>
                            </div>
                        </form>
                    </div>
                    {/* <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Enter Number of Students" aria-describedby="button-enterRange"></input>
                    <button class="btn btn-success text-light btn-outline-secondary" type="button" id="button-genFormIDNo">Generate Forms and ID Numbers</button>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BSNewSResults