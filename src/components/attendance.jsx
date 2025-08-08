import React , {useState} from "react";
import { FaPencilAlt } from "react-icons/fa";
import RemarkModal from "./RemarkModal";

const Attendance = () =>
{
  //status to be stored in attendance collection , that is why , employee_id is important=
    const [selectedRequest,setSelectedRequest] = useState(null);
    const [showAddRemarks, setShowAddRemarks] = useState(false);



    //these will be fetched from attendance_requests collecion in the database , also the requests for the current day only should be shown
    const attendance_requests = [
        {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-03"),
                check_in_time : new Date()
              },

              {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-02"),
                check_in_time : new Date()
              },

              {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-03"),
                check_in_time : new Date()
              },
              {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-03"),
                check_in_time : new Date()
              },
              {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-03"),
                check_in_time : new Date()
              },
              {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-03"),
                check_in_time : new Date()
              },
              {
            
                employee_id: "EMP1001",
                name: "Kedar Rane",
                date: new Date("2025-07-03"),
                check_in_time : new Date()
              }
    ]

    const updateStatus = (employee_id, date , status )  => 
    {
       //send this to the backend and change the status for particular employee_id and date in the attendance collection 

    }
    const handleAdd = async (remark) => 
    {
        if(!selectedRequest)
            return;
        const payload = {
            employee_id: selectedRequest.employee_id,
            date : selectedRequest.date,
            remark : remark
        };
        try 
        {
            const res = await fetch('/api/attendance/remark', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                console.log("Remark added successfully");
                setShowAddRemarks(false);
                setSelectedRequest(null);
              } else {
                console.error("Failed to add remark");
              }
        } 
            
            catch (error) {
              console.error("Error adding remark:", error);
            }
          };

    return(
        <>
        <div className="info-box rounded rounded-2 mt-1 p-3 border border-black w-100" >
                    <div className="info-box-content p-4 bg-white">
                        <h6 className="border-bottom fw-semibold">Attendance Requests</h6>
                            <ul className="list-unstyled">
                            {attendance_requests.map((item,Idx) => (
                                <li key={Idx} className="rounded mb-2 mt-2 d-flex justify-content-between align-items-center text-dark bg-default px-3 py-3 shadow-sm" >
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-medium"
                                         style={{
                                                width: '32px',
                                                height: '32px',
                                                background: 'linear-gradient(135deg, #007bff, #6f42c1)',
                                                fontSize: '14px'
                          }}
                        >
                          {item.name.charAt(0)}
                        </div>
                                    <span>{item.name}</span>
                                    <span>{item.check_in_time.toLocaleTimeString()}</span>
                                    <select name="final_attendance" onChange={(e) => updateStatus(item.employee_id,item.date,  e.target.value)}>
                                        <option value="present"> Present </option>
                                        <option value="absent"> Absent </option>
                                        <option value="half-day" > Leave </option>
                                        <option value="holiday"> Holiday </option>
                                    </select>

                                    <FaPencilAlt title="Add remarks" onClick={()=> {setShowAddRemarks(true); 
                                    setSelectedRequest({
                                        employee_id: item.employee_id,
                                        date: item.date
                                    });
                                    }}/>        
                                
                                </li>
                        ))}
        
                         </ul>
                    </div>
                        <div className="d-flex justify-content-center align-items-center">
                        <a href="./attendanceTable"> <button className="btn btn-primary mt-3"> View Attendance </button></a>  
                        </div>
                                             
               </div>
               {showAddRemarks && <RemarkModal show = {showAddRemarks} onClose = {()=> setShowAddRemarks(false)} onAdd={handleAdd}/>}
               </>
    );

    
};
export default Attendance;