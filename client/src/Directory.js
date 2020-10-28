import React from 'react';
import Person from './Person';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    // "this" refers to the instance of the class that we're initializing
    // the "current" object
    this.state = {
      people: [
        {
          id: 1,
          firstName: 'James',
          lastName: 'Churchill',
        },
        {
          id: 2,
          firstName: 'Irina',
          lastName: 'Cudo',
        },
        {
          id: 3,
          firstName: 'Bob',
          lastName: 'Smith',
        },
      ],
    };

    // hack option #1: "bind" keeps "this" from being lost within the click handler method
    // this.addPersonClickHandler = this.addPersonClickHandler.bind(this);
  }

  // hack option #2: property initializer syntax
  addPersonClickHandler = () => {
    // Rule #2: don't modify state directly... state should be immutable
    const people = this.state.people;

    // create a copy of the array
    const newPeople = [];
    for (const person of people) {
      newPeople.push(person);
    }

    // API... you'd get an object back with its ID set

    // add new person
    newPeople.push({
      id: newPeople.length + 1, // this doesn't always work :(
      firstName: 'Sally',
      lastName: 'Jones',
    });

    // Rule #1: use setState to set the "new" state for the component
    this.setState({
      people: newPeople,
    });
  }

  deletePerson = (personId) => {
    const people = this.state.people;

    // remove any items who's ID is equal to personID
    const newPeople = people.filter((p) => p.id !== personId);

    this.setState({
      people: newPeople,
    });
  }

  render() {
    const people = this.state.people;

    // Every time that we use a component like this in our JSX...
    // <Person />

    // Under the covers, React is using the `new` keyword to create
    // an instance of the component class...
    // const person = new Person();
    // person.firstName = p.firstName;
    // person.lastName = p.lastName;
    // person.deletePerson = this.deletePerson;

    return (
      <div>
        <h1>Directory</h1>
        <button type="button" onClick={this.addPersonClickHandler}>Add Person</button>
        {people.map((p) => (
          <Person
            key={p.id}
            personId={p.id}
            firstName={p.firstName}
            lastName={p.lastName}
            deletePerson={this.deletePerson}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
