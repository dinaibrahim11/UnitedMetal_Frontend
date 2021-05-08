import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService/UserService';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };

        this.userService = new UserService();
    }

    componentDidMount() {
        console.log("Home Page");
       
        this.userService.getAllUsers().then(repsonse => {
            this.setState({ users: repsonse });
        }
        );
      
    }
//when you integrate change the image lik=nk with the user photo post link
   renderUsers = () => {
        return this.state.users.map((user, key) => {
            return (
                  <div>
                       <div id="carousel-home" style={{}}>
                         <div className="owl-carousel owl-theme">
                         </div>
                       </div>
                         <li key={key}>
                    <Link className='link' to={`/user/${user.id}`}>{user.name}</Link>
                         </li>
                         <li>
                           <a href={`/user/${user.id}`} className="img_container">
                             <img src="https://braes.co/images/cat/haircare.jpg" data-src="https://braes.co/images/cat/haircare.jpg" alt="" className="lazy" />
                           </a>
                         </li>
                   </div>
                 
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Activity</h2>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }

}

export default Home;