import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Searchbar.js'
import './SearchPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import PhotoIcon from '@material-ui/icons/Photo';
import ForumIcon from '@material-ui/icons/Forum';


function SearchPage(){

    const history = useHistory();
    const links1 = [
        
            {idd:1 ,url:"https://wallpapercave.com/uwp/uwp978614.jpeg" },
            {idd:2  ,url:"https://wallpapercave.com/fwp/wp5716268.jpg" },
            {idd:3,  url:"https://wallpapercave.com/fwp/wp5981208.jpg"  },
            {idd:4  , url:"https://wallpapercave.com/uwp/uwp404136.jpeg" },
            {idd:5, url:"https://wallpapercave.com/wp/wp170202.jpg"     },
            {idd:6, url:"https://wallpapercave.com/wp/wp4202055.jpg"     },
            {idd:7 , url:"https://wallpapercave.com/wp/FMSk24L.jpg"    },
            {idd:8, url:"https://wallpapercave.com/wp/9T3NTEL.jpg"    },
            {idd:9, url:"https://wallpapercave.com/wp/wp4203600.jpg"      },
            {idd:10, url:"https://wallpapercave.com/wp/wp4079759.jpg"      },
            {idd:11, url:"https://wallpapercave.com/wp/wp2586072.jpg"      },
            {idd:12, url:"https://wallpapercave.com/wp/wp2882301.jpg"        }];
const cardsPeoples=[
    {id2 :1 ,follows:250,bio:"student at Cairo University",imges:90, join:"joined jan 2013",Name:"John" ,urll:"https://images.unsplash.com/photo-1608549036505-ead5b1de5417?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id2:2,follows:600,bio:"Hey",Name:"Laila",imges:69,join:"joined nov 2014",urll:"https://images.unsplash.com/photo-1545506475-5a0985c3ca79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id2:3,follows:800,bio:"Swimmer,Worlds top Champion",imges:109,Name:"Zeina",join:"joined mar 2010", urll:"https://images.unsplash.com/photo-1613005798967-632017e477c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id2:4,follows:287,Name:"Yehia",bio:"I love my cats", imges:2,join:" joined dec 2018", urll:"https://images.unsplash.com/photo-1594235623648-adceb49b5336?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }];
   const cardsGroups=[{id3:1,since:"Since 2007",Name2:"Animal Lovers",follows2:700,imges2:67, comments:100,urlll:"https://wallpapercave.com/uwp/uwp517748.jpeg"},{id3:2,since:"Since 2019",Name2:"All about cars",follows2:100,imges2:45, comments:20,urlll:"https://wallpapercave.com/wp/wp1857258.jpg"},{id3:3,since:"Since 2013",Name2:"Food",follows2:900,imges2:370, comments:800,urlll:"https://wallpapercave.com/wp/wp8843500.jpg"},{id3:4,since:"Since 2017",Name2:"Photography",follows2:470,imges2:500, comments:700,urlll:"https://wallpapercave.com/wp/wp1845538.jpg"}] ;

    
    const[Images,setImages]=useState(links1);
            const[TabSlection,SetTabSelection]=useState(1);
            const[People,SetPeople]=useState(cardsPeoples);
      const[Groups,setGroups]=useState(cardsGroups);
           const handleImageRoute=(num)=>{
       
            history.push("/images"+num);


           }
            
           const handleCardRoute=(num)=>{
            
                history.push("/people"+num);
    
    
               }
            const   handleGroupRoute=(num)=>{
                history.push("/Group"+num);


            }


         var cardStyle={
display:'grid' ,
width: '26vw' ,
height:'7vw',
border:'black'

           }
           var  ButtonStyle={
            background:'blue',
          weight:'bolder',
color:'white',
width:'20px',

           }
  

   


      

    return(
   
  




<div className="Tabs">

<button 

 className={TabSlection === 1 ? "selected-tab1" : "tab1"}
    onClick={() => SetTabSelection(1)  }

 >
    Photos
 </button>
 <button  className="tab2"
    className={TabSlection === 2 ? "selected-tab2" : "tab2"}
    onClick={() => SetTabSelection(2)}
 >
    People
 </button>
 <button  className="tab3"
    className={TabSlection === 3 ? "selected-tab3" : "tab3"}
    onClick={() => SetTabSelection(3)}
 >
Groups
 </button>
 {TabSlection === 1 ?  Images.map( (Image) => <img className="PhotoG" src={Image.url} onClick={ ( )=> handleImageRoute(Image.idd)} width={200} height={200}     /> )  : (null)}
{TabSlection===2 ? People.map((People) => <Card className="peopleC" style={cardStyle}  onClick={()=>handleCardRoute(People.id2)}>
<CardHeader avatar={<Avatar >
    
    <img className="photoPeople"src={People.urll} width={50} height={50} ></img>
    
</Avatar>} 
action={<Button className="follower"  size='small'  style={ButtonStyle} >
Follow+
</Button>}

title={People.Name} 
subheader={People.bio}
/>

        <CardActions >
 <IconButton aria-label="Photoss" height={1}>

<PhotoIcon/>
{People.imges}
</IconButton>

<IconButton aria-label="Followers" height={1}>
    
<PeopleIcon/>
{People.follows} 
</IconButton>
{People.join}


</CardActions>
        
</Card>):(null)}

{TabSlection===3?Groups.map((Group) => <Card className="groupC" style={cardStyle}  onClick={()=>handleGroupRoute(Group.id3)}>
<CardHeader avatar={<Avatar >
    
    <img className="GroupPeople"src={Group.urlll} width={50} height={50} ></img>
    
</Avatar>} 
action={<Button className="follower"  size='small'  style={ButtonStyle} >
+join
</Button>}

title={Group.Name2} 
subheader={Group.since}
/>

 <CardActions >
 <IconButton aria-label="Followers" height={1}>
    
<PeopleIcon/>
{Group.follows2} 
    </IconButton>
 <IconButton aria-label="Photoss" height={1}>

<PhotoIcon/>
{Group.imges2}
</IconButton>
<IconButton aria-label="Commentss" height={1}>

<ForumIcon/>
{Group.comments}
</IconButton>






</CardActions>
        
</Card>):(null)}







</div>





);
}
export default SearchPage;