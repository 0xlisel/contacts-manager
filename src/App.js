import React from 'react';
import './App.css';

class AddPersonForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {person : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({person : e.target.value});
  }

  handleSubmit(e){
    this.props.handleSubmit(this.state.person);
    this.setState({person: ""});
    e.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add new contact" onChange={this.handleChange} value={this.state.person} />
        <button type="submit">Add</button>
      </form>
    );
  }
};

class PeopleList extends React.Component{
  render(){
    const peopleArray = this.props.data;
    const people = peopleArray.map((val, index) => {
      return <li key={index}>{val}</li>
    });
    return (
        <ul>{people}</ul>
    );
  }
};

class ContactManager extends React.Component{
  constructor(props){
    super(props);
    this.state = {contacts : []};
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson(name){
    this.setState({contacts : [...this.state.contacts, name]});
  }

  render(){
    return (
      <div>
        <h1>Contacts Manager</h1>
        <AddPersonForm handleSubmit={this.addPerson} />
        <PeopleList data={this.state.contacts} />
      </div>
    );
  }
};


export default ContactManager;