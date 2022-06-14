import React, { useState, Component } from 'react';
import axios from "axios";
import { Form, Col, Row, Button, Table, Card, Container, Modal, Pagination } from 'react-bootstrap';
import { FaEdit, FaTrash, FaAngleDoubleDown } from 'react-icons/fa';

class AddKey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: {
                code: "",
                status: "true"
            }
        }
    }
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


    onAddKey = (key) => {
        var { data, id } = this.props
        data.push(key)
        axios.put('http://localhost:5000/api/games/update/key/' + id, {
            keys: data
        }
        ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        });
        window.location.reload();
    }


    render() {
        var { key } = this.state
        return (
            <Card style={{ marginBottom: '1rem', marginTop: '1rem'}}>
                <Row className="parent-row" style={{ padding: '1rem' }}>
                    <Row>
                        <Col>
                            <div>
                                <h6>Thêm key</h6>
                                <br />
                                <Form>
                                    <Row className='row-1'>
                                        <Col>
                                            <Form.Control name="code" onChange={this.onChange} size="sm" type="text" placeholder="Tên key" />
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <Button onClick={() => this.onAddKey(key)} variant="secondary" style={{ float: 'right', marginTop: '1rem' }} >Thêm</Button>
                        </Col>
                    </Row>
                </Row>
            </Card>
        )
    }
}
export default AddKey;