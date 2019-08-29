import React, {Component} from 'react';

class UserDetails extends Component{
    render() {
        let firstName = this.props.userData.firstName;
        let lastName = this.props.userData.lastName;
        let dateOfBirth = this.props.userData.dateOfBirth;
        let city = this.props.userData.city;
        return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Date of Birth: {dateOfBirth}</p>
            <p>City: {city}</p>
        </div>
        );
    }
}
export default UserDetails;