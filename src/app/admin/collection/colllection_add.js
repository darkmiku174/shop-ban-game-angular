import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddListGame from './collection_add_listgame';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class AddCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: {
                name: "",
                list_game: []
            },
            games: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games',
            data: null
        }).then(res => {
            this.setState({
                games: res.data
            });
        }).catch(err => {
            console.log(err);
        })

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState(pre => ({
            collection: {
                ...pre.collection,
                [name]: value
            }
        }))
    }

    onAdd = (collection) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/collections/add',
            data: collection
        }).then(res => {
            const { history } = this.props;
            if (history) history.push('/collection_management');
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        var { collection, games } = this.state
        const { history } = this.props;
        return (
            (history) ? <div>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Thêm bộ sưu tập</p>
                </div>
                <Container style={{ margin: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/*Parent Row 1*/}

                        <Container>
                            <Card style={{ width: '30rem', padding: '2rem', margin: 'auto', marginTop: '1rem' }}>
                                <h5>Thêm bộ sưu tập</h5>
                                <Col>
                                    <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="product-details-table">
                                            <div>
                                                <Row>
                                                    <Col sm="7">
                                                        Nhập tên bộ sưu tập
                                                    </Col>
                                                    <Col sm="5">
                                                        <input style={{ width: "10rem", height: '2rem' }} type="text" id="fname" name="firstname" name="name" onChange={this.onChange} />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '1rem' }}>
                                                    <Col sm="7">
                                                        Thêm vào bộ sưu tập
                                                    </Col>
                                                    <Col sm="5">
                                                        <AddListGame list_game={collection.list_game} games={games} />
                                                    </Col>

                                                </Row>
                                                <Button  style={{ width: '5rem', marginTop: '1rem' }} onClick={() => this.onAdd(collection)}>Thêm</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Card>
                        </Container>
                    </div>
                </Container>
            </div> : null
        )
    }
}
export default withRouter(AddCollection);



