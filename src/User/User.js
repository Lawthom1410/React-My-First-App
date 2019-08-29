import React, {Component} from 'react';
import UserDetails from './UserDetails';

class User extends Component{
    render() {
        let myUserData = {
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: "01/01/1990",
            city: "Salford"
        }
        return (
        <div>
            <UserDetails userData={myUserData} />
        </div>
        );
    }
}
export default User;