import {useState}  from "react";

const CandidateSearchBar = () =>
{
    const[searchFilter,setSearchFilter] = useState('All Candidates');
    return(
    <select className="form-select" style= {{maxWidth: '200px' }}  value={searchFilter} onChange={e=> setSearchFilter(e.target.value)}>
                        <option value="All Candidates"> All Candidates </option>
                        <option value="Current Candidates"> Current Candidates </option> 
                        {/* <!-- More to be added and confirmed--> */}
    
    </select>
    );
};

export default CandidateSearchBar;
{/* This will search in employee + intern*/}