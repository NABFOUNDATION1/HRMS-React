import InfoBox from "./infoBox";
import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import AddReminderModal from "./addReminderModal";
import "../styles.css";
import TestModal from "./test";


const ReminderNoteBox =  () =>
{
    
    console.log("ReminderNoteBox rendering");
    const fetchedReminders = [{text : "Gujarat Visit" , date:  new Date("2025-05-23") , color: "default"},
        {text:"Website Update" ,date:new Date("2025-05-23") ,  color:"warning"},
        {text:"Board Meeting", date:new Date("2025-05-23") , color:"danger"} //colour options will be yellow , red no color but they will be stored in bs format to drectly give ot the colour 
    ]; //data will be fetched in this/similar form from the database 
    const [reminders,setReminders] = useState(fetchedReminders);

    //function when mark as completed will be clicked.
    const handleDelete = (index) =>
    {
        const updatedReminders = []
        for(let i=0;i<reminders.length;++i)
        {
            if(i === index)
                continue;
            updatedReminders.push(reminders[i]);
        }
        setReminders(updatedReminders);
    }
    const [showModal, setshowModal] = useState(false);
//frontend addition and deletion working , have to add and delete the same from database using backend -- this to be added
    const handleAddReminder = (newReminder) =>
    {
        setReminders([...reminders,newReminder]);

    }
    return(
        <div className="container w-50 bg-white rounded-2" title="Reminder/Note">
            <h6 className="fw-seminold border-bottom pb-2">Notes / Reminder </h6>
            <div className="container-content w-100">
            <ul className="list-unstyled">
                {reminders.map((note,index)=>(
                    <li key={index} className={`rounded mb-2 mt-2 d-flex justify-content-between align-items-center bg-${note.color}  ${note.color === 'warning' || note.color== 'default' ? "text-dark" : "text-light"}`}>
                        <span>{note.text}</span> 
                        <span> {note.date.toLocaleDateString()} </span> 
                        <span> <FaCheck onClick={()=> handleDelete(index)}  style={{cursor:"pointer"}} title="Mark as Done"></FaCheck> </span>
                    </li>
                ))}
            </ul>
            </div>
            <div className="d-flex justify-content-center">
            <button className="rounded-2 bg-success p-2 mt-2 mb-2 border-0" onClick= {()=> setshowModal(true) }>Add New</button>
            </div>

          <AddReminderModal 
            show={showModal}
            onClose = { ()=> setshowModal(false)}
            onAdd ={handleAddReminder}/>

            
        </div>

    
    );
};
export default ReminderNoteBox;