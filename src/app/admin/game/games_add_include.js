import React, { Component } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../searchbar/search_bar';
class Include extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            include: [],
            game: "",
            games: []
        }
    }

    handleClose = () => {
        var { include } = this.state
        this.setState({
            show: false
        })
        if (include.length > 0) {
            include.map((game, index) => {
                this.props.include.push(game)
            })
        }
    };
    handleShow = () => {
        var { include } = this.state
        this.props.include.splice(0, include.length)
        this.setState({
            show: true,
            games: this.props.games
        })
    };

    onChange = (value) => {
        this.setState({
            game: value
        })
    }

    showRow(list_game) {
        var result = null;
        if (list_game.length > 0) {
            result = list_game.map((game, index) => {
                return (
                    <tr className="tr-edit">
                        <td>{game._id}</td>
                        <td>{game.name}</td>
                        <td>
                            <button onClick={() => this.onDeleteRow(index)} ><FaTrash /></button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }

    onAddRow = (game) => {
        var { games, include } = this.state;
        games.map((g, index) => {
            if (g._id === game) {
                include.push(g)
                this.setState({
                    include
                })
            }
        })
    }
    onDeleteRow = (index) => {
        var { include } = this.state
        include.splice(index, 1)
        this.setState({
            include
        })
        this.showRow(include)
    }


    render() {
        var { show, include, games, game } = this.state
        console.log(games)
        return (
            <div>
                <Button onClick={this.handleShow} className="selected-btn" variant="secondary" style={{ width: '10rem' }}>
                    Danh sách game
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Danh sách game</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }} onClick={() => this.onAddRow(game)}>Thêm</Button>
                        <SearchBar placeholder="Nhập tên game" data={games} onChange={this.onChange} />
                        <Table bordered hover responsive="sm" className="listgame-details">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên game</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showRow(include)}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default Include;




