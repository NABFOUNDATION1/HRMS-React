import {useState}  from "react";

const EmployeeSearchBar = () =>
{
    const[searchFilter,setSearchFilter] = useState('All Candidates');
    return(
    <select className="form-select" style= {{maxWidth: '200px' }}  value={searchFilter} onChange={e=> setSearchFilter(e.target.value)}>
                        <option value="All Employees"> All Employees</option>
                        <option value="Current Employees"> Current Employees </option> 
                        {/* <!-- More to be added and confirmed--> */}
    
    </select>
    );
};

export default EmployeeSearchBar;
{/*This will search only from interns*/}