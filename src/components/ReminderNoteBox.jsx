import InfoBox from "./infoBox";
import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ReminderNoteBox () =>
{
    const fetchedReminders = [{text : "Gujarat Visit" , date:  "25th May 2025 " , color: "No color"},
        {text:"Website Update" ,date:"22 May,2025" ,  color:"yellow"},
        {text:"Board Meeting", date:"22 May,2025" , color:"Red"}
    ]; //data will be fetched in this/similar form from the database 
    [reminders,setReminders] = useState(fetchedReminders);
    const handleDelete
}