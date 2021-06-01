import './Following.css'
import { useState } from 'react';

const arr = [ {displayName:'MohamedEtraKhayat',firstName:'Ahmed',lastName:'El Zahawy Badr', photoCount:9, status:'Family'}, {displayName:'u2', firstName:'Alaa',lastName:'Tahtawy', photoCount:10, status:'Following'} ]

const Following = () => {
    
    const [followStatus,setFollowStatus] = useState('Following')
    const [showEdit,setShowEdit] = useState(false)
    const [currUser,setCurrUser] = useState(null)
    const [following,setFollowing] = useState(false)
    const [friend,setFriend] = useState(false)
    const [family,setFamily] = useState(false)

    const editHandler = (usr) => {
        setShowEdit(true)
        setCurrUser(usr)
        console.log(usr)
    }

    const okHandle = () => {
        setShowEdit(false)
        var boxFol = document.getElementById('following')
        var boxFri = document.getElementById('friend')
        var boxFam = document.getElementById('family')
        if (boxFol.checked)
        {
            setFollowing(true);
            console.log("Follow selected")
        }
        if (boxFri.checked)
        {
            setFriend(true);
            console.log("Friends selected")
        }
        if (boxFam.checked)
        {
            setFamily(true);
            console.log("Family selected")
        }
    }

    return (
    <div>
    <h2 className='pplFollow'>People you follow</h2>
    <div className='show'>Show:</div>
    {showEdit &&(
    <div>
        <div className='popUpEdit'>
        </div>
        <div className='editBg'>
            <div className='upperBg'>
                <h3 className='mainHead'>Edit your relationship with {currUser.displayName}</h3>
            </div>
            <button className='okButton' onClick={okHandle}>Ok</button>
            <button className='cancelButton' onClick={()=>setShowEdit(false)}>Cancel</button>
            <div className='firstOption'>
            <input type='checkbox' name='checkBoxFol' id='following' value='following'/>
            <label for='following'>Following</label>
            </div>
            <div className='secondOption'>
                <input type='checkbox' name='checkBoxFri' id='friend' value='friend'/>
                <label for='friend'>Add as friend</label>
            </div>
            <div className='thirdOption'>
                <input type='checkbox' name='checkBoxFam' id='family' value='family'/>
                <label for='family'>Add as family</label>
            </div>
            </div>
        
    </div>)}
    <select className='options'>
            <option disabled selected value>----</option>
            <option value='everyone'>everyone</option>
            <option value='following'>Following</option>
            <option value="friends">Friends</option>
            <option value="family">Family</option>
            <option value="famAndFriends">Friends and Family</option>
    </select>
    <div className='head'>
        <div className='nameUsr'>Name</div>
        <div className='photosUsr'>Public photos</div>
        <div className='listAs'>You list them as..</div>
    </div>
    <div className='usersInfo'>
        {arr.map(usr => (
        <div>
           <div className='nameUser'>
               {usr.displayName}
               <div className='realName'>
                    <div className='fName'>
                        {usr.firstName}
                    </div>
                    <div className='lName'>
                        {usr.lastName}
                    </div>
               </div>
            </div>
           <div className='countPhoto'>{usr.photoCount}</div>
           <div className='listStatus'>
               {usr.status}
               <div onClick={() =>editHandler(usr)}>(edit)</div>
               </div>
        </div>
        ))}
    </div>
    
    
    </div>
    )
}

export default Following;