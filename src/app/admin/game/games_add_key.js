import React, { Component } from 'react';
import { Button, Table, Modal, Form, Row, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
class Key extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            keys: [],
            key: {
                code: "",
                status: "true"
            }
        }
    }

    handleClose = () => {
        var { keys } = this.state
        this.setState({
            show: false
        })
        if (keys.length > 0) {
            keys.map((key, index) => {
                this.props.keys.push(key)
            })
        }
    };
    handleShow = () => {
        var { keys } = this.state
        this.props.keys.splice(0, keys.length)
        this.setState({
            show: true,
        })
    };

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState(pre => ({
            key: {
                ...pre.key,
                [name]: value
            }
        }))
    }

    showRowKeys(keys) {
        var result = null;
        if (keys.length > 0) {
            result = keys.map((key, index) => {
                return (
                    <tr className="tr-edit">
                        <td>{key.code}</td>
                        <td>{!key.status ? "Active" : "Inactive"}</td>
                        <td>
                            <button onClick={() => this.onDeleteRow(index)} ><FaTrash /></button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }

    onAddRow = (key) => {
        var { keys } = this.state;
        keys.push(key);
        this.setState({
            keys
        })
    }
    
    onDeleteRow = (index) => {
        var { keys } = this.state
        keys.splice(index, 1)
        this.setState({
            keys
        })
        this.showRowKeys(keys)
    }

    render() {
        var { show, keys, key } = this.state
        return (
            <>
                <Button onClick={this.handleShow} className="selected-btn" variant="secondary" style={{ width: '10rem' }}>
                    Chi tiết keys
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Danh sách key</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='row-1'>
                            <Col sm={4}>
                                <Form.Control name="code" size="sm" type="text" placeholder="Nhập vào" onChange={this.onChange} />
                            </Col>
                            <Col sm={4}>
                                <select style={{ height: '2rem', border: '1px solid #ced4da', borderRadius: '4px', marginLeft: "1rem" }}
                                    name="status"
                                    onChange={this.onChange}>
                                    <option value="true" onClick={() => this.onChange}>Inactive</option>
                                    <option value="false" onClick={() => this.onChange}>Active</option>
                                </select>
                            </Col>
                            <Col sm={4}>
                                <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }} onClick={() => this.onAddRow(key)}>Thêm</Button>
                            </Col>
                        </Row>
                        <Table bordered hover responsive="sm" className="listgame-details">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showRowKeys(keys)}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}
export default Key;