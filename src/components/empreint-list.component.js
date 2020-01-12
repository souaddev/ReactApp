import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmpreintTableRow from './EmpreintTableRow';


export default class EmpreintList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      empreinte: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/empreinte/')
      .then(res => {
        this.setState({
            empreinte: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.empreinte.map((res, i) => {
      return <EmpreintTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
   
      <h1>Liste des Empreintes : </h1><br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id d'empreinte</th>
            <th>Date d'empreinte</th>
            <th>Date rendu</th>
            <th>CNE d'étudiant</th>
            <th>Id de livre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}