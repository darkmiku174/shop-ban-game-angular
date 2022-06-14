import React, { Component } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../searchbar/search_bar';
class AddListGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            list_game: [],
            game: "",
            games: []
        }
    }

    handleClose = () => {
        var { list_game } = this.state
        this.setState({
            show: false
        })
        if (list_game.length > 0) {
            list_game.map((game, index) => {
                this.props.list_game.push(game)
            })
        }
    };
    handleShow = () => {
        var { list_game } = this.state
        this.props.list_game.splice(0, list_game.length)
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
        var { games, list_game } = this.state;
        games.map((g, index) => {
            if (g._id === game) {
                list_game.push(g)
                this.setState({
                    list_game
                })
            }
        })
    }
    onDeleteRow = (index) => {
        var { list_game } = this.state
        list_game.splice(index, 1)
        this.setState({
            list_game
        })
        this.showRow(list_game)
    }


    render() {
        var { show, list_game, games, game } = this.state
        return (
            <div>
                <Button onClick={this.handleShow} className="selected-btn"  style={{ width: '10rem' }}>
                    Game List
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Game List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button  style={{ float: 'right', marginBottom: '1rem' }} onClick={() => this.onAddRow(game)}>Thêm</Button>
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
                                {this.showRow(list_game)}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default AddListGame;




