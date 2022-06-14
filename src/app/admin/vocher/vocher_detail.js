import React, { Component } from 'react';
import { Container, Row, Col, Button, Table,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class DetailVocher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vocher: {
                list_game: []
            }
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/vochers/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                vocher: res.data,
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
        var { vocher } = this.state
        return (
            <div>
                <div style={{ height:'56px',backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
                    <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Chi tiết vocher</p>
                </div>
                <Container>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem',  padding: '1rem' }}>
                                <h5>Thông tin chi tiết</h5>
                                <Container style={{ marginTop: '3rem' }}>
                                    <Col>
                                        <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className="product-details-table">
                                                <Table striped bordered style={{ width: '54rem' }}>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>1</td>
                                                            <td style={{ padding: '5px' }}>ID</td>
                                                            <td style={{ padding: '0px' }}>{vocher._id}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>2</td>
                                                            <td style={{ padding: '5px' }}>Mã vocher</td>
                                                            <td style={{ padding: '0px' }}>{vocher.code}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>4</td>
                                                            <td style={{ padding: '5px' }}>Giảm giá</td>
                                                            <td style={{ padding: '0px' }}>{vocher.discount + "%"}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>5</td>
                                                            <td style={{ padding: '5px' }}>Ngày tạo</td>
                                                            <td style={{ padding: '0px' }}>{vocher.create_date}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>6</td>
                                                            <td style={{ padding: '5px' }}>Ngày hết hạn</td>
                                                            <td style={{ padding: '0px' }}>{vocher.time_expired}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>7</td>
                                                            <td style={{ padding: '5px' }}>Trạng thái</td>
                                                            <td style={{ padding: '0px' }}>{vocher.status ? "Còn hạn" : "Hết hạn"}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>8</td>
                                                            <td style={{ padding: '5px' }}>Số lượng</td>
                                                            <td style={{ padding: '0px' }}>{vocher.count}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>12</td>
                                                            <td style={{ padding: '5px' }}>Tags</td>
                                                            <td>
                                                                <Table bordered hover responsive="sm" className="listgame-details">
                                                                    <thead>
                                                                        <tr>
                                                                            <th></th>
                                                                            <th>Danh sách game áp dụng vocher</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {this.showProducts(vocher.list_game)}
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}
export default DetailVocher;



