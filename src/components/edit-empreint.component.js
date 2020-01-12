import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class EditEmpreint extends Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        idEmpreint: '',
        dateEmpreint: '',
        dateRendu: '',
        cneEtudiant :'',
        IdBook:''
    }
  }
  onChange(e) {
    this.setState({ name: e.target.value })
  }
  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
            idEmpreint:  res.data.idEmpreint,
            dateEmpreint: res.data.dateEmpreint,
            dateRendu: res.data.dateRendu,
            cneEtudiant : res.data.cneEtudiant,
            IdBook: res.data.IdBook
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/empreinte/update-empreint/' + this.props.match.params.id, empreintObject)
      .then((res) => {
        console.log(res.data)
        console.log('Emreinte successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    this.props.history.push('/empreint-list')
  }


  render() {
    return (<div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          
        <h1>Modifier une empreinte :</h1><br></br>
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
            Modifier une empreinte
          </Button>
        </Form>
      </div>);
  }
}
