import React , {useState, useEffect} from "react";
import axios from 'axios';

import { FcCancel } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import '../request.css';
import AddRemarkModal from "./AddRemarkModal";



const TourRequestTable = () =>
{
    //using dummy data for now
    const[showAddRemark,setShowAddRemark] = useState(false);
    const[selectedRequest,setSelectedRequest] = useState(null);
    const[tourRequests,setTourRequests] = useState([
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
        {
            employee_id:"EMP1007",
            name:"Anushka Pandey",
            application_date:new Date("2025-07-07"),
            start_date: new Date("2025-07-08"),
            end_date:new Date("2025-07-16"),
            project_name: "Dream",
            district:"Mumbai",
            state:"Maharashtra",
            tour_purpose:"Visiting for baseline survey",
            status:"Pending"
        },
    ]);
    const[currentPage,setCurrentPage] = useState(1);
    const[rowsPerPage,setRowsPerPage] = useState(4);
    const indexOfLastItem = rowsPerPage * currentPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;
    const currentItems = tourRequests?.slice(indexOfFirstItem,indexOfLastItem);
    const totalPages = Math.ceil(tourRequests.length/rowsPerPage);



    //useEffect to be used to fetch the requests from backend , in that case the initial state will be an empty array
    // useEffect(()=>
    // {
    //     axios.
    //     get('get/tour/requests')
    //     .then(res =>
    //     {
    //         setTourRequests(res.data)
    //     })
    //     .catch(err=> {console.log(err)

    //     })
    // }, [])
    function getDatesInRange(startDate,endDate)
    {
        const dates = []
        let date = new Date(startDate);
        while(date <= new Date(endDate))
        {
            dates.push(new Date(date))
            date.setDate(date.getDate() + 1)
        }
        return dates;
    }
    const handleApprove = (selectedItem,tourStatus) => 
    {
         
        setTourRequests(prevRequests => 
        
            prevRequests.map(item => item === selectedItem ? {...item, status:tourStatus} : item

            )
        ); 
        //updating the tour_request collection
        // axios.put(`api/tour-requests/${selectedItem.employee_id}`,{
        //     status: tourStatus,
        // }).then(res => console.log("Updated on server:" , res.data))
        // .catch(err=> console.error(err));
        
        //updating the tour collection
        // axios.put(`api/tour/${selectedItem.employee_id}`,{
        //     final_tour:tourStatus,
        //     reviewed_by:"name of the admin fetched from redux",
        //     remarks:"null",
        //     project_name:selectedItem.project_name,
        //     employee_id:selectedItem.employee_id,
        //     name:selectedItem.name,
        //     from_date: selectedItem.start_date,
        //     to_date:selectedItem.end_date,
        //     district:selectedItem.district,
        //     state:selectedItem.state,
        //     tour_purpose: selectedItem.tour_purpose

        // }).then(res => console.log("Updated the leave collection with", res.data))
        // .catch(err => console.error(err));
        
        //updating the attendance collection 
        // const dates = getDatesInRange(selectedItem.start_date,selectedItem.end_date);
        // axios.put(`api/attendance/${selectedItem.employee_id}`,{
        //     employee_id:selectedItem.employee_id,
        //     employee_name:selectedItem.name,
        //     date: dates, //this is an array of all the dates for which the employee has to be marked on tour since the tour request has been approved
        // })


    }

    const handleDisapprove = (selectedItem,tourStatus) =>
    {
        setTourRequests( prevRequests => prevRequests.map(item => item === selectedItem? {...item, status:tourStatus} : item)
    );
    //updating the tour_request collection
        // axios.put(`api/leave-requests/${selectedItem.employee_id}`,{
        //     status: tourStatus,
        // }).then(res => console.log("Updated on server:" , res.data))
        // .catch(err=> console.error(err));
        
       //updating the tour collection
        // axios.put(`api/tour/${selectedItem.employee_id}`,{
        //     final_tour:tourStatus,
        //     reviewed_by:"name of the admin fetched from redux",
        //     remarks:"null",
        //     project_name:selectedItem.project_name,
        //     employee_id:selectedItem.employee_id,
        //     name:selectedItem.name,
        //     from_date: selectedItem.start_date,
        //     to_date:selectedItem.end_date,
        //     district:selectedItem.district,
        //     state:selectedItem.state,
        //     tour_purpose: selectedItem.tour_purpose

        // }).then(res => console.log("Updated the leave collection with", res.data))
        // .catch(err => console.error(err));
    }
    const handleAddRemark = (remark,selectedItem) =>
    {
        //updating the tour collection where supervisor will add remark if needed
        // axios.put(`api/leave/${selectedItem.employee_id}`,
        //     {
        //         remarks:remark,
        //     }
        // ).then(res => console.log("Updated the remark in leave collection with",res.data))
        // .catch(err=> console.error(err));
    }
    const handlePrev = () =>
    {
        setCurrentPage((prev)=> Math.max(prev-1,1))
    }
    const handleNext = () =>
    {
        setCurrentPage((prev) => Math.min(prev+1,totalPages))
    }
    const handlePageClick = (pageNum) =>
    {
        setCurrentPage(pageNum)
    }
    return(
        <>
        <div className="outer-box">
            
            <table className="request-table m-4 p-2">
                <thead>
                    <tr>
                    <th>Applicate Date</th>
                        
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Project Name</th>
                        <th>District</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems?.filter(item => item.status === 'Pending').map((item,index) =>
                    (
                        <tr key={index}>
                            <td> {item.application_date.toISOString().split("T")[0]} </td>
                           
                            <td> {item.name} </td>
                            <td> {item.start_date.toISOString().split("T")[0]} </td>
                            <td> {item.end_date.toISOString().split("T")[0]} </td>
                            <td> {item.project_name} </td>
                            <td>{item.district}</td>
                           
                            <td><button className="btn action-btn" data-tip="Approve Request" onClick={()=>handleApprove(item,"Approved")} > <FcApproval/></button> <button className="btn action-btn" > <FcCancel title="Disapprove Request" onClick={() => handleDisapprove(item,"Disapproved")} /></button>  <button className="btn action-btn"><FaEye title="View Remarks"/></button>
                             <button className="btn action-btn" onClick={()=>{setShowAddRemark(true); setSelectedRequest(item);}} title="Add Remark"> <BsPencilSquare/> </button></td>
                            
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
        <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
            {Array.from({length:totalPages}, (_,index) => (
                <button key={index} onClick={()=> handlePageClick(index+1)} className={currentPage === index+1 ? 'active' : ''}> {index+1} </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
        <div className="outer-box">
            <table className="status-table m-3 p-2">
                <thead>
                    <tr>
                        <th>Applicate Date</th>
                        
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Project Name</th>
                        <th>District</th>
                       
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentItems?.filter(item => item.status !== 'Pending').map((item,index) => 
                    (
                        <tr key={index} className={item.status === 'Approved' ? 'approved-row' : 'disapproved-row'}>
                            <td> {item.application_date.toISOString().split("T")[0]} </td>
                           
                            <td> {item.name} </td>
                            <td> {item.start_date.toISOString().split("T")[0]} </td>
                            <td> {item.end_date.toISOString().split("T")[0]} </td>
                            <td> {item.project_name} </td>
                            <td> {item.district}</td>
                           
                            <td> {item.status} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
            {Array.from({length:totalPages}, (_,index) => (
                <button key={index} onClick={()=> handlePageClick(index+1)} className={currentPage === index+1 ? 'active' : ''}> {index+1} </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
        {showAddRemark && <AddRemarkModal show={showAddRemark} onAdd={handleAddRemark} onClose={()=> setShowAddRemark(false)} selectedRequest={selectedRequest} /> }
        </>
    );
     
};
export default TourRequestTable;
