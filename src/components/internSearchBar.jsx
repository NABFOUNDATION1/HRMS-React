import {useState}  from "react";

const InternSearchBar = () =>
{
    const[searchFilter,setSearchFilter] = useState('All Interns');
    return(
    <select className="form-select" style= {{maxWidth: '200px' }}  value={searchFilter} onChange={e=> setSearchFilter(e.target.value)}>
                        <option value="All Interns"> All Interns</option>
                        <option value="IT Interns"> IT Interns </option> 
                        <option value="Development Interns"> Development Interns </option> 
                        {/* <!-- More to be added and confirmed--> */}
    
    </select>
    );
};

export default InternSearchBar;
{/*This will search only from interns*/}