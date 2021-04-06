import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService/UserService';

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
        });
    }

    renderUsers = () => {
        return this.state.users.map((user, key) => {
            return (
                <li key={key}>
                    <Link className='link' to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>List of users</h2>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }

}

export default Home;