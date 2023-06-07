import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function OverridingModal({ attendanceLog, handleSubmitOverride }){
    return (        
    <div className='modal fade' id='ovrModal' tabindex='-1' aria-labelledby='ovrModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
                <div className='modal-header bg-success'>
                    <div className='col'>
                        <h1 className='modal-title fs-5 text-light' id='ovrModalLabel'>
                        Override Log
                        </h1>
                    </div>
                    <div className='col-1'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                </div>
                <div className='modal-body'>
                    <div className='row p-3 border rounded'>
                        <div className='row px-3'>
                        <h3 className='text-center fw-bold text-secondary'>Student Log Information</h3>
                        </div>
                        <div className='row px-5  '>
                        <div className='col-4'>
                            <p>Name:</p>
                            <p>ID: </p>
                            <p>RFID: </p>
                        </div>
                        <div className='col mb-2'>
                            <p>{attendanceLog.student_name}</p>
                            <p>{attendanceLog.id}</p>
                            <p>{attendanceLog.rfid}</p>
                        </div>
                        </div>
                        <div className='row px-5'>
                        <h6 className='text-start fw-bold '>Student Log</h6>
                        </div>
                        <div className='row px-5'>
                        <div className='col-4'>
                            <p>Date:</p>
                            <p>Time-in: </p>
                            <p>Time-out: </p>
                        </div>
                        <div className='col'>
                            <p>{attendanceLog.date}</p>
                            <p>{attendanceLog.time_in}</p>
                            <p>{attendanceLog.time_out}</p>
                        </div>
                        </div>
                        <div className='row px-5'>
                        <button
                            className='btn mt-3 mb-3 btn-secondary'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#ovrCollapse'
                            aria-expanded='false'
                            aria-controls='ovrCollapse'
                        >
                            <p className='fs-6'>Override Student Log</p>
                        </button>
                        <div className='collapse' id='ovrCollapse'>
                            <div className='card card-body'>
                            <form onSubmit={handleSubmitOverride}>
                            <div className='row'>
                                <div className='input-group mb-1'>
                                <span className='input-group-text' id='ovrReason'>
                                    Reason
                                </span>
                                <input
                                    name='override-reason'
                                    type='text'
                                    className='form-control'
                                    placeholder='Input reason here'
                                    aria-label='Reason'
                                    aria-describedby='ovrReason'
                                ></input>
                                </div>
                            </div>
                            <div className='row px-3'>
                                <button type='submit' className='btn btn-sm btn-success'>
                                <p className='fs-6'>Override</p>
                                </button>
                            </div>
                            </form>

                            {/* <div className='row mx-2 px-3 mb-1 py-1 bg-secondary bg-opacity-25 rounded'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className='ovrSelectDate' 
                            />
                            </div>
                            <div className='row mx-2 px-3 mb-1 py-1 bg-secondary bg-opacity-25 rounded'>
                            <TimePicker
                                value={selectedTime}
                                onChange={(time) => setSelectedTime(time)}
                                className='ovrSelectTime' 
                            />
                            </div> */}


                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='modal-footer align-end'>
                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                    {/* <button type='button' className='btn btn-secondary'>
                    Save changes
                    </button> */}
                </div>
            </div>
        </div>
    </div>)
}

export default OverridingModal;