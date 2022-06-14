import React, { Component } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class DetailCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: {
                list_game: []
            }

        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/collections/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                collection: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }


    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{product.name}</td>
                    </tr>
                )
            });
        }
        return result
    }

    render() {
        var { collection } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', height: '56px', paddingBottom: '1rem' }}>
                    <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Chi tiết collection</p>
                </div>
                <Container>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            <Card style={{padding:'2rem',width:'30rem'}}>
                                <h5>Thông tin Collection</h5>
                                <h6>Collection ID: {collection._id}</h6>
                                <h6>Tên Collection: {collection.name}</h6>
                                <Row style={{marginTop: '1rem', marginBottom: '1rem' }}>
                                    <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="product-details-table">
                                            <Table style={{width:"25rem"}} bordered hover responsive="lg" className="listgame-details">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Tên game</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {this.showProducts(collection.list_game)}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Row>
                            </Card>
                        </Container>
                    </div>
                </Container >
            </div >
        )
    }
}
export default DetailCollection;



