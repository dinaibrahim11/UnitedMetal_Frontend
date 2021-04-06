import React from 'react';
import UserService from '../../services/UserService/UserService';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };

        this.userService = new UserService();
    }

    componentDidMount() {
        console.log("User Page");
        //prints the id from "/user/:id" in the url path
        console.log(this.props.match.params.id);

        const id = this.props.match.params.id;
        this.userService.getUser(id).then(response => {
            this.setState({ user: response });
        })
    }

    render() {
        const user = this.state.user;

        return (
            <div>
                <h1>User</h1>
                <h2>Name: {user.name}</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
        );
    }
}

export default UserPage;