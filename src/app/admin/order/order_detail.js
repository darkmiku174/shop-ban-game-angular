import React, { Component } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { CategoryRounded } from '@material-ui/icons';
class DetailOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: {},
            cart: {
                products: [{
                    product: {},
                    quantity: ""
                }],
                user: {},
                status: true
            },

        }
    }

    componentDidMount() {
        //hóa đơn tại đây
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/orders/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                order: res.data
            });
            axios({
                method: 'GET',
                url: 'http://localhost:5000/api/carts/' + res.data.cart._id,
                data: null
            }).then(res1 => {
                this.setState({
                    cart: res1.data
                });
            }).catch(err1 => {
                console.log(err1);
            })
        }).catch(err => {
            console.log(err);
        })
    }

    showProducts(product) {
        var result = null;
        if (product.length > 0) {
            result = product.map((p, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}>{p.product.name}</td>
                        <td style={{ padding: '0px' }}>{p.quantity}</td>
                    </tr>
                )
            });
        }
        return result
    }


    render() {
        var { order, cart } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Chi tiết Order</p>
                </div>
                <Container>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ marginLeft: '8%', marginTop: '1rem' }}>
                            <Card.Header as="h6">Thông tin Order</Card.Header>
                            {/*Parent Row 1*/}
                            <div style={{ margin: '0.2rem', padding: '1.8rem', display: 'flex', justifyContent: 'space-between' }}>
                                <h6>Tình trạng: {order.status}</h6>
                                <h6>Thanh toán vào lúc: {order.paid_at}</h6>
                                <h6>Hủy vào lúc: {order.cancelled_at}</h6>
                            </div>
                            <Row style={{ margin: '0.2rem', marginBottom: '1rem', padding: '1rem' }}>
                                <Container style={{ marginTop: '1rem' }}>
                                    <Row>
                                        <Col md="6">

                                            <div className="product-details-table">
                                                <h6>Thông tin Cart</h6>
                                                <h6 style={{ marginTop: '1rem' }}>Cart ID: {cart._id}</h6>
                                                <h6 style={{ marginTop: '1rem' }}>Danh sách game</h6>
                                                <Table striped bordered style={{ width: '100%' }}>
                                                    <thead>
                                                        <tr>
                                                            <th>STT</th>
                                                            <th style={{ padding: '5px' }}>Tên game</th>
                                                            <th style={{ padding: '5px' }}>Số lượng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.showProducts(cart.products)}
                                                    </tbody>
                                                </Table>
                                            </div>

                                        </Col>
                                        <Col md="6">

                                            <div className="product-details-table">
                                                <h6>Thông tin User</h6>
                                                <br />
                                                <Table striped bordered style={{fontSize:'13px' }}>
                                                    <tbody>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>User ID</td>
                                                            <td style={{ padding: '5px' }}>{cart.user._id}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>Tên</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.name}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>SDT</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.phone_number}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>Email</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.email}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>Sinh nhật</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.birthday}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>Tên tài khoản</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.user_name}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>Mật khẩu</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.password}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>Status</td>
                                                            <td style={{ padding: '5px' }}>{cart.user.status}</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>

                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}
export default DetailOrder;



