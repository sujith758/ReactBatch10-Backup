import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[data, setData] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) =>setData(json))
  },[]);

  // useEffect(() =>{

  // },[]); --> compopnent
  return (
    <>
    {/* Keep this home button some where in your page to come back to home page!! */}
    <Link className='text-link' to='/'>Home</Link>
   <div>Data Grid List</div>
   {data.length > 0 ? 
   <div className="row m-0 p-0">
    {data.map((i) => 
      <div className="col-md-3 col-lg-4 col-sm-6 border p-2" >
        <img src={i.thumbnailUrl} className="rounded-border"/>
        <div>
          {i.id}
        </div>
        <div>
          {i.title}
        </div>
      </div>
    )}
   </div>:<div>No Data Found</div>}
   </>
  )
};

export default Navbar;
