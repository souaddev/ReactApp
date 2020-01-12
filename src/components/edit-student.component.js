import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          firstName: res.data.firstName,
          cin: res.data.cin,
          lastName: res.data.lastName,
          email: res.data.email,
          phone: res.data.phone
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
          <Form.Label>CIN</Form.Label>
          <Form.Control required="true"  name="cin" type="text" value={this.state.cin} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Prénom</Form.Label>
          <Form.Control required="true" name="firstName" type="text" value={this.state.firstName} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Nom</Form.Label>
          <Form.Control required="true" name="lastName" type="text" value={this.state.lastName} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control required="true" name="email" type="email" value={this.state.email} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Numéro de téléphone</Form.Label>
          <Form.Control required="true" name="phone" type="text" value={this.state.phone} onChange={this.onChange} />
        </Form.Group>

        <Button variant="warning" size="lg" block="block" type="submit">
          Modifier étudiant
        </Button>
      </Form>
    </div>);
  }

}