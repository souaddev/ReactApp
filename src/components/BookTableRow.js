import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BookTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook() {
        axios.delete('http://localhost:4000/book/delete-book/' + this.props.obj._id)
            .then((res) => {
                console.log('Book successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.bookId}</td>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.type}</td>
                <td>{this.props.obj.numberPage}</td>
                <td>{this.props.obj.auteur}</td>
                <td>
                    <Link className="edit-link" to={"/edit-book/" + this.props.obj._id}>
                        Modifier
                    </Link>
                    <Button onClick={this.deleteBook} size="sm" variant="warning">Delete</Button>
                </td>
            </tr>
        );
    }
}