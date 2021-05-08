import React, {  useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import classes from './Searchbar.module.css';

/**
 * 
 * @author Alaa Hamed 
 * @example <Searchbar />
 * search bar consists of a search button and input(that validation is done whether input is null or not)
 * function that has the search bar that redirects the user to the search page on clicking on searchbar button and typing in the search bar input
 */

function Searchbar(){


const history = useHistory();// function used to redirect to another oage
////////////////////////////////////////////////////////// route redirecting functions //////////////////////////////////////////////////////////////////////////////////////
/**
 * The function redirects the user to the search page when clicking on the search button
 * @param void
 * @returns 
 */

const handleRoute = () =>{ history.push("/SearchPage");}

//////////////////////////////////////////////////////////////////   setter  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
const [Input,SetInput]=useState(null); // setting input of the input search intially by null unless there is something typed

//////////////////////////////////////////////////////////////////// input validation /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /**
  * @returns void
  * its sets the input by the value given by the event
  * @param {event} e -The event e representing event of typing an input to the search bar input
  */

const InputCheck=(e)=>{SetInput(e.target.value);  }

/////////////////////////////////////////////////// Return of SearchBar Function ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        
<div className={classes.div__Searchbar}>

<input className={classes.input}  data-testid="4" type="text"placeholder="Search...."  onChange={InputCheck} />
<button className={classes.button} data-testid="5"  onClick={!Input?(null):handleRoute} >
 <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/magnifying_glass.png"  height={15} width={25}/>
</button>
</div>
);
}  //Defining the input search abd calling the function Input Check on Change (Typing)
//if no input the input is null then there ternary operator calls the handle route if its not null to go to the search page
//then defining search button and putting a picture using an image url and on click the ternary operator is used to redirect to the searchPage if there is an input and don't take action if the input is null
export default Searchbar;