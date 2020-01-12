import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      idEmpreint: '',
      dateEmpreint: '',
      dateRendu: '',
      cneEtudiant :'',
      IdBook:''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value })
  }

 

  onSubmit(e) {
    e.preventDefault()

    const empreintObject = {
      idEmpreint:  this.state.idEmpreint,
      dateEmpreint: this.state.dateEmpreint,
      dateRendu: this.state.dateRendu,
      cneEtudiant : this.state.cneEtudiant,
      IdBook: this.state.IdBook
    };

    axios.post('http://localhost:4000/empreinte/create-empreint', empreintObject)
      .then(res => console.log(res.data));

    this.setState({
      idEmpreint: '',
      dateEmpreint: '',
      dateRendu: '',
      cneEtudiant :'',
      IdBook:''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        
      <h1>Ajouter une empreinte :</h1><br></br>
        <Form.Group controlId="Name">
          <Form.Label>Id d'empreinte</Form.Label>
          <Form.Control required="true" type="text" name="idEmpreint" value={this.state.idEmpreint} onChange={this.onChange} />
        </Form.Group>
        <FormGroup>
        <Label for="exampleDate">Date d'empreinte</Label>
        <Input
          type="date"
          name="dateEmpreint"
          id="exampleDate"
          placeholder="date placeholder" 
          value={this.state.dateEmpreint}
          onChange={this.onChange}
        />
      </FormGroup>

        <FormGroup>
        <Label for="exampleDate">Date de rendu</Label>
        <Input
          type="date"
          name="dateRendu"
          id="exampleDate"
          placeholder="date placeholder" 
          value={this.state.dateRendu}
          onChange={this.onChange}
        />
      </FormGroup>

        <Form.Group controlId="Email">
          <Form.Label>CNE d'etudiant</Form.Label>
          <Form.Control required="true"  name="cneEtudiant" type="text" value={this.state.cneEtudiant} onChange={this.onChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Id de livre</Form.Label>
          <Form.Control required="true" name="IdBook" type="text" value={this.state.IdBook} onChange={this.onChange} />
        </Form.Group>

        <Button variant="warning" size="lg" block="block" type="submit">
          Ajouter une empreinte
        </Button>
      </Form>
    </div>);
  }
}
