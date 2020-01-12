import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmpreintTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmpreint = this.deleteEmpreint.bind(this);
    }

    deleteEmpreint() {
        axios.delete('http://localhost:4000/empreinte/delete-empreint/' + this.props.obj._id)
            .then((res) => {
                console.log('Empreinte à bien supprimer !')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            
            <tr>
                <td>{this.props.obj.idEmpreint}</td>
                <td>{this.props.obj.dateEmpreint}</td>
                <td>{this.props.obj.dateRendu}</td>
                <td>{this.props.obj.cneEtudiant}</td>
                <td>{this.props.obj.IdBook}</td>
                <td>
                    <Link className="edit-link" to={"/edit-empreint/" + this.props.obj._id}>
                        Modifier
                    </Link>
                    <Button onClick={this.deleteEmpreint} size="sm" variant="warning">Delete</Button>
                </td>
            </tr>
        );
    }
}