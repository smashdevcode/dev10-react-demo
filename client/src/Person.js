import React from 'react';

class Person extends React.Component {
    handleDeletePersonClick = () => {
        const personId = this.props.personId;

        // delegate the delete to the parent component
        this.props.deletePerson(personId);
    }

    render() {
        // don't do this! a components own props are read only
        // this.props.firstName = "Something Else";

        const fullName = `${this.props.firstName} ${this.props.lastName}`;

        return (
            <div>
                <h2>{fullName}</h2>
                <ul>
                    <li>Phone #: </li>
                    <li>Email: </li>
                    <li>Address: </li>
                </ul>
                <button onClick={this.handleDeletePersonClick}>Delete</button>
                {/* <button onClick={() => this.props.deletePerson(this.props.personId)}>Delete</button> */}
            </div>
        );
    }
}

export default Person;
