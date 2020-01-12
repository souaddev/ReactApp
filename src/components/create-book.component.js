import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBook extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      bookId: '',
      title: '',
      type: '',
      numberPage: '',
      auteur: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bookObject = {
      bookId: this.state.bookId,
      title:  this.state.title,
      type:  this.state.type,
      numberPage:  this.state.numberPage,
      auteur:  this.state.auteur
    };

    axios.post('http://localhost:4000/book/create-book', bookObject)
      .then(res => console.log(res.data));

    this.setState({
      bookId: '',
      title: '',
      type: '',
      numberPage: '',
      auteur: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <h1>Ajouter un Livre :</h1><br></br>
        <Form.Group controlId="Name">
          <Form.Label>Id de livre</Form.Label>
          <Form.Control required="true" name="bookId" type="text" value={this.state.bookId} onChange={this.onChange} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Titre de livre</Form.Label>
          <Form.Control required="true"  name="title" type="text" value={this.state.title} onChange={this.onChange} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Type de livre</Form.Label>
          <Form.Control required="true"  name="type" type="text" value={this.state.type} onChange={this.onChange} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Numéro de page</Form.Label>
          <Form.Control required="true"  name="numberPage" type="text" value={this.state.numberPage} onChange={this.onChange} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Nom d'auteur</Form.Label>
          <Form.Control required="true"  name="auteur" type="text" value={this.state.auteur} onChange={this.onChange} />
        </Form.Group>
        

        <Button variant="warning" size="lg" block="block" type="submit">
          Ajouter un livre
        </Button>
      </Form>
    </div>);
  }
}
