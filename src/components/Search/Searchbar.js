import React, {  useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Searchbar.css';





function Searchbar(){

    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/SearchPage");
    }
    
  const [Input,SetInput]=useState(null);
  const InputCheck=(e)=>{
SetInput(e.target.value);

  }


    return(
        
<div className="Searchbar">

    <input type="text"placeholder="Search...."  onChange={InputCheck} />
       <button     onClick={!Input?(null):handleRoute} >
       <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/magnifying_glass.png"  height={15} width={25}/>
    
</button>
</div>

);
}
export default Searchbar;