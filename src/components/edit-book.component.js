import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditBook extends Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        bookId: '',
        title: '',
        type: '',
        numberPage: '',
        auteur: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/book/edit-book/' + this.props.match.params.id)
      .then(res => {
        this.setState({
            bookId: res.data.bookId,
            title:  res.data.title,
            type:  res.data.type,
            numberPage:  res.data.numberPage,
            auteur:  res.data.auteur
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value })
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

    axios.put('http://localhost:4000/book/update-book/' + this.props.match.params.id, bookObject)
      .then((res) => {
        console.log(res.data)
        console.log('Book successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/book-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
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
          Modifier le livre
        </Button>
      </Form>
    </div>);
  }
}
